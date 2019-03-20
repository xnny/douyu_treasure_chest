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
        let b_len = document.getElementsByClassName('Barrage-content').length;
        let b_index = b_len - barrage_index - 1;
        console.log('b_index:' + b_index);
        barrage_msg = document.getElementsByClassName('Barrage-content')[b_index].innerText;
    }

    document.getElementsByClassName('ChatSend-txt')[0].value = barrage_msg;
    document.getElementsByClassName('ChatSend-button')[0].click();
    let time_id = setInterval(function () {
        console.log('geetest_radar_tip_content');
        if (document.getElementsByClassName('geetest_radar_tip_content').length > 0) {
            console.log('clearInterval');
            document.getElementsByClassName('geetest_radar_tip_content')[0].click();
            clearInterval(time_id);
        }
    }, 200);
}



function main() {
    setInterval(
        treasureChest,
        400
    );
}

/**
 * 删除活动
 */
function removeActivity() {
    let t = setInterval(function () {
        if (document.readyState === 'complete') {
            if (window.document.getElementById('js-room-activity')) {
                window.document.getElementById('js-room-activity').outerHTML = '';
            }
            if (window.document.getElementsByClassName('Bottom-ad').length > 0) {
                clearInterval(t);
                window.document.getElementsByClassName('Bottom-ad')[0].outerHTML = '';
            }
            if (window.document.getElementsByClassName('Title-ad').length > 0) {
                window.document.getElementsByClassName('Title-ad')[0].outerHTML = '';
            }
        }
        }, 1000
    );

}

if (window.location.hostname === 'www.douyu.com') {
    main();
    removeActivity();
}

