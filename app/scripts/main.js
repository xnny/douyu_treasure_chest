/**
 * 内容相关
 * User: 'xnny'
 * DateTime: 2019-02-06 12:03
 */




setInterval(
    function() {
        let treasure_box = document.getElementsByClassName('TreasureStatus');
        if (treasure_box.length > 0) {
            console.log('Draw ing...');
            document.getElementsByClassName('TreasureStatus')[0].click();
        }
    },
    800
);

