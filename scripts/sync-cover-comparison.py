"""Refresh comparison from the current reading gallery; retain original references."""
from pathlib import Path
import json
ROOT=Path(__file__).resolve().parents[1]
def literal(source, marker):
 start=source.index(marker)+len(marker)
 value,length=json.JSONDecoder().raw_decode(source[start:])
 return value,start,length
page=ROOT/'docs/comparar-portadas.html'
source=page.read_text()
data,start,length=literal(source,'const data=')
books,_,_=literal((ROOT/'docs/portadas.html').read_text(),'const books=')
ids={b['id'] for b in books}
imports=json.loads((ROOT/'referencias/portadas/importadas-86-2026-09-22/Catalogo.json').read_text())
selected=json.loads((ROOT/'referencias/portadas/seleccion-aplicada-2026-09-22/Catalogo.json').read_text())
recent={b['id'] for b in selected}
data['curva']=[{'id':b['id'],'titulo':b['titulo'],'autor':b['autor'],'archivo':b['archivo_cubierta'],'activa':True,'marca':'Curva','reciente':b['id'] in recent,'sinDobleAdicional':'portadas-importadas-86/' in b['archivo_cubierta']} for b in books if b['archivo_cubierta']]
data['curva'].sort(key=lambda b:not b['reciente'])
data['importadas86']=[{'id':b['id'],'titulo':b['titulo'],'autor':b['autor'],'archivo':'./'+b['archivo'][5:],'marca':'Curva','importada':True,'sinDobleAdicional':True} for b in imports if b['id'] in ids]
data['fecha']='2026-09-23'
source=source[:start]+json.dumps(data,ensure_ascii=False,separators=(',',':'))+source[start+length:]
page.write_text(source)
print(f"Comparativa: {len(data['curva'])} portadas actuales, {len(data['importadas86'])} del ZIP, {len(data['headway'])} Headway y {len(data['wiser'])} Wiser.")
