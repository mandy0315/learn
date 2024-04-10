$(document).ready(function () {
    $('.button').click(function (e) { 
        // .stop() 停止這階段進行下階段 
        $('.box').stop().slideToggle(4000);
    });
});