# Aquí viven dos webs, y la raíz solo puede servir una

**Estado a 20 de septiembre de 2026.**

En `docs/` hay dos cosas compiladas, hechas por dos sesiones distintas:

- **La app de Curva**, compilada desde `prototipo-microaprendizaje` con
  `npx vite build --config vite.web.config.mjs`. Su paquete es
  `docs/assets/index-Egb0ofd6.js`, y lleva los 291 libros con el texto de Pablo.
- **El catálogo de portadas**, de la otra sesión. Su paquete es
  `docs/assets/index-portadas-*.js`, y sirve para revisar las portadas nuevas.

**`docs/index.html` apunta hoy al catálogo de portadas**, que es lo que estaba
publicado cuando esta tanda de libros llegó. La app NO se ha pisado: su paquete
está guardado aquí al lado, entero y con los 291 libros dentro.

Para que la raíz vuelva a servir la app, basta cambiar esa línea del `<head>`:

    <script type="module" crossorigin src="./assets/index-Egb0ofd6.js"></script>

Y al revés para volver al catálogo. **Está pendiente de que Pablo diga cuál de
las dos quiere en `https://pablova02.github.io/CURVA/`**, y la otra puede vivir
en su propia página —`portadas.html` ya existe— sin quitarle el sitio a nadie.

Una advertencia para quien compile la app: **`vite` reescribe `index.html`** y
se llevará por delante el apuntador al catálogo de portadas. Si eso pasa sin
querer, la línea de arriba dice cómo devolverlo.
