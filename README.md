# Curva

App de microaprendizaje: resúmenes de libros y shorts de curiosidades.

**Está publicada en https://pablova02.github.io/curva/** — se abre en el móvil
y con «Añadir a pantalla de inicio» queda instalada, con su icono y a pantalla
completa.

## Qué hay aquí

Solo la app ya compilada, en `docs/`. **El proyecto vive en otro sitio:**
`PabloVA02/PabloVA02`, rama `claude/app-development-xpo6fx`, carpeta
`prototipo-microaprendizaje/`. Ahí están el código, los textos, las
fotografías originales y los documentos.

Este repositorio existe por una razón concreta: el otro es el repositorio de
PERFIL de Pablo, y encender GitHub Pages ahí ocuparía `pablova02.github.io`,
su dirección personal. Con uno aparte, la app vive en `/curva` y el perfil se
queda como está.

## Cómo se actualiza

Desde el proyecto:

    npx vite build --config vite.web.config.mjs

Eso deja la app en su `docs/`. Se copia aquí, se commitea y GitHub Pages la
publica sola en un par de minutos.

## Cómo instalarla en el móvil

**iPhone:** abrir la dirección en Safari —tiene que ser Safari, en Chrome no
sale la opción—, botón de compartir, «Añadir a pantalla de inicio».

**Android:** abrir en Chrome y aceptar «Instalar aplicación», o menú de los
tres puntos → «Añadir a pantalla de inicio».

Después funciona sin conexión: lo que ya se ha visto se queda guardado en el
teléfono. Al abrirla se busca versión nueva, así que un cambio publicado se ve
al abrir y no hace falta reinstalar nada.
