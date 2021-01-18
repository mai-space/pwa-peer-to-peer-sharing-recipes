importScripts("/precache-manifest.7bfc3294a319ee6b7fe2f1bf2777cb54.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.setConfig({
  debug: true
});

workbox.core.setCacheNameDetails({prefix: "meinkochbuch"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(
  /^https:\/\/netdna\.bootstrapcdn\.com\/font-awesome\/4\.7\.0\//,
  new workbox.strategies.CacheFirst({
      cacheName: 'fontawesome-fonts-stylesheets',
      plugins: [
          new workbox.expiration.Plugin({
              maxEntries: 30,
          }),
          new workbox.cacheableResponse.Plugin({
              statuses: [0, 200]
          })
      ]
  }),
);

workbox.routing.registerRoute(
  new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
  workbox.strategies.cacheFirst({
      cacheName: 'google-fonts',
      plugins: [
          new workbox.expiration.Plugin({
              maxEntries: 30,
          }),
          new workbox.cacheableResponse.Plugin({
              statuses: [0, 200]
          })
      ],
  }),
);

