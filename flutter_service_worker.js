'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "196078b1ae002ef01cee9a80102e62f7",
".git/config": "7b32d1a95fe42c2a2b178ed0e3c0988f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5c8f254fe0fc9bd4040098505a415f9c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "52780213adfb6bddaefdab270cff604f",
".git/logs/refs/heads/main": "8d0dd8142d754026dac3f4c7810f8cfb",
".git/logs/refs/remotes/origin/main": "c52c04bb30e9c5a028e0b9a069473089",
".git/objects/0b/805e227564467fb9f2a8d11b86e995072640d3": "2ff6b3cf32097a0bfc48e0b9f83671b3",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0f/6b44fe94c6b5a67b883dbf88c514c4cf05cde0": "bf4616162763627020068a0be6100d27",
".git/objects/13/02a88bfb13506933029932080ca7b0c0b84609": "8a2f1c3b0fe5e11847cbb00b85d3dd7c",
".git/objects/13/748c59b497b72a0d957e57e257a2a008cefb0c": "5c70ace18168fd1dfbe53f5170337bf9",
".git/objects/14/57fd6bc42e87904c0a93cf98d419f9c14a7ae9": "219d2b6c4d35bec024f73225ecb00027",
".git/objects/15/775dfb97cf5c9ea8773bcf8d9774d822b54b83": "a3518e3b8964589e243c099021f0657c",
".git/objects/17/4da2df7e9bd7f23a324f407718b05930cf2d64": "8a4393a49379a7fb1ec616362767ef7d",
".git/objects/18/19c93b108a2df19824f18a1b4659051f539819": "536ba743bb1a41182abf95144842bdc9",
".git/objects/1d/54834ce85f9e3ea0b0299e3a7ac23bd3c94c74": "047558030ca28aa9c522e0ce21f40be4",
".git/objects/21/e8253d150f62293994c42083b73856ac2296d6": "0fbf78fc2efd46abaccef2f4d69a4397",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/27/7e4d09eecca0a30c06b00fa5f427c8dde4bb5e": "5b826f15040ecc5b2ff7b2827fbf2420",
".git/objects/28/228bd5d6abf8cf5d8af6ab37c89332c62578d6": "dff99872ec4ce92cf110032bb6ff93fd",
".git/objects/2b/f23c7d31f838086d998503c15a9e0275578280": "bd9637372f748aaea0f3aac2a3adb46b",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/33/8601c2242369f8edb3ed4ecf928b84c108e11e": "d7ad4a5746021a61572c12597a159fcb",
".git/objects/3e/2ea65d17c4eee8687df89f1299c1afefef5bd3": "f97090334da51ac0effe0ebc597e9a78",
".git/objects/40/e3a024bb335662e93b71aa334f9487949a2d41": "08ec69e520d0563440f9f1a3e9a52a02",
".git/objects/45/4080c123616083f13b5920008a1a80a294d51e": "bcbab284b17b334e04a3b1f57aa61f0f",
".git/objects/48/7d4fc2866f99973385a74af5f07c5af53de903": "b1e3844fd9fae44dd1c477426f03ce32",
".git/objects/4b/76c50bdb5cba3eeddf232aac21341b8876e3bd": "b9519f300e89fe866ffc8f7d6416b2be",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/54/28c9c6dd788af7e626be91d6986d07cf6ae1b6": "054c49471d86b61bf98b92587c38cb8f",
".git/objects/56/8bcfdeb6cd074de42adee069d118a782029e67": "b8335f5e549cbeec4eb8ab8bb1ed1efc",
".git/objects/62/be7dc26ec5d1e951a732b4cd8c1e28d9e0ef89": "7031842244e8c538361f8b693beb2b5f",
".git/objects/65/55ffba4f876929542d02ddc8669cff4d422a71": "ff0016132729201bcc4e2cabe22ed167",
".git/objects/68/c92d4d984ca5cfbfa93bc3e7935406101a2eac": "b365ca30d298ec04f8868fb74527efa8",
".git/objects/6d/e54f7ff7ec380e01408afefad110e5afbc6064": "e2d6ad3c32fd5341f8fc2edbb5f72447",
".git/objects/6e/0fe51029060edf645eb74e7c3816653cd9cc50": "414cd6ed206bfb28d986f43cdb2c4583",
".git/objects/72/5e2e85fba7b788c07c715a5620e1297b88e6fb": "25538b92705556f47f34b378a94c6c15",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/73ea7b61025ce7677f0c57ecbaeaa8671f72db": "e5037806fe4a44ff9017867c38351fac",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/aa247a49f7d5f538a6fd4edbe3f11d60dd0d0c": "4e196f10dc11a4de8b3860c4b7cf5939",
".git/objects/7e/f337e8e9b9ccee90a8f3e9dac109218c206bb7": "2ec8bff72f7d2d9933330c5023594ace",
".git/objects/87/632314945512979b60651cfdf58ec1540d3150": "fa15ba70fa0b3b494baad2b3f3e72304",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/8f/6d5ccb8844be51642d02ba332aab070bb38232": "783d7be7d68fd07a2c95e53dd57703bd",
".git/objects/96/0850db5ced29b4b41d2d537c144fd79f398a5d": "f9fa9290f91300c8389768b7638ce6b1",
".git/objects/96/ccb271d970fe45a3572b418ba5cb088fcc9073": "38d7580381e1984ef00479c31d7a32f0",
".git/objects/9f/16717f19f98f0737ef1f036df58f35dc21ff1a": "05a509954e294d4861e55e168d8cba47",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/91b2f010b2f6e3bf4bd69ab9befaf0499b46b4": "c7c0ae14d6b86287a926df1109c174ef",
".git/objects/a5/1e0e546591046c7baa29177a2f15b2780985c9": "faeadd138425d5069fc47c99c4d1f131",
".git/objects/aa/0f74497c5d4ded08a86f916c96b757ce283c94": "d54b162feed2e8fd31a92bf744b63c04",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/fca710898364adffd81962b9700ae95346c0d5": "6b057bb82f8b1f9af6ad5b0f594ba951",
".git/objects/ac/b571564a8c3b98cd081d600f95b2389b3095f8": "cba3ee5f29bc6e78db6b68005a485876",
".git/objects/ad/322278109408a9cbd337617761913806e3ebd6": "e0d53fb0ce24103f9f495dc6f3715c71",
".git/objects/b6/627762a7a05310dfa9f1879ae68895f90f0f8c": "597ea434c07001d620b91ff5811e7416",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/e0fd47f38477f031b4095763dd09d65ce368d5": "48f406655200f7b455d24334862e8210",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/c4ed0e6a4578c8ca77c9861f8fe3b94e175f12": "328fac26140d89d60f57a9556e03fc8f",
".git/objects/bc/157bf562820d6eac18cba55971166abb0387a0": "224f88bba3ad65eb1cbe0b9e26a9de6a",
".git/objects/bd/d280a7b8cb3996e022d301cdb43cf983b093ef": "ce98851652c1458af14653e222b60940",
".git/objects/be/ca4e1f91424970f17e64547ff194b6a2a8adf1": "57f07b9240ca5b906396454ee8a75ed5",
".git/objects/c0/aecd89041230c9346dd2c29aee5843cb653ed9": "d20c38965d11230710107407aa95a6ca",
".git/objects/c3/7417c238df36f1eba359dfd34ee254c3504ed8": "ff57a9e9eda64e30a3a6974f56c014d2",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c5/0eec298cd9bcd6b4fe09317ca3621d07a259f0": "1b0bd3b2f0bd2d2c61976a522c42ee8a",
".git/objects/c7/07339aafd27d7f2fc964b574f827fcca781503": "0511fdb29f728aa8a9e4a4a20be182b7",
".git/objects/ca/7ff5a1ae9d346666f5166f267c022ff3d8a1f1": "379bf27bcbb8e9acd389a929d4e2319b",
".git/objects/ca/9a3a063dbce67b9f4500976d0dceb45ae6ea97": "38344ad426b49c2d8686833ec3d509db",
".git/objects/cc/4a0d3e4d51941156168ac15501d3fa0b6aec43": "98ee32a3bc8bf2f0c547bec7925bdcdd",
".git/objects/cc/d5bd263fa14437927b88499f3ab4f1e93f4950": "b99c2133c4ff4d166c8e22b7551836ba",
".git/objects/d2/9c694e9a749928769c557fa09491f1167358b9": "39f8c9c0d621ff54f05e7ab4399ff467",
".git/objects/d2/d96bbe0ebf840e5806e1b297d19679b5e15691": "f4cba27f0036d25db054f749182f1d53",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e0/640b21c9689ba880bf03fe7157d87fb6220969": "3eff977c91edef1961b10098634683c2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/96646d250d47aa38141143ce7acc99b5382842": "957722dba2e86b9d5f6eba7ab9fc7916",
".git/objects/e8/db3028a701a5828e0195e966cf8895bfa62a03": "4e73923ded1714d0526c4a21fb73afa7",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e9/e5ea0ce66877c2713f0ea167a49010f93dfd9e": "d3241e743c095d2eb41e8b266d61c3e2",
".git/objects/ea/6ce7b33a2a12c6d83028b5005de2cc3d409720": "665ef3c991608c5311f174c034782001",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/f80bdfb18fed37146a18d3cce9dae2f1910df1": "5ddda9a21641ea68de09dc2a8c35c426",
".git/objects/ee/538e9e8a3a4e7f688db9bfe6e9cb650151a328": "e0e0b3c0abf41f20f98e9508542f4085",
".git/objects/f0/a53edc6ec330d49c477d75388744e9ff657856": "8bcc087d4567fa85a4cd22671fb77aaf",
".git/objects/f2/9cb4cd196561c40fc484ed9306b907a04dcf07": "c8f9edf2edd5aa77ac2212708fb6c336",
".git/objects/fa/0ee39be72d431611a3313d69198ab3baa87655": "315b791840bfe05bcd5bd91d87acc8b2",
".git/refs/heads/main": "c9029aadc823d11b861ee92f640db892",
".git/refs/remotes/origin/main": "0f6a4d66458788a790796d9fcdcd63be",
"assets/AssetManifest.json": "285a351f455e17adba3e9e4615e61ea5",
"assets/assets/fonts/Electrolize-Regular.ttf": "1be3e0aaeb2bbd1985615a49da7f2eaf",
"assets/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/Raleway/Raleway-Bold.ttf": "7802d8b27fcb19893ce6b38c0789268e",
"assets/assets/fonts/Raleway/Raleway-Medium.ttf": "2ec8557460d3a2cd7340b16ac84fce32",
"assets/assets/fonts/Raleway/Raleway-Regular.ttf": "75b4247fdd3b97d0e3b8e07b115673c2",
"assets/assets/fonts/Raleway/Raleway-SemiBold.ttf": "8a192102b50118c45033e53ce897f103",
"assets/assets/fonts/Ubuntu/UbuntuMono-B-hinting.ttf": "807cd8bfb668166354530d1bba79c698",
"assets/assets/fonts/Ubuntu/UbuntuMono-BI-hinting.ttf": "33c934a2d18e2d35cbbed291320abc50",
"assets/assets/fonts/Ubuntu/UbuntuMono-R-hinting.ttf": "eaa2a251947daf36cf8b6807c62aec66",
"assets/assets/fonts/Ubuntu/UbuntuMono-RI-hinting.ttf": "f4cf3bd172dbfbb8746eb2bfebcc1d34",
"assets/assets/icons/behance-alt.svg": "5c5cb1c76f9e70c3906f061365fdac19",
"assets/assets/icons/Bjs.svg": "af7f76618b2ea0c28ed9d7b66b0416c3",
"assets/assets/icons/facebook.svg": "5d9e08d0af50a5a1f8dd89e90b8a4b5c",
"assets/assets/icons/feather_dribbble.svg": "89b806ce6cc9dea635b81d7dc2406352",
"assets/assets/icons/feather_message-square.svg": "5194a360f12626cb541cc80f58c4f217",
"assets/assets/icons/feather_search.svg": "9d58d567fd606a3fdf19583f8685523d",
"assets/assets/icons/feather_share-2.svg": "2eadf3eff1fb945866235c94ec30915d",
"assets/assets/icons/feather_thumbs-up.svg": "a066c16fa33209a18b5282c40da1cf78",
"assets/assets/icons/feather_twitter.svg": "3a254ce88e725b0169c202752364535e",
"assets/assets/icons/jintelias.svg": "0be308f6abb3a9e8563b04f96836d49e",
"assets/assets/icons/linkedin.svg": "ed91c0b6807a160e572fd170c39287eb",
"assets/assets/icons/Rjintelias.svg": "64e294fd9cf15082fbebd4907f93fbbc",
"assets/assets/icons/Rlogo.svg": "922198d72383068cdd9be9701427e717",
"assets/assets/icons/twitter.svg": "5651a8b12637392f6eeaaa16aeed14c6",
"assets/assets/icons/youtube.svg": "ed6e357fc4c2360219857e8c20127d92",
"assets/assets/images/01.jpg": "f21a912a3f7e5caaf0e7b4484207392b",
"assets/assets/images/02.jpg": "9d27a620569e3be208158243b4544c03",
"assets/assets/images/03.jpg": "4a48c695440f39860e314c2fb91d2ecd",
"assets/assets/images/04.jpg": "71500c676251fbda5f7dc90925e6a99a",
"assets/assets/images/05.jpg": "523383885dd1c6a6581877049c462c38",
"assets/assets/images/06.jpg": "b72af1ab5fcbc6ee6c5c747d8de55cd1",
"assets/assets/images/07.jpg": "ec89bda0469ef681bd715269df3facea",
"assets/assets/images/BJS.png": "abfaca560be5142d5f269c9bc49fbe6d",
"assets/assets/images/cameca.png": "b559442bcc208804348b09da3a0e49d2",
"assets/assets/images/cameca1.png": "f588b834fd3d35dc5550524fa80b757d",
"assets/assets/images/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/assets/images/images1.jpeg": "8eb2007034b31936261815657359d56e",
"assets/assets/images/jintelias.png": "000ddb51f9414ba8336c6bcbd7e9282f",
"assets/assets/images/js@3x.png": "ed8104531ccdbee74ea6ba4e78912361",
"assets/assets/images/Rlogo.png": "0faefc199936bd2ec26a22b7a83d330f",
"assets/assets/images/vjs.png": "3c65b24544e7ec56608f5b092b5d6202",
"assets/FontManifest.json": "0e4155bc294ddbefdc1703bd46fc28fe",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "283ae47662fd922fa43fbd4b1bfd3bca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.ico": "15e188965b1acb7213e0949c1985b153",
"icons/Icon-192.png": "106753cb83645c6ce2fa8ec920e100cc",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b19094917738bc9674ae120d3e6912f8",
"/": "b19094917738bc9674ae120d3e6912f8",
"main.dart.js": "1f05bae49ab7c2a11006e0ddebcb4476",
"manifest.json": "6ef65dd442a9ca5f376eec9751ad5293",
"version.json": "9adc8162830f49a634c0733ebfa2c153"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
