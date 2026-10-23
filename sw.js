// NEXVON Service Worker — PWA (instalação no celular + notificações)
const CACHE_NAME = 'nexvon-v2100';
self.addEventListener('install', (event) => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
// Estratégia: network first, fallback to cache (mantém conteúdo atualizado)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
// Mostrar notificação quando o app envia mensagem
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'notify') {
    self.registration.showNotification(event.data.title, {
      body: event.data.body,
      icon: 'favicon.svg',
      badge: 'favicon.svg',
      tag: 'nexvon-study',
      vibrate: [200, 100, 200]
    });
  }
});
