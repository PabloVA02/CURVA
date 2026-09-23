# Qué sirve la raíz de CURVA, y qué hay al lado

**Estado a 22 de septiembre de 2026.** Este fichero lo escriben DOS sesiones
distintas, así que aquí están los dos lados sin pisarse.

## La raíz ya no es el catálogo de portadas: es la app

Lo cambió la otra sesión el 21 de septiembre. `docs/index.html` apunta hoy a
`docs/assets/index-lectura-077e252662.js`, que es **la app completa con los 361
resúmenes**. `docs/portadas.html` enseña solo esos mismos libros.

Eso responde a la pregunta que llevaba días abierta —cuál de las dos webs se
queda con `https://pablova02.github.io/CURVA/`— y la respuesta es la app.

**No volver a activar `index-portadas-*.js` en la raíz**: aquel paquete también
era una app entera, pero con 114 resúmenes, y activarlo esconde los 247 nuevos.

## Y al lado está el paquete de esta sesión

`docs/assets/index-CY0ok9hk.js`, compilado desde `prototipo-microaprendizaje`
con `npx vite build --config vite.web.config.mjs`. Lleva los mismos 361
resúmenes y **dos cosas que el de la raíz no tiene**:

1. **La marca verde «Nuevo»** de la última tanda y el sello «Claude» de los
   libros con texto de Pablo. La otra sesión los quitó a propósito —«sin
   etiquetas de procedencia ni recuentos del catálogo»—, y Pablo los había
   pedido el 19 de septiembre para encontrar los recién metidos en el móvil.
   Comprobado: en el paquete de la raíz no está ni `ficha-sello-nuevo` ni
   `cuenta-nuevo`.
2. **La introducción nueva**, a la manera de Headway, y los planes en
   carrusel con la oferta del pollito (22 de septiembre).
3. **Los iconos nuevos de la lupa y de las metas**: los veintinueve que Pablo
   rehízo el 23 de septiembre —dieciocho géneros y once metas—, todos con el
   mismo trazo.

**Las dos cosas son decisión de Pablo, no de ninguna de las dos sesiones.** Para
que la raíz sirva este otro paquete basta cambiar esa línea del `<head>` de
`docs/index.html`:

    <script type="module" crossorigin src="./assets/index-CY0ok9hk.js"></script>

Y al revés para volver al de la otra sesión.

## Lo último de este paquete (22 de septiembre)

Las 82 portadas nuevas de la selección de Pablo ya están en el fuente de la
app, así que este paquete las lleva igual que el de la raíz. Y la bienvenida
ha vuelto a la de antes, crema y con un escaparate de 21 de ellas.

Y desde la noche del 22: «Escoge 3 o más títulos» con 24 de ellas a tamaño de
libro; la gráfica del plan con el diseño de la introducción; el pollito quieto
y con el brillo de los ojos que crece y vuelve; y los botones de pago, que suben una hoja como la
del iPhone —tarjeta, Face ID, «Hecho»— en vez de la caja con correo y tarjeta.

Y desde el 23: la bienvenida con la estética de Imprint, y en la introducción
lo que Pablo pidió de Wiser —la rueda de minutos, el mosaico de objetivos, las
frases en tarjeta blanca, los libros de uno en uno, «Lee más en menos tiempo» y
«¡7 días de prueba desbloqueados!»—.

## Una advertencia para quien compile

**`vite` reescribe `index.html`.** Después de compilar hay que devolver el
apuntador que tuviera la raíz —`git checkout -- docs/index.html`— o se pisa el
de la otra sesión sin querer. Lo mismo con `docs/sw.js` y `docs/portadas.html`.
