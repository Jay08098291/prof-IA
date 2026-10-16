// Service Worker minimal pour permettre l'installation PWA
const CACHE_NAME = 'prof-ia-cache-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Réseau d'abord pour les requêtes dynamiques / API
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});