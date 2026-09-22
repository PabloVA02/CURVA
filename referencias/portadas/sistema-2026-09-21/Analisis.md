# Dirección de arte de Curva · 21 de septiembre de 2026

La colección debe resultar reconocible por su dibujo, su acabado y su jerarquía; cada portada debe tener una idea y una composición propias. La belleza se revisará tanto en la imagen individual como en el catálogo del móvil. El usuario dará los encargos uno a uno. Esta revisión prepara el sistema: no genera ni sustituye ninguna portada.

## Material revisado y conservado

Los dos ZIP contienen **134 PNG, de los que 123 son distintos por SHA-256**. Se han revisado visualmente las 123 imágenes mediante once hojas de contacto y se han ampliado ejemplos de composición, personas y doblez. Hay capturas con varias cubiertas y un mismo libro puede aparecer en capturas diferentes: 123 imágenes no equivale a 123 portadas distintas.

Los ZIP originales y el prompt del usuario se conservan íntegros. `Indice.json` identifica cada archivo, dimensiones, huella y duplicados. Las hojas de contacto son copias reducidas para inspección; los originales no se han alterado. Los textos del LEEME y de las capturas se consideran material de referencia. El usuario sí ha pedido expresamente aplicar el documento `Prompt-original.txt` y mejorarlo cuando haga falta.

## Lo que muestran las referencias

| Referencia | Observación visual | Aplicación a Curva |
|---|---|---|
| `IMG_1895.PNG`, Productividad | Azul noche, lima y burdeos se alternan; la textura densa de Hábitos atómicos convive con los campos tranquilos de No lo pienses demasiado. | Revisar el ritmo del conjunto. Una portada calmada puede hacer destacar la siguiente. No convertir todas en complejas ni todas en mínimas. |
| `IMG_1936.PNG`, Respira | Rostro cortado por el borde, pelo en masas, ojo de trazo y mano expresiva; mucho espacio limpio para texto. | El recorte, la escala y el gesto aportan carácter. Los rasgos simples no obligan a hacer una figura infantil. |
| `IMG_1939.PNG`, El libro del bebé | Dos figuras se enlazan con una curva amplia; caras pequeñas y pelo plano. | Cuando haya personas, la relación entre siluetas importa más que el detalle de las caras. |
| `IMG_1969.PNG`, El elefante en el cerebro | Perfil y elefante encajan en una misma estructura. Pocas masas grandes producen una lectura doble. | Buscar relaciones formales ingeniosas. No repetir esos objetos ni copiar su composición. |
| `IMG_1938.PNG`, La dieta rápida | Olla y reloj se integran en una sola imagen. | Una idea puede contener varios elementos siempre que formen una unidad, en vez de un collage de símbolos. |
| `IMG_1873.PNG`, ¿Me explico con claridad? | La escena del ovni plantea una asociación inesperada con la comunicación. | Lo raro funciona cuando tiene una relación comprensible con el tema. No elegir rarezas aleatorias. |
| `IMG_1942.PNG`, Oxígeno | Una relación imposible entre árbol, recipiente y respiración comunica una idea. | La acción y el vínculo entre objetos pueden sustituir al protagonista humano. |
| `IMG_1890.PNG`, Ficción | Barco, flor, electricidad y retrato conviven con estructuras tipográficas diferentes. | Variar las familias de motivos y la distribución de masas. El nuevo sistema de Curva conservará una familia tipográfica por petición del usuario. |
| `IMG_1944.PNG`, Fórmula 1 | El movimiento de una bandera ocupa buena parte del campo; la lectura sigue siendo sencilla. | Una forma dominante puede resultar rica por su dirección y recorte. No copiar el motivo para las nuevas cubiertas de deportes. |
| `IMG_1972.PNG`, Tu miedo es tu poder | Hilos, mano y figura oscura establecen una relación narrativa clara. | Desarrollar acciones; evitar el objeto aislado sobre fondo vacío por defecto. |
| `IMG_1978.PNG`, Desbloqueando el potencial | Animal y sombra de otra escala aportan un segundo significado. | Aprovechar cambios de escala y relaciones entre formas, comprobando que el recurso no esté usado en Curva. |
| `Como-leer-un-libro-doblez.png` | Frontal completo, mensaje superior, título inferior y una franja tonal estrecha a la izquierda. | Usar esta referencia principalmente para el acabado y la distribución. Su modelado suave y textura no sustituyen la nueva regla de dibujo plano. |

Las referencias **no cumplen todas una misma receta**: hay distintas familias tipográficas, mensajes largos, más de cinco colores, retratos, marcas y composiciones literales. La rueda y la tipografía fija son decisiones de identidad para Curva, no medidas demostradas de Headway/Wiser. Sus ejemplos informan la dirección visual; prevalece el encargo concreto del usuario.

## Ajustes al prompt

1. **Legibilidad antes que una proporción ciega.** El 38 % sirve como punto de partida. Un título de 24 px en la tarjeta dejaría un mensaje de 9,12 px; uno de 20 px lo dejaría en 7,6 px. Si cuesta leerlo, se amplía el mensaje y se reorganiza la composición manteniendo solo dos niveles. Se propone 11–12 px efectivos como umbral práctico de revisión del mensaje a 170 px de ancho, no como norma universal ni garantía de accesibilidad. No se recorta ni reescribe el texto entregado por el usuario.
2. **Contraste comprobable.** Mantener los cinco colores dados. En las filas 3 y 7, situar el texto crema sobre una mancha oscura ya incluida en esa fila cuando el fondo no dé suficiente contraste. No cambiar el fondo ni inventar un sexto color. Revisar también los rótulos dentro del dibujo.
3. **Cinco tintas de diseño.** El suavizado de bordes y la doblez tonal producen valores intermedios en una imagen raster. Interpretar la regla como cinco colores base para ilustración y texto, con la excepción técnica de esos bordes y de la estrecha encuadernación. No prometer que un PNG generado tendrá exactamente cinco valores RGB. Una paleta estrictamente indexada sería una especificación técnica distinta.
4. **Una sola doblez.** Luz y surco junto al 2 % izquierdo, sin brillo general, borde blanco, páginas ni perspectiva. Si queda incorporada en la imagen, no añadir otra encima en la app. La integración debe comprobarlo por cubierta y conservar el acabado de las anteriores.
5. **Rueda sin ambigüedad.** Fila = `((número - 1) % 12) + 1`. La portada 12 usa burdeos; la 13 vuelve a cobalto. El ciclo tiene seis fondos saturados, tres apagados y tres oscuros: **50 %, 25 % y 25 %**, respectivamente. El 28 % y el 27 % mencionados en el prompt no se han validado mediante una medición de portadas únicas.
6. **Armonía más allá de la numeración.** La rueda organiza la secuencia de trabajo, pero la app puede ordenar por novedad o categoría. Revisar cada nueva portada junto a sus vecinas reales; compensar mediante composición y distribución de tintas sin saltarse el fondo asignado. El sistema no promete armonía automática en cualquier orden.
7. **Variedad registrable.** Anotar motivo principal, secundarios, relación visual, composición y paleta de cada diseño. Consultar las portadas y prompts anteriores, también de los libros ocultos. Cambiar el color de un motivo repetido no lo hace nuevo. La revisión visual sigue siendo necesaria: una búsqueda de palabras no detecta todas las semejanzas.
8. **Fidelidad sin promesas de marketing.** Una asociación nueva puede invitar a mirar, pero no hay base para afirmar que una portada literal nunca recibe clics. El mensaje explica el contenido real; la ilustración añade una lectura. Belleza, comprensión y apertura del libro son resultados diferentes.

## Contraste de la rueda

Cálculo sRGB con luminancia relativa, sobre los hexadecimales exactos entregados. Los valores se muestran redondeados; el archivo JSON conserva cuatro decimales. El criterio de revisión para el mensaje es al menos 4,5:1.

| Fila | Fondo | Texto sobre fondo | Campo alternativo dentro de la misma paleta |
|---|---|---:|---|
| 1 | Cobalto | 7,10:1 | Azul oscuro, si lo necesita la composición |
| 2 | Hueso | 12,70:1 | Ámbar |
| 3 | Rojo | **3,95:1** | Granate `#7A1F17`: **9,12:1** |
| 4 | Azul noche | 15,33:1 | Mantener el texto sobre el fondo |
| 5 | Amarillo | 9,62:1 | Crema |
| 6 | Verde gris | 10,61:1 | Crema |
| 7 | Turquesa | **2,59:1** | Verde oscuro `#0E5B55`: **7,01:1** |
| 8 | Negro cálido | 15,78:1 | Mantener el texto sobre el fondo |
| 9 | Morado | 6,70:1 | Morado oscuro |
| 10 | Arena | 10,77:1 | Crema claro |
| 11 | Naranja | 5,23:1 | Crema |
| 12 | Burdeos | 14,95:1 | Mantener el texto sobre el fondo |

## Qué aporta la investigación

- **Facilidad de percepción.** Reber, Schwarz y Winkielman (2004) revisan cómo la facilidad de procesar un estímulo interviene en su valoración estética. Aplicación de diseño inferida: separar figura y fondo, mantener siluetas claras y dar jerarquía al texto. No demuestra que cinco colores o Poppins sean superiores para esta app. [Artículo de los autores](https://psy.ucsd.edu/~pwinkiel/reber-schwarz-winkielman-beauty-PSPR-2004.pdf).
- **Complejidad y familiaridad.** Los experimentos de Tuch y colaboradores (2012) estudian primeras impresiones de páginas web y encuentran efectos de la complejidad visual y la prototipicidad sobre su atractivo. Aplicación inferida a Curva: un lenguaje reconocible puede convivir con una idea nueva por cubierta. No se ensayaron estas portadas ni su tasa de lectura. [Publicación original](https://www.sciencedirect.com/science/article/abs/pii/S1071581912001127).
- **Legibilidad.** W3C establece 4,5:1 para texto normal y 3:1 para texto grande, y advierte del efecto del suavizado y de los trazos finos. Se usa 4,5:1 como criterio conservador de contraste para los mensajes pequeños. Cumplirlo no garantiza por sí solo que un texto diminuto sea legible. [W3C, contraste mínimo](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

No existe en estas fuentes una fórmula de «máxima belleza» ni una garantía de mayor conversión para una rueda de doce colores. El criterio editorial se contrastará con el usuario a tamaño de móvil. Si más adelante se comparan variantes con lectores, conviene comprobar comprensión y comienzo de lectura además de la apertura de la ficha, manteniendo constante libro, texto y posición. Esta revisión no añade analítica ni experimentos a la app.

## Revisión de cada entrega

Revisar el original para letras, anatomía, bordes y artefactos; la miniatura de 170 px para título, mensaje y silueta; y una cuadrícula con vecinas reales para equilibrio. La ilustración debe funcionar sin depender de detalles que desaparezcan al reducirla. Los cinco colores se usarán con proporciones distintas; no cinco áreas iguales.

Se mantienen la familia geométrica, los cinco colores asignados, dos niveles de texto, mensajes específicos, mayoría sin personas y prohibición de repetir motivos. La libertad queda en la escena, la relación entre formas, escala, recorte, posición y proporción de tintas. Los 361 resúmenes actuales y las cubiertas existentes permanecen intactos. El siguiente paso es el primer prompt individual del usuario.
