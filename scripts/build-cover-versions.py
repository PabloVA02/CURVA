"""Inventory Curva artwork without changing the reading app or its assignments."""
from pathlib import Path
from collections import defaultdict
import subprocess, json, re, hashlib, posixpath
from urllib.parse import quote

ROOT = Path(__file__).resolve().parents[1]
PREVIOUS_PATH = ROOT/'docs/assets/todas-las-portadas.json'
PREVIOUS = json.loads(PREVIOUS_PATH.read_text()) if PREVIOUS_PATH.exists() else {'libros': []}
OLD_BOOKS = {b['id']: b for b in PREVIOUS['libros']}
def git(*args):
    return subprocess.check_output(['git', *args], cwd=ROOT)
def read(path):
    p = ROOT / path
    return p.read_bytes() if p.exists() else git('show', 'HEAD:' + path)
REVISION = git('rev-parse', 'HEAD').decode().strip()
def js_catalog():
    index = read('docs/index.html').decode()
    bundle = re.search(r'assets/index-lectura-[^" ]+\.js', index)[0]
    source = read('docs/' + bundle).decode()
    start = source.index('hd=[') + 3
    level, string, escape = 0, None, False
    for i in range(start, len(source)):
        c = source[i]
        if string:
            if escape: escape = False
            elif c == '\\': escape = True
            elif c == string: string = None
            continue
        if c in '\"\'`': string = c; continue
        if c == '[': level += 1
        if c == ']':
            level -= 1
            if not level: break
    literal = source[start:i+1]
    code = 'const vm=require("vm");process.stdout.write(JSON.stringify(vm.runInNewContext("("+require("fs").readFileSync(0,"utf8")+")")));'
    return json.loads(subprocess.check_output(['node', '-e', code], input=literal.encode()))

tree = {}
for line in git('ls-tree', '-r', 'HEAD').decode().splitlines():
    meta, path = line.split('\t', 1)
    tree[path] = meta.split()[2]
tracked = set(tree)
for path in (ROOT / 'docs/assets').rglob('*'):
    if path.suffix.lower() in ('.png', '.jpg', '.jpeg', '.webp'):
        name = path.relative_to(ROOT).as_posix()
        if name not in tree:
            content = path.read_bytes()
            tree[name] = hashlib.sha1(b'blob '+str(len(content)).encode()+b'\0'+content).hexdigest()

books, entries, unions, missing = {}, {}, {}, []
def book(b):
    ident = b.get('libroId') or b.get('id')
    if not ident: return None
    previous = books.get(ident, {})
    books[ident] = {'id': ident, 'titulo': b.get('titulo') or previous.get('titulo', ident),
                   'autor': b.get('autor') or previous.get('autor', ''),
                   'tema': b.get('categoria') or b.get('tema') or previous.get('tema', '')}
    return ident
def resolve(value, folder=''):
    if not isinstance(value, str): return None
    if value.startswith(str(ROOT)): value = str(Path(value).relative_to(ROOT))
    for p in [value, folder+'/'+value, 'docs/'+value, 'docs/assets/'+value]:
        p = posixpath.normpath(p)
        if p in tree: return p
    return None
def add(ident, path, label='Archivo conservado', source=''):
    if not path or not ident: return
    key = (ident, path)
    entries.setdefault(key, {'id': ident, 'path': path, 'labels': set(), 'sources': set()})
    entries[key]['labels'].add(label)
    if source: entries[key]['sources'].add(source)
    unions.setdefault(path, path)
def find(p):
    unions.setdefault(p, p)
    if unions[p] != p: unions[p] = find(unions[p])
    return unions[p]
def same(a, b):
    if a and b: unions[find(a)] = find(b)

for b in js_catalog(): book(b)
# Archived standalone assets from books removed from the latest metadata.
for ident, title, author in [
    ('bernarda-alba', 'La casa de Bernarda Alba', 'Federico García Lorca'),
    ('ficciones', 'Ficciones', 'Jorge Luis Borges'),
    ('pedro-paramo', 'Pedro Páramo', 'Juan Rulfo'),
    ('rayuela', 'Rayuela', 'Julio Cortázar'),
    ('veinte-poemas', 'Veinte poemas de amor y una canción desesperada', 'Pablo Neruda'),
]: book({'id': ident, 'titulo': title, 'autor': author, 'categoria': 'Literatura'})
base = json.loads(read('referencias/libros/catalogo-682.json'))
for b in base['libros']:
    ident = book(b); add(ident, resolve(b.get('archivo_cubierta')), 'Catálogo archivado', 'referencias/libros/catalogo-682.json')
comparison = json.loads(read('referencias/portadas/comparacion-2026-09-21/Catalogo-completo.json'))
current = {}
for b in comparison['curva']:
    ident = book(b); p = resolve(b['archivo'])
    add(ident, p, 'Portada del catálogo', 'referencias/portadas/comparacion-2026-09-21/Catalogo-completo.json')
    if p: current[ident] = p

catalogs = [p for p in tracked if p.startswith('referencias/portadas/') and '/wiser/' not in p
            and (p.endswith('/Catalogo.json') or Path(p).name.startswith('portadas-') and p.endswith('.json'))]
catalogs = sorted(set(catalogs) | {p.relative_to(ROOT).as_posix() for p in (ROOT/'referencias/portadas').glob('importadas-*/Catalogo.json')})
for path in sorted(catalogs):
    data = json.loads(read(path))
    if not isinstance(data, list): continue
    for b in data:
        ident = book(b)
        if not ident: continue
        folder = str(Path(path).parent)
        original = resolve(b.get('archivo'), folder)
        app = resolve(b.get('archivoApp'), folder)
        other = resolve(b.get('original'), folder)
        label = 'Importada' if 'aportadas' in path or 'salud' in path else 'Versión archivada'
        for p in [original, app, other]: add(ident, p, label, path)
        # A record explicitly associates an original with its web export.
        same(original, app); same(original, other)
        if not original and not app: missing.append({'registro': path, 'id': ident, 'archivo': b.get('archivo')})

for path in sorted(p for p in tracked if '/individuales-' in p and p.endswith('/Registro.json')):
    b = json.loads(read(path)); ident = book(b); folder = str(Path(path).parent)
    if not ident:
        slug = Path(folder).name
        ident = 'la-roja' if slug.startswith('de-riotinto') else None
    if not ident: continue
    for p in tree:
        if str(Path(p).parent) == folder and Path(p).suffix.lower() in ('.png', '.webp', '.jpg'):
            label = 'Propuesta' if Path(p).stem == 'Portada' else Path(p).stem.replace('-', ' ')
            add(ident, p, label, path)
    for img in b.get('imagenes', []):
        a = resolve(img.get('archivo'), folder); c = resolve(img.get('origen'), folder)
        if a and c: same(a, c)

# Every standalone app image whose slug identifies a book is included, even
# when it no longer occurs in the current cover map.
ids = sorted(books, key=len, reverse=True)
unknown = []
excluded = {'pollito-cupon', 'regalo'}
for p in sorted(tree):
    if not p.startswith('docs/assets/') or '/comparacion-' in p: continue
    if Path(p).suffix.lower() not in ('.png', '.jpg', '.jpeg', '.webp'): continue
    stem = Path(p).stem
    candidates = [stem, stem.removeprefix('libro-')]
    ident = next((ident for ident in ids if any(x == ident or x.startswith(ident+'-') for x in candidates)), None)
    if ident: add(ident, p, 'Archivo conservado', 'Inventario de imágenes del repositorio')
    elif not any(stem.startswith(x+'-') for x in excluded): unknown.append(p)

# Recover originals missed by individual metadata through their folder's
# existing book association. Generic reference screenshots are excluded.
folders = defaultdict(set)
for e in list(entries.values()):
    if '/individuales-' in e['path']: folders[str(Path(e['path']).parent)].add(e['id'])
for p in tree:
    folder = str(Path(p).parent)
    if folder in folders and len(folders[folder]) == 1 and Path(p).suffix.lower() in ('.png', '.jpg', '.webp'):
        add(next(iter(folders[folder])), p, Path(p).stem.replace('-', ' '), folder)

# Exact copies are one option; changed text, colours and rejected designs remain.
by_blob = {}
for p in list(unions):
    sha = tree[p]
    if sha in by_blob: same(p, by_blob[sha])
    else: by_blob[sha] = p
groups = defaultdict(list)
for e in entries.values(): groups[(e['id'], find(e['path']))].append(e)
summary_ids = set(json.loads(read('referencias/portadas/analisis-2026-09-22/Resumenes-confirmados.json'))['ids'])
results = defaultdict(list)
for (ident, _), group in groups.items():
    paths = sorted({e['path'] for e in group})
    preferred = sorted(paths, key=lambda p: (p != current.get(ident), not p.startswith('docs/'), 'comparacion-propuestas' not in p, p))[0]
    labels = set().union(*(e['labels'] for e in group))
    sources = sorted(set().union(*(e['sources'] for e in group)))
    kind = 'Actual en el catálogo' if current.get(ident) in paths else 'Propuesta reciente' if any('/individuales-' in p or '/comparacion-propuestas/' in p for p in paths) else 'Versión archivada'
    if 'Portada-anterior' in Path(preferred).stem and kind == 'Propuesta reciente': kind = 'Versión anterior'
    imported = any('/portadas-importadas-86/' in p for p in paths)
    if imported: kind = 'Nueva · ZIP de 86'
    url = './'+preferred[5:] if preferred.startswith('docs/') else 'https://raw.githubusercontent.com/PabloVA02/CURVA/'+REVISION+'/'+quote(preferred)
    old = [v for v in OLD_BOOKS.get(ident, {}).get('versiones', []) if set(v['copias']) & set(paths)]
    old.sort(key=lambda v: v['numero'])
    stable_key = old[0]['key'] if old else hashlib.sha256((ident+'|'+tree[preferred]).encode()).hexdigest()[:16]
    results[ident].append({'key': stable_key, 'aliases': sorted({k for v in old for k in [v['key'], *v.get('aliases', [])]} - {stable_key}),
                          'numero': old[0]['numero'] if old else None, 'ultimoZip': imported,
                          'src': url, 'archivo': preferred, 'tipo': kind, 'etiquetas': sorted(labels),
                          'copias': paths, 'fuentes': sources})
out = []
for ident, b in books.items():
    variants = results[ident]
    variants.sort(key=lambda v: (not v['ultimoZip'], v['tipo'] != 'Propuesta reciente', v['tipo'] != 'Actual en el catálogo', v['archivo']))
    highest = max([v['numero'] for v in OLD_BOOKS.get(ident, {}).get('versiones', [])] or [0])
    for v in variants:
        if v['numero'] is None:
            highest += 1
            v['numero'] = highest
    out.append({**b, 'resumen': ident in summary_ids, 'versiones': variants})
out.sort(key=lambda b: b['titulo'].casefold())
payload = {'fecha': '2026-09-22', 'revisionFuentes': REVISION, 'libros': out, 'sinAsignar': unknown,
           'registrosSinArchivo': missing, 'nota': 'Copias idénticas y exportaciones vinculadas en los registros se agrupan; no se eliminan archivos.'}
destination = ROOT/'docs/assets/todas-las-portadas.json'
destination.write_text(json.dumps(payload, ensure_ascii=False, indent=2)+'\n')
print(json.dumps({'libros': len(out), 'conPortadas': sum(bool(b['versiones']) for b in out), 'versiones': sum(len(b['versiones']) for b in out), 'varias': sum(len(b['versiones'])>1 for b in out), 'sinAsignar': unknown, 'registrosSinArchivo': missing[:12]}, ensure_ascii=False, indent=2))
