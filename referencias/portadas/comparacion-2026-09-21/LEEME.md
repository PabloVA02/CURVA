# Comparación de Headway y Curva

El usuario pide ver las referencias de Headway junto a sus portadas para comparar la armonía de ambas colecciones. La vista está en `docs/comparar-portadas.html`.

Se muestran doce cubiertas de las capturas originales de Headway y las primeras doce portadas de la vista actual «Todos los libros» de Curva. Son selecciones diferentes, destinadas a comparar el lenguaje visual del conjunto. No es una comparación de diseños para los mismos libros ni una evaluación de todo el catálogo.

Las capturas originales, sin modificar sus píxeles, se copian a `docs/assets/comparacion-headway/`. La página muestra su región de cubierta mediante un viewport SVG; se conservan color, proporción y encuadernación de origen. La ampliación permite abrir cada captura completa. `Seleccion.json` registra archivo, título, región y SHA-256. Curva usa las mismas imágenes y el mismo acabado de encuadernación que su aplicación. No se ha generado ni sustituido ninguna portada o resumen.

## Observaciones sobre esta muestra

- En Headway hay bastante continuidad en el dibujo plano, las siluetas legibles y el peso del texto, aunque cambien motivos y distribuciones.
- Varias cubiertas de Curva juntan títulos grandes, estrechos y de muchas líneas. El texto ocupa más espacio y compite con los dibujos. En otras se usan letras redondas o serif: el salto de tratamiento entre vecinas se nota.
- Curva mezcla acabados de distintas tandas y procedencias: plano, textura, sombreado y volumen. La colección necesita más consistencia en la forma de dibujar, manteniendo ideas variadas.
- Las referencias combinan campos oscuros, claros y vivos, y alternan composiciones tranquilas con otras más densas. El resultado depende de las proporciones y de las vecinas, no solo de elegir colores bonitos.
- La originalidad puede venir de la relación entre dibujo y texto, el encuadre y la idea. Cambiar todos los parámetros en cada cubierta, sin ningún tratamiento común, puede restar continuidad al catálogo.

Son observaciones editoriales de las imágenes, no conclusiones experimentales ni una fórmula universal de belleza. Este análisis no modifica automáticamente las preferencias del usuario ni autoriza a rehacer el catálogo.

Comprobaciones realizadas: doce referencias y doce portadas actuales cargadas; dimensiones idénticas en ambos paneles; vista de escritorio y móvil de 390 px sin desbordamiento horizontal; selector de colección y ampliación de una cubierta operativos. La app principal y sus resúmenes se conservan.
