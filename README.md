# Robot Sílabo

Juego para iPad que ayuda a niños de 5 y 6 años con TDAH a aprender a leer sílabas en español. Debe sentirse como juego, no como clase.

**Jugar:** https://jlcaleroh-apps.github.io/silabas/

## La historia
Sílabo, un robot astronauta, quedó varado. Su nave solo arranca con energía de sílabas. Cada planeta es una consonante; el primero es el **Planeta M** (ma, me, mi, mo, mu).

## Una sesión (5–8 minutos)
1. **Aterrizaje** en el planeta.
2. **Vuelo 1, Energía:** atrapar cristales con la sílaba que dice Sílabo y armar "m + vocal".
3. **Vuelo 2, Misión del día** (rota): Tablero de disparo, Lluvia de asteroides, Rescate de robots o Radar de sílabas.
4. **Vuelo 3, Carrera de 30 s** contra el cohete anterior. Dos modos: **Yo solo** (el niño lee la sílaba y toca el dibujo que empieza igual: mo → moto) y **Con un adulto** (lee en voz alta y el adulto toca ✓). Cada modo tiene su propio cohete fantasma.
5. Despegue, el planeta crece y premio para el robot. Después, "¡Otra misión!" o "Terminar por ahora": no hay cuota diaria fija, para aprovechar el hiperfoco (el adulto puede poner un límite opcional).

## Progreso
- La carrera compara con tu carrera anterior (cohete fantasma).
- ⭐ reconoce la sílaba al escucharla · ⭐⭐ la lee sola · ⭐⭐⭐ la lee en menos de 2 s.
- El planeta crece con cada sesión; las palabras desbloqueadas aparecen como objetos del planeta.
- Las sílabas sin práctica en 3 días "se apagan" y un robot pide rescate.
- El Planeta P se desbloquea con ⭐⭐ en las 5 sílabas de la M.

## Reglas de diseño
- Feedback en menos de 1 segundo, con elogio específico por voz.
- Sin castigo por error: "¡Ups, chispa!" y se intenta otra vez.
- Audio en todo, una meta por pantalla, sin tiendas ni anuncios.
- Premios por sesión, no por acierto.
- El progreso se guarda en el iPad (almacenamiento local del navegador).

## Varios niños
Cada niño tiene su propio perfil: robot, planeta, estrellas y carreras. Al abrir la app aparece "¿Quién juega?".

## Información y racha
- Botón **?** en la pantalla de inicio: qué es la app, cómo es una misión, las estrellas, los principios para TDAH, guía para el adulto y contacto.
- **Racha de días:** cuenta los días seguidos con al menos una misión. Si se corta, vuelve a empezar sin regaño.

## Panel del adulto
Mantén presionado el engranaje ⚙ **2 segundos** en la pantalla de inicio. Ahí están el progreso por sílaba, los jugadores, el límite diario opcional y la **Prueba de voz**: elegir la voz del iPad, ajustar la velocidad, escuchar cada letra, sílaba y palabra, y grabar tu propia voz para las que suenen mal.

## Instalar en el iPad (funciona sin Internet)
1. Abre la app en Safari con Internet una vez.
2. Toca **Compartir → Agregar a pantalla de inicio**.
3. Ábrela desde su ícono: funciona sin conexión y el progreso de los niños queda protegido.

Con Internet, la app busca primero la versión nueva; sin Internet, usa la copia guardada.

## Técnica
Una sola página (`index.html`) con HTML, CSS y JavaScript, más `sw.js` (copia sin conexión) y `manifest.webmanifest` (instalación). Voz con la síntesis de voz del iPad en español. Al publicar un cambio grande, sube el número de `CACHE` en `sw.js`.

## Componentes comunes (iguales en todas las apps de jlcaleroh-apps)
Esta app sigue el [estándar común](https://github.com/jlcaleroh-apps/plantilla/blob/main/ESTANDAR.md). Las apps nuevas se crean desde [plantilla](https://github.com/jlcaleroh-apps/plantilla).

- **`respaldo.js` · Respaldo del progreso:** en el panel del adulto, "Guardar respaldo" crea un archivo con el progreso de todos los niños (se guarda en Archivos, AirDrop o correo) y "Restaurar respaldo" lo carga en este u otro iPad. Muestra la fecha del último respaldo y avisa si pasaron más de 2 semanas. También pide al iPad que no borre los datos de la app.
  - Es el mismo archivo en todas las apps: si se mejora, se copia igual en cada repo.
  - Cada app declara qué claves de almacenamiento son suyas, porque todas comparten el dominio `jlcaleroh-apps.github.io`.
- **`adulto.js` · Gesto del panel del adulto:** mantener presionado 2 segundos; el botón se llena de color y, si se suelta antes, aparece un aviso. Así los niños no lo abren por accidente.

## Contacto
jlcaleroh@gmail.com
