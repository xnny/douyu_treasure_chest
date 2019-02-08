/**
 * 内容相关
 * User: 'xnny'
 * DateTime: 2019-02-06 12:03
 */




setInterval(
    function() {
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
        if (s_time > 10) {
            return;
        }
        console.log('Draw 1 ing...');
        document.getElementsByClassName('TreasureStatus')[0].click();
    },
    500
);

