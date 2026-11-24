const CACHE="spanish-seekho-v68";
const FILES=[
 "./","./index.html","./tools/word-explorer.html","./tools/word-explorer.css","./tools/word-explorer.js","./styles.css","./app.js","./manifest.webmanifest","./assets/icon.svg",
 "./a1/index.html","./a1/lesson-01.html","./a1/lesson-02.html","./a1/lesson-03.html","./a1/lesson-04.html","./a1/lesson-05.html","./a1/lesson-06.html","./a1/lesson-07.html","./a1/lesson-08.html","./a1/lesson-09.html","./a1/lesson-10.html","./a1/lesson-11.html","./a1/lesson-12.html","./a1/lesson-13.html","./a1/lesson-14.html","./a1/lesson-15.html","./a1/lesson-16.html","./a1/lesson-17.html","./a1/lesson-18.html","./a1/lesson-19.html","./a1/lesson-20.html","./a1/lesson-21.html","./a1/lesson-22.html","./a1/lesson-23.html","./a1/lesson-24.html","./a1/lesson-25.html","./a1/a1-review.html","./a1/a1-project.html","./a1/a1-assessment.html","./a1/a1-readiness.html","./a1/practice.html","./a1/spain-transport.html","./a1/spain-healthcare.html","./a1/spain-airport.html","./a1/spain-housing.html","./a1/spain-offices.html","./a1/spain-shopping.html","./a1/course.css","./a1/app-shell.js",
 "./a2/index.html","./a2/lesson-01.html","./a2/lesson-02.html","./a2/lesson-03.html","./a2/lesson-04.html","./a2/lesson-05.html","./a2/lesson-06.html","./a2/lesson-07.html","./a2/lesson-08.html","./a2/lesson-09.html","./a2/lesson-10.html","./a2/lesson-11.html","./a2/lesson-12.html",
 "./a2/lesson-13.html",
 "./a2/lesson-14.html",
 "./a2/lesson-15.html",
 "./a2/lesson-16.html",
 "./a2/lesson-17.html",
 "./a2/lesson-18.html",
 "./a2/lesson-19.html",
 "./a2/lesson-20.html",
 "./a2/lesson-21.html","./a2/lesson-22.html","./a2/lesson-23.html",
 "./b1/index.html","./b1/lesson-01.html"
];
self.addEventListener("install",event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)));self.skipWaiting();});
self.addEventListener("activate",event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))));self.clients.claim();});
self.addEventListener("fetch",event=>{if(event.request.method!=="GET")return;event.respondWith(caches.match(event.request).then(cached=>{if(cached)return cached;return fetch(event.request).then(response=>{if(response&&response.ok&&new URL(event.request.url).origin===self.location.origin){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));}return response;}).catch(()=>caches.match("./index.html"));}));});