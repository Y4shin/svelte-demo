const l = [
  "/_app/immutable/start-4e850401.js",
  "/_app/immutable/components/pages/_layout.svelte-aea72546.js",
  "/_app/immutable/assets/+layout-c11c380d.css",
  "/_app/immutable/assets/IconBase-6bf551a2.css",
  "/_app/immutable/components/pages/_error.svelte-b3027b42.js",
  "/_app/immutable/components/pages/_page.svelte-21c83546.js",
  "/_app/immutable/components/pages/bundles/_page.svelte-961904aa.js",
  "/_app/immutable/components/pages/course/_page.svelte-76ebbd80.js",
  "/_app/immutable/components/pages/course/_courseslug_/_page.svelte-e134fd5d.js",
  "/_app/immutable/components/pages/course/_courseslug_/feedback/_page.svelte-a01b9726.js",
  "/_app/immutable/components/pages/course/_courseslug_/lesson/_lessonslug_/_page.svelte-f90d718b.js",
  "/_app/immutable/components/pages/course/_courseslug_/lesson/_lessonslug_/task/_page.svelte-381b61c2.js",
  "/_app/immutable/components/pages/settings/_page.svelte-a753fd10.js",
  "/_app/immutable/assets/+page-1ec7840a.css",
  "/_app/immutable/modules/pages/course/_courseslug_/_page.ts-2726eeed.js",
  "/_app/immutable/modules/pages/course/_courseslug_/feedback/_page.ts-78f09518.js",
  "/_app/immutable/modules/pages/course/_courseslug_/lesson/_page.ts-ced84b25.js",
  "/_app/immutable/modules/pages/course/_courseslug_/lesson/_lessonslug_/_page.ts-940b25fe.js",
  "/_app/immutable/modules/pages/course/_courseslug_/lesson/_lessonslug_/task/_page.ts-3c31742c.js",
  "/_app/immutable/chunks/singletons-c849329b.js",
  "/_app/immutable/chunks/index-e0c3bc23.js",
  "/_app/immutable/chunks/index-297b380d.js",
  "/_app/immutable/chunks/fetchDisplayData-f56c65a2.js",
  "/_app/immutable/chunks/stores-fc531b9e.js",
  "/_app/immutable/chunks/settingsStores-10c46511.js",
  "/_app/immutable/chunks/index-ceed3e71.js",
  "/_app/immutable/chunks/MediaQuery-f7237b28.js",
  "/_app/immutable/chunks/db-62561612.js",
  "/_app/immutable/chunks/IconBase-a7e75a12.js",
  "/_app/immutable/chunks/notification-6b496d13.js",
  "/_app/immutable/chunks/stores-bff6bc57.js",
  "/_app/immutable/chunks/errorpage-d41fb4bf.js",
  "/_app/immutable/chunks/sidemargincontainer-3e06a851.js",
  "/_app/immutable/chunks/dndmathfraction.svelte_svelte_type_style_lang-90be0157.js",
  "/_app/immutable/assets/dndmathfraction-b61b89bf.css",
  "/_app/immutable/chunks/modal-01a6fc60.js",
  "/_app/immutable/chunks/badge-c3db7b9d.js",
  "/_app/immutable/chunks/next-79a9414b.js",
  "/_app/immutable/chunks/IoIosWarning-fa21cdef.js",
  "/_app/immutable/chunks/_page-d47c09e7.js",
  "/_app/immutable/chunks/_page-6568bec4.js",
  "/_app/immutable/chunks/_page-b9f42b6f.js",
  "/_app/immutable/chunks/_page-573a8806.js",
  "/_app/immutable/chunks/_page-53466d4d.js",
  "/_app/immutable/chunks/0-0b2d8bea.js",
  "/_app/immutable/chunks/1-312fe9cc.js",
  "/_app/immutable/chunks/2-6cf80e78.js",
  "/_app/immutable/chunks/3-0bd9fb1a.js",
  "/_app/immutable/chunks/4-5f5fc145.js",
  "/_app/immutable/chunks/5-491b6b13.js",
  "/_app/immutable/chunks/6-b348d972.js",
  "/_app/immutable/chunks/7-0b28f1d6.js",
  "/_app/immutable/chunks/8-f730886d.js",
  "/_app/immutable/chunks/9-f843713d.js",
  "/_app/immutable/chunks/10-a5062858.js"
], o = [
  "/favicon.png",
  "/logo.png",
  "/manifest.json",
  "/maskable_x128.png",
  "/maskable_x192.png",
  "/maskable_x384.png",
  "/maskable_x48.png",
  "/maskable_x512.png",
  "/maskable_x72.png",
  "/maskable_x96.png"
], n = "1663581992172", t = self, u = `cache${n}`, i = l.concat(o), _ = new Set(i);
t.addEventListener("install", (s) => {
  s.waitUntil(
    caches.open(u).then(() => {
      t.skipWaiting();
    })
  );
});
t.addEventListener("activate", (s) => {
  s.waitUntil(
    caches.keys().then(async (e) => {
      for (const a of e)
        a !== u && await caches.delete(a);
      t.clients.claim();
    })
  );
});
async function b(s) {
  const e = await caches.open(`offline${n}`);
  try {
    return await fetch(s);
  } catch (a) {
    const p = await e.match(s);
    if (p)
      return p;
    throw a;
  }
}
t.addEventListener("fetch", (s) => {
  if (s.request.method !== "GET" || s.request.headers.has("range"))
    return;
  const e = new URL(s.request.url), a = e.protocol.startsWith("http"), p = e.hostname === self.location.hostname && e.port !== self.location.port, c = e.host === self.location.host && _.has(e.pathname), m = s.request.cache === "only-if-cached" && !c;
  a && !p && !m && s.respondWith(
    (async () => c && await caches.match(s.request) || b(s.request))()
  );
});
