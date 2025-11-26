// Minimal service worker – ingen egen caching, bara PWA-stöd

self.addEventListener("install", (event) => {
  // Aktivera nya SW direkt
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  // Ta kontroll över alla öppna klienter
  event.waitUntil(self.clients.claim());
});

// Ingen fetch-hanterare:
// browserns vanliga cache används, ingen extra logik som låser fast gamla versioner
