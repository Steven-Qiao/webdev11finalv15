const version = "v1";

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(version).then(function(cache) {
      return cache.addAll([
        "/",
        "/index.html",
        "/searchbloc.html",
        "/searchcapital.html",
        "/searchcode.html",
        "/searchlang.html",
        "/style.css",
        "/manifest.json",
        "/myscript.js",
        "/notfound.txt",
        //"/package.json",
        //"/server.js",
        // '/sw.js',
        "/images/capitalimg1.jpg",
        "/images/codeimg.jpg",
        "/images/hero3.jpg",
        "/images/hero6.jpg",
        "/images/orgimg.jpg",
        "/icons/earth-globe.png",
        "/icons/favicon.png",
        "/icons/icon-192x192.png",
        "/icons/icon-256x256.png",
        "/icons/icon-384x384.png",
        "/icons/icon-512x512.png",
        "/icons/maskable_icon.png"

        //'/server.js',
        // '/package.json'
      ]);
    })
  );
});

self.addEventListener("fetch", function(event) {
  
  console.log("[Service Worker] Fetch(url)", event.request.url);
  
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // caches.match() always resolves
      // but in case of success response will have value
      
      console.log(response);
      
      if (response !== undefined) {
        return response;
      } else {
        
        console.log("[Service Worker] Caching(data)", event.request.url);
        
       // console.log("Offline request");
        
        return fetch(event.request)
          .then(function(response) {
            // response may be used only once
            // we need to save clone to put one copy in cache
            // and serve second one
            let responseClone = response.clone();

            caches.open(version).then(function(cache) {
              cache.put(event.request, responseClone);
            });
            return response;
          })
          .catch(function() {
            return caches.match("/notfound.txt");
          });
      }
    })
  );
});
