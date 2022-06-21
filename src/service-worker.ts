/// <reference lib="webworker" />
/*


import  {build, files, prerendered, version } from "$service-worker";

const worker = (self as unknown) as ServiceWorkerGlobalScope;
const FILES = `cache${version}`;


const to_cache = build.concat(files);
const staticAssets = new Set(to_cache);

worker.addEventListener("install", (event) => {
    event.waitUntil(
        caches
            .open(FILES)
            .then((cache) => cache.addAll(to_cache))
            .then(() => {
                worker.skipWaiting();
            })
    );
});

worker.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then(async (keys) => {
            for (const key of keys) {
                if (key !== FILES) await caches.delete(key);
            }
            worker.clients.claim();
        })
    );
});

/**
 * Fetch the asset from the network and store it in the cache.
 * Fall back to the cache if the user is offline.
 */ /*
 async function fetchAndCache(request: Request) {
	const cache = await caches.open(`offline${version}`);

	try {
		const response = await fetch(request);
		cache.put(request, response.clone());
		return response;
	} catch (err) {
		const response = await cache.match(request);
		if (response) return response;

		throw err;
	}
}

worker.addEventListener('fetch', (event) => {
	if (event.request.method !== 'GET' || event.request.headers.has('range')) return;

	const url = new URL(event.request.url);

	// don't try to handle e.g. data: URIs
	const isHttp = url.protocol.startsWith('http');
	const isDevServerRequest =
		url.hostname === self.location.hostname && url.port !== self.location.port;
	const isStaticAsset = url.host === self.location.host && staticAssets.has(url.pathname);
	const skipBecauseUncached = event.request.cache === 'only-if-cached' && !isStaticAsset;

	if (isHttp && !isDevServerRequest && !skipBecauseUncached) {
		event.respondWith(
			(async () => {
				// always serve static files and bundler-generated assets from cache.
				// if your application has other URLs with data that will never change,
				// set this variable to true for them and they will only be fetched once.
				const cachedAsset = isStaticAsset && (await caches.match(event.request));

				return cachedAsset || fetchAndCache(event.request);
			})()
		);
	}
});*/

import { build, files, version } from '$service-worker';

const worker = self as unknown as ServiceWorkerGlobalScope;
const CACHE_NAME = `A;static-cache-${version}`;

const to_cache = build.concat(files).concat([
    '/index.html',
    '/courses.html',
]);

worker.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Install');

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Pre-caching offline page');
      return cache.addAll(to_cache).then(() => {
        worker.skipWaiting();
      });
    })
  );
});

worker.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activate');
  // Remove previous cached data from disk
  event.waitUntil(
    caches.keys().then(async (keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache', key);
            return caches.delete(key);
          }
        })
      )
    )
  );
  worker.clients.claim();
});

self.addEventListener('fetch', (event) => {
  console.log('[ServiceWorker] Fetch', event.request.url);
  if (event.request.mode !== 'navigate') {
    return;
  }
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match('offline.html');
      });
    })
  );
});
