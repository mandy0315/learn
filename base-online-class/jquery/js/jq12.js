$(document).ready(function () {
    $('.b-font').click(function (e) { 
        e.preventDefault();
        // 點選會一直出現藍底，點其他的另外兩個藍底會消失
        $('.b-font').addClass('active').parent().siblings().find('a').removeClass('active');
        // 字體放大
        $('.content p').css('font-size','20px');
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
    
});