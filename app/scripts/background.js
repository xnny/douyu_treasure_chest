
/**
 * 背景页面
 * User: 'xnny'
 * DateTime: 2019-02-06 11:57
 */

// 禁此原生 JS 文件 载入
let block_urls = [
    'https://sta-op.douyucdn.cn/nggsys/*',
    'https://sta-op.douyucdn.cn/front-publish/live-master/js/room/playerAside_*.js',
];


function blockCallback(details) {
    if (details.url.indexOf('https://sta-op.douyucdn.cn/front-publish/live-master/js/room/playerAside') > -1) {
        let redirect_url = 'http://127.0.0.1/playerAside.js';   // 用自己人的 JS 替换
        console.log(redirect_url);
        return {
            redirectUrl: redirect_url
        }
    }
    console.log(details);return {cancel: true};
}

// 屏蔽页面
chrome.webRequest.onBeforeRequest.addListener(blockCallback, {urls: block_urls,types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]}, ['blocking']);
