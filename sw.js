// Offline support for the installed (Home Screen) game.
// On install it downloads everything listed in precache.json (written by the build), so the
// whole game works with no connection afterwards. Pages are network-first so updates arrive.
const CACHE = 'stay-at-home-v9';

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE);
      let files = ['./', './index.html'];
      try {
        const list = await (await fetch('./precache.json', { cache: 'no-store' })).json();
        files = files.concat(list);
      } catch {
        /* dev server or missing list: fall back to caching as files are used */
      }
      await Promise.all(files.map((f) => cache.add(f).catch(() => undefined)));
    })(),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      for (const key of await caches.keys()) if (key !== CACHE) await caches.delete(key);
      await self.clients.claim();
    })(),
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE);
      if (req.mode === 'navigate') {
        try {
          const fresh = await fetch(req);
          cache.put(req, fresh.clone());
          return fresh;
        } catch {
          return (await cache.match(req)) || (await cache.match('./index.html')) || Response.error();
        }
      }
      const hit = await cache.match(req);
      if (hit) return hit;
      const res = await fetch(req);
      if (res.ok) cache.put(req, res.clone());
      return res;
    })(),
  );
});
