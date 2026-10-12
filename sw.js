/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/31/碎碎念/index.html","25da8492c37f1f44e16a97adfd35fb15"],["/2022/09/30/辩行记全集/index.html","3fbb5c62824c1c74fd0b10493527269f"],["/2022/12/01/碎语｜大学生活与迷茫/index.html","6c7681870e7cf8376d1ad47c48e6be45"],["/2022/12/31/碎语｜12.31新年快乐/index.html","636e31711971549fec08919ff0491435"],["/2023/01/20/碎语｜缘分与辩论/index.html","fc2bafc73f3e084d498dccfc2d9a265d"],["/2023/01/21/随想｜大年初一/index.html","4067dbdb8b623773e9fba4af88b8437d"],["/2023/01/24/随想｜酒馆里的故事/index.html","72b463f898abdf981d17c2dff3fa1d0b"],["/2023/04/09/常州/index.html","69fd9e12cb5b1038b99a9dee2fbd31cb"],["/2023/06/07/碎语｜一份高考祝福/index.html","2f1856bcad4d0e59d6be6c868a458fb8"],["/2023/06/13/在短视频时代写博客/index.html","9b408f2d60581cd2c90a4df0f423222a"],["/2023/07/14/随想｜我们只活在那几个瞬间/index.html","bb4d99e079dde0bfda1717a8da34dae1"],["/2023/08/12/随想｜通一友谊赛/index.html","f9fe60202648a96eae462ed0c2e27b4b"],["/2023/09/21/碎语｜在回家的高铁上/index.html","da7269b9af92e57513f00129869c81e1"],["/2023/10/08/数学家和辩手/index.html","2f2e574ab032ba238cfc2d2b982196c5"],["/2023/10/22/旅札｜苏州/index.html","f01e7514db753355c85c061b8ec13fc9"],["/2023/11/30/大语言模型测评及使用指南/index.html","c1d2e96c67d7a940018401d05e9fca1d"],["/2023/12/06/程序如何辅助数学证明/index.html","a668bccb5d89daa22815b26d0b2d5ddf"],["/2023/12/31/碎语｜2023年末总结/index.html","76da0122a7a32358469fb6bdb83cf250"],["/2024/03/03/南京/index.html","ac453e3e054668b5bbf81ac751e11abb"],["/2024/04/16/日常｜褶皱/index.html","ae39ff0ef1b19d749c4278be19023585"],["/2024/08/27/日常｜通一友谊赛/index.html","1478ea4f5fdc5e1ed6bdd4ed12001823"],["/2024/09/24/日常｜酒馆之后/index.html","116f9414d74b0ba1ea4a0d4839041631"],["/2024/12/19/数模国赛/index.html","77b188f4b7eddab4497fb9fa37064e71"],["/2025/03/16/杭州/index.html","004e0f43bfb33cc655385a8fc0f7c238"],["/2026/10/11/免费额度指南/index.html","5e1fcabdc61b908163808f1f0d885f06"],["/2026/10/11/研究生研究方向跟踪/index.html","7f1aacc662e2cc01b6199b5351cb0bce"],["/404.html","4aa8f3b8e10e5c5e8d565e462d2c88bf"],["/archives/2021/12/index.html","62e38488ef27a8a073544bce27b37454"],["/archives/2021/index.html","8d077c16f1272ebd6af824aa65ae7ad7"],["/archives/2022/09/index.html","bedbf8bada557fef0c31ff769388f213"],["/archives/2022/12/index.html","244be2f1944e8c1024c57eb85960c344"],["/archives/2022/index.html","a80aea489861c04570f2195a29464b09"],["/archives/2023/01/index.html","6850cf60f3757d04d496bcc0c31c2187"],["/archives/2023/04/index.html","6aae6600ab31a470cbcf23e158c5dd8a"],["/archives/2023/06/index.html","8ef25c50901d671e87d3105494c0ec48"],["/archives/2023/07/index.html","f2adc140dcf26ac96ddf80dcc3dc1b65"],["/archives/2023/08/index.html","5239fe72e20744c795eb8915a6d6546f"],["/archives/2023/09/index.html","78e016dc46336777cb1ac5d590361cec"],["/archives/2023/10/index.html","a740a7e4a1d19f181ba6aaa39d38b16f"],["/archives/2023/11/index.html","598c06a2536de40819ce1ff472e95e1c"],["/archives/2023/12/index.html","47f5cd6bc39bda4952392d5e40b3c6a9"],["/archives/2023/index.html","0d7d5b7545593a976ecc1934ecd75d14"],["/archives/2023/page/2/index.html","a14b44b558fcbaed239821b85b436019"],["/archives/2024/03/index.html","1e6c88f4e5d06fb416343c70c17834d2"],["/archives/2024/04/index.html","0ad27936c9ae51d52a41379c6ca611fe"],["/archives/2024/08/index.html","cb12056f4a4a0f09f85351d22e5d6fd3"],["/archives/2024/09/index.html","9b3ebc945334787719eb450c26ec91fa"],["/archives/2024/12/index.html","9ec5c4c0c10d077a918551adde48336b"],["/archives/2024/index.html","a0fc64e99099d63466f64bfa057dd6ad"],["/archives/2025/03/index.html","f34272e5feabc91611d747b4b4640fd3"],["/archives/2025/index.html","7b7c45e8d76e6e74c3713666ae37a180"],["/archives/2026/10/index.html","62da6678ecae2208f904348ddc587952"],["/archives/2026/index.html","b51b9bde5287aee8292dd99f935e1cd4"],["/archives/index.html","510e7f12ef5fa320195c6f6fcac0b278"],["/archives/page/2/index.html","053daf16a2cf00d3252dc11d0be7e9ce"],["/archives/page/3/index.html","510d993723939368965fa2dc279c6508"],["/baidu_verify_codeva-bnS6hbSUzd.html","859e4147d5ab163fb3cc9c0329fa3ea5"],["/bookmarks/index.html","8549b85b92ef29e907c3e27518ec4dc8"],["/categories/index.html","01a2d76cbad6185dacffb2041b2f3855"],["/categories/收录/index.html","b31d4238a9aa2f406e8ec3f1f1c04bb6"],["/categories/攻略/index.html","e2b1213defcb42264028b36c4f90ed5b"],["/categories/旅札/index.html","70c8730d93863e0a8b9b6ae4cbdc582d"],["/categories/日常/index.html","f611d930891faad907144312081838f5"],["/categories/碎语/index.html","df8115ebc8e31cf80011014edd0bf999"],["/categories/精读/index.html","19233fa4d9b631f22e080b3882393c81"],["/categories/索引/index.html","4fb104f79378f90e16f9ed714bf7636c"],["/categories/随想/index.html","79261682a79bc55240410b6b711a804a"],["/css/build/tailwind.css","37854faab85655834526e5b2929a373f"],["/css/common/animated.css","f1326deaf05c070936fb9b4d7a8beb7b"],["/css/common/basic.css","e98ea4b3c5adb950a92f92010a669a89"],["/css/common/codeblock/code-block.css","5c9a35c92f9ed5026b57a04de3db5788"],["/css/common/codeblock/code-theme.css","b0c6e0fddbb35d08f39a3ecded56b79b"],["/css/common/codeblock/highlight.css","68cd3baf0e75486fbd33fef799806bec"],["/css/common/codeblock/hljs-themes/dark/a11y-dark.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/agate.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/atom-one-dark.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/github-dark.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/monokai-sublime.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/night-owl.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/nord.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/tokyo-night-dark.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/vs2015.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/light/atom-one-light.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/light/default.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/light/github.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/colors.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/markdown.css","6a8dab15d31d98f425519c806de8446d"],["/css/common/redefine-theme.css","568c4f6018cb6cfb529733eea0c3ff21"],["/css/common/theme.css","d06e4df44060b71ff736cd4c59adc18e"],["/css/common/variables.css","d06e4df44060b71ff736cd4c59adc18e"],["/css/hbe.style.css","d30e5ff0d4c137e9de87b7cf23838627"],["/css/layout/animations.css","c00f1abfcd01633a1a2d69307962c1b7"],["/css/layout/archive-content.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/layout/article-content.css","c449797cbee023dfe8415033d76cb980"],["/css/layout/bookmarks.css","e26cb42e0581fffe0ee5432e90a61b06"],["/css/layout/category-content.css","7416e9718fdc3939cd32ee30f84e43a5"],["/css/layout/category-list.css","03e63cf050767b7eb803b8c4f8fe3c6d"],["/css/layout/home-content.css","389a8573acc1488926217bf5c0eb8fc9"],["/css/layout/home-sidebar.css","b543cbf6ba3612595c096e21f2ff8ed2"],["/css/layout/page.css","42191e25ff8b8f45a12c09dae03c3dff"],["/css/layout/tag-content.css","5d47a70d29f2e7644379dd136ca41e90"],["/css/style.css","d1e305d8e658c0c6576e997a35ce2a7d"],["/css/tailwind.source.css","c136056717b1b316d04ec4695f7374bd"],["/images/bookmark-placeholder.svg","b2d8e621ea34ebe413b86ed347f1a9ce"],["/images/loading.svg","8badc85e91f9796e6d937af1f051a394"],["/images/logo.svg","a235fb749b09b2ff70c6b9c7b1d8f77a"],["/images/redefine-avatar.svg","31b2257b3adc30869d1e24b21cb14e0d"],["/images/redefine-favicon.svg","ed4d45a98f62db3d4eba27dc884cbeb0"],["/images/redefine-logo.svg","55b05193d4a5b41c7ad6c4c07beb4e2d"],["/images/redefine-og.webp","837bff7c59a3d1f0999cff9670c00727"],["/images/wallpaper-1920.webp","db5271d11fa8128ebd3f295b9430ce00"],["/images/wallpaper-2560.webp","733790408a2175bf82799306d2381af8"],["/images/wallpaper-960.webp","550e464749fe7a16803faa54fad238eb"],["/images/wallpaper.webp","ea9b508e7986f25742a76b7d5f7a3516"],["/index.html","207a424b4eaffe46ecb5209f2f951742"],["/js/plugins/aplayer.js","acdbe21d9fb7de5f5368af88d3b22305"],["/links/index.html","50fc22bb559f5e1a42b2c393a451b05e"],["/masonry/index.html","6f40971dbe24194dd6c8d7dcab13e559"],["/page/2/index.html","223da8a2e2e2a975c55b32173d2ddb3d"],["/page/3/index.html","be60a6660344c90ee35bcf23468c58ff"],["/read/decision-model-history.html","5b861fd563c0539ca384af5775c80a37"],["/read/post-training-history.html","8e38cc2b2c70bb57d34eafc99da4ea89"],["/tags/AI/index.html","32dc7754ee20e463dec475d636818869"],["/tags/API/index.html","2461e56504670242aab5133c39a1bb9b"],["/tags/Agent/index.html","ddbf6d746d4664378ec9ffe823e952f1"],["/tags/Jev/index.html","129c2490fd4a084c391df5fa670ea5ba"],["/tags/PPO/index.html","1402f07a34b812950d0c9a4046ada7c8"],["/tags/Post-Training/index.html","41f6d167f909955c1b4728120aad44a9"],["/tags/RLHF/index.html","0ed91b3769c8f9dd960e94664b723fe3"],["/tags/SFT/index.html","71add0c2c0ac87645e74953f3df96e2e"],["/tags/index.html","cdb9878cb067dadaad626dd1aaf6e033"],["/tags/传统文化/index.html","df433809d5776b6a3a2f0319d7b1c628"],["/tags/写作/index.html","a149fde11c768349da9f3d7f8b4f7d72"],["/tags/决策模型/index.html","67c0e32a6e31bdd51117a35fee4a9e58"],["/tags/南京/index.html","55d88e229ceaecdb145b8fce60e6e650"],["/tags/友谊赛/index.html","4e4ad7977fa80734e18857aa6a900754"],["/tags/回家/index.html","0b45e9a73e80d3236910b678646cfaac"],["/tags/图论/index.html","b5e8336885717632d197249a8d5d6cc1"],["/tags/夕拾/index.html","8dac965915529c11782a0ddbbd6e6f78"],["/tags/大学/index.html","58b15c7a9f391e4e0b9ceb17f06a5e53"],["/tags/常州/index.html","edc39405c527fb95e986c6913f3cf178"],["/tags/年末总结/index.html","f6b145262b69739b41eceeef8dad353c"],["/tags/思辨/index.html","1d32dfc60a232eb79f847596af8d81d5"],["/tags/成本优化/index.html","6d1a4fca5aff6a78c18622a7a1249b98"],["/tags/成长/index.html","b5c0324eec3d7fca0155754c5a698518"],["/tags/数模/index.html","7dec0d89fcdcc902f4bfe92f72744eaf"],["/tags/文本分类/index.html","b6f26d8f76f5c1968242f5f85a147c11"],["/tags/新年/index.html","8f0317cb10e56b9c8fbe9aea81f9243a"],["/tags/日常/index.html","a1b79e88b48b6a715ada2965a96705b8"],["/tags/春节/index.html","c951079304baae6eb77cb30d0e3b1f31"],["/tags/杭州/index.html","315bc41b8f6e1a2125dcb245535a0fb7"],["/tags/概率校准/index.html","24c1404548d12dc8127fc23b1effa819"],["/tags/游戏/index.html","4d46cde041577c8a38e84350b3fe30bc"],["/tags/炉石传说/index.html","bedc074d4915f86dc99ecf2869779ea2"],["/tags/生活/index.html","99c42d9f4ea9f1342d33658f3b61b9be"],["/tags/研究方向/index.html","5fc4c6f8ed9e6db76b15c1d86fa6b987"],["/tags/精读/index.html","9dbc8ce5a4048331266f6a6f703ad0ae"],["/tags/苏州/index.html","3a9bf6f217df696c8515be1c354ac48f"],["/tags/论证/index.html","9abbe45db80fcd60211e72ce21aae7e2"],["/tags/趣事/index.html","7a6b7e53384833c6cf01eac6684e30c8"],["/tags/辩论/index.html","605639b771638d94f0fc9bdac3b8b64c"],["/tags/选题/index.html","d4f4fb9f6ffe53d7406ad2af06925b97"],["/tags/高中/index.html","8fb6a27999deb89f7d4cdec7cf66c1b6"],["/tags/高考/index.html","65d7c03d5f4067492f910c537717f285"]];
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
