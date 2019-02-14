/**
 * 内容相关
 * User: 'xnny'
 * DateTime: 2019-02-06 12:03
 */

/**
 * 抽奖
 */
function treasureChest() {
    let treasure_box = document.getElementsByClassName('TreasureStatus');
    if (treasure_box.length < 1) {
        return;
    }
    let status_box = document.getElementsByClassName('TreasureStatus-text');
    if (status_box.length < 1) {
        return;
    }
    let status_box_text = status_box[0].innerText;
    if (status_box_text === '领取') {
        console.log('Draw 0 ing...');
        document.getElementsByClassName('TreasureStatus')[0].click();
        return;
    }
    let status_arr = status_box_text.split(':');
    if (status_arr.length < 2) {
        return;
    }
    if (status_arr[0] !== '00') {
        return;
    }
    let s_time = parseInt(status_arr[1]);
    sendBarrage(s_time);
    if (s_time > 10) {
        return;
    }
    console.log('Draw 1 ing...');
    document.getElementsByClassName('TreasureStatus')[0].click();
}

/**
 * 得到一个随机弹幕
 * @returns {string}
 */
function getRandomMSG() {
    let msg_list = ['来了来了', '出现了', '666666', '闹呢', 'five', '。。。。。。', ];
    return msg_list[Math.floor(Math.random()*msg_list.length)];
}

/**
 * 发送一个弹幕
 * @param countdown_time
 * @returns {boolean}
 */
function sendBarrage(countdown_time) {
    if (countdown_time % 10 !== 0) {
        return false;
    }
    let barrage_index = Math.floor((Math.random()*10));
    let barrage_obj = document.getElementsByClassName('Barrage-content');   // [barrage_index].innerText;
    let barrage_msg = '';
    if (barrage_obj.length < barrage_index + 1) {
        barrage_msg = getRandomMSG();
    }
    else {
        barrage_msg = barrage_obj[barrage_index].innerText;
    }

    document.getElementsByClassName('ChatSend-txt')[0].value = barrage_msg;
    document.getElementsByClassName('ChatSend-button')[0].click()
}



function main() {
    setInterval(
        treasureChest,
        500
    );
}

/**
 * 删除活动
 */
function removeActivity() {
    let t = setInterval(function () {
        if (document.readyState === 'complete') {
            clearInterval(t);
            window.document.getElementById('js-room-activity').outerHTML = '';
        }
        }, 1000
    );

}

console.log('++' + document.location.hostname);
if (window.location.hostname === 'www.douyu.com') {
    main();
    removeActivity();
}

