// Service worker minimal — nécessaire pour qu'Android propose une vraie installation.
// Ne met jamais rien en cache : force une requête réseau fraîche à chaque chargement,
// pour que l'app installée voie toujours la dernière version mise en ligne.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request, { cache: 'no-store' }).catch(() => fetch(event.request))
  );
});
