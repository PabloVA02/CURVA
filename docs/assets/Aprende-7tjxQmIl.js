const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./nitida-D8wrn9G9.js","./LeeMas-CSkQoyp4.js"])))=>i.map(i=>d[i]);
import{Gt as e,Jt as t,Xt as n}from"./LeeMas-CSkQoyp4.js";import{t as r}from"./empezar-C1R6ULsI.js";var i=n(t(),1),a=e(),o=`<meta name="color-scheme" content="light"><style>
  :root, :root:not([data-theme="light"]), :root[data-theme="dark"] { color-scheme: light !important; }
  html, body { background: transparent !important; }
  .pantalla, .pantalla[data-tema="claro"] {
    background: transparent !important;
    --p-tinta: #16130f;
    --p-azul: #0a6cff;
    --p-azul-sel: #0a6cff24;
    --p-azul-tenue: #0a6cff26;
    --p-destello: #9dc2ff;
  }
  .saltar, .continuar { display: none !important; }
  .mueve { margin-top: -10px !important; }
</style>`;function s(){let[e,t]=(0,i.useState)(null);return(0,i.useEffect)(()=>{let e=!0;return r(()=>import(`./nitida-D8wrn9G9.js`).then(e=>e.n).then(n=>e&&t(n.default.replace(`id="pantalla" data-tema="oscuro"`,`id="pantalla" data-tema="claro"`)+o)),__vite__mapDeps([0,1]),import.meta.url),()=>{e=!1}},[]),(0,a.jsx)(`div`,{className:`e-aprende`,children:e?(0,a.jsx)(`iframe`,{className:`e-aprende-marco`,srcDoc:e,title:`Aprende leyendo, en 20 minutos, 10 veces más rápido y a tu medida`,sandbox:`allow-scripts`}):(0,a.jsx)(`div`,{className:`e-aprende-espera`,"aria-hidden":!0})})}export{s as default};