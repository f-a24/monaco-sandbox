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
    "url": "0.index.js",
    "revision": "1898c3035cd088314d6a0fcbbd398e8a"
  },
  {
    "url": "10.index.js",
    "revision": "bd84699489ad3aa90f1e5b0c0517c6f6"
  },
  {
    "url": "11.index.js",
    "revision": "409b0555008202a701306c8abf4a0aa2"
  },
  {
    "url": "12.index.js",
    "revision": "0eec321bbb609911e73228fd0eba66d9"
  },
  {
    "url": "13.index.js",
    "revision": "fc285c5d0419d94b5c48b0669bea23d1"
  },
  {
    "url": "14.index.js",
    "revision": "e9fa648fdd601ab394abd59a38fe68f8"
  },
  {
    "url": "15.index.js",
    "revision": "6076f43547870b0a3925604141f3b83c"
  },
  {
    "url": "16.index.js",
    "revision": "2e08f64c4730d7abe1477a4ff1db0a68"
  },
  {
    "url": "17.index.js",
    "revision": "1f127e03295c72a75d9952e80c9fdba4"
  },
  {
    "url": "18.index.js",
    "revision": "1f4c35ff41582754739beed47c8e16cc"
  },
  {
    "url": "19.index.js",
    "revision": "c801d0f63ac11eefc223b42421769c30"
  },
  {
    "url": "2.index.js",
    "revision": "f7c91ebb89a3d274642a02e92a39a061"
  },
  {
    "url": "20.index.js",
    "revision": "f16461c0ecaaccf791764fca7fe6d2d7"
  },
  {
    "url": "21.index.js",
    "revision": "b3ba06b7aad7476c1e356596456cc4ad"
  },
  {
    "url": "22.index.js",
    "revision": "1ad3ce39ac80bbb349727aa5d21367e4"
  },
  {
    "url": "23.index.js",
    "revision": "9914f6e18d100c31fba8f10ffb2c488a"
  },
  {
    "url": "24.index.js",
    "revision": "8df334536b626d0a97e26d5d9ae72836"
  },
  {
    "url": "25.index.js",
    "revision": "7a8d21ef21a6433462fdeb3cf118025f"
  },
  {
    "url": "26.index.js",
    "revision": "dfb36f995cf1da3b90008ab6727aff0c"
  },
  {
    "url": "27.index.js",
    "revision": "7ad3eb8eff544f2b55fddbbbe875d001"
  },
  {
    "url": "28.index.js",
    "revision": "dcadfd9999c25bc1e647201f6688e3c0"
  },
  {
    "url": "29.index.js",
    "revision": "3a24c16284567716168b4c6149159269"
  },
  {
    "url": "3.index.js",
    "revision": "fe78357f208d57c1dc5f50d0beb9af0f"
  },
  {
    "url": "30.index.js",
    "revision": "a4a0cddb66e0c48e25b662949db38c73"
  },
  {
    "url": "31.index.js",
    "revision": "d692d2c96095dfa0215ca4e3b3356344"
  },
  {
    "url": "32.index.js",
    "revision": "a5c735a73e4932d3bbe8ef7713533019"
  },
  {
    "url": "33.index.js",
    "revision": "fb316d90db69108ed93b5b25e99998f5"
  },
  {
    "url": "34.index.js",
    "revision": "d8ad24aa3bf925c93e88a2ce9e2e8035"
  },
  {
    "url": "35.index.js",
    "revision": "dce33768b460eab9af1174cc91a42593"
  },
  {
    "url": "36.index.js",
    "revision": "589ecf7415074a273b012a74e7e162f3"
  },
  {
    "url": "37.index.js",
    "revision": "8bb9e2c97ecd839ba155ac019461a6f9"
  },
  {
    "url": "38.index.js",
    "revision": "bbd8d6a27d07be3f93827ba93b9bd19f"
  },
  {
    "url": "39.index.js",
    "revision": "3dea469a1c6a0ae803e34d15caf8b557"
  },
  {
    "url": "4.index.js",
    "revision": "a7ee0d7acb579d0e9182c74e28c34a2c"
  },
  {
    "url": "40.index.js",
    "revision": "f84b8ffa75a2c1b86bdf4bc8724b7df4"
  },
  {
    "url": "41.index.js",
    "revision": "3edabcd9d207ed70b39fa2f091549a23"
  },
  {
    "url": "42.index.js",
    "revision": "2aa3e2403aa4eaeccacb527ba86c52d2"
  },
  {
    "url": "43.index.js",
    "revision": "3d1aed83f5b0f65277581ece8ee012aa"
  },
  {
    "url": "44.index.js",
    "revision": "262181d073a1f6b31ec6c2b2a0adf318"
  },
  {
    "url": "45.index.js",
    "revision": "e6f2144981ddb831404efc79c86851be"
  },
  {
    "url": "46.index.js",
    "revision": "bbc4710da80acc6f6aaabdf9cfbd99b5"
  },
  {
    "url": "47.index.js",
    "revision": "431fd45247c6b2ab786a4bced780189f"
  },
  {
    "url": "48.index.js",
    "revision": "33f2b08a25586ea716cf84818b26bc41"
  },
  {
    "url": "49.index.js",
    "revision": "c20dcfbe05d0f88e2c4965ed71a093cb"
  },
  {
    "url": "5.index.js",
    "revision": "565886827547c4d84d5f6b69e6483069"
  },
  {
    "url": "50.index.js",
    "revision": "9d334ebf8640c09d09ef17e6c68b4542"
  },
  {
    "url": "51.index.js",
    "revision": "9e31a801780ee81ffb93c49020e8a0a8"
  },
  {
    "url": "52.index.js",
    "revision": "b8ccc28ca39071c45356f5f7e4a9feab"
  },
  {
    "url": "53.index.js",
    "revision": "ed901d6f01f4901dd15b7cb1e93bb938"
  },
  {
    "url": "54.index.js",
    "revision": "39153265b11f9ae5530f30e161fa0a6e"
  },
  {
    "url": "55.index.js",
    "revision": "30d14dd108b2ad0dafe0312facd45c9b"
  },
  {
    "url": "56.index.js",
    "revision": "011774e56691201589bb3999092b512e"
  },
  {
    "url": "57.index.js",
    "revision": "2cb3367a6809a398ae465badcaab2848"
  },
  {
    "url": "6.index.js",
    "revision": "81b0ae7f52aa55eb131e85bf332db25e"
  },
  {
    "url": "7.index.js",
    "revision": "2907b77b54890778231355d512bb9210"
  },
  {
    "url": "8.index.js",
    "revision": "41d38f21a017a403e7e660f691c72737"
  },
  {
    "url": "9.index.js",
    "revision": "088644e5ef6d50fe2e850873f9600611"
  },
  {
    "url": "css.worker.js",
    "revision": "32378147ffb56122b9604fd350799998"
  },
  {
    "url": "editor.worker.js",
    "revision": "b6a41f9e2aa7d17cc6c84af62b3dc040"
  },
  {
    "url": "favicon.ico",
    "revision": "5307c13f6dac2771e807c895c78947d8"
  },
  {
    "url": "html.worker.js",
    "revision": "950e288541dd1259b70d89a156da8bab"
  },
  {
    "url": "icon-144.png",
    "revision": "930a061d528636a1269ed8aa12b7259e"
  },
  {
    "url": "icon-192.png",
    "revision": "551b0f77c255b1dbc85a3928d49e13f7"
  },
  {
    "url": "icon-36.png",
    "revision": "450af1f343566373d949b3341d407e0d"
  },
  {
    "url": "icon-48.png",
    "revision": "0c2cfe8950fbda15dfeb55fed08eb94d"
  },
  {
    "url": "icon-512.png",
    "revision": "0f995aa36940fa0c5df4e109276a6530"
  },
  {
    "url": "icon-72.png",
    "revision": "bb13758c95034469aa7baf5a38329c27"
  },
  {
    "url": "icon-96.png",
    "revision": "b2591b9df3926987e0b2d55a4913de55"
  },
  {
    "url": "index.html",
    "revision": "7eabd48f4194367b12df846d1429c04d"
  },
  {
    "url": "json.worker.js",
    "revision": "604190879e18adaafd2afce017f75ae5"
  },
  {
    "url": "kurukuru.gif",
    "revision": "c4c321184995ead886c6007c2d15c633"
  },
  {
    "url": "style.css",
    "revision": "c25a4e3dd794d5e5c3d5255407df5c49"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
