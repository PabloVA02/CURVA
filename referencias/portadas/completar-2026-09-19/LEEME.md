# Catálogo completo de portadas de Curva

Finalizado el 19 de septiembre de 2026: **682 libros con portada propia y 0 pendientes**. En esta continuación se completaron las **127 portadas que faltaban**, en 17 tandas. También se corrigió «Sin conciencia» tras la petición del usuario.

- [Ver la app publicada](https://pablova02.github.io/CURVA/)
- [Ver la galería de portadas en el móvil](https://pablova02.github.io/CURVA/portadas.html)
- [Inventario completo de 682 libros](../../libros/CATALOGO-682.md)
- [Auditoría final](Auditoria-final.json)
- [Preferencias del usuario conservadas](../Preferencias-del-usuario.md)

Se conservan **142 imágenes originales**, incluidas propuestas anteriores y correcciones, con sus prompts, fuentes y versiones WebP instaladas. Modo de creación: **image_gen integrado**. Los mensajes de las portadas se contrastaron con fuentes editoriales o de los autores, enlazadas en cada tanda. Esto completa las cubiertas del catálogo; no significa que los 682 libros tengan ya resumen.

La última preferencia pide inventar asociaciones visuales inusuales y escenas incluso raras, variar dibujo, composición, paleta y tipografía, y no abusar de personas. Mantener dibujos planos, colores vivos coherentes, mensajes legibles y la doblez lateral, sin contorno blanco.

## Comprobación final

Las 682 rutas de imágenes están en Git y responden públicamente con HTTP 200, contenido de imagen y tamaño no vacío. El bundle publicado coincide por SHA-256 con el guardado. Los originales y WebP de las 17 tandas coinciden con sus hashes. Las modificaciones de cada tanda se limitaron al mapa de cubiertas, conservando los 114 resúmenes de la app activa. Se comprobó la última tanda en una pantalla de 390 px, con tarjetas de 171 px de ancho, y la apertura de la app pública.

`Pendientes.json` conserva la cola inicial de 127 libros como historial; todos tienen ahora `estado_trabajo: integrada`. El inventario actual es `referencias/libros/catalogo-682.json`.

## Historial de las tandas

| Tanda | Portadas nuevas | Originales conservados | Archivos y prompts |
|---|---:|---:|---|
| 01 | 6 | 9 | [Abrir](../completar-2026-09-19-01/LEEME.md) |
| 02 | 6 | 6 | [Abrir](../completar-2026-09-19-02/LEEME.md) |
| 03 | 8 | 11 | [Abrir](../completar-2026-09-19-03/LEEME.md) |
| 04 | 8 | 11 | [Abrir](../completar-2026-09-19-04/LEEME.md) |
| 05 | 8 | 10 | [Abrir](../completar-2026-09-19-05/LEEME.md) |
| 06 | 8 | 9 | [Abrir](../completar-2026-09-19-06/LEEME.md) |
| 07 | 8 | 8 | [Abrir](../completar-2026-09-19-07/LEEME.md) |
| 08 | 8 | 8 | [Abrir](../completar-2026-09-19-08/LEEME.md) |
| 09 | 8 | 8 | [Abrir](../completar-2026-09-19-09/LEEME.md) |
| 10 | 8 | 8 | [Abrir](../completar-2026-09-19-10/LEEME.md) |
| 11 | 8 | 8 | [Abrir](../completar-2026-09-19-11/LEEME.md) |
| 12 | 8 | 9 | [Abrir](../completar-2026-09-19-12/LEEME.md) |
| 13 | 8 | 8 | [Abrir](../completar-2026-09-19-13/LEEME.md) |
| 14 | 8 | 10 | [Abrir](../completar-2026-09-19-14/LEEME.md) |
| 15 | 8 | 8 | [Abrir](../completar-2026-09-19-15/LEEME.md) |
| 16 | 8 | 8 | [Abrir](../completar-2026-09-19-16/LEEME.md) |
| 17 | 3 | 3 | [Abrir](../completar-2026-09-19-17/LEEME.md) |

Los commits de las 17 publicaciones se conservan en [Estado.json](Estado.json).
