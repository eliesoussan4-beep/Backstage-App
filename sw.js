// Service worker minimal — nécessaire pour qu'Android propose une vraie installation.
// Ne fait aucune mise en cache : l'app a besoin du réseau pour charger, comportement identique à avant.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
self.addEventListener('fetch', () => {});
