const CACHE_ELEMENTS = [
    "./",

    "/assets/styles/minified.css",

    "./assets/images/ico.png",
    "./assets/images/ico-xl.png",
    "./assets/images/knowledge/alura.webp",
    "./assets/images/knowledge/certiprof.webp",
    "./assets/images/knowledge/cs50.webp",
    "./assets/images/knowledge/ucr.webp",
    "./assets/images/projects/flags.webp",
    "./assets/images/projects/password.webp",
    "./assets/images/projects/planets.webp",
    "./assets/images/projects/routes.webp",
    "./assets/images/projects/rps.webp",
    "./assets/images/projects/shortly.webp",
    "./assets/images/projects/todo.webp",
    "./assets/images/projects/tracker.webp",

    "https://cdn.jsdelivr.net/npm/firacode@6.2.0/distr/fira_code.css",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css",
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css",
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
        .then(res => res ? res : fetch(e.request))
    );
});