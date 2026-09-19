# Portadas de Curva

Antes de crear o modificar portadas, consultar `referencias/portadas/Preferencias-del-usuario.md`. La última aclaración del usuario prevalece sobre las preferencias anteriores. Revisar las referencias originales de Headway/Wiser y el historial para evitar repetir dibujos y composiciones.

El criterio vigente del 19 de septiembre de 2026 pide dibujos editoriales bonitos, coloridos y muy variados; variar tipografía, tamaño, color y posición del título y del mensaje en cada diseño. La mayoría debe desarrollar una escena o interacción con detalles significativos; el usuario rechaza las cubiertas reducidas a un único objeto aislado, como el bogavante. Solo algunas pueden ser muy simples. El mensaje debe explicar el libro con fuentes verificadas y leerse en móvil. Conservar la doblez lateral un poco más marcada, sin exagerar: surco tonal fino con sombra suave del propio fondo. La última corrección del usuario elimina por completo el contorno blanco: no dibujarlo ni añadirlo con CSS. También están rechazados el canto de páginas y el volumen 3D.

Crear portadas únicamente para libros sin cubierta propia, excluyendo los reservados para otra IA, salvo `dieta-longevidad`, cuya reserva ha levantado expresamente el usuario. Conservar todas las imágenes mostradas, incluidas correcciones y descartes, con sus prompts y procedencia.

Este repositorio contiene la app compilada. Trabajar siempre sobre su versión actual y conservar los resúmenes y demás cambios existentes. Antes de publicar, contrastar el mapa de portadas con `referencias/libros/catalogo-682.json` y los archivos: una reconstrucción anterior perdió asignaciones aunque las imágenes seguían guardadas. Evitar que nuevas publicaciones vuelvan a perderlas.

El archivo activo `docs/assets/index-portadas-*.js` contiene la app completa de Curva con sus textos y mapa de cubiertas. La galería independiente es `docs/portadas.html`; no confundirla con ese bundle ni cambiar `docs/index.html` a otra compilación sin fusionar antes sus datos y portadas. Se conserva también la compilación `index-CtIMkUnl.js` aportada por otra sesión.
