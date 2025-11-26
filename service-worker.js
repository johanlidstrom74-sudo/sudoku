const CACHE_NAME = "sudoku-cache-v2";
const URLS_TO_CACHE = [
  "./",
  "index.html",
  "manifest.webmanifest"
  // Lägg till "icons/icon-192.png", "icons/icon-512.png" om du vill cachea ikonerna också
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
