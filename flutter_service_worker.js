'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/ancientegypt/1.png": "ffb9e3e35cb5295af5f1d1dbcf7b3956",
"assets/ancientegypt/2.png": "3d3504f8d24e189a297a525daa54b35a",
"assets/ancientegypt/3.png": "6583609d6024988e90bd93f6c93b23b5",
"assets/ancientegypt/4.png": "f219dad7df7268b80d53f4094c5af000",
"assets/ancientegypt/5.png": "86318a13f92328e40035c5f54fad95b8",
"assets/ancientegypt/6.png": "e5e57de129f5ffe43a57951ba9001ca3",
"assets/ancientegypt.png": "d3a811f65f200018eb395d04687fd48f",
"assets/apple.png": "57949683506bfda34aa4307f11a9027b",
"assets/AssetManifest.bin": "40e814c522f3a17e5b0ccddd1b9a14aa",
"assets/AssetManifest.bin.json": "771b8a79f63a5d97743a2e0b320a9f98",
"assets/AssetManifest.json": "d96f9335dbe7949fcc1ccaf4abe48aab",
"assets/assets/ancientegypt/1.png": "ffb9e3e35cb5295af5f1d1dbcf7b3956",
"assets/assets/ancientegypt/2.png": "3d3504f8d24e189a297a525daa54b35a",
"assets/assets/ancientegypt/3.png": "6583609d6024988e90bd93f6c93b23b5",
"assets/assets/ancientegypt/4.png": "f219dad7df7268b80d53f4094c5af000",
"assets/assets/ancientegypt/5.png": "86318a13f92328e40035c5f54fad95b8",
"assets/assets/ancientegypt/6.png": "e5e57de129f5ffe43a57951ba9001ca3",
"assets/assets/ancientegypt.png": "d3a811f65f200018eb395d04687fd48f",
"assets/assets/apple.png": "57949683506bfda34aa4307f11a9027b",
"assets/assets/flutter_hero.png": "bb5bc4559c240c673c845e8c2f1cdb36",
"assets/assets/google.png": "0a248f0ea6c7c134b93734de2a28320a",
"assets/assets/halaashraqaty/1.png": "b1031e80b3e9e57683311c0638b2a3b7",
"assets/assets/halaashraqaty/2.png": "529e6e31159c2088c038f0d9b547965b",
"assets/assets/halaashraqaty/3.png": "b638f896c7c446183e01052a13d7e3aa",
"assets/assets/halaashraqaty/4.png": "1e35e5a2dd7ddc0dc588fd22039442fb",
"assets/assets/halaashraqaty.png": "8ca233f082a7d92ee41d59411c7f6cca",
"assets/assets/icon/github-svgrepo-com.svg": "0903488c84805bcf9ba2043594693d8f",
"assets/assets/icon/linkedin-svgrepo-com.svg": "99c52537416851538287c8db705a0cbf",
"assets/assets/icon/whatsapp-svgrepo-com%2520(1).svg": "9b1db846caeb85b156b70b3373fe4ac2",
"assets/assets/newlogo.png": "da8388bc8d9f5069250c61fa14e27c0f",
"assets/assets/newlogo2.png": "ca5d64922b717deb5a46ea5e8ad2620d",
"assets/assets/pngo/1.png": "710fab8983ca48d8dc46612fcf69c443",
"assets/assets/pngo/2.png": "8920fc926f6d44461cf9a7d13602f85b",
"assets/assets/pngo/3.png": "73013a51e457a1fea15b2e9f77d3aa93",
"assets/assets/pngo/4.png": "83fed183c2affb957e9eb79c5b9b53f2",
"assets/assets/pngo/cover.png": "2aff0ec0216e604e474f95f1d71001a4",
"assets/assets/postersy.jpg": "d9ac7562e5485089c719fb3b1bc94980",
"assets/assets/q8nitro/1.png": "30cb6fe0046e1b1d47ce241f3883e2bb",
"assets/assets/q8nitro/2.png": "32d1fbc69bcfbf644da9086c65225d6c",
"assets/assets/q8nitro/3.png": "efd97c9975cf848d5df5008f3bf7e5c4",
"assets/assets/q8nitro/4.png": "734894d09f820926cacae31f1b260d8d",
"assets/assets/qnitro.png": "45d41d9dcf21cebbd8bd20641993ed29",
"assets/assets/sooqalsayarat/1.png": "e764acc116586b96dd8412d4028739ee",
"assets/assets/sooqalsayarat/2.png": "5dd0f31ce174e93a9f7f5a716a279e74",
"assets/assets/sooqalsayarat/3.png": "e939d681f7e862b36f559aebbd19c83e",
"assets/assets/sooqalsayarat/cover.jpg": "7795601767f0555750885bae4788a132",
"assets/assets/sytoursim/1.png": "d7c1728819c48c31ed753406aa57dc4d",
"assets/assets/sytoursim/2.png": "a412e6f2e1974f7c3e34ff9fadfca687",
"assets/assets/sytoursim/3.png": "c722997b135cf317682eca0bde24ceb2",
"assets/assets/sytoursim/4.png": "f4cc82b59715e1e5aff0441e4243cc6c",
"assets/assets/tolba.png": "95fc34573f43ada8ebf3251b5491534c",
"assets/assets/txi/1.webp": "168f07847e9984e5d8f3d902e4882bb8",
"assets/assets/txi/2.webp": "48b5f8781a5aa0f554b6551fb5b2aa92",
"assets/assets/txi/3.webp": "71e5b1b8d8762428ef709066b409ba11",
"assets/assets/txi/cover.png": "86bc864b05da82f37d98788bb2428643",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "416420d034b02b7eb839ec01613b6afc",
"assets/google.png": "0a248f0ea6c7c134b93734de2a28320a",
"assets/halaashraqaty/1.png": "b1031e80b3e9e57683311c0638b2a3b7",
"assets/halaashraqaty/2.png": "529e6e31159c2088c038f0d9b547965b",
"assets/halaashraqaty/3.png": "b638f896c7c446183e01052a13d7e3aa",
"assets/halaashraqaty/4.png": "1e35e5a2dd7ddc0dc588fd22039442fb",
"assets/halaashraqaty.png": "8ca233f082a7d92ee41d59411c7f6cca",
"assets/newlogo.png": "da8388bc8d9f5069250c61fa14e27c0f",
"assets/newlogo2.png": "ca5d64922b717deb5a46ea5e8ad2620d",
"assets/NOTICES": "a9ac3b3aefaedba3dc3a05753faab22e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/postersy.jpg": "d9ac7562e5485089c719fb3b1bc94980",
"assets/q8nitro/1.png": "30cb6fe0046e1b1d47ce241f3883e2bb",
"assets/q8nitro/2.png": "32d1fbc69bcfbf644da9086c65225d6c",
"assets/q8nitro/3.png": "efd97c9975cf848d5df5008f3bf7e5c4",
"assets/q8nitro/4.png": "734894d09f820926cacae31f1b260d8d",
"assets/qnitro.png": "45d41d9dcf21cebbd8bd20641993ed29",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/sytoursim/1.png": "d7c1728819c48c31ed753406aa57dc4d",
"assets/sytoursim/2.png": "a412e6f2e1974f7c3e34ff9fadfca687",
"assets/sytoursim/3.png": "c722997b135cf317682eca0bde24ceb2",
"assets/sytoursim/4.png": "f4cc82b59715e1e5aff0441e4243cc6c",
"assets/tolba.png": "95fc34573f43ada8ebf3251b5491534c",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "0374b04f2124251578782842cf8cce76",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8c297a6e4e14f4c5da6a5b44c55b6910",
"/": "8c297a6e4e14f4c5da6a5b44c55b6910",
"main.dart.js": "72bf0b45f49dbad4d2b5135cfdbc5d6d",
"manifest.json": "371a9fe25ba7263711edc56e0faef769",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
