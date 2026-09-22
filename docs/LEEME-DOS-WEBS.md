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

`docs/assets/index-NeSUOvOI.js`, compilado desde `prototipo-microaprendizaje`
con `npx vite build --config vite.web.config.mjs`. Lleva los mismos 361
resúmenes y **dos cosas que el de la raíz no tiene**:

1. **La marca verde «Nuevo»** de la última tanda y el sello «Claude» de los
   libros con texto de Pablo. La otra sesión los quitó a propósito —«sin
   etiquetas de procedencia ni recuentos del catálogo»—, y Pablo los había
   pedido el 19 de septiembre para encontrar los recién metidos en el móvil.
   Comprobado: en el paquete de la raíz no está ni `ficha-sello-nuevo` ni
   `cuenta-nuevo`.
2. **Los iconos nuevos de la lupa**, el balón y la bombilla que mandó el 22 de
   septiembre con el coral mandando.

**Las dos cosas son decisión de Pablo, no de ninguna de las dos sesiones.** Para
que la raíz sirva este otro paquete basta cambiar esa línea del `<head>` de
`docs/index.html`:

    <script type="module" crossorigin src="./assets/index-NeSUOvOI.js"></script>

Y al revés para volver al de la otra sesión.

## Una advertencia para quien compile

**`vite` reescribe `index.html`.** Después de compilar hay que devolver el
apuntador que tuviera la raíz —`git checkout -- docs/index.html`— o se pisa el
de la otra sesión sin querer. Lo mismo con `docs/sw.js` y `docs/portadas.html`.
