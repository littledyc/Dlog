/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/06/13/满座衣冠似雪/index.html","752ef444507ffcfb488bec006f4c575e"],["/2023/10/08/数学家和辩手/index.html","2866dd2e620f17b5364da0a22c2ea024"],["/2023/11/30/大语言模型测评及使用指南/index.html","a7301fc7e1d9c156fc49bd40be0d85f7"],["/2023/12/04/碎碎念/index.html","9a1d3c10ae2ef2dc86c40c378d5d9a33"],["/2023/12/06/程序如何辅助数学证明/index.html","ad0837b9a1430f72d5b478c180351ccb"],["/2024/04/04/常州/index.html","3d5a94d6cc652d7c59fc298492b491ff"],["/2024/12/19/数模国赛/index.html","3b1afcadea1c18f86683ce2dd320aae6"],["/2025/03/16/南京/index.html","61749093c6397b0679c95a7e7c33e351"],["/2025/03/16/杭州/index.html","11e534326c3bf2f5824e5b9ea451f998"],["/2025/06/19/C++优化库ceres-2.2.0 cmake+vs2022编译教程/index.html","6024226db401d8c1da2c0417c0833e2b"],["/2025/06/19/奉贤/index.html","a41cfadbdb6222a2ba08898dce10f7a0"],["/2025/08/13/你是什么时候觉得自己可以改变世界的/index.html","cf0e00198d1f58e2b0aad61291fc657a"],["/404.html","95fef424e98893e5c78e34cebd36a2d5"],["/README.html","b7958e1b5780054904112ef741cc7fa8"],["/archives/2023/06/index.html","a4060b37e28e4481f9f81e17ee6bd623"],["/archives/2023/10/index.html","b788649640a451a63811489b6a46ebee"],["/archives/2023/11/index.html","1108d75e9679f1a65c833f700bcb2a67"],["/archives/2023/12/index.html","701612f050114393c13cd514ba24f94f"],["/archives/2023/index.html","87d0327336cc19101d540195c068a4ad"],["/archives/2024/04/index.html","4b2d564f0e4db571a89454e0552dd563"],["/archives/2024/12/index.html","3ab47b9b3274807aaaa29aef560471c2"],["/archives/2024/index.html","3fadc76a000005cf5ac769f179ff35ec"],["/archives/2025/03/index.html","13f96e6350baabdff62a4cff7f1c7fa5"],["/archives/2025/06/index.html","9ad06012d6ddac30e38f73c9e3602340"],["/archives/2025/08/index.html","9f96a75de576c68cdc0aaf0bb15009ef"],["/archives/2025/index.html","c15c7a9a00564debc27f3630e351c37d"],["/archives/index.html","8850ebe17f7d11004c22fee1fb8751a5"],["/archives/page/2/index.html","0e614a53702393f01fd8de8515505f6c"],["/assets/hbe.style.css","a964d46d46c8c0b52ab9543c51604688"],["/assets/odometer-theme-minimal.css","5e63b0172ec25f3f08e2ac8ba082e6b3"],["/baidu_verify_codeva-bnS6hbSUzd.html","859e4147d5ab163fb3cc9c0329fa3ea5"],["/bookmarks/index.html","57618efdd18bfa1a063dfb2fe39a84c8"],["/categories/index.html","112dc6b2d456e87e4791f53965ff6950"],["/categories/技术/index.html","5af26f76d67f0399bb45eadbecba32cb"],["/categories/数学/index.html","fd01fd6fc60ea95fb834b1898e17f436"],["/categories/旅行/index.html","9a4b50d27ee3b7970393697b61fcb9c7"],["/categories/杂文/index.html","3c50d6259a10e2994ee6f76f59713e6e"],["/css/build/tailwind.css","8fa93e69ff387abf0d58bf4de38daff5"],["/css/common/animated.css","f1326deaf05c070936fb9b4d7a8beb7b"],["/css/common/basic.css","bbd05db70499a70a60c7c516cc69ca5a"],["/css/common/codeblock/code-block.css","5c9a35c92f9ed5026b57a04de3db5788"],["/css/common/codeblock/code-theme.css","71d692e081b2ee336084a7d92fb7c3de"],["/css/common/codeblock/highlight.css","fbb3b25ed65fa581e690aff0de7d83f8"],["/css/common/codeblock/hljs-themes/dark/a11y-dark.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/agate.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/atom-one-dark.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/github-dark.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/monokai-sublime.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/night-owl.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/nord.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/tokyo-night-dark.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/vs2015.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/light/atom-one-light.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/light/default.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/light/github.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/colors.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/markdown.css","3be463e214415752c95dcc52e4aacca1"],["/css/common/redefine-theme.css","568c4f6018cb6cfb529733eea0c3ff21"],["/css/common/theme.css","1350f00b0f41d0f0ec73d0ddb8ba6650"],["/css/common/variables.css","1350f00b0f41d0f0ec73d0ddb8ba6650"],["/css/hbe.style.css","d30e5ff0d4c137e9de87b7cf23838627"],["/css/layout/animations.css","c00f1abfcd01633a1a2d69307962c1b7"],["/css/layout/archive-content.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/layout/article-content.css","45a04907dda820dd57354301c801181f"],["/css/layout/bookmarks.css","e26cb42e0581fffe0ee5432e90a61b06"],["/css/layout/category-content.css","1ffedce6ce26ff36988557006ff80dd9"],["/css/layout/category-list.css","3f11b11ad416f04240ca8e461bf589f7"],["/css/layout/home-content.css","b45b4cb3ae25e4d78fb8d7a7eb2c0a67"],["/css/layout/home-sidebar.css","9ef21df0682ec335c40c4cb41b0dae33"],["/css/layout/page.css","e98e61eac1d47524364243d801e5503f"],["/css/layout/tag-content.css","850ac3d7687c217eef025e40280b7fb7"],["/css/style.css","a0a34d1844168d8f2a336515678cf11b"],["/css/tailwind.source.css","10615a18f6cd6b856ee5bff7d598f284"],["/fontawesome/all.min.css","9ec513d705ed7f4deb2b50bb05914817"],["/fontawesome/brands.min.css","40960f6969b87896c9889de920787ae8"],["/fontawesome/duotone.min.css","6d17219d846a2851c2ed490a62dd38cb"],["/fontawesome/fontawesome.min.css","7f252c83010f3cada47ee6a6f71d1ee8"],["/fontawesome/light.min.css","99d663cdb4567e9c0c000fc52c670fb8"],["/fontawesome/regular.min.css","020abce5e17082f0f18f92aed092c0b0"],["/fontawesome/sharp-solid.min.css","20abfb823fecc8a6a73458c5edd394f9"],["/fontawesome/solid.min.css","f484f18056587df321165f744e9ba571"],["/fontawesome/svg-with-js.min.css","c40530bda390deaaed914c49f34d9e1e"],["/fontawesome/thin.min.css","f44cae780bf8a7287221c340cbe4d815"],["/fontawesome/v4-font-face.min.css","52325430f1fa7f983a32f712ebb59b3a"],["/fontawesome/v4-shims.min.css","4d764578be067a44af663d56be333195"],["/fontawesome/v5-font-face.min.css","1cb7f16555da63aecd2828d3d3130d85"],["/fonts/Chillax/Chillax-Variable.eot","f8ea7af333c768147f674ba526612248"],["/fonts/Chillax/Chillax-Variable.ttf","5f13274ffe3e1ee77b67324cb1a9cf7c"],["/fonts/Chillax/Chillax-Variable.woff","16fee1e0f2e5db01ad15ce4535ad39e2"],["/fonts/Chillax/Chillax-Variable.woff2","5940855d51d43257fe1bbd7b0dc6710d"],["/fonts/Chillax/chillax.css","2f888ca613c09d22b977514e12aaa7b4"],["/fonts/Geist/GeistVF.ttf","8e8ae89cf243d3d79b7404594c4bc9fb"],["/fonts/Geist/GeistVF.woff","78e6fc13ea317b55ab0bd6dc4849c110"],["/fonts/Geist/GeistVF.woff2","0e46e732cced180e3a2c7285100f27d4"],["/fonts/Geist/geist.css","e03d09da9805c2f0e4c5d9ea9d448a9e"],["/fonts/GeistMono/GeistMonoVF.ttf","56335c91c8b94afe39dbdedea3edc556"],["/fonts/GeistMono/GeistMonoVF.woff","cbeb6d2d96eaa268b4b5beb0b46d9632"],["/fonts/GeistMono/GeistMonoVF.woff2","addf0d443087aa4b985f763c80182017"],["/fonts/GeistMono/geist-mono.css","99fefc4d4cff301e9fa6ab503c38ce7a"],["/images/Math/image-1.png","1f906698a6e633e5a58fae1e90f5d086"],["/images/Math/image-2.png","505776fb3fae663dd2fffc2cbb8912df"],["/images/Math/image-3.png","790c8cd7db196f60355f9cb1c69aee35"],["/images/Math/image-4.png","7d279be185e83ecaf494a0c1c4b10324"],["/images/Math/image.png","9fcf99d7cd988a11507280eb66f08041"],["/images/bookmark-placeholder.svg","b2d8e621ea34ebe413b86ed347f1a9ce"],["/images/loading.svg","8badc85e91f9796e6d937af1f051a394"],["/images/logo.svg","a235fb749b09b2ff70c6b9c7b1d8f77a"],["/images/redefine-avatar.svg","31b2257b3adc30869d1e24b21cb14e0d"],["/images/redefine-favicon.svg","ed4d45a98f62db3d4eba27dc884cbeb0"],["/images/redefine-logo.svg","55b05193d4a5b41c7ad6c4c07beb4e2d"],["/images/wechat.jpg","e38615e5a7013f4edc496fd149335094"],["/index.html","f970c5dc9d694ba286a4a5ea684c9bb6"],["/js/build.js","4cb97ceb6b1575118d2a5a294df0e52e"],["/js/build/layouts/bookmarkNav.js","3460e55656b5677722045e8456638557"],["/js/build/layouts/categoryList.js","d223ba61f29a6c6db6b4ac2cf2c09b3a"],["/js/build/layouts/essays.js","a42a8acfb87dc279b2032ac32248595a"],["/js/build/layouts/lazyload.js","1af97d1b0e4827af3289bd02ba353652"],["/js/build/layouts/navbarShrink.js","eb612bf99cbf623348960a0418995234"],["/js/build/layouts/toc.js","c1aa78dba7676c80d299fad01a970882"],["/js/build/libs/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/build/libs/Swup.min.js","9ff02a08a69fe4addbd9af33359deabf"],["/js/build/libs/SwupPreloadPlugin.min.js","170c2637b152f61a7225171523b9e5f3"],["/js/build/libs/SwupProgressPlugin.min.js","f9eb5c6b192ac1dcd18b12666a647fd0"],["/js/build/libs/SwupScriptsPlugin.min.js","30935c9aeeb587c49d2e30c28f57c5e7"],["/js/build/libs/SwupScrollPlugin.min.js","85fe68c41c48170dd104ee4f29690798"],["/js/build/libs/SwupSlideTheme.min.js","2b1d521e1b83b5ffc073ad31045e682a"],["/js/build/libs/Typed.min.js","f68641147185cbded4b38b4900a20f40"],["/js/build/libs/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/js/build/libs/mermaid.min.js","fdcf2594f286ae41939de1b56ccdb0bc"],["/js/build/libs/minimasonry.min.js","a3b6453136c8edd4fdd374171f022ffa"],["/js/build/libs/moment-with-locales.min.js","ef33ee2255d562260ac4adcabf2c768c"],["/js/build/libs/moment.min.js","d65dc6d2e619406d105656424573214e"],["/js/build/libs/odometer.min.js","519a5777444f5965b6df23e26c69f037"],["/js/build/libs/pangu.min.js","56d77fdebf0e7828a3b3b12cc1efbc63"],["/js/build/libs/pjax.min.js","d810aff16a7f45392bdeec5493ebee8e"],["/js/build/main.js","bb9467c3fb6a0a3e6a226ec652105566"],["/js/build/plugins/aplayer.js","c15462ecab47acdb266e062d6ab3782e"],["/js/build/plugins/hbe.js","db6829fe5aa6ab23c7252888f66781f4"],["/js/build/plugins/masonry.js","a4c07f39193e1832e92b54932d3202b3"],["/js/build/plugins/mermaid.js","3f960d2d18e650a557e1457a711103f9"],["/js/build/plugins/pangu.js","cbb518dbc5cd5437b7368c788b983772"],["/js/build/plugins/tabs.js","1f0f2d385e648a8ec31a882f65bf764c"],["/js/build/plugins/typed.js","41f8e3cd3b936b43ff54ff9d4b5e2bba"],["/js/build/tools/codeBlock.js","f8a2e4ac225a53e4121483cd9aed445f"],["/js/build/tools/imageViewer.js","243aeba39a9cb07833abb485c0f526ee"],["/js/build/tools/lightDarkSwitch.js","f4c1044a333ba3bfbc4245d339a9dba7"],["/js/build/tools/localSearch.js","c0fdc28da5bedd83582124fdef72be55"],["/js/build/tools/runtime.js","fadb356f5e4cab95c0d8f48d9c401661"],["/js/build/tools/scrollTopBottom.js","14946c0722c997f8b9336a7a1e6f6470"],["/js/build/tools/tocToggle.js","98a0a4f7e5a5a5fcff6e03ca5dac40e0"],["/js/build/utils.js","45d08a43c3a1f6db81fd8b1414a674f1"],["/js/layouts/bookmarkNav.js","36df46799be7629afedb6fa43f828489"],["/js/layouts/categoryList.js","3a1b08a0b9b68fd58aa4807b136419dc"],["/js/layouts/essays.js","b32e43a0d2f90a96d868c843a597b070"],["/js/layouts/lazyload.js","8503398a901fb0ed1a462e216c05757e"],["/js/layouts/navbarShrink.js","56d8590d737466259cea6af1a3e72620"],["/js/layouts/toc.js","376f0655e26b29de651734f91ffa73d8"],["/js/libs/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/libs/Swup.min.js","9ff02a08a69fe4addbd9af33359deabf"],["/js/libs/SwupPreloadPlugin.min.js","170c2637b152f61a7225171523b9e5f3"],["/js/libs/SwupProgressPlugin.min.js","f9eb5c6b192ac1dcd18b12666a647fd0"],["/js/libs/SwupScriptsPlugin.min.js","30935c9aeeb587c49d2e30c28f57c5e7"],["/js/libs/SwupScrollPlugin.min.js","85fe68c41c48170dd104ee4f29690798"],["/js/libs/SwupSlideTheme.min.js","2b1d521e1b83b5ffc073ad31045e682a"],["/js/libs/Typed.min.js","f68641147185cbded4b38b4900a20f40"],["/js/libs/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/js/libs/mermaid.min.js","fdcf2594f286ae41939de1b56ccdb0bc"],["/js/libs/minimasonry.min.js","a3b6453136c8edd4fdd374171f022ffa"],["/js/libs/moment-with-locales.min.js","ef33ee2255d562260ac4adcabf2c768c"],["/js/libs/moment.min.js","d65dc6d2e619406d105656424573214e"],["/js/libs/odometer.min.js","519a5777444f5965b6df23e26c69f037"],["/js/libs/pangu.min.js","56d77fdebf0e7828a3b3b12cc1efbc63"],["/js/libs/pjax.min.js","d810aff16a7f45392bdeec5493ebee8e"],["/js/main.js","deb4adb99470bd21930a12daafe97e11"],["/js/plugins/aplayer.js","acdbe21d9fb7de5f5368af88d3b22305"],["/js/plugins/hbe.js","5e89552f037fc6eba616f416fc49e9bc"],["/js/plugins/masonry.js","0151d73753b28b8d9df0f73f61cc4e0a"],["/js/plugins/mermaid.js","4aac4cb7b9b513617e59bc7884b820a9"],["/js/plugins/pangu.js","bb977bff01661cf6a623005cf9aca72a"],["/js/plugins/tabs.js","3fafa26beaffde950297cf204b0af057"],["/js/plugins/typed.js","1698a8cfdff55a0e53354a806a3ac42a"],["/js/tools/codeBlock.js","735f50b0e8e312b2d8d718dd52c5c93d"],["/js/tools/imageViewer.js","ddf1c2d37b6d4b31b88e7261609e675c"],["/js/tools/lightDarkSwitch.js","8c209fa3354f0cdee159e8782cb50098"],["/js/tools/localSearch.js","370c999aa17f14b76b6cb949b7198990"],["/js/tools/runtime.js","0d0c8f536507e05456aa9ea205232f27"],["/js/tools/scrollTopBottom.js","696e7469d336ce1518c775122df4208e"],["/js/tools/tocToggle.js","f038255effb0588653b9e57e7ba49848"],["/js/utils.js","22926280dae8741636c5fbee36a4589a"],["/links/index.html","035586685350410276e949476f967166"],["/masonry/index.html","53a3161bd94e24edb61d523ccaedbb95"],["/page/2/index.html","32b70da8eeff0fed8fc3704665a16f55"],["/sw-register.js","97e2c5b0c821d3ae9c3c90d288f14347"],["/tags/AI/index.html","f5a25b89407c0e5853f59b3d243b25c0"],["/tags/C/index.html","ff233e6a93c4731868c07bbeafcf2f8e"],["/tags/index.html","a543feab0c2682e1e96d666b4a57e686"],["/tags/图论/index.html","dcefab2e48bb8564a9dcdaf1a1d588b5"],["/tags/怀旧/index.html","5e5e05d20bbdc2b06267fa8e9b24d1e7"],["/tags/数模/index.html","24d077b70cd3bf2f59b20e367e49144d"],["/tags/杂文/index.html","d0cbdc26d9d9493315ce5bbf2cb5c3e9"],["/tags/辩论/index.html","5715a595e215b688a6a8f0bbf5cd3ecf"],["/webfonts/fa-brands-400.ttf","2f73c22e9ab02b8f923c9577fb267e3c"],["/webfonts/fa-brands-400.woff2","a97f5f1605d31e8be772cafaae12d324"],["/webfonts/fa-duotone-900.ttf","5043107ed7dba7b22fea520507ffcbfa"],["/webfonts/fa-duotone-900.woff2","19df7b71c08c158645e908e031b67a59"],["/webfonts/fa-light-300.ttf","56720c95107daf1fc8c4e3efbde50d44"],["/webfonts/fa-light-300.woff2","892267898848cec59a6de9732f272dc4"],["/webfonts/fa-regular-400.ttf","fba93793e177af4a2277e468db6e409f"],["/webfonts/fa-regular-400.woff2","a4e56814c8f188544184d01fdb08efd4"],["/webfonts/fa-sharp-solid-900.ttf","258a4bbc66f0b3e34c28b4026816ec72"],["/webfonts/fa-sharp-solid-900.woff2","c85e3f8b36f91b247af9b9580c6142e5"],["/webfonts/fa-solid-900.ttf","7b93722a98b0178b89cad243a020f45c"],["/webfonts/fa-solid-900.woff2","9966f4967759f0a0e24b33218c42a89b"],["/webfonts/fa-thin-100.ttf","eedf47e45505ceb0798e86e80856a246"],["/webfonts/fa-thin-100.woff2","cbf2c277c8533f0d6b3350e0fd666fdb"],["/webfonts/fa-v4compatibility.ttf","69ecd6a58b5b719735db6f4fbce1d48d"],["/webfonts/fa-v4compatibility.woff2","99d005ad96a9d4f6e015ffac9350ce7a"]];
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









/* eslint-enable */
