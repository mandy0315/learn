$(document).ready(function () {
    $('.b-font').click(function (e) { 
        // jq12字體大中小
        e.preventDefault();
        $('.b-font').addClass('active').parent().siblings().find('a').removeClass('active');
        // 字體放大
        $('.content p').css('font-size', '20px');
    });
    $('.m-font').click(function (e) {
        e.preventDefault();
        $('.m-font').toggleClass('active').parent().siblings().find('a').removeClass('active');
        // 字體放中
        $('.content p').css('font-size', '16px');
    });
    $('.s-font').click(function (e) {
        e.preventDefault();
        $('.s-font').toggleClass('active').parent().siblings().find('a').removeClass('active');
        // 字體放小
        $('.content p').css('font-size', '12px');
    });

    // 廣告關閉
    $('.ad-close').click(function (e) { 
        e.preventDefault();
        // ad淡出
        $('.ad').fadeOut();
        
    });
    
});