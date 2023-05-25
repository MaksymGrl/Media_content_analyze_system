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
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a3a899e08393ee315e009b76443a8e8b"
  },
  {
    "url": "assets/css/0.styles.0b9c2ec7.css",
    "revision": "162a75e67e73b78fb562147d903ac12a"
  },
  {
    "url": "assets/img/EER.cd964397.png",
    "revision": "cd9643976ab135b6d3980a71eb518720"
  },
  {
    "url": "assets/img/insert1.3abb6e43.png",
    "revision": "3abb6e43e735403659ceb8cf2267ce18"
  },
  {
    "url": "assets/img/insert2.79c084e4.png",
    "revision": "79c084e44fa5672e33ccf25e57581306"
  },
  {
    "url": "assets/img/login1.a7f5f782.png",
    "revision": "a7f5f782fe7bf053b6b5eea9da5e6c85"
  },
  {
    "url": "assets/img/login2.e21418e0.png",
    "revision": "e21418e0aad82e2c1d32a0db42246896"
  },
  {
    "url": "assets/img/login3.193400ef.png",
    "revision": "193400ef1489d0bf1d4e71d231dbad81"
  },
  {
    "url": "assets/img/meta1.4c51e4b8.png",
    "revision": "4c51e4b87fd5a3df59823c7cf464b0d8"
  },
  {
    "url": "assets/img/meta2.bf7a4cbb.png",
    "revision": "bf7a4cbb056b7a322f82ced1acc88c93"
  },
  {
    "url": "assets/img/meta3.3a6ecad7.png",
    "revision": "3a6ecad7f2313e672a9b592401a4b3dd"
  },
  {
    "url": "assets/img/meta4.73a9f4cd.png",
    "revision": "73a9f4cdd1b22c7fee198da6b156ad7e"
  },
  {
    "url": "assets/img/meta5.208589c8.png",
    "revision": "208589c8087804b8f4ca33040fd7ba46"
  },
  {
    "url": "assets/img/register1.52080d01.png",
    "revision": "52080d0151cfcbd02bf9d8b8c169b61b"
  },
  {
    "url": "assets/img/register2.afed2aa1.png",
    "revision": "afed2aa1bb807d6c3af37f2707211312"
  },
  {
    "url": "assets/img/register3.e19c538b.png",
    "revision": "e19c538b75eb67ffb96509197b7fb8b5"
  },
  {
    "url": "assets/img/register5.27ab9c59.png",
    "revision": "27ab9c59440a5939ba72b0f6488d231d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c0c923c8.js",
    "revision": "b2206388abeb4bf30c2cb8b04c13313d"
  },
  {
    "url": "assets/js/11.178a1039.js",
    "revision": "5f8b617f2c68af63991a839fe4c92b21"
  },
  {
    "url": "assets/js/12.376fa65e.js",
    "revision": "84b2a4b0c62971317b7967c5d6983452"
  },
  {
    "url": "assets/js/13.5e45632c.js",
    "revision": "f0cb131290d75c7d75d8ea03d5ac9b94"
  },
  {
    "url": "assets/js/14.48c56413.js",
    "revision": "c83349b6cb843d3c209d67b878fdcca4"
  },
  {
    "url": "assets/js/15.ec781f32.js",
    "revision": "ae4fe2c46fd021ba7f8d9d571b0745fa"
  },
  {
    "url": "assets/js/16.1431c89f.js",
    "revision": "388700e8404552a6c26b31be2d387c61"
  },
  {
    "url": "assets/js/17.b341393f.js",
    "revision": "0710a07acf534e48a5b975c687de63e4"
  },
  {
    "url": "assets/js/18.51e08a2f.js",
    "revision": "3f3503209dd00b9bf31bde5e1dfac154"
  },
  {
    "url": "assets/js/19.3222594f.js",
    "revision": "14cf134f303ef75a3d1aa7550faaac29"
  },
  {
    "url": "assets/js/2.7fe11fb6.js",
    "revision": "7cc14d779a8fd040d0a9db1bd024de1b"
  },
  {
    "url": "assets/js/20.9ff46ac9.js",
    "revision": "4d83f421a7f9272d850afa483e05747a"
  },
  {
    "url": "assets/js/21.d7cf81a7.js",
    "revision": "b7acc1905ba788bf9f3d53e6601c0d01"
  },
  {
    "url": "assets/js/22.4d042e96.js",
    "revision": "3fa136928a26f4529d4889e5f6fd27b6"
  },
  {
    "url": "assets/js/23.36dd0921.js",
    "revision": "4d5b12b9b427768853f5d05617c5b1b9"
  },
  {
    "url": "assets/js/24.97b9bd5a.js",
    "revision": "af47020b020c54c2af174885f3b13f53"
  },
  {
    "url": "assets/js/26.d4420a7c.js",
    "revision": "1e186a7439ba927e6e7f5b83eacb8afe"
  },
  {
    "url": "assets/js/3.c214fb88.js",
    "revision": "81f1a4f16fa7472443790fc2e2258ca5"
  },
  {
    "url": "assets/js/4.f4e3418f.js",
    "revision": "552a2580fd25b4140ef34bd0b282972c"
  },
  {
    "url": "assets/js/5.009de7c3.js",
    "revision": "dc584098e4f29321b75c07a9133a1bde"
  },
  {
    "url": "assets/js/6.8454de80.js",
    "revision": "330235d865342562f3d05c6458734136"
  },
  {
    "url": "assets/js/7.ff940653.js",
    "revision": "ebe7c21363568f0c5c3e9557ba8b3302"
  },
  {
    "url": "assets/js/8.7fa37b39.js",
    "revision": "116b0fa2a0e7b71e38b9cb4fe90d629c"
  },
  {
    "url": "assets/js/9.064b84aa.js",
    "revision": "09fb2259fcb3b4603a71226b7c15866d"
  },
  {
    "url": "assets/js/app.7e635f8c.js",
    "revision": "4993a8c7123d00f606418f4308535d70"
  },
  {
    "url": "conclusion/index.html",
    "revision": "0ff163857f4f112478ac6743d3ac0461"
  },
  {
    "url": "design/index.html",
    "revision": "7cd572df1b4a83f9723c0c6aac11e2c7"
  },
  {
    "url": "index.html",
    "revision": "7ec59afc77d6263762c20ba9d84e0b9e"
  },
  {
    "url": "intro/index.html",
    "revision": "bf1bd3688073532d8e99fff27cee1efe"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "554ec11df1b43cbd70d7e762f9f34838"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "741fd0ffd40e5781224e7d80e4b3952f"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "a551a5f69d9b7604c4e1232570acbfde"
  },
  {
    "url": "software/index.html",
    "revision": "4fd752cd4a6b592346794622bbf35cd8"
  },
  {
    "url": "test/index.html",
    "revision": "349bf51ffb0b8481abcdc48d31ffc96d"
  },
  {
    "url": "use cases/index.html",
    "revision": "f3f1b6c825351596c838878d59b9d9cb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
