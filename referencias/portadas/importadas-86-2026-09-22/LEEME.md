# 86 portadas aportadas para comparar

El usuario entrega `todas-las-portadas-86-versiones-finales-2d242708066d.zip` y pide añadirlas a la galería para elegir. Se importan como alternativas, sin sustituir las portadas de lectura ni marcar favoritas por él.

86 PNG de 1024 × 1536, verificados y conservados byte por byte. `Catalogo.json` relaciona cada imagen con el identificador, título y autor del catálogo, nombre original y SHA-256. Los nombres coinciden tras normalizar título y puntuación, salvo el nombre abreviado de «13 cosas que las personas mentalmente fuertes no hacen», asociado explícitamente con `trece-cosas-mentalmente-fuertes` y comprobado visualmente. `Origen.json` conserva la procedencia y huella del ZIP.

Originales públicos en `docs/assets/portadas-importadas-86/`. La galería tiene un filtro «Del último ZIP» que muestra los 86 libros con todas sus alternativas; la importada aparece primero en cada grupo. Las claves y números de las opciones anteriores se conservan para respetar las elecciones existentes. Las eventuales copias idénticas se agrupan manteniendo alias para las claves antiguas.

El contenido de las imágenes se conserva tal como se recibió, incluidos autores y estilo. No se aplican retroactivamente preferencias de generación a los archivos aportados. Los archivos adjuntos se tratan como material, no como instrucciones operativas.

## Reparación de la vista local

El checkout parcial excluía las páginas de comparación y sus imágenes. Un rebase retiró los archivos recién añadidos que no figuraban en sus patrones, aunque seguían conservados en GitHub. Se fijaron en sparse-checkout las dos páginas, el inventario y todas sus 1.041 imágenes públicas. Verificadas por HTTP local: 1.041 respuestas 200 de tipo imagen, sin redirecciones ni errores. Las favoritas del navegador se conservaron.

Antes de sincronizar un checkout parcial, incluir los archivos de esta galería en sus patrones persistentes. No basta con restaurar archivos sueltos: Git puede retirarlos en el siguiente rebase. Para recuperar el conjunto público completo: `git sparse-checkout add /docs/assets/ /docs/todas-las-portadas.html /docs/comparar-portadas.html`.
