// Robot Sílabo: funciona sin internet.
// Página: primero la red (para recibir mejoras); si no hay internet, la copia guardada.
// Íconos y fuentes: primero la copia guardada, y se refrescan en segundo plano.
// Al publicar un cambio grande, sube el número de CACHE para limpiar la copia vieja.
const CACHE = 'silabo-v10';
const CORE = ['./', './index.html', './manifest.webmanifest', './respaldo.js', './voz.js', './adulto.js', './pantalla.js',
  './icons/icon-192.png', './icons/icon-512.png', './icons/icon-512-maskable.png', './icons/apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith('silabo-') && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const isPage = req.mode === 'navigate';
  const isFont = /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (url.origin !== location.origin && !isFont) return;

  if (isPage) {
    // red primero, con espera máxima para no quedarse colgado con wifi débil
    e.respondWith((async () => {
      try {
        const res = await Promise.race([
          fetch(req),
          new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), 4000))
        ]);
        if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put('./index.html', copy)); }
        return res;
      } catch (err) {
        return (await caches.match(req)) || (await caches.match('./index.html'));
      }
    })());
    return;
  }
  e.respondWith(caches.match(req).then(hit => {
    const fresh = fetch(req).then(res => {
      if (res && (res.ok || res.type === 'opaque')) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => hit);
    return hit || fresh;
  }));
});
