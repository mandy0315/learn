$(document).ready(function () {
    $('.button').click(function (e) { 
        // toggleClass=.text裡沒有會新增class(裡面不加.)/.text裡有會刪除class(裡面不加.)
        // 單獨也能使用 增加addClass 刪除removeClass
        $('.text').toggleClass('active');
    });

    $('.button2').click(function (e) {
        $('.text2').toggleClass('active2');
    });
});