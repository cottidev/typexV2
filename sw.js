/* ═══════════════════════════════════════════════
   TYPEX Service Worker — Offline PWA
   Cache-first strategy: serve from cache, update in background
   ═══════════════════════════════════════════════ */

const CACHE_NAME = "typex-v2-1";
const FONT_CACHE = "typex-fonts-v1";

/* Core app shell — always cache these */
const APP_SHELL = [
  "/",
  "/index.html",
  "/style.css",
  "/script.js",
  "/manifest.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
];

/* Google Fonts URLs to cache */
const FONT_URLS = [
  "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&family=Syne:wght@400;700;800&family=VT323&display=swap",
];

/* ── Install: pre-cache app shell ── */
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        // Cache app shell — ignore failures for optional assets
        return Promise.allSettled(
          APP_SHELL.map((url) =>
            cache.add(url).catch((err) => {
              console.warn("[SW] Failed to cache:", url, err);
            })
          )
        );
      })
      .then(() => self.skipWaiting())
  );
});

/* ── Activate: clean up old caches ── */
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => k !== CACHE_NAME && k !== FONT_CACHE)
            .map((k) => {
              console.log("[SW] Deleting old cache:", k);
              return caches.delete(k);
            })
        )
      )
      .then(() => self.clients.claim())
  );
});

/* ── Fetch: serve from cache, update in background ── */
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET, chrome-extension, and API requests
  if (request.method !== "GET") return;
  if (url.protocol === "chrome-extension:") return;

  // Google Fonts: cache-first with font-specific cache
  if (
    url.hostname === "fonts.googleapis.com" ||
    url.hostname === "fonts.gstatic.com"
  ) {
    event.respondWith(
      caches.open(FONT_CACHE).then((cache) =>
        cache.match(request).then((cached) => {
          if (cached) return cached;
          return fetch(request)
            .then((response) => {
              // Only cache valid responses
              if (response && response.status === 200) {
                cache.put(request, response.clone());
              }
              return response;
            })
            .catch(() => cached); // offline fallback
        })
      )
    );
    return;
  }

  // App shell: cache-first, stale-while-revalidate
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(request).then((cached) => {
        const fetchPromise = fetch(request)
          .then((response) => {
            if (response && response.status === 200) {
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(request, response.clone());
              });
            }
            return response;
          })
          .catch(() => {
            // Network failed — return cached or offline fallback
            if (cached) return cached;
            // If navigating to a page, return the app shell
            if (request.mode === "navigate") {
              return caches.match("/index.html");
            }
          });

        // Return cached immediately, update in background
        return cached || fetchPromise;
      })
    );
    return;
  }
});

/* ── Message handler: force update ── */
self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") {
    self.skipWaiting();
  }
  if (event.data === "CACHE_URLS") {
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(APP_SHELL);
    });
  }
});
