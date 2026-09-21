# Los cañones de agosto · título dentro del humo

Encargo individual del 21 de septiembre de 2026. Libro de Barbara W. Tuchman, identificado en Curva como `canones-agosto`.

Un cañón amarillo entra en diagonal desde la esquina inferior derecha. Su disparo forma una nube crema que contiene el título completo. Fondo azul vivo, rueda azul oscuro y acento coral. El 22 de septiembre, el usuario pide añadir el mensaje «El primer mes de la Primera Guerra Mundial», como en Headway. Se integra en una segunda bocanada conectada al cañón, con una jerarquía menor que la del título.

Se consultó la [presentación editorial de Penguin Random House](https://www.penguinrandomhouse.com/books/180851/the-guns-of-august-by-barbara-w-tuchman/), que sitúa el libro en el primer mes de la Primera Guerra Mundial. El cañón es una ilustración simbólica simplificada, no una reconstrucción técnica de una pieza militar determinada. No se modificó el resumen del libro.

## Imágenes y prompts conservados

- `Portada.png`: versión actual con el mensaje añadido, 1024 × 1536.
- `Portada-sin-mensaje.png`: versión anterior tras corregir el acabado; se conserva íntegra.
- `Version-inicial.png`: primera salida, también mostrada al usuario y preservada.
- `Portada-anterior.webp`: copia de la cubierta que ya tenía el libro; continúa instalada.
- `Prompt-generacion.txt`: instrucciones exactas del rediseño.
- `Prompt-acabado.txt`: edición posterior para reducir grano y modelado tonal conservando la composición.
- `Prompt-mensaje-2026-09-22.txt`: edición exacta para integrar el mensaje aprobado.
- `Registro.json`: fuentes, imágenes, dimensiones, hashes y estado.

Producción mediante **image_gen integrado**, con imágenes locales como objetivo y referencias. La herramienta no expone un selector ni identificador de modelo; no se atribuye un modelo concreto.

Referencias aportadas al generador: Headway `IMG_1972.PNG` (relación entre elementos, simplificación y doblez), Wiser `IMG_1862.PNG` (título dentro de una forma ilustrada) y Wiser `IMG_1938.PNG` (colores y dibujo plano). Se examinó también `IMG_1858.PNG` para estudiar texto integrado. La cubierta anterior se usó para identificar el libro, con instrucción expresa de conservar solo las palabras del título.

Se revisó el mapa textual OS disponible para motivos de cañón, calendario y megáfono, y se examinó la cubierta anterior real. Su texto alternativo antiguo no coincide exactamente con el dibujo actual, por lo que no se da ese mapa como prueba de una auditoría visual completa del catálogo. La nueva composición no reutiliza la trompeta de la cubierta anterior.

La paleta se eligió para este encargo sin inventar un número de portada asignado por el usuario. Se solicitaron cinco tintas base; no se certifica que el PNG solo contenga cinco valores RGB, ni igualdad exacta con Headway. La segunda versión reduce visiblemente la textura de la primera, aunque pueden persistir pequeñas variaciones del generador.

## Integración y revisión

La nueva propuesta aparece **primera en `docs/comparar-portadas.html`**, seguida por la propuesta de pensamiento positivo. Ambas permanecen accesibles con el filtro «Nuevas propuestas». No se sustituye la imagen ya instalada del libro ni se pierde la propuesta anterior.

Se verificaron las dimensiones, el título con ñ, la ausencia de palabras ajenas al título y al mensaje solicitado, la carga del archivo en el navegador, el orden del comparador y su lectura a tamaño de mosaico. Se mantiene una única doblez integrada en la imagen; las propuestas no reciben la segunda doblez CSS que se aplica a otras cubiertas archivadas.

## Corrección del 22 de septiembre: mensaje integrado

El usuario pregunta por la ausencia de mensaje y acepta añadir «El primer mes de la Primera Guerra Mundial» con el tratamiento de Headway. Se adjuntan la versión sin mensaje como objetivo y las referencias `IMG_1962.PNG` (mensaje dentro del perfil) e `IMG_1916.PNG` (título y mensaje dentro de formas ilustradas). El mensaje queda en tres líneas, dentro de una bocanada crema inferior izquierda conectada al cañón. Se conservan el título, el cañón, la rueda, la paleta y la doblez. La edición se produce con el generador integrado y mantiene el mismo encargo individual.
