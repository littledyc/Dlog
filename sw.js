/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/06/13/在短视频时代写博客/index.html","e166876eeb8c8761aa793e3c19be5861"],["/2023/10/08/数学家和辩手/index.html","aa7d8a9b4f4f6fa285dbf2792e4539b7"],["/2023/11/30/大语言模型测评及使用指南/index.html","27912068ab01cd4cb3f507edbcfb1633"],["/2023/12/04/碎碎念/index.html","ebf993416eb7f602df5930e411035dff"],["/2023/12/06/程序如何辅助数学证明/index.html","f593897bbb27d0f5c403fb6c280a4efe"],["/2024/04/04/常州/index.html","b3189df5e329753483aebfae1dff02e0"],["/2024/12/19/数模国赛/index.html","b329298d3556f8e2c543fe17a998532a"],["/2025/03/16/南京/index.html","5a13019a401dc90365da691f5d8d9184"],["/2025/03/16/杭州/index.html","145e90378db8b092955ea53ab916c5c6"],["/2025/06/19/奉贤/index.html","60bdf821d3affcf3750b29440657caac"],["/2025/08/13/你是什么时候觉得自己可以改变世界的/index.html","27739dd62a1f5d1b420f60670b6c8b3a"],["/2025/09/26/保研/index.html","611d695fa99e825ee920747aee408990"],["/2026/08/24/HTML写作测试/index.html","aeaee0ca83f573b307527c02de668e04"],["/2026/08/24/HTML能力演示/index.html","d661aeb161bc49c37093958b0379ddd1"],["/404.html","2b0c0b7ce08c313e12f3719b23e75555"],["/README.html","d4087adfcec7ce164031529286c82bca"],["/archives/2023/06/index.html","6890cc8e9e5e44b7e18920d67cad3e9c"],["/archives/2023/10/index.html","aa42a0f8fd3c1ee3e1d222a0683463d9"],["/archives/2023/11/index.html","8f98762bb560ba03a14e3d49928214fe"],["/archives/2023/12/index.html","60bd0886f77fc1932afd3c94d27b6eeb"],["/archives/2023/index.html","452a946ec076e3d258b90985004dd2df"],["/archives/2024/04/index.html","345f27140cdc6e3f788b77a18d606792"],["/archives/2024/12/index.html","4527b4f7de88fe3c1887c3fdd507ed3a"],["/archives/2024/index.html","15461f995953471fc708f6bd1abbbdfe"],["/archives/2025/03/index.html","3bb4bdea8e1ff0548dcceca632b060d4"],["/archives/2025/06/index.html","fce592198adcee5c5f3e1d08df7d1af6"],["/archives/2025/08/index.html","d9f94fd050e3ffba2f99c4a84f1c29bc"],["/archives/2025/09/index.html","883f6b72f9f45275fe3e610891e93a56"],["/archives/2025/index.html","3530fb7ee109d3fc2abd8ce61651e220"],["/archives/2026/08/index.html","2660f89b577c89fb7617de54a31a62b1"],["/archives/2026/index.html","0122eed5b37fb6194b82d4b446c5c26f"],["/archives/index.html","327a04779407baacf4624398f511c841"],["/archives/page/2/index.html","d87d6695a4d44460a2f239ba5de0fbfd"],["/assets/hbe.style.css","a964d46d46c8c0b52ab9543c51604688"],["/assets/odometer-theme-minimal.css","5e63b0172ec25f3f08e2ac8ba082e6b3"],["/baidu_verify_codeva-bnS6hbSUzd.html","859e4147d5ab163fb3cc9c0329fa3ea5"],["/bookmarks/index.html","68c4d7644307c741dc7e67dddf0525be"],["/categories/index.html","85d3f3c1bae72a090c097ae1c0762ee2"],["/categories/技术/index.html","7d5b4d0df3365060ae528da041b5f9d8"],["/categories/数学/index.html","a564b9931def320bb3e9ffb59ead5b65"],["/categories/旅行/index.html","d6783eb78a30e807e7e72739234b2d3b"],["/categories/杂文/index.html","71c7c39cbd887451f32b32a2787f6e03"],["/css/build/tailwind.css","37854faab85655834526e5b2929a373f"],["/css/common/animated.css","f1326deaf05c070936fb9b4d7a8beb7b"],["/css/common/basic.css","e98ea4b3c5adb950a92f92010a669a89"],["/css/common/codeblock/code-block.css","5c9a35c92f9ed5026b57a04de3db5788"],["/css/common/codeblock/code-theme.css","b0c6e0fddbb35d08f39a3ecded56b79b"],["/css/common/codeblock/highlight.css","68cd3baf0e75486fbd33fef799806bec"],["/css/common/codeblock/hljs-themes/dark/a11y-dark.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/agate.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/atom-one-dark.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/github-dark.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/monokai-sublime.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/night-owl.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/nord.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/tokyo-night-dark.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/vs2015.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/light/atom-one-light.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/light/default.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/light/github.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/colors.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/markdown.css","6a8dab15d31d98f425519c806de8446d"],["/css/common/redefine-theme.css","568c4f6018cb6cfb529733eea0c3ff21"],["/css/common/theme.css","d06e4df44060b71ff736cd4c59adc18e"],["/css/common/variables.css","d06e4df44060b71ff736cd4c59adc18e"],["/css/hbe.style.css","d30e5ff0d4c137e9de87b7cf23838627"],["/css/layout/animations.css","c00f1abfcd01633a1a2d69307962c1b7"],["/css/layout/archive-content.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/layout/article-content.css","c449797cbee023dfe8415033d76cb980"],["/css/layout/bookmarks.css","e26cb42e0581fffe0ee5432e90a61b06"],["/css/layout/category-content.css","7416e9718fdc3939cd32ee30f84e43a5"],["/css/layout/category-list.css","03e63cf050767b7eb803b8c4f8fe3c6d"],["/css/layout/home-content.css","572f2de70b8aa9980bb6942a05611145"],["/css/layout/home-sidebar.css","b543cbf6ba3612595c096e21f2ff8ed2"],["/css/layout/page.css","42191e25ff8b8f45a12c09dae03c3dff"],["/css/layout/tag-content.css","5d47a70d29f2e7644379dd136ca41e90"],["/css/style.css","0234760c67e2101f998ffa573aac8b27"],["/css/tailwind.source.css","c136056717b1b316d04ec4695f7374bd"],["/fontawesome/all.min.css","9ec513d705ed7f4deb2b50bb05914817"],["/fontawesome/brands.min.css","40960f6969b87896c9889de920787ae8"],["/fontawesome/duotone.min.css","6d17219d846a2851c2ed490a62dd38cb"],["/fontawesome/fontawesome.min.css","7f252c83010f3cada47ee6a6f71d1ee8"],["/fontawesome/light.min.css","99d663cdb4567e9c0c000fc52c670fb8"],["/fontawesome/regular.min.css","020abce5e17082f0f18f92aed092c0b0"],["/fontawesome/sharp-solid.min.css","20abfb823fecc8a6a73458c5edd394f9"],["/fontawesome/solid.min.css","f484f18056587df321165f744e9ba571"],["/fontawesome/svg-with-js.min.css","c40530bda390deaaed914c49f34d9e1e"],["/fontawesome/thin.min.css","f44cae780bf8a7287221c340cbe4d815"],["/fontawesome/v4-font-face.min.css","52325430f1fa7f983a32f712ebb59b3a"],["/fontawesome/v4-shims.min.css","4d764578be067a44af663d56be333195"],["/fontawesome/v5-font-face.min.css","1cb7f16555da63aecd2828d3d3130d85"],["/fonts/Chillax/Chillax-Variable.eot","f8ea7af333c768147f674ba526612248"],["/fonts/Chillax/Chillax-Variable.ttf","5f13274ffe3e1ee77b67324cb1a9cf7c"],["/fonts/Chillax/Chillax-Variable.woff","16fee1e0f2e5db01ad15ce4535ad39e2"],["/fonts/Chillax/Chillax-Variable.woff2","5940855d51d43257fe1bbd7b0dc6710d"],["/fonts/Chillax/chillax.css","2f888ca613c09d22b977514e12aaa7b4"],["/fonts/Geist/GeistVF.ttf","8e8ae89cf243d3d79b7404594c4bc9fb"],["/fonts/Geist/GeistVF.woff","78e6fc13ea317b55ab0bd6dc4849c110"],["/fonts/Geist/GeistVF.woff2","0e46e732cced180e3a2c7285100f27d4"],["/fonts/Geist/geist.css","e03d09da9805c2f0e4c5d9ea9d448a9e"],["/fonts/GeistMono/GeistMonoVF.ttf","56335c91c8b94afe39dbdedea3edc556"],["/fonts/GeistMono/GeistMonoVF.woff","cbeb6d2d96eaa268b4b5beb0b46d9632"],["/fonts/GeistMono/GeistMonoVF.woff2","addf0d443087aa4b985f763c80182017"],["/fonts/GeistMono/geist-mono.css","99fefc4d4cff301e9fa6ab503c38ce7a"],["/images/Math/image-1.png","1f906698a6e633e5a58fae1e90f5d086"],["/images/Math/image-2.png","505776fb3fae663dd2fffc2cbb8912df"],["/images/Math/image-3.png","790c8cd7db196f60355f9cb1c69aee35"],["/images/Math/image-4.png","7d279be185e83ecaf494a0c1c4b10324"],["/images/Math/image.png","9fcf99d7cd988a11507280eb66f08041"],["/images/bookmark-placeholder.svg","b2d8e621ea34ebe413b86ed347f1a9ce"],["/images/loading.svg","8badc85e91f9796e6d937af1f051a394"],["/images/logo.svg","a235fb749b09b2ff70c6b9c7b1d8f77a"],["/images/redefine-avatar.svg","31b2257b3adc30869d1e24b21cb14e0d"],["/images/redefine-favicon.svg","ed4d45a98f62db3d4eba27dc884cbeb0"],["/images/redefine-logo.svg","55b05193d4a5b41c7ad6c4c07beb4e2d"],["/images/wechat.jpg","e38615e5a7013f4edc496fd149335094"],["/index.html","6dcf7a40b34d4a3d3cd00bfac95cc6ad"],["/js/app/lifecycle.js","08c8c6eac0846d2714d7d1ca4fe90319"],["/js/app/pageScope.js","99d0c2ae3fecf07fb4d168765c0a7610"],["/js/build.js","4cb97ceb6b1575118d2a5a294df0e52e"],["/js/build/app/lifecycle.js","eaff9b87ac5be34c6a2a3783d3206028"],["/js/build/app/once.js","3e787bbfd5dc60926257cfc63e4d09b2"],["/js/build/app/pageScope.js","0089754cd4a19153dc0207383267dbb3"],["/js/build/layouts/bookmarkNav.js","116b6563dc534356cd120afe37a13e91"],["/js/build/layouts/categoryList.js","b8da07829b421681fe7a273bd0ecf996"],["/js/build/layouts/essays.js","bf45540557d38ca2ad175b2b03059a1b"],["/js/build/layouts/homeBanner.js","f8d79194387d6dd44088d3ea49b84577"],["/js/build/layouts/lazyload.js","572eaa366dccdf9214d8d93013480d5d"],["/js/build/layouts/navbarShrink.js","68b3a730e5f0aa23ca0f1f620c7852a7"],["/js/build/layouts/toc.js","7090229879f855c50830c8ae8257ff2f"],["/js/build/libs/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/build/libs/Swup.min.js","9ff02a08a69fe4addbd9af33359deabf"],["/js/build/libs/SwupPreloadPlugin.min.js","ec6ebac47cc1c919c7ac301c261dcbe3"],["/js/build/libs/SwupProgressPlugin.min.js","f9eb5c6b192ac1dcd18b12666a647fd0"],["/js/build/libs/SwupScriptsPlugin.min.js","30935c9aeeb587c49d2e30c28f57c5e7"],["/js/build/libs/SwupScrollPlugin.min.js","13381a00ddee4831c520001e68d6d8c9"],["/js/build/libs/SwupSlideTheme.min.js","2b1d521e1b83b5ffc073ad31045e682a"],["/js/build/libs/Typed.min.js","f68641147185cbded4b38b4900a20f40"],["/js/build/libs/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/js/build/libs/exif-reader.js","f6a256008959a34cc4bc24035f7d78df"],["/js/build/libs/mermaid.min.js","fdcf2594f286ae41939de1b56ccdb0bc"],["/js/build/libs/minimasonry.min.js","a3b6453136c8edd4fdd374171f022ffa"],["/js/build/libs/moment-with-locales.min.js","ef33ee2255d562260ac4adcabf2c768c"],["/js/build/libs/moment.min.js","d65dc6d2e619406d105656424573214e"],["/js/build/libs/odometer.min.js","519a5777444f5965b6df23e26c69f037"],["/js/build/libs/pangu.min.js","56d77fdebf0e7828a3b3b12cc1efbc63"],["/js/build/libs/pjax.min.js","d810aff16a7f45392bdeec5493ebee8e"],["/js/build/libs/waline.js","7b5784658aa9bff3987a00b17df1109b"],["/js/build/main.js","45cb1af6d98e83d3ed1fafbbb62d613d"],["/js/build/plugins/aplayer.js","c15462ecab47acdb266e062d6ab3782e"],["/js/build/plugins/hbe.js","42024ab5788e02e55026c08795a3c0d1"],["/js/build/plugins/masonry.js","5a53d7a0b8fb1ae571e183da72bed2df"],["/js/build/plugins/mermaid.js","bc7d278b1579a84099f7428a68b09362"],["/js/build/plugins/pangu.js","56a9434ba296ce23e632906fbd50e329"],["/js/build/plugins/tabs.js","3682d64505dbb374001ec72de13cc690"],["/js/build/plugins/typed.js","1315c2fc78f8eaf3bd155ba3f683b3ee"],["/js/build/state/styleStatus.js","9004e3e6c7f86ac4230ad12792f10225"],["/js/build/tools/codeBlock.js","43b6f284d44cdc4ae2429c21bd359950"],["/js/build/tools/expirationDate.js","cb1d1d79bd478f74ee93db1339cc995a"],["/js/build/tools/imageViewer.js","48610b9290df87fe86b1862bfac4be74"],["/js/build/tools/lightDarkSwitch.js","d09a89d6428d0d72e83d99140ef9c6b0"],["/js/build/tools/localSearch.js","bafa5726e94b04214ad9c03030940574"],["/js/build/tools/runtime.js","bfaf3bb5447fc9ab82297185b3358305"],["/js/build/tools/scrollTopBottom.js","49b6a9b969206838537c89ece360cb57"],["/js/build/tools/tocToggle.js","6a717f1e21340ecac051170e58852edf"],["/js/build/utils.js","52b87c50bc8f414526a0607a69dd0d67"],["/js/build/utils/layout.js","1a35c1c6ce142c50016c228828aa217d"],["/js/build/utils/scroll.js","7d3b0a554a335fcd218e77af2ee3124f"],["/js/build/utils/sideTools.js","2d34cbd89e337852a509d93fad7f0b29"],["/js/layouts/bookmarkNav.js","41a20a7005da22fc6655fd30f303ec8d"],["/js/layouts/categoryList.js","3cd414f10a3bb7c284bbf2ee8bb948db"],["/js/layouts/essays.js","4cc38ac55cce6cf487070ac2f80927cc"],["/js/layouts/homeBanner.js","7f69f159deb64053775a99027aa1e0f4"],["/js/layouts/lazyload.js","f8eb26c37f5622edd405fd97e61449c4"],["/js/layouts/navbarShrink.js","b76fe3e2f1a884644361cf49b560d8b3"],["/js/layouts/toc.js","01ad7913474508a82a75f350dec55b2c"],["/js/libs/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/libs/Swup.min.js","9ff02a08a69fe4addbd9af33359deabf"],["/js/libs/SwupPreloadPlugin.min.js","ec6ebac47cc1c919c7ac301c261dcbe3"],["/js/libs/SwupProgressPlugin.min.js","f9eb5c6b192ac1dcd18b12666a647fd0"],["/js/libs/SwupScriptsPlugin.min.js","30935c9aeeb587c49d2e30c28f57c5e7"],["/js/libs/SwupScrollPlugin.min.js","13381a00ddee4831c520001e68d6d8c9"],["/js/libs/SwupSlideTheme.min.js","2b1d521e1b83b5ffc073ad31045e682a"],["/js/libs/Typed.min.js","f68641147185cbded4b38b4900a20f40"],["/js/libs/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/js/libs/exif-reader.js","f6a256008959a34cc4bc24035f7d78df"],["/js/libs/mermaid.min.js","fdcf2594f286ae41939de1b56ccdb0bc"],["/js/libs/minimasonry.min.js","a3b6453136c8edd4fdd374171f022ffa"],["/js/libs/moment-with-locales.min.js","ef33ee2255d562260ac4adcabf2c768c"],["/js/libs/moment.min.js","d65dc6d2e619406d105656424573214e"],["/js/libs/odometer.min.js","519a5777444f5965b6df23e26c69f037"],["/js/libs/pangu.min.js","56d77fdebf0e7828a3b3b12cc1efbc63"],["/js/libs/pjax.min.js","d810aff16a7f45392bdeec5493ebee8e"],["/js/libs/waline.js","7b5784658aa9bff3987a00b17df1109b"],["/js/main.js","1f7812359dd633f69b1256e7c83a1e63"],["/js/plugins/aplayer.js","acdbe21d9fb7de5f5368af88d3b22305"],["/js/plugins/hbe.js","9d3b658e9e5063d05910080a35b7cbd2"],["/js/plugins/masonry.js","304d41a05ad02fe556721389129e9a81"],["/js/plugins/mermaid.js","f3fa22757879ac87d34aa9a9876fe57e"],["/js/plugins/pangu.js","ee7232c82523d8bc638cbc06508725d2"],["/js/plugins/tabs.js","ccc5d53a1451d39dfe5c0aca3c41f84d"],["/js/plugins/typed.js","635b0ec04cc42215808011a278eb48cb"],["/js/state/styleStatus.js","12953c2544ba9eb59ba9aa3e6b111c02"],["/js/tools/codeBlock.js","ea739facf86db43bb1f2efb4e04d8611"],["/js/tools/expirationDate.js","8f19fb95cddee78696836ee397e1ff3f"],["/js/tools/imageViewer.js","58170baaef6e4c5ce4ca8107b4b8749c"],["/js/tools/lightDarkSwitch.js","3b7716ac87b26fb94262fd83a1715128"],["/js/tools/localSearch.js","9cf2f43fcb43e91e11757985aed78742"],["/js/tools/runtime.js","d607e1688e89eec5d982afa7b1628eec"],["/js/tools/scrollTopBottom.js","604d0407ebf0803c61a11131982aa12e"],["/js/tools/tocToggle.js","10e662df34159473077ce27f33d84b03"],["/js/utils.js","c94ee0e0e4dc5dc39591108aec2cb753"],["/js/utils/layout.js","b9e52be535c1310f97464e15894ce999"],["/js/utils/scroll.js","3b3538e193015d1b0bd8ff2d210ebec5"],["/js/utils/sideTools.js","cfae78fb6acd5e3e957edbc71cc4a582"],["/links/index.html","1e5ec9d36bd59735cf73051291a88249"],["/masonry/index.html","bfad9ae4360a0546a4012f1273850c99"],["/page/2/index.html","470adbeec853dc38ce998b838e33040c"],["/sw-register.js","c26e93adac53ccc15f02009f1dfd2bc7"],["/tags/AI/index.html","adce9e8dad45247ef3a9c4a4a6c32fde"],["/tags/index.html","ac66487eda570b62e62940e14e4b3d61"],["/tags/图论/index.html","ef97825b4e98250f611fa5abde8b263b"],["/tags/怀旧/index.html","eeafce6c1bf27bd2b1a304a8164c9a8d"],["/tags/数模/index.html","8aa8849e3bd20c81efc0abc2c3641209"],["/tags/杂文/index.html","50ec93d2cd5ebc6a774ed1a5b886dcb4"],["/tags/测试/index.html","257c0de02db11920e48576735fe8f6ae"],["/tags/辩论/index.html","6472361548c4290f0233a8773a233b04"],["/webfonts/fa-brands-400.ttf","2f73c22e9ab02b8f923c9577fb267e3c"],["/webfonts/fa-brands-400.woff2","a97f5f1605d31e8be772cafaae12d324"],["/webfonts/fa-duotone-900.ttf","5043107ed7dba7b22fea520507ffcbfa"],["/webfonts/fa-duotone-900.woff2","19df7b71c08c158645e908e031b67a59"],["/webfonts/fa-light-300.ttf","56720c95107daf1fc8c4e3efbde50d44"],["/webfonts/fa-light-300.woff2","892267898848cec59a6de9732f272dc4"],["/webfonts/fa-regular-400.ttf","fba93793e177af4a2277e468db6e409f"],["/webfonts/fa-regular-400.woff2","a4e56814c8f188544184d01fdb08efd4"],["/webfonts/fa-sharp-solid-900.ttf","258a4bbc66f0b3e34c28b4026816ec72"],["/webfonts/fa-sharp-solid-900.woff2","c85e3f8b36f91b247af9b9580c6142e5"],["/webfonts/fa-solid-900.ttf","7b93722a98b0178b89cad243a020f45c"],["/webfonts/fa-solid-900.woff2","9966f4967759f0a0e24b33218c42a89b"],["/webfonts/fa-thin-100.ttf","eedf47e45505ceb0798e86e80856a246"],["/webfonts/fa-thin-100.woff2","cbf2c277c8533f0d6b3350e0fd666fdb"],["/webfonts/fa-v4compatibility.ttf","69ecd6a58b5b719735db6f4fbce1d48d"],["/webfonts/fa-v4compatibility.woff2","99d005ad96a9d4f6e015ffac9350ce7a"]];
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
