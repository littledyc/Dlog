/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/31/碎碎念/index.html","d5ad2b790e05c1ed9bdb545415ba503f"],["/2022/09/30/辩行记全集/index.html","9ee6bcc44418b6822cda1fc2adec37ab"],["/2022/12/01/碎语｜大学生活与迷茫/index.html","fc0ab4eb7020bc8e16299d2e5d07968c"],["/2022/12/31/碎语｜12.31新年快乐/index.html","3d1758f4f863ab616dc0619cff153769"],["/2023/01/20/碎语｜缘分与辩论/index.html","6d208efaeb70806f0fb5956d67641de0"],["/2023/01/21/随想｜大年初一/index.html","f9307d9e240908015a1dfd992ba0a6ba"],["/2023/01/24/随想｜酒馆里的故事/index.html","6a5aadf3e5e5020180247087f7816750"],["/2023/04/09/常州/index.html","55ba75564a279f9e5b457162307f286b"],["/2023/06/07/碎语｜一份高考祝福/index.html","0058d9df348aeda6e7942907e0ddef89"],["/2023/06/13/在短视频时代写博客/index.html","8d31fda79bc63a63493560ee1b02ca5f"],["/2023/07/14/随想｜我们只活在那几个瞬间/index.html","c5e2c2505b3662bb129f00c3f115dbe7"],["/2023/08/12/随想｜通一友谊赛/index.html","e9ed5a8f63b04240354048ce300bfa29"],["/2023/09/21/碎语｜在回家的高铁上/index.html","59df079d451860120f3b7117620cc381"],["/2023/10/08/数学家和辩手/index.html","8f8a4028be4920f6e90742a44148d9c9"],["/2023/10/22/旅札｜苏州/index.html","e1a92ade981ec84ac990e605010fe543"],["/2023/11/30/大语言模型测评及使用指南/index.html","1349cea947ef80f5fbf2848f7c049ffa"],["/2023/12/06/程序如何辅助数学证明/index.html","0d90b2df4008bdd35fd0c7c4ada762e0"],["/2023/12/31/碎语｜2023年末总结/index.html","15cf728b23b7cf428edff9687a14fec7"],["/2024/03/03/南京/index.html","4bb90a073003186283b4f32a64a9c791"],["/2024/04/16/日常｜褶皱/index.html","4796d05d63ad7d86308213ef00e8815f"],["/2024/08/27/日常｜通一友谊赛/index.html","3324fc595ca54592265274de30012913"],["/2024/09/24/日常｜酒馆之后/index.html","129c691a117adb0e216df0fb741d95ab"],["/2024/12/19/数模国赛/index.html","13a3f8ae2a06ea8a80c37c517fe0e80a"],["/2025/03/16/杭州/index.html","01f0f3ee429d2936d0c811b732903903"],["/2026/10/11/免费额度指南/index.html","ed9d100044ccc65cb87addfc48bce21e"],["/2026/10/11/研究生研究方向跟踪/index.html","22c6d4d2b71b44fb8a6970ed2a434bdd"],["/2026/10/12/寻绎｜NBA中国赛的历史/index.html","14b1a623efc06fbc935a13a2f522c2d8"],["/404.html","d096488d75a78961014aad44beff1c96"],["/archives/2021/12/index.html","69cd68937f602b6badd521ee05c262a3"],["/archives/2021/index.html","0b6a103b1058d79b4a919b34984b8b6c"],["/archives/2022/09/index.html","cdd8550ee1077c9b5188a94fcd4eae27"],["/archives/2022/12/index.html","b6325656368ceb02a24aa3ed21abee5c"],["/archives/2022/index.html","951c26c607cdcf50fc8f3d19a523a2bc"],["/archives/2023/01/index.html","b249fec933df3ec95ca4f2305984fb91"],["/archives/2023/04/index.html","2662dd6bce0c59169ef6930821b66aa3"],["/archives/2023/06/index.html","44655348312406bbea0d062315cb847d"],["/archives/2023/07/index.html","8027f5db35d9c5e42090f3bbac202f02"],["/archives/2023/08/index.html","77278e552d518886cb20dd7ebe192c6d"],["/archives/2023/09/index.html","9d5e7daea1ccd5a4c39fcb419e433291"],["/archives/2023/10/index.html","0f4877f8b8bdfba638ef83658afd26ba"],["/archives/2023/11/index.html","6efcc848eb91f742244aa18cee565634"],["/archives/2023/12/index.html","f1080934b640d56d80471f13b882d29e"],["/archives/2023/index.html","022df2c69ac91c4ba6dba6a39a0fe536"],["/archives/2023/page/2/index.html","7dfb6ffc345cf00c2c7f4d7d157579c1"],["/archives/2024/03/index.html","27ec2604f1e7d7719f6f5d43df7a4c7c"],["/archives/2024/04/index.html","96c29c295af16a8d05e64ac2e9dac049"],["/archives/2024/08/index.html","6b6c7199e9b77e91deafd2946180bcd1"],["/archives/2024/09/index.html","6f6a694587cec6547039bf85a31f51e4"],["/archives/2024/12/index.html","0989a89a1f819cb4a0f4565e9c4e419b"],["/archives/2024/index.html","c884ad21e4bd513d218b4f2d6035252d"],["/archives/2025/03/index.html","eb93e4a73e1d07d56aa268445c04921c"],["/archives/2025/index.html","43456781eb858eb9617e4816c0d1d2a8"],["/archives/2026/10/index.html","3300d31a58a6ea74832860e06062539d"],["/archives/2026/index.html","1a3da7d5335497d0c01759c1d6998b9c"],["/archives/index.html","409de17c28b370e5fd2608cd72352b82"],["/archives/page/2/index.html","fde4dd74ac0891ed0498fc36b9618fbf"],["/archives/page/3/index.html","c70cc6898152ae5e07ca399d14397821"],["/baidu_verify_codeva-bnS6hbSUzd.html","859e4147d5ab163fb3cc9c0329fa3ea5"],["/bookmarks/index.html","1fe1d2bd86c3437f904f90492f31f374"],["/categories/index.html","ef5610bff74a0c1fcea018262407b296"],["/categories/寻绎/index.html","3cb79c578594917373a5be36512a0945"],["/categories/收录/index.html","bc490df9b441d84dd67c52cf2dab2b1f"],["/categories/攻略/index.html","72f9f4dc6c2fbf1f95d01ae46112cbe5"],["/categories/旅札/index.html","e71e8e2bad5f3915053c50d47fe2895e"],["/categories/日常/index.html","9933e965c7683d3bf8c74a061c6ddbbd"],["/categories/碎语/index.html","4f818ec416209a03c253d01d04387858"],["/categories/精读/index.html","e736aec549f946bbad097a4290e78447"],["/categories/索引/index.html","33ccd431a2e0bd220cfff4889fb94741"],["/categories/随想/index.html","8475340828991dde6c45f7488674a474"],["/css/build/tailwind.css","37854faab85655834526e5b2929a373f"],["/css/common/animated.css","f1326deaf05c070936fb9b4d7a8beb7b"],["/css/common/basic.css","e98ea4b3c5adb950a92f92010a669a89"],["/css/common/codeblock/code-block.css","5c9a35c92f9ed5026b57a04de3db5788"],["/css/common/codeblock/code-theme.css","b0c6e0fddbb35d08f39a3ecded56b79b"],["/css/common/codeblock/highlight.css","68cd3baf0e75486fbd33fef799806bec"],["/css/common/codeblock/hljs-themes/dark/a11y-dark.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/agate.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/atom-one-dark.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/github-dark.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/monokai-sublime.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/night-owl.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/nord.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/tokyo-night-dark.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/vs2015.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/light/atom-one-light.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/light/default.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/light/github.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/colors.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/markdown.css","6a8dab15d31d98f425519c806de8446d"],["/css/common/redefine-theme.css","568c4f6018cb6cfb529733eea0c3ff21"],["/css/common/theme.css","d06e4df44060b71ff736cd4c59adc18e"],["/css/common/variables.css","d06e4df44060b71ff736cd4c59adc18e"],["/css/hbe.style.css","d30e5ff0d4c137e9de87b7cf23838627"],["/css/layout/animations.css","c00f1abfcd01633a1a2d69307962c1b7"],["/css/layout/archive-content.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/layout/article-content.css","c449797cbee023dfe8415033d76cb980"],["/css/layout/bookmarks.css","e26cb42e0581fffe0ee5432e90a61b06"],["/css/layout/category-content.css","7416e9718fdc3939cd32ee30f84e43a5"],["/css/layout/category-list.css","03e63cf050767b7eb803b8c4f8fe3c6d"],["/css/layout/home-content.css","389a8573acc1488926217bf5c0eb8fc9"],["/css/layout/home-sidebar.css","b543cbf6ba3612595c096e21f2ff8ed2"],["/css/layout/page.css","42191e25ff8b8f45a12c09dae03c3dff"],["/css/layout/tag-content.css","5d47a70d29f2e7644379dd136ca41e90"],["/css/style.css","d1e305d8e658c0c6576e997a35ce2a7d"],["/css/tailwind.source.css","c136056717b1b316d04ec4695f7374bd"],["/images/bookmark-placeholder.svg","b2d8e621ea34ebe413b86ed347f1a9ce"],["/images/loading.svg","8badc85e91f9796e6d937af1f051a394"],["/images/logo.svg","a235fb749b09b2ff70c6b9c7b1d8f77a"],["/images/redefine-avatar.svg","31b2257b3adc30869d1e24b21cb14e0d"],["/images/redefine-favicon.svg","ed4d45a98f62db3d4eba27dc884cbeb0"],["/images/redefine-logo.svg","55b05193d4a5b41c7ad6c4c07beb4e2d"],["/images/redefine-og.webp","837bff7c59a3d1f0999cff9670c00727"],["/images/wallpaper-1920.webp","db5271d11fa8128ebd3f295b9430ce00"],["/images/wallpaper-2560.webp","733790408a2175bf82799306d2381af8"],["/images/wallpaper-960.webp","550e464749fe7a16803faa54fad238eb"],["/images/wallpaper.webp","ea9b508e7986f25742a76b7d5f7a3516"],["/index.html","260ee69de99a874df29b0c028f15ca39"],["/js/plugins/aplayer.js","acdbe21d9fb7de5f5368af88d3b22305"],["/links/index.html","2c2a4705e8b07214adeae287eb74305a"],["/masonry/index.html","3f41f72b456a208d5245ca172cd45f50"],["/page/2/index.html","1d1881f58cc9bc90d9f7f08cca8a2700"],["/page/3/index.html","9efea9be2708146b340be42f1a0262ca"],["/read/decision-model-history.html","22269249985157a74fa1f36e86eef80b"],["/read/post-training-history.html","cc82efc541b0b57c41f58df33fa8b6e0"],["/tags/AI/index.html","332b5e12242ede00d6a80a862662def8"],["/tags/API/index.html","ab19de003b93534f009e4c51544d953d"],["/tags/Agent/index.html","82803e347548bf78a095a466bf1484d3"],["/tags/Jev/index.html","50f428199e8575be07ca235ac3c82de5"],["/tags/NBA/index.html","bada2b86a6ca3e41c8e796c07ab24b2b"],["/tags/PPO/index.html","e779479be39b03c51e14763df3487bb7"],["/tags/Post-Training/index.html","5b76cea1f059b1d8d814a6de3000fa95"],["/tags/RLHF/index.html","5996c4aba731797107f8b49a1bde6d24"],["/tags/SFT/index.html","0cccd4da233f67404146de34f9a30888"],["/tags/index.html","3f48eee0ebc791590f105845dd20f973"],["/tags/传统文化/index.html","1b81a43ecb9805964d6ffa56ef973f23"],["/tags/体育/index.html","c1c364a41256f660a3b6c4a606d3c9dc"],["/tags/写作/index.html","9bbe307a9e888a430c3a15063c5c5bf5"],["/tags/决策模型/index.html","7d4e6efbad02504a14830fed71739c16"],["/tags/南京/index.html","fdd762d8e2955729d14ab2343ec0e511"],["/tags/历史/index.html","fd5f243acb562814d619104b90e0be8b"],["/tags/友谊赛/index.html","9c5aee16228f360443823d56eabb3366"],["/tags/回家/index.html","68b1ed874c3ed45711281b770f6c51b8"],["/tags/图论/index.html","2938544fcb9239f9be6f6cf42128007f"],["/tags/夕拾/index.html","a7ae683853df5a9047bd710e9c4ecd0a"],["/tags/大学/index.html","6567967ca29d1881e6b9c13f7668249b"],["/tags/常州/index.html","9d68735e4f36f0b3a418dfbcab29df11"],["/tags/年末总结/index.html","5360a368786f8eb3cbe3c7631eddfa7f"],["/tags/思辨/index.html","516ac996ad22bd84a7ceaf406f8ef649"],["/tags/成本优化/index.html","b24c5bc70a02f0abdfa02dcdf40a9293"],["/tags/成长/index.html","2c33180e2f62b69629f5600e722e0733"],["/tags/数模/index.html","cfddad1af43992bea1b7c399112f4667"],["/tags/文本分类/index.html","574efa5333e1ecc7b1520ffedd5c5585"],["/tags/新年/index.html","7c316f4a1642ef3352b5b54094aa1795"],["/tags/日常/index.html","904853eb4d4c96be1168f561db7bdac6"],["/tags/春节/index.html","1c1db5dca48953fcd0f4e281e3551678"],["/tags/杭州/index.html","6d1276684e47aa65884316d2dfd89f60"],["/tags/概率校准/index.html","71907c04aed02cdfe8bb7c937d3d3f29"],["/tags/游戏/index.html","8e0db69b99e3dc97eb4177eeb612a3ce"],["/tags/炉石传说/index.html","552c97ed436149733ea96e5db79ca6ea"],["/tags/生活/index.html","63c8caf82aa5c861794ec61ae7b484fb"],["/tags/研究方向/index.html","89b80d7f482dbc40a6c2ae55a7170848"],["/tags/篮球/index.html","6652695717f167eeb9d1c66548b314b2"],["/tags/精读/index.html","1e877737ce6cbff4877c75cf82c4ffb8"],["/tags/苏州/index.html","ec9e2894e393950a6d1153dc8eecdfae"],["/tags/论证/index.html","4788932ded07a6ba614b15909f7b5f9d"],["/tags/趣事/index.html","a838959643c080edc1da43be3c209ba0"],["/tags/辩论/index.html","78694cccfc3e13287037c27740cf8641"],["/tags/选题/index.html","9565dfd69d9948748124f1e02fbbdf39"],["/tags/高中/index.html","595e1a2b76da7a2c40428b30f29a7f87"],["/tags/高考/index.html","0ae9ecec0b995a02ae1ef8760df22e36"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("^https://evan\\.beee\\.top/projects/hexo-theme-redefine@2\\.9\\.0/source/", toolbox.cacheFirst, {"cache":{"maxEntries":64,"name":"redefine-theme-assets"}});
toolbox.router.get("/images/", toolbox.staleWhileRevalidate, {"cache":{"maxEntries":80,"name":"dlog-images"}});
toolbox.router.get("/js/libs/APlayer.min.js", toolbox.staleWhileRevalidate, {"cache":{"maxEntries":1,"name":"dlog-lazy-player"}});





/* eslint-enable */
