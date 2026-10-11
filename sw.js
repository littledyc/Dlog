/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/06/13/在短视频时代写博客/index.html","1bd55e6bf5831c8730520891e5b94b45"],["/2023/10/08/数学家和辩手/index.html","c26729131de8838965192c5a1bdaa515"],["/2023/11/30/大语言模型测评及使用指南/index.html","2661af180040fdb7beef0d2057dc7b37"],["/2023/12/04/碎碎念/index.html","d4e7ab4455fc4a2353ed965bbc158917"],["/2023/12/06/程序如何辅助数学证明/index.html","642c988ccd7757322f6c62110aa993a1"],["/2024/04/04/常州/index.html","fd74be95f288ae114a80b9a12e360547"],["/2024/12/19/数模国赛/index.html","1cf6ddf5f4126659d20e5ad568b3741b"],["/2025/03/16/南京/index.html","802d7adc20873555a1fea863f394ae12"],["/2025/03/16/杭州/index.html","059ccc8b169aa86f61f5b44e2477637f"],["/2025/06/19/奉贤/index.html","1762e9b8e4bae7c47aafdbfe19f096b8"],["/2025/08/13/你是什么时候觉得自己可以改变世界的/index.html","b7726af6191105b51b7a86bf6d3836c4"],["/2025/09/26/保研/index.html","dc294ea0800f23119ae5d1ea3e81bfd6"],["/2026/10/11/免费额度指南/index.html","d5d6ca8cea4d9fefc401eb82e9ad7637"],["/404.html","7df5abbc88428255532077b941fed048"],["/ai-radar/2026-10-02.html","75d6a668f690d06937b996b7db28729e"],["/archives/2023/06/index.html","e250a0194396eb09e7cb93c23f2299e9"],["/archives/2023/10/index.html","4a7f9d6998c60adc4ba0e7e6dcaa5839"],["/archives/2023/11/index.html","c5253f7bc5cd03863a05a58968e64020"],["/archives/2023/12/index.html","f586c75133ae524d1e0e68e0cd213890"],["/archives/2023/index.html","068ad569f0b9c059c9b2e50861bd7e21"],["/archives/2024/04/index.html","c8359fb71b92d9f56b374768dfc6fbda"],["/archives/2024/12/index.html","4a5c2c40a6445ea8b20b1ec022411ebc"],["/archives/2024/index.html","8892b904eb5d265007838c07ec97d678"],["/archives/2025/03/index.html","19b06a49040d1a8106d6a2ef2087d6e8"],["/archives/2025/06/index.html","01b46bcf6330e63eeb92e0c7bdc0e276"],["/archives/2025/08/index.html","15a300a1e370fcee8b4c4ba9c4513dd4"],["/archives/2025/09/index.html","ce76b08d1f21d597b009f754d8a36431"],["/archives/2025/index.html","fa4b85af1f9e447eca2e47836a87b24b"],["/archives/2026/10/index.html","b13308d4e0c95c10c97716fe54099580"],["/archives/2026/index.html","7b29d38910551e62acc3a58060f51412"],["/archives/index.html","afbf4932da0fbd3e61df6e87c9cdf780"],["/archives/page/2/index.html","66fc6c907c8f35a57444058fb4639ef2"],["/assets/hbe.style.css","a964d46d46c8c0b52ab9543c51604688"],["/assets/odometer-theme-minimal.css","5e63b0172ec25f3f08e2ac8ba082e6b3"],["/baidu_verify_codeva-bnS6hbSUzd.html","859e4147d5ab163fb3cc9c0329fa3ea5"],["/bookmarks/index.html","ba8df9e375bc3fcdf219bfbcf6d3d2d5"],["/categories/AI-情报/index.html","e141b8d42b24f9cba3c52fa969056497"],["/categories/index.html","4d873829422b7ac4e0a2c4b58662f1b4"],["/categories/技术/index.html","710e3f71305725084f6a1f5f99d036ae"],["/categories/数学/index.html","87c2aeb2a4a01663edf64b6d52aefe27"],["/categories/旅行/index.html","925d88b050bed5fc7d0ea15f5e82c939"],["/categories/杂文/index.html","67f53981455e911d0bcce304283691f0"],["/css/build/tailwind.css","37854faab85655834526e5b2929a373f"],["/css/common/animated.css","f1326deaf05c070936fb9b4d7a8beb7b"],["/css/common/basic.css","e98ea4b3c5adb950a92f92010a669a89"],["/css/common/codeblock/code-block.css","5c9a35c92f9ed5026b57a04de3db5788"],["/css/common/codeblock/code-theme.css","b0c6e0fddbb35d08f39a3ecded56b79b"],["/css/common/codeblock/highlight.css","68cd3baf0e75486fbd33fef799806bec"],["/css/common/codeblock/hljs-themes/dark/a11y-dark.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/agate.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/atom-one-dark.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/github-dark.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/monokai-sublime.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/night-owl.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/nord.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/tokyo-night-dark.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/vs2015.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/light/atom-one-light.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/light/default.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/light/github.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/colors.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/markdown.css","6a8dab15d31d98f425519c806de8446d"],["/css/common/redefine-theme.css","568c4f6018cb6cfb529733eea0c3ff21"],["/css/common/theme.css","d06e4df44060b71ff736cd4c59adc18e"],["/css/common/variables.css","d06e4df44060b71ff736cd4c59adc18e"],["/css/hbe.style.css","d30e5ff0d4c137e9de87b7cf23838627"],["/css/layout/animations.css","c00f1abfcd01633a1a2d69307962c1b7"],["/css/layout/archive-content.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/layout/article-content.css","c449797cbee023dfe8415033d76cb980"],["/css/layout/bookmarks.css","e26cb42e0581fffe0ee5432e90a61b06"],["/css/layout/category-content.css","7416e9718fdc3939cd32ee30f84e43a5"],["/css/layout/category-list.css","03e63cf050767b7eb803b8c4f8fe3c6d"],["/css/layout/home-content.css","572f2de70b8aa9980bb6942a05611145"],["/css/layout/home-sidebar.css","b543cbf6ba3612595c096e21f2ff8ed2"],["/css/layout/page.css","42191e25ff8b8f45a12c09dae03c3dff"],["/css/layout/tag-content.css","5d47a70d29f2e7644379dd136ca41e90"],["/css/style.css","0234760c67e2101f998ffa573aac8b27"],["/css/tailwind.source.css","c136056717b1b316d04ec4695f7374bd"],["/fontawesome/all.min.css","9ec513d705ed7f4deb2b50bb05914817"],["/fontawesome/brands.min.css","40960f6969b87896c9889de920787ae8"],["/fontawesome/duotone.min.css","6d17219d846a2851c2ed490a62dd38cb"],["/fontawesome/fontawesome.min.css","7f252c83010f3cada47ee6a6f71d1ee8"],["/fontawesome/light.min.css","99d663cdb4567e9c0c000fc52c670fb8"],["/fontawesome/regular.min.css","020abce5e17082f0f18f92aed092c0b0"],["/fontawesome/sharp-solid.min.css","20abfb823fecc8a6a73458c5edd394f9"],["/fontawesome/solid.min.css","f484f18056587df321165f744e9ba571"],["/fontawesome/svg-with-js.min.css","c40530bda390deaaed914c49f34d9e1e"],["/fontawesome/thin.min.css","f44cae780bf8a7287221c340cbe4d815"],["/fontawesome/v4-font-face.min.css","52325430f1fa7f983a32f712ebb59b3a"],["/fontawesome/v4-shims.min.css","4d764578be067a44af663d56be333195"],["/fontawesome/v5-font-face.min.css","1cb7f16555da63aecd2828d3d3130d85"],["/fonts/Chillax/Chillax-Variable.eot","f8ea7af333c768147f674ba526612248"],["/fonts/Chillax/Chillax-Variable.ttf","5f13274ffe3e1ee77b67324cb1a9cf7c"],["/fonts/Chillax/Chillax-Variable.woff","16fee1e0f2e5db01ad15ce4535ad39e2"],["/fonts/Chillax/Chillax-Variable.woff2","5940855d51d43257fe1bbd7b0dc6710d"],["/fonts/Chillax/chillax.css","2f888ca613c09d22b977514e12aaa7b4"],["/fonts/Geist/GeistVF.ttf","8e8ae89cf243d3d79b7404594c4bc9fb"],["/fonts/Geist/GeistVF.woff","78e6fc13ea317b55ab0bd6dc4849c110"],["/fonts/Geist/GeistVF.woff2","0e46e732cced180e3a2c7285100f27d4"],["/fonts/Geist/geist.css","e03d09da9805c2f0e4c5d9ea9d448a9e"],["/fonts/GeistMono/GeistMonoVF.ttf","56335c91c8b94afe39dbdedea3edc556"],["/fonts/GeistMono/GeistMonoVF.woff","cbeb6d2d96eaa268b4b5beb0b46d9632"],["/fonts/GeistMono/GeistMonoVF.woff2","addf0d443087aa4b985f763c80182017"],["/fonts/GeistMono/geist-mono.css","99fefc4d4cff301e9fa6ab503c38ce7a"],["/images/Math/image-1.png","1f906698a6e633e5a58fae1e90f5d086"],["/images/Math/image-2.png","505776fb3fae663dd2fffc2cbb8912df"],["/images/Math/image-3.png","790c8cd7db196f60355f9cb1c69aee35"],["/images/Math/image-4.png","7d279be185e83ecaf494a0c1c4b10324"],["/images/Math/image.png","9fcf99d7cd988a11507280eb66f08041"],["/images/bookmark-placeholder.svg","b2d8e621ea34ebe413b86ed347f1a9ce"],["/images/loading.svg","8badc85e91f9796e6d937af1f051a394"],["/images/logo.svg","a235fb749b09b2ff70c6b9c7b1d8f77a"],["/images/redefine-avatar.svg","31b2257b3adc30869d1e24b21cb14e0d"],["/images/redefine-favicon.svg","ed4d45a98f62db3d4eba27dc884cbeb0"],["/images/redefine-logo.svg","55b05193d4a5b41c7ad6c4c07beb4e2d"],["/images/wechat.jpg","e38615e5a7013f4edc496fd149335094"],["/index.html","213a86ae42e957d783febb43a83b1ce0"],["/js/app/lifecycle.js","08c8c6eac0846d2714d7d1ca4fe90319"],["/js/app/pageScope.js","99d0c2ae3fecf07fb4d168765c0a7610"],["/js/build.js","4cb97ceb6b1575118d2a5a294df0e52e"],["/js/build/app/lifecycle.js","eaff9b87ac5be34c6a2a3783d3206028"],["/js/build/app/once.js","3e787bbfd5dc60926257cfc63e4d09b2"],["/js/build/app/pageScope.js","0089754cd4a19153dc0207383267dbb3"],["/js/build/layouts/bookmarkNav.js","116b6563dc534356cd120afe37a13e91"],["/js/build/layouts/categoryList.js","b8da07829b421681fe7a273bd0ecf996"],["/js/build/layouts/essays.js","bf45540557d38ca2ad175b2b03059a1b"],["/js/build/layouts/homeBanner.js","f8d79194387d6dd44088d3ea49b84577"],["/js/build/layouts/lazyload.js","572eaa366dccdf9214d8d93013480d5d"],["/js/build/layouts/navbarShrink.js","68b3a730e5f0aa23ca0f1f620c7852a7"],["/js/build/layouts/toc.js","7090229879f855c50830c8ae8257ff2f"],["/js/build/libs/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/build/libs/Swup.min.js","9ff02a08a69fe4addbd9af33359deabf"],["/js/build/libs/SwupPreloadPlugin.min.js","ec6ebac47cc1c919c7ac301c261dcbe3"],["/js/build/libs/SwupProgressPlugin.min.js","f9eb5c6b192ac1dcd18b12666a647fd0"],["/js/build/libs/SwupScriptsPlugin.min.js","30935c9aeeb587c49d2e30c28f57c5e7"],["/js/build/libs/SwupScrollPlugin.min.js","13381a00ddee4831c520001e68d6d8c9"],["/js/build/libs/SwupSlideTheme.min.js","2b1d521e1b83b5ffc073ad31045e682a"],["/js/build/libs/Typed.min.js","f68641147185cbded4b38b4900a20f40"],["/js/build/libs/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/js/build/libs/exif-reader.js","f6a256008959a34cc4bc24035f7d78df"],["/js/build/libs/mermaid.min.js","fdcf2594f286ae41939de1b56ccdb0bc"],["/js/build/libs/minimasonry.min.js","a3b6453136c8edd4fdd374171f022ffa"],["/js/build/libs/moment-with-locales.min.js","ef33ee2255d562260ac4adcabf2c768c"],["/js/build/libs/moment.min.js","d65dc6d2e619406d105656424573214e"],["/js/build/libs/odometer.min.js","519a5777444f5965b6df23e26c69f037"],["/js/build/libs/pangu.min.js","56d77fdebf0e7828a3b3b12cc1efbc63"],["/js/build/libs/pjax.min.js","d810aff16a7f45392bdeec5493ebee8e"],["/js/build/libs/waline.js","7b5784658aa9bff3987a00b17df1109b"],["/js/build/main.js","45cb1af6d98e83d3ed1fafbbb62d613d"],["/js/build/plugins/aplayer.js","c15462ecab47acdb266e062d6ab3782e"],["/js/build/plugins/hbe.js","42024ab5788e02e55026c08795a3c0d1"],["/js/build/plugins/masonry.js","5a53d7a0b8fb1ae571e183da72bed2df"],["/js/build/plugins/mermaid.js","bc7d278b1579a84099f7428a68b09362"],["/js/build/plugins/pangu.js","56a9434ba296ce23e632906fbd50e329"],["/js/build/plugins/tabs.js","3682d64505dbb374001ec72de13cc690"],["/js/build/plugins/typed.js","1315c2fc78f8eaf3bd155ba3f683b3ee"],["/js/build/state/styleStatus.js","9004e3e6c7f86ac4230ad12792f10225"],["/js/build/tools/codeBlock.js","43b6f284d44cdc4ae2429c21bd359950"],["/js/build/tools/expirationDate.js","cb1d1d79bd478f74ee93db1339cc995a"],["/js/build/tools/imageViewer.js","48610b9290df87fe86b1862bfac4be74"],["/js/build/tools/lightDarkSwitch.js","d09a89d6428d0d72e83d99140ef9c6b0"],["/js/build/tools/localSearch.js","bafa5726e94b04214ad9c03030940574"],["/js/build/tools/runtime.js","bfaf3bb5447fc9ab82297185b3358305"],["/js/build/tools/scrollTopBottom.js","49b6a9b969206838537c89ece360cb57"],["/js/build/tools/tocToggle.js","6a717f1e21340ecac051170e58852edf"],["/js/build/utils.js","52b87c50bc8f414526a0607a69dd0d67"],["/js/build/utils/layout.js","1a35c1c6ce142c50016c228828aa217d"],["/js/build/utils/scroll.js","7d3b0a554a335fcd218e77af2ee3124f"],["/js/build/utils/sideTools.js","2d34cbd89e337852a509d93fad7f0b29"],["/js/layouts/bookmarkNav.js","41a20a7005da22fc6655fd30f303ec8d"],["/js/layouts/categoryList.js","3cd414f10a3bb7c284bbf2ee8bb948db"],["/js/layouts/essays.js","4cc38ac55cce6cf487070ac2f80927cc"],["/js/layouts/homeBanner.js","7f69f159deb64053775a99027aa1e0f4"],["/js/layouts/lazyload.js","f8eb26c37f5622edd405fd97e61449c4"],["/js/layouts/navbarShrink.js","b76fe3e2f1a884644361cf49b560d8b3"],["/js/layouts/toc.js","01ad7913474508a82a75f350dec55b2c"],["/js/libs/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/libs/Swup.min.js","9ff02a08a69fe4addbd9af33359deabf"],["/js/libs/SwupPreloadPlugin.min.js","ec6ebac47cc1c919c7ac301c261dcbe3"],["/js/libs/SwupProgressPlugin.min.js","f9eb5c6b192ac1dcd18b12666a647fd0"],["/js/libs/SwupScriptsPlugin.min.js","30935c9aeeb587c49d2e30c28f57c5e7"],["/js/libs/SwupScrollPlugin.min.js","13381a00ddee4831c520001e68d6d8c9"],["/js/libs/SwupSlideTheme.min.js","2b1d521e1b83b5ffc073ad31045e682a"],["/js/libs/Typed.min.js","f68641147185cbded4b38b4900a20f40"],["/js/libs/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/js/libs/exif-reader.js","f6a256008959a34cc4bc24035f7d78df"],["/js/libs/mermaid.min.js","fdcf2594f286ae41939de1b56ccdb0bc"],["/js/libs/minimasonry.min.js","a3b6453136c8edd4fdd374171f022ffa"],["/js/libs/moment-with-locales.min.js","ef33ee2255d562260ac4adcabf2c768c"],["/js/libs/moment.min.js","d65dc6d2e619406d105656424573214e"],["/js/libs/odometer.min.js","519a5777444f5965b6df23e26c69f037"],["/js/libs/pangu.min.js","56d77fdebf0e7828a3b3b12cc1efbc63"],["/js/libs/pjax.min.js","d810aff16a7f45392bdeec5493ebee8e"],["/js/libs/waline.js","7b5784658aa9bff3987a00b17df1109b"],["/js/main.js","1f7812359dd633f69b1256e7c83a1e63"],["/js/plugins/aplayer.js","acdbe21d9fb7de5f5368af88d3b22305"],["/js/plugins/hbe.js","9d3b658e9e5063d05910080a35b7cbd2"],["/js/plugins/masonry.js","304d41a05ad02fe556721389129e9a81"],["/js/plugins/mermaid.js","f3fa22757879ac87d34aa9a9876fe57e"],["/js/plugins/pangu.js","ee7232c82523d8bc638cbc06508725d2"],["/js/plugins/tabs.js","ccc5d53a1451d39dfe5c0aca3c41f84d"],["/js/plugins/typed.js","635b0ec04cc42215808011a278eb48cb"],["/js/state/styleStatus.js","12953c2544ba9eb59ba9aa3e6b111c02"],["/js/tools/codeBlock.js","ea739facf86db43bb1f2efb4e04d8611"],["/js/tools/expirationDate.js","8f19fb95cddee78696836ee397e1ff3f"],["/js/tools/imageViewer.js","58170baaef6e4c5ce4ca8107b4b8749c"],["/js/tools/lightDarkSwitch.js","3b7716ac87b26fb94262fd83a1715128"],["/js/tools/localSearch.js","9cf2f43fcb43e91e11757985aed78742"],["/js/tools/runtime.js","d607e1688e89eec5d982afa7b1628eec"],["/js/tools/scrollTopBottom.js","604d0407ebf0803c61a11131982aa12e"],["/js/tools/tocToggle.js","10e662df34159473077ce27f33d84b03"],["/js/utils.js","c94ee0e0e4dc5dc39591108aec2cb753"],["/js/utils/layout.js","b9e52be535c1310f97464e15894ce999"],["/js/utils/scroll.js","3b3538e193015d1b0bd8ff2d210ebec5"],["/js/utils/sideTools.js","cfae78fb6acd5e3e957edbc71cc4a582"],["/links/index.html","74899c820a52f118ff201972b9eb2cc5"],["/masonry/index.html","f20ba826816d29af430b820a15d02948"],["/page/2/index.html","30a1b73e9ada723c565724fc329bfd41"],["/read/post-training-history.html","5f519d4893294904c9637ebb1b8e8a90"],["/sw-register.js","d46061260b9ac7e293e35e4548eaa492"],["/tags/3D-生成/index.html","31a58ff1a3ee1e6ec1f3ac05107abe71"],["/tags/AI/index.html","0fc7e68a3f5dd2a98f799271f9a0e0a8"],["/tags/API/index.html","8217335998451a0ccdd120b999317fed"],["/tags/Agent/index.html","55ef1d43325dfa983bb0a4b24fba9d25"],["/tags/PPO/index.html","7f9e4c5082f7e637586d91df0245c22d"],["/tags/Post-Training/index.html","977275c2e9bffd26b28a28f6106968e3"],["/tags/RLHF/index.html","6e72bad8b269253ac4484736fd6b56ea"],["/tags/SFT/index.html","ffd039d5523676df6b32757ec59c2c1d"],["/tags/Unity/index.html","81afb159787b57a33f5d9bf690e53268"],["/tags/index.html","31fd4ae25920d8600737e42037d40eba"],["/tags/免费额度/index.html","3d5a7843d0c68d39787bb2981917fa19"],["/tags/决策模型/index.html","5bed6e25add9d34d298658295e92041a"],["/tags/图论/index.html","215e05e117f05e813f8acb5e0db06621"],["/tags/怀旧/index.html","a2664f1e097b437aa0683922973c1670"],["/tags/数模/index.html","abb28a8b2b0ebebe6a7f34df9b657696"],["/tags/杂文/index.html","1162d258f715c2dbfea216a876b9abd7"],["/tags/精读/index.html","04178d44e0d8d12d4b8c07b1bbf389c6"],["/tags/辩论/index.html","c3e752ced643d2eda93da33dcd6f5d22"],["/webfonts/fa-brands-400.ttf","2f73c22e9ab02b8f923c9577fb267e3c"],["/webfonts/fa-brands-400.woff2","a97f5f1605d31e8be772cafaae12d324"],["/webfonts/fa-duotone-900.ttf","5043107ed7dba7b22fea520507ffcbfa"],["/webfonts/fa-duotone-900.woff2","19df7b71c08c158645e908e031b67a59"],["/webfonts/fa-light-300.ttf","56720c95107daf1fc8c4e3efbde50d44"],["/webfonts/fa-light-300.woff2","892267898848cec59a6de9732f272dc4"],["/webfonts/fa-regular-400.ttf","fba93793e177af4a2277e468db6e409f"],["/webfonts/fa-regular-400.woff2","a4e56814c8f188544184d01fdb08efd4"],["/webfonts/fa-sharp-solid-900.ttf","258a4bbc66f0b3e34c28b4026816ec72"],["/webfonts/fa-sharp-solid-900.woff2","c85e3f8b36f91b247af9b9580c6142e5"],["/webfonts/fa-solid-900.ttf","7b93722a98b0178b89cad243a020f45c"],["/webfonts/fa-solid-900.woff2","9966f4967759f0a0e24b33218c42a89b"],["/webfonts/fa-thin-100.ttf","eedf47e45505ceb0798e86e80856a246"],["/webfonts/fa-thin-100.woff2","cbf2c277c8533f0d6b3350e0fd666fdb"],["/webfonts/fa-v4compatibility.ttf","69ecd6a58b5b719735db6f4fbce1d48d"],["/webfonts/fa-v4compatibility.woff2","99d005ad96a9d4f6e015ffac9350ce7a"]];
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
