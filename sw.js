/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/31/碎碎念/index.html","c892bf29241f392a06fbaa6a49536a59"],["/2022/09/30/辩行记全集/index.html","d21ab37cc861cabe77176666079fdc34"],["/2022/12/01/碎语｜大学生活与迷茫/index.html","0b47674807bdd3464ec481e9d005f29a"],["/2022/12/31/碎语｜12.31新年快乐/index.html","cdf29dcb558dba7a1ceb418955712095"],["/2023/01/20/碎语｜缘分与辩论/index.html","cb2f863b31fd6c04e49f819e8f11697d"],["/2023/01/21/随想｜大年初一/index.html","54af3828b1ff4bc054f834fd92014775"],["/2023/01/24/随想｜酒馆里的故事/index.html","9bf6a7e6a97e14d8fd11f779ec7609c1"],["/2023/04/09/常州/index.html","a0c93fd508fb680e87745074c24a6485"],["/2023/06/07/碎语｜一份高考祝福/index.html","b6324f7d6ca60a84a4b92407dbc71346"],["/2023/06/13/在短视频时代写博客/index.html","243436da82e9938da437292f0bd0aba7"],["/2023/07/14/随想｜我们只活在那几个瞬间/index.html","c6425c3e060aa6baff95244b1fca0eca"],["/2023/08/12/随想｜通一友谊赛/index.html","3f0c23fe89458a0af4020719c35daccd"],["/2023/09/21/碎语｜在回家的高铁上/index.html","78836b7708921157ecbe4b9400235fe5"],["/2023/10/08/数学家和辩手/index.html","23c012da82cffa90f61c7a1cdd79585d"],["/2023/10/22/旅札｜苏州/index.html","612665aa143dfce25dc2ad595a367e9c"],["/2023/11/30/大语言模型测评及使用指南/index.html","2ef79e6862fc4e0056ae44fe629bcd3d"],["/2023/12/06/程序如何辅助数学证明/index.html","8e984ace1f5cac391d4d1dd510d6529d"],["/2023/12/31/碎语｜2023年末总结/index.html","97a3814dabb7d7d7212e6c27078bbfea"],["/2024/03/03/南京/index.html","10d5965b0779f6f81093bf49470f8a61"],["/2024/04/16/日常｜褶皱/index.html","c9ed5ad75866609853a003d555e6c544"],["/2024/08/27/日常｜通一友谊赛/index.html","a7450425ce6775a0d0c55d5c1a1074fd"],["/2024/09/24/日常｜酒馆之后/index.html","e4d9071e599baefed68c441befcaff0d"],["/2024/12/19/数模国赛/index.html","da39d4d2678b847e2ca01e8a6ceadc22"],["/2025/03/16/杭州/index.html","ba07d1bfcbce7b839b9b567e737caf1f"],["/2026/10/11/免费额度指南/index.html","ebf2c669a3c8ae198b224f81c0d67561"],["/2026/10/11/研究生研究方向跟踪/index.html","1a7c5752943096979ddbc3940e8b2458"],["/2026/10/12/寻绎｜NBA中国赛的历史/index.html","288d7660d1496be9b5d2585a24ca8703"],["/404.html","076eeffcdaa8f0f8f41054e1b63971a9"],["/archives/2021/12/index.html","0b533d3ad840652b232e255d06e17fa6"],["/archives/2021/index.html","da68412e98fe2bdc5a763a1409e66a7d"],["/archives/2022/09/index.html","4ae59b320447e7872f014b682dd5e369"],["/archives/2022/12/index.html","3d498ec592dc12cd97a00ebe240c06a1"],["/archives/2022/index.html","bb30db391c1b7f8d1138ffb53c6fa9f9"],["/archives/2023/01/index.html","9af7c8391335b597a1a8cf08dba0d6d9"],["/archives/2023/04/index.html","81ca0dfd5814e40171f30ea04f5a7557"],["/archives/2023/06/index.html","c63771be9a78fc4544e65cffb7b61873"],["/archives/2023/07/index.html","ce023bc773c2e711dd1e8ca47d989a31"],["/archives/2023/08/index.html","630dc13dfc4eb382a878118f2b98dadd"],["/archives/2023/09/index.html","b480522adf294c2fdcc5520628fa53aa"],["/archives/2023/10/index.html","f731ae6e0b428efb1ffa8d6478548191"],["/archives/2023/11/index.html","8faafa0bff67c513dd35f96f91b6f944"],["/archives/2023/12/index.html","de52b16738a2bf4358ba7e61c85dbf42"],["/archives/2023/index.html","a676e4301d82c348cee0111db5cc71a3"],["/archives/2023/page/2/index.html","8fede232826f9cc52a8afe944eadd8c3"],["/archives/2024/03/index.html","ef1d471fc1e0167e8e79a485ebf37f86"],["/archives/2024/04/index.html","85bc556b05e75716e3e52f16b0dba288"],["/archives/2024/08/index.html","f5d4543cda1f6de33445a7e6e2f36dea"],["/archives/2024/09/index.html","6df239a00ef6084911cee4fc87d70019"],["/archives/2024/12/index.html","cf9b8450c6cfb6a1080415b05df1e3e5"],["/archives/2024/index.html","9358f113eee84b78f3164e01bfe926df"],["/archives/2025/03/index.html","7bb0d02e0eb92e1e6a73d34b27d4f3d7"],["/archives/2025/index.html","6d65be85bbe62e54a392dafe4dcda18a"],["/archives/2026/10/index.html","dd28bc9eb0ad0a161e0ae7cec23017d7"],["/archives/2026/index.html","b1883fe4663ff7354912d15dc4de997c"],["/archives/index.html","eab83aa9473d1ce1c5e5464c6f106ebe"],["/archives/page/2/index.html","d7aeacc5dc096f083c8061133395d414"],["/archives/page/3/index.html","d3b15b0319bbaf0c582b5f00a7f906ff"],["/baidu_verify_codeva-bnS6hbSUzd.html","859e4147d5ab163fb3cc9c0329fa3ea5"],["/bookmarks/index.html","35ee457fb1bf84b0230f5eb1c3231d11"],["/categories/index.html","e4f6f373fbb283f7089e3fb922116db9"],["/categories/寻绎/index.html","423007dc9e3fbfd1573ba020cee69184"],["/categories/收录/index.html","716f26547110d786d11ef29d2e3f169e"],["/categories/攻略/index.html","823467986667161cbce48499dfe688b0"],["/categories/旅札/index.html","7d53bc6bc9775198cc225e80065a752c"],["/categories/日常/index.html","086d615bd31a1993196f0a5a3242e3f2"],["/categories/碎语/index.html","4deb60ec12d815b9c1bc820da24edfc7"],["/categories/精读/index.html","8d239b389d14451c178bfcad77919ab4"],["/categories/索引/index.html","5b91eed835022d44baff5f512e4334f9"],["/categories/随想/index.html","314b7d28fc24543de5cc9d964988ea43"],["/css/build/tailwind.css","37854faab85655834526e5b2929a373f"],["/css/common/animated.css","f1326deaf05c070936fb9b4d7a8beb7b"],["/css/common/basic.css","e98ea4b3c5adb950a92f92010a669a89"],["/css/common/codeblock/code-block.css","5c9a35c92f9ed5026b57a04de3db5788"],["/css/common/codeblock/code-theme.css","b0c6e0fddbb35d08f39a3ecded56b79b"],["/css/common/codeblock/highlight.css","68cd3baf0e75486fbd33fef799806bec"],["/css/common/codeblock/hljs-themes/dark/a11y-dark.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/agate.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/atom-one-dark.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/github-dark.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/monokai-sublime.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/night-owl.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/nord.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/tokyo-night-dark.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/vs2015.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/light/atom-one-light.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/light/default.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/light/github.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/colors.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/markdown.css","6a8dab15d31d98f425519c806de8446d"],["/css/common/redefine-theme.css","568c4f6018cb6cfb529733eea0c3ff21"],["/css/common/theme.css","d06e4df44060b71ff736cd4c59adc18e"],["/css/common/variables.css","d06e4df44060b71ff736cd4c59adc18e"],["/css/hbe.style.css","d30e5ff0d4c137e9de87b7cf23838627"],["/css/layout/animations.css","c00f1abfcd01633a1a2d69307962c1b7"],["/css/layout/archive-content.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/layout/article-content.css","c449797cbee023dfe8415033d76cb980"],["/css/layout/bookmarks.css","e26cb42e0581fffe0ee5432e90a61b06"],["/css/layout/category-content.css","7416e9718fdc3939cd32ee30f84e43a5"],["/css/layout/category-list.css","03e63cf050767b7eb803b8c4f8fe3c6d"],["/css/layout/home-content.css","389a8573acc1488926217bf5c0eb8fc9"],["/css/layout/home-sidebar.css","b543cbf6ba3612595c096e21f2ff8ed2"],["/css/layout/page.css","42191e25ff8b8f45a12c09dae03c3dff"],["/css/layout/tag-content.css","5d47a70d29f2e7644379dd136ca41e90"],["/css/style.css","d1e305d8e658c0c6576e997a35ce2a7d"],["/css/tailwind.source.css","c136056717b1b316d04ec4695f7374bd"],["/images/bookmark-placeholder.svg","b2d8e621ea34ebe413b86ed347f1a9ce"],["/images/loading.svg","8badc85e91f9796e6d937af1f051a394"],["/images/logo.svg","a235fb749b09b2ff70c6b9c7b1d8f77a"],["/images/redefine-avatar.svg","31b2257b3adc30869d1e24b21cb14e0d"],["/images/redefine-favicon.svg","ed4d45a98f62db3d4eba27dc884cbeb0"],["/images/redefine-logo.svg","55b05193d4a5b41c7ad6c4c07beb4e2d"],["/images/redefine-og.webp","837bff7c59a3d1f0999cff9670c00727"],["/images/wallpaper-1920.webp","db5271d11fa8128ebd3f295b9430ce00"],["/images/wallpaper-2560.webp","733790408a2175bf82799306d2381af8"],["/images/wallpaper-960.webp","550e464749fe7a16803faa54fad238eb"],["/images/wallpaper.webp","ea9b508e7986f25742a76b7d5f7a3516"],["/index.html","ba04b5f9065e633af0c010685cbc932c"],["/js/plugins/aplayer.js","acdbe21d9fb7de5f5368af88d3b22305"],["/links/index.html","afd1ecc2c6a91bc522e63b91a082bd12"],["/masonry/index.html","5c29fdbdf2b0742da0e85d9651766568"],["/page/2/index.html","8011a91435eb4f128fe1166b42af0f45"],["/page/3/index.html","49dcf50152a492e3d67a912ffd8b23b5"],["/read/decision-model-history.html","b76da07efbc6b5f2f66caa9fbeebd7fb"],["/read/post-training-history.html","122db7491491a04348d46f20bba8c3a0"],["/tags/AI/index.html","b9fdaeced1d6c1980d9c6f60b7168f38"],["/tags/API/index.html","afe33b44ab1903e5070cca90374c5772"],["/tags/Agent/index.html","283eac38d92a5bad03da09e90d994c51"],["/tags/Jev/index.html","a4fb2268384d758649c3b2522652c8aa"],["/tags/NBA/index.html","c2adb0f8bb2c1187198efe1b755e07c0"],["/tags/PPO/index.html","5890b716eb4d49574c38b28c4342aeff"],["/tags/Post-Training/index.html","74c0999414d051d1768ee0b3dd498881"],["/tags/RLHF/index.html","bf018b5992f453fe4f8c89685c2c9753"],["/tags/SFT/index.html","8e8dfd9a1f51b41cd855f70b0931acc7"],["/tags/index.html","1b3e754f36f9a64789f98769ce5a7fc8"],["/tags/传统文化/index.html","618c10c8f95a436b3b51688776ef4a0e"],["/tags/体育/index.html","89f0053290a9cf2e83a7604c05ede63c"],["/tags/写作/index.html","dbe0089263f9dfc89c164da8a426f8ae"],["/tags/决策模型/index.html","181426a61f7667cdceab6b74096817bc"],["/tags/南京/index.html","b1c3de3dddace4c63f17a13940ae7ea8"],["/tags/历史/index.html","f836a74feb7576458d52a06fdc6b2c06"],["/tags/友谊赛/index.html","755c2fc89cfb6d6b181c12df4f0bd017"],["/tags/回家/index.html","daeb35c0d3666b0377cec66f429f92fe"],["/tags/图论/index.html","5b774a73ef8ffc2b09eee953a0aa3318"],["/tags/夕拾/index.html","f575632f68abd4d82c3f1802ecb75e55"],["/tags/大学/index.html","cea3df9c5afcaeca1b38517f63b435f0"],["/tags/常州/index.html","a1467ff5fb852e36c0e131663ebd48fb"],["/tags/年末总结/index.html","39d0442794be886fecb110946eb29f66"],["/tags/思辨/index.html","6809f19e5874f0a4d6d218409c11c843"],["/tags/成本优化/index.html","57df937e585f6e4d4985663185019124"],["/tags/成长/index.html","ea62f360b8e01efcf3a74f8364a2d1b8"],["/tags/数模/index.html","af5974be4d39cccf80004abbc3dbd1c2"],["/tags/文本分类/index.html","97a350cb1f7ac9d41726add9bb818c5e"],["/tags/新年/index.html","1e10a878c8c5034b551d5aaca82a0534"],["/tags/日常/index.html","d8767692718d9d9bfec69efdb86e393b"],["/tags/春节/index.html","df694837ed8792782300993accbe6c40"],["/tags/杭州/index.html","57f985300a2097be12b62fa91242c27e"],["/tags/概率校准/index.html","db8d1d55811228b129925bc26a772513"],["/tags/游戏/index.html","fbd2fc1989f311051da1d7534a9f1630"],["/tags/炉石传说/index.html","4efad9ebc9d9d74411fef996fac7fdfc"],["/tags/生活/index.html","15991d4be8242961f52acc1bed9056ee"],["/tags/研究方向/index.html","deee7df5bbeaf9fce7aa2ab08cb6dab9"],["/tags/篮球/index.html","b5345c02b6b1b517ea6f536daff92b80"],["/tags/精读/index.html","cbd02bff5baa7b4cb82a92f1353c0e35"],["/tags/苏州/index.html","213f6c1bf93c7e1f098be87eaf792892"],["/tags/论证/index.html","583b6d1ccf48c2233bd1acef2ae4a76d"],["/tags/趣事/index.html","149c716bdc0e6b33fead2050e22ecc90"],["/tags/辩论/index.html","e7a32278c1a0ecb279dffc3990ac47c7"],["/tags/选题/index.html","6a875b0673ee631a5e86b1fb812ab095"],["/tags/高中/index.html","a43483e313e611f9583daf90a36c280f"],["/tags/高考/index.html","1970b0cd98703581dd8de85bda8fcbfd"]];
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
