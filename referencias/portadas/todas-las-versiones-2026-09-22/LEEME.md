# Todas las versiones de portadas

Petición del usuario: reunir todas sus portadas por libro, también sin resumen, para comparar y elegir. La galería nueva es `docs/todas-las-portadas.html`; no cambia el catálogo de lectura, sus resúmenes ni sus asignaciones.

Inventario: 718 entradas, 713 con imágenes, 1.103 opciones de portada; 258 entradas tienen más de una opción. Incluye libros archivados que no están en el catálogo activo de 689 entradas. Hay cinco entradas sin imagen. Los 361 identificadores con resumen se mantienen identificados, pero no filtran esta vista.

Fuentes: catálogo de la compilación activa, catálogo de 682, catálogo completo del comparador, 36 registros de tandas e historial, archivos individuales y todos los archivos de imágenes de la app cuyos nombres se asocian a libros. No incluye capturas de referencia de Headway/Wiser ni recursos de interfaz. Cinco imágenes antiguas sin ficha vigente se identifican por su nombre de archivo: La casa de Bernarda Alba, Ficciones, Pedro Páramo, Rayuela y Veinte poemas de amor y una canción desesperada.

Los archivos idénticos y los pares original/exportación enlazados expresamente por los registros se agrupan en una opción. Las revisiones visuales, cambios de mensaje y propuestas rechazadas se conservan. El inventario guarda todas las rutas agrupadas y su procedencia. No se borra ningún original. Las imágenes archivadas fuera de `docs` se sirven desde GitHub con una revisión inmutable; las imágenes públicas usan sus rutas existentes.

Generador reproducible: `scripts/build-cover-versions.py`. Datos: `docs/assets/todas-las-portadas.json`. La reconstrucción puede recuperar metadatos del remoto en este clon parcial.

La elección se guarda en localStorage del navegador, una favorita por libro; no sincroniza entre dispositivos ni publica cambios en la app. Se ofrece descarga de la selección con título, autor, número de versión, archivo y clave estable. El usuario debe elegir; no se han dejado selecciones de prueba.

Verificado: sintaxis JavaScript, 361 identificadores con resumen, todos los registros con archivo asociado, ninguna imagen de portada sin clasificar, claves únicas por libro, búsqueda, ampliación, elección y persistencia tras recargar. Resúmenes y bundles de lectura sin cambios.
