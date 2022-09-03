const CACHE_ELEMENTS = [
    "./",
    "https://kit.fontawesome.com/a6ee538727.js",
    
  
];

const CACHE_NAME = "v1_Portfolio-APP";

const CACHE_WHITE_LIST = [CACHE_NAME];


self.addEventListener("install", e =>
    e.waitUntil(caches.open(CACHE_NAME)
        .then(cache => cache.addAll(CACHE_ELEMENTS))
        .then(() => self.skipWaiting())
        .catch(console.log)
    )
);


self.addEventListener("activate", (e) =>
    e.waitUntil(caches.keys()
        .then(cacheNames =>
            cacheNames.map(cache => !CACHE_WHITE_LIST.includes(cache) && caches.delete(cache)))
        .then(() => self.clients.claim())
        .catch(console.log)
    )
);

self.addEventListener("fetch", (e) => {
    e.respondWith(caches.match(e.request)
        .then(res => res ? res : fetch(e.request) )
    );
});