const build = [
  "/_app/immutable/start-59f7dc64.js",
  "/_app/immutable/pages/__layout.svelte-671ed3aa.js",
  "/_app/immutable/assets/pages/__layout.svelte-04331eaf.css",
  "/_app/immutable/pages/__error.svelte-08a5fd12.js",
  "/_app/immutable/pages/courses/_course_/_lesson_/_unit_/index.svelte-4251d036.js",
  "/_app/immutable/pages/courses/_course_/_lesson_/index.svelte-dabf3178.js",
  "/_app/immutable/pages/courses/_course_/index.svelte-8eb8f343.js",
  "/_app/immutable/pages/courses/index.svelte-16664bce.js",
  "/_app/immutable/pages/index.svelte-9b988bf3.js",
  "/_app/immutable/chunks/index-e6526577.js",
  "/_app/immutable/chunks/index-d453eed2.js",
  "/_app/immutable/chunks/study-18a6761e.js",
  "/_app/immutable/chunks/stores-b9983159.js",
  "/_app/immutable/chunks/IconBase-bf2e29b1.js",
  "/_app/immutable/assets/IconBase-89f34d78.css",
  "/_app/immutable/chunks/box-486b9bbe.js",
  "/_app/immutable/chunks/MdChevronRight-308e1b78.js"
];
const files = [
  "/dei.png",
  "/favicon.png",
  "/manifest.json",
  "/maskable_icon_x128.png",
  "/maskable_icon_x192.png",
  "/maskable_icon_x384.png",
  "/maskable_icon_x48.png",
  "/maskable_icon_x512.png",
  "/maskable_icon_x72.png",
  "/maskable_icon_x96.png"
];
const version = "1658747253731";
class H5PContent {
  constructor(src, frameborder, allowfullscreen, allow, title) {
    this.src = src;
    this.frameborder = frameborder;
    this.allowfullscreen = allowfullscreen;
    this.allow = allow;
    this.title = title;
  }
}
class LessonUnit {
  constructor(route, title, description, content) {
    this.route = route;
    this.title = title;
    this.description = description;
    this.content = content;
  }
}
class CourseLesson {
  constructor(route, title, description, units) {
    this.route = route;
    this.title = title;
    this.description = description;
    this.units = units;
  }
}
class Course {
  constructor(route, name, description, lessons) {
    this.name = name;
    this.description = description;
    this.route = route;
    this.lessons = lessons;
  }
}
const courses = [
  new Course("study", "Studie", "Dies ist der Kurs f\xFCr die Studie.", [
    new CourseLesson("1", "Elementare Rechentechniken", "In dieser Lektion kannst du dein K\xF6nnen \xFCber Elementare Rechentechniken pr\xFCfen.", [
      new LessonUnit("1", "Klammerrechnung", "Diese Lerneinheit befasst sich mit elementaren Termumformungen. Hier wird sich auf Klammerumformungen beschr\xE4nkt.", new H5PContent("https://h5p.org/h5p/embed/1275587", "0", "allowfullscreen", "geolocation *; microphone *; camera *; midi *; encrypted-media *", "Klammerumformungen")),
      new LessonUnit("2", "Bruchrechnung", "Diese Lerneinheit erweitert die Klammerrechnung um die Bruchrechnung und wie Bruchterme umgeformt werden k\xF6nnen.", new H5PContent("https://h5p.org/h5p/embed/1275717", "0", "allowfullscreen", "geolocation *; microphone *; camera *; midi *; encrypted-media *", "Bruchrechnung")),
      new LessonUnit("3", "Binomische Formeln", "Diese Lerneinheit erweitert die Bruch- und Klammerrechnung um die Binomischen Formelun und wie diese in beide Richtungen angewendet werden.", new H5PContent("https://h5p.org/h5p/embed/1275718", "0", "allowfullscreen", "geolocation *; microphone *; camera *; midi *; encrypted-media *", "Binomische Formeln")),
      new LessonUnit("4", "Polynomdivision", "Diese Lerneinheit befasst sich mit der Polynomdivision, der \xC4hnlichkeit zur schriftlichen Division und wie Polynomdivision funktioniert.", new H5PContent("https://h5p.org/h5p/embed/1275728", "0", "allowfullscreen", "geolocation *; microphone *; camera *; midi *; encrypted-media *", "Polynomdivision")),
      new LessonUnit("5", "Exponentialrechnung", "Diese Lerneinheit befasst sich mit der Exponentialrechnung, sowie der Wurzel- und Logarithmusrechnung. Hierbei wird auch auf die Umformungsregeln der Exponential-, Wurzel- und Logarithmusrechnung eingegangen.", new H5PContent("https://h5p.org/h5p/embed/1275749", "0", "allowfullscreen", "geolocation *; microphone *; camera *; midi *; encrypted-media *", "Exponentialrechnung")),
      new LessonUnit("6", "(Un-)Gleichungen", "Diese Lerneinheit befasst sich mit Gleichungen und Ungleichungen und wie diese umgeformt werden k\xF6nnen.", new H5PContent("https://h5p.org/h5p/embed/1276504", "0", "allowfullscreen", "geolocation *; microphone *; camera *; midi *; encrypted-media *", "(Un-)Gleichungen"))
    ])
  ])
];
const worker = self;
const STATIC_CACHE_NAME = `cache${version}`;
const APP_CACHE_NAME = `offline${version}`;
const coursesRoutes = courses.map((c) => `/courses/${c.route}`);
const lessonsRoutes = courses.flatMap((c) => c.lessons.map((l) => `/courses/${c.route}/${l.route}`));
const unitsRoutes = courses.flatMap((c) => c.lessons.flatMap((l) => l.units.map((u) => `/courses/${c.route}/${l.route}/${u.route}`)));
const routes = ["/", "/courses"].concat(coursesRoutes).concat(lessonsRoutes).concat(unitsRoutes);
const customAssets = [];
const addDomain = (assets) => assets.map((f) => self.location.origin + f);
const ourAssets = addDomain([
  ...files.filter((f) => !/\/icons\/(apple.*?|original.png)/.test(f)),
  ...build,
  ...routes
]);
const toCache = [...ourAssets, ...customAssets];
const staticAssets = new Set(toCache);
worker.addEventListener("install", (event) => {
  event.waitUntil(caches.open(STATIC_CACHE_NAME).then((cache) => {
    return cache.addAll(toCache);
  }).then(() => {
    worker.skipWaiting();
  }));
});
worker.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then(async (keys) => {
    for (const key of keys) {
      if (key !== STATIC_CACHE_NAME && key !== APP_CACHE_NAME) {
        await caches.delete(key);
      }
    }
    worker.clients.claim();
  }));
});
async function fetchAndCache(request) {
  const cache = await caches.open(APP_CACHE_NAME);
  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (err) {
    const response = await cache.match(request);
    if (response) {
      return response;
    }
    throw err;
  }
}
worker.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || event.request.headers.has("range")) {
    return;
  }
  const url = new URL(event.request.url);
  const isHttp = url.protocol.startsWith("http");
  const isDevServerRequest = url.hostname === self.location.hostname && url.port !== self.location.port;
  const isStaticAsset = staticAssets.has(url.href);
  const skipBecauseUncached = event.request.cache === "only-if-cached" && !isStaticAsset;
  if (isHttp && !isDevServerRequest && !skipBecauseUncached) {
    event.respondWith((async () => {
      const cachedAsset = isStaticAsset && await caches.match(event.request);
      return cachedAsset || fetchAndCache(event.request);
    })());
  }
});
