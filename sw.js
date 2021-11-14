importScripts('/js/sw-utils.js');


const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';
const INMUTABLE_CACHE = 'inmutable-v1';

const APP_SHELL = [
    '/',
    'index.html',
    'css/main.css',
    'favicon.ico',
    'img/flutter.svg',
    'img/fondo.svg',
    'img/ionic.svg',
    'img/Logo-fondo-Y.jpg',
    'img/logo.svg',
    'img/microsoft_logo_icon_147261.svg',
    'img/mongo.svg',
    'img/mysql.svg',
    'img/remember.jpeg',
    'img/sc_1.webp',
    'img/sc_2.webp',
    'img/sc_3.webp',
    'img/sistemaclientes.webp',
    'img/teleimm_1.webp',
    'img/teleimm_2.webp',
    'img/teleimm_3.webp',
    'img/teleimm_4.webp',
    'img/teleimm.webp',
    'img/yael.webp',
    'img/splash/apple-splash-2048-2732.jpg',
    'img/splash/apple-splash-2732-2048.jpg',
    'img/splash/apple-splash-1668-2388.jpg',
    'img/splash/apple-splash-2388-1668.jpg',
    'img/splash/apple-splash-1536-2048.jpg',
    'img/splash/apple-splash-2048-1536.jpg',
    'img/splash/apple-splash-1668-2224.jpg',
    'img/splash/apple-splash-2224-1668.jpg',
    'img/splash/apple-splash-1620-2160.jpg',
    'img/splash/apple-splash-2160-1620.jpg',
    'img/splash/apple-splash-1284-2778.jpg',
    'img/splash/apple-splash-2778-1284.jpg',
    'img/splash/apple-splash-1170-2532.jpg',
    'img/splash/apple-splash-2532-1170.jpg',
    'img/splash/apple-splash-1125-2436.jpg',
    'img/splash/apple-splash-2436-1125.jpg',
    'img/splash/apple-splash-1242-2688.jpg',
    'img/splash/apple-splash-2688-1242.jpg',
    'img/splash/apple-splash-828-1792.jpg',
    'img/splash/apple-splash-1792-828.jpg',
    'img/splash/apple-splash-1242-2208.jpg',
    'img/splash/apple-splash-2208-1242.jpg',
    'img/splash/apple-splash-750-1334.jpg',
    'img/splash/apple-splash-1334-750.jpg',
    'img/splash/apple-splash-640-1136.jpg',
    'img/splash/apple-splash-1136-640.jpg',
    'js/app.js',
    '/js/sw-utils.js'
];

const APP_SHELL_INMUTABLE = [
    'https://unpkg.com/swiper@7/swiper-bundle.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css',
    'https://use.fontawesome.com/releases/v5.15.2/css/all.css',
    'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
    'https://unpkg.com/aos@2.3.1/dist/aos.css',
    'https://www.googletagmanager.com/gtag/js?id=G-MHXVEV4G5W',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js',
    'https://unpkg.com/swiper@7/swiper-bundle.min.js',
    'https://unpkg.com/aos@2.3.1/dist/aos.js'
];

self.addEventListener('install', e => {
    const cacheStatic = caches.open(STATIC_CACHE)
        .then(cache => cache.addAll(APP_SHELL));
    const cacheInmutable = caches.open(INMUTABLE_CACHE)
        .then(cache => cache.addAll(APP_SHELL_INMUTABLE));

    e.waitUntil(Promise.all([cacheStatic, cacheInmutable]));
});

self.addEventListener('activate', e => {
    const respuesta = caches.keys().then(keys => {
        keys.forEach(key => {
            if (key !== STATIC_CACHE && key.includes('static')) {
                return caches.delete(key);
            }
        });
    });
    e.waitUntil(respuesta);
});

self.addEventListener('fetch', e => {
    const respuesta = caches.match(e.request).then(resp => {
        if (resp) {
            return resp;
        } else {
            return fetch(e.request).then(newRes => updateCacheDynamic(DYNAMIC_CACHE, e.request, newRes));
        }
    });
    e.respondWith(respuesta);
});