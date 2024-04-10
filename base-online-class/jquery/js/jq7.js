$(document).ready(function () {
    $('.button').click(function (e) { 
        // 連續累加動態
        $('.box').fadeOut(1000).fadeIn(1000).slideUp(1000).slideDown(1000);
        
    });
});