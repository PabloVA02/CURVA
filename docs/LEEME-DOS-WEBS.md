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

`docs/assets/index-CbWweeKg.js`, compilado desde `prototipo-microaprendizaje`
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

    <script type="module" crossorigin src="./assets/index-CbWweeKg.js"></script>

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

Y desde el 24 de septiembre, **438 resúmenes** —los 77 de `RESUMENES1000.docx`
de Pablo— y **las portadas nuevas de todos ellos**, sacadas de este mismo
repositorio: de cada libro, la que el comparador enseña primero entre las
tandas nuevas (`yeah`, acumuladas, tanda 120-159, rondas 1-7, últimas 94,
finanzas y recientes 25). Donde Pablo mandó tres variantes —Original, Ligero y
Medio— va la primera del comparador; si él eligió otra con «♡ Elegir», esa
elección vive en su navegador y hay que pedirle el ZIP.

Y desde la noche del 24, **la revisión para sacar la app**: la bienvenida sale
solo la primera vez y la app recuerda las metas; la racha, el récord, la
gráfica y los minutos del perfil son los de verdad y no los de ejemplo (siguen
con `?demo`); fuera los capítulos de prueba del prototipo y el «Seguir
leyendo» de un libro que no se ha abierto; los enlaces de «Términos» y
«Privacidad» abren sus hojas; y los sellos «Claude» y «Nuevo», el contador del
catálogo y el pie técnico del perfil solo salen con `?revision`.

Y después, esa misma noche: **la pestaña «Retos»** con los treinta dibujos de
Pablo, y **la doblez del lomo** de Headway en todas las cubiertas.

Y al final de la noche del 24: **las cubiertas de la bienvenida** con la
esquina menos redonda, como en la estantería, y **el pollito de «¡Excelente!»**
más grande, con los ojos que titilan, estrellas azules y una fiesta en pixel
art detrás.

Y desde el 25 de septiembre: **el pollito articulado** en todas sus pantallas
—un solo dibujo en vectorial que se mueve con sentido en cada una—, **las
estadísticas de libro** —estantería, calendario de días e índice— y **la llama
de la racha** hecha fuego de verdad, calculado al momento.

Y la noche del 25: **la ficha del libro rematada** —sin la cúpula de color,
sin la pastilla del tema ni las páginas, los tres gestos en columna junto a la
cubierta y un solo botón «Leer»—, **sin «Escuchar» en ninguna parte**, **sin la
pestaña Shorts**, **las estadísticas de antes, mejoradas y con más datos**, los
iconos de Pablo en los momentos y en Estadísticas, **la llama que crece con la
racha**, «Tu regalo» en pequeño y en la esquina, y las 29 cubiertas nuevas de la
tanda «El año de menos».

Y el 26: **la Nítida** como segunda pantalla de la introducción, **el pollito
tocable** —cada toque, un gesto— y más fluido, **la huella del pacto** que se
enciende y vibra, la comparativa con su maqueta de vuelta y **la escalera de
ofertas**: 44 % al cerrar los planes, 60 % a los tres días y 80 % a los siete,
con cuentas atrás de verdad.

Y la segunda ronda del 26: **la tragaperras en lienzo** a sesenta fotogramas
—estela de movimiento de verdad, tambor curvo y golpe de tope—, **el regalo
como notificación** que cae desde arriba y abre el pollito, en el momento de
más ganas (al volver de leer), **los avisos por momento** —con el café, en la
comida, antes de dormir—, **la llama con humo** cuando la racha flojea, la
flecha de volver en el alta, un solo aviso al guardar un libro y «Curva te
ayuda a aprender cada día» en vez de la meta del lector.

Y la tercera ronda del 26: **el final de un libro como Headway** —escáner
nuevo, progreso de la semana, valoración con motivos y comentarios, racha de
la semana entera, meta diaria de Wiser la primera vez y «Elige tu próximo
resumen»—, **sin suscripción solo los tres libros gratis del día**, el regalo
en la cabecera con su «1» rojo, **el 44 % con dos minutos de verdad** y dos
segundos después de cerrar los planes, 20 minutos por libro y **el perfil con
la cabecera y la paleta de Headway**.

Y la cuarta ronda del 26: **el pollito más quieto y con los ojos que
brillan** —sobre todo el del cartel—, **la oferta fija**, sin poder arrastrar
la foto, con un contador de dos minutos que **solo cierra la pantalla** y el
44 % que vuelve a no caducar, y **la prueba gratis una vez por móvil y no por
cuenta**: quien se hace otra cuenta en el mismo teléfono ve «Suscribirme» a
23,99 €/año, sin los siete días.

Y la quinta: **los ojos del pollito, como los del cerebro de Headway** —más
grandes, el reflejo enorme y un párpado de abajo que quita negro—, el brillo
**a trompicones y muy deprisa**, sin estrellas, y **el «1» rojo del regalo
siempre encendido** mientras haya oferta.

Y la sexta: **los minutos al día con los niveles de Wiser** y los libros al
mes, **la tarjeta del regalo con cara** antes del cupón y en cada arranque,
el cupón más grande y sin el filete discontinuo, **el último descuento como
el «mejor precio, solo esta vez» de Headway**, el cartel de «Para ti» de los
retos en grande de verdad, **la llama de la racha grande y con cinco
evoluciones de color**, y fuera los párpados, los candados, «Todos los
libros» y la prueba gratuita del perfil.

Y la séptima, el día del lanzamiento: **la doblez, el contorno y la esquina
de las cubiertas calcados de Headway al píxel**, **el último aviso calcado de
su captura** con el pollito en la pose de su cerebro, **invitar amigos** con
WhatsApp, SMS y el compartir del móvil funcionando, la ficha del reto con **la
copa y la cifra de la suya** y descripciones nuevas, y el alta sin la
pantalla de la racha.

Y la octava: **la escalera de descuentos de Headway** —la prueba gratis con
el primer año un 35 % más barato, el regalo con el 71 % al cerrarla encima
del libro que se quería leer, el último aviso del 78 % a la hora con su
«Si rechazas este descuento, no se te volverá a ofrecer», y el 44 % después—,
**tres dibujos del regalo y tres del cupón que se turnan**, **las
estadísticas del principio**, la tarjeta de la racha con **la llama de
pegatina** y los días en vez del récord, y la barra de abajo con **«Inicio»
y una casa** y los cuatro iconos del mismo trazo.

Y la novena: **el precio base sube a 49,99 € al año** (un 37 % menos que
Headway) para que los anuncios se paguen, con **la escalera que sube y se
acaba** —prueba al precio base, 44 % (27,99 €) al cerrarla, 60 % (19,99 €) al
día siguiente una sola vez y 50 % (24,99 €) al mes—, la tarjeta del regalo
como mucho una vez al día, el aviso dos días antes de que acabe la prueba y
Retos con la cima.

Y la décima: **59,99 € al año** («5 € al mes», un 25 % menos que Headway)
tras un análisis del mercado en español, con la escalera en 32,99, 23,99 y
29,99 €.

Y la undécima: **la web de los anuncios**, `docs/empezar.html`
(`https://pablova02.github.io/CURVA/empezar.html`), una página aparte con su
propio paquete ligero (`empezar-BuxStVkx.js`, 13 kB comprimido, más
`Pollito-Z6i3FS9R.js`, que comparte con la app). Es el embudo de pago:
test de seis preguntas, plan, correo y pago con Stripe, **en modo de prueba**
hasta que se pongan los enlaces de pago. Con las 53 portadas que eligió
Pablo. En la app, **un libro gratis al día**, el **plan mensual** de 12,99 €
con el precio por día y «más de 400 libros». Paquete de la app:
`index-CbWweeKg.js`.

Y la duodécima: la web de los anuncios con **una estantería 3D** en la
portada (Three.js, en su propio trozo `Estanteria3D-*.js`, que se carga
después del primer pintado) y **todas las animaciones con GSAP**: títulos por
palabras, opciones en cascada, el pago que se revela al bajar y confeti al
final.

Y la decimotercera: la web de los anuncios, **clara, como las de Headway y
Wiser**, con su guion en 37 pantallas (edad, áreas que se despliegan,
preguntas con la tarjeta de respuesta del pollito, hitos, libros uno a uno,
carga con preguntas, correo, plan con fechas) y el pago de Headway con la
**prueba de 7 días**: planes con la banda «Recomendado» y la hoja de cobro
que sube dentro de la página. Sin cuenta atrás ni cifras inventadas. Paquete
de la web: `empezar-C5qD8yHv.js`; paquete de la app: `index-DpfYfhkq.js`.

Y la decimocuarta: la web de los anuncios con **una red neuronal en 3D**
en la carga (Three.js con resplandor, en su propio trozo `RedNeuronal-*.js`),
el portal del 94 %, los datos de lectura en grande, la gráfica de la
procrastinación, las horas que se recuperan, famosos con foto y pollitos con
gestos distintos. 30 pantallas. Paquete de la web: `empezar-DP0rKQN4.js`;
paquete de la app: `index-DrBgHB1g.js`.

Y la decimoquinta: en «Más de 400 libros», **el aro de cubiertas que gira**
de la portada de Wiser (22 cubiertas, una vuelta cada 48 s, giro en CSS para
que vaya fino en cualquier móvil), en lugar de las cintas y la estantería 3D;
y en la edad, **cuatro personas dibujadas** —el chico de los cascos, la chica
de los aros, el hombre de la barba y la abuela del moño— en vez de iconos.
Con un botón **«Reiniciar»** en la cabecera (y el logo) para volver al
principio, que pregunta antes de borrar las respuestas.
Paquete de la web: `empezar-CNEilw4J.js`; paquete de la app: `index-BYVvLwlB.js`.

Y la decimosexta, el repaso entero de Pablo: pollitos fijos (salvo el que
corre, el del portal y el que baila), género con dibujos, metas de hasta tres
en dos columnas, minutos con los rayos de la app, comentarios verdes en los
pulgares, el cerebro de la carga en 2D sobre blanco (la web ya no carga
Three.js), el portal en el que el pollito entra de verdad, pie legal como el
de Headway, el pago empezando en «Elige tu plan» y fuera el pantallazo azul
de los botones. Paquete de la web: `empezar-IuoRwF_e.js`; paquete de la app:
`index-XdCLeb5U.js`.

Y el fondo negro de «Aprende a tu medida», que solo salía con el móvil en
modo oscuro: el documento de la animación se fuerza a claro. Paquete de la
web: `empezar-v8jcWxeC.js`; paquete de la app: `index-C0ejN24a.js`.

Y en «¿Quién te inspira?», Amancio Ortega en lugar de García Márquez, con
la foto que mandó Pablo (sin licencia libre; no sale en los créditos de
Commons). Paquete de la web: `empezar-B5fnebWZ.js`; paquete de la app:
`index-BYaVu0Ts.js`.

Y el cerebro de la carga rehecho («más destellos de luz; eso parece de
juguete»): un cerebro de cristal con sus circunvoluciones, impulsos de luz y
destellos de cuatro puntas. El pie legal, también al final de «¿Quién te
inspira?», la única pregunta que se sale de la pantalla. Paquete de la web:
`empezar-CKgJpgsH.js`; paquete de la app: `index-B0hfYuzF.js`.

Y el pago sin cabecera: empieza en «Elige tu plan», como Headway.
Paquete de la web: `empezar-CkpgP2JB.js`; paquete de la app: `index-0_bMgp-2.js`.

Y el icono nuevo de Curva, que eligió Pablo: la curva afinada en azul sobre
blanco, sin punto. Cambian los cuatro `icono-*.png` (también los de la app
de la raíz) y se añade `icono.svg` para la pestaña. Paquete de la web:
`empezar-Ci0AFMDV.js`; paquete de la app: `index-C787dCaL.js`.

**Y el dominio propio: curvaapp.net.** Lo compró Pablo el 26 de septiembre
en Cloudflare, con cuatro registros A a GitHub Pages (185.199.108–111.153) y
`www` apuntando aquí, todos en gris (sin el proxy de Cloudflare). El fichero
`docs/CNAME` es el que le dice a GitHub que sirva esta carpeta en ese
dominio: **no se borra**, y el despliegue de siempre (`cp -r …/docs/.
docs/`) no lo toca porque solo añade y sustituye. La web de los anuncios
queda en `curvaapp.net/empezar.html` y la app en `curvaapp.net/`. Los enlaces
que comparte la app salen ahora de `src/direccion.ts`. Paquete de la web:
`empezar-Bc1HmwiW.js`; paquete de la app: `index-ChjJ60Z2.js`.

**Ojo, para el lanzamiento**: la raíz sigue sirviendo el paquete del 22 de
septiembre, con 361 resúmenes y sin nada de lo de arriba. Y `docs/` pasa de
1,8 GB con 72 paquetes viejos, por encima del giga que admite GitHub Pages.

## Una advertencia para quien compile

**`vite` reescribe `index.html`.** Después de compilar hay que devolver el
apuntador que tuviera la raíz —`git checkout -- docs/index.html`— o se pisa el
de la otra sesión sin querer. Lo mismo con `docs/sw.js` y `docs/portadas.html`.
