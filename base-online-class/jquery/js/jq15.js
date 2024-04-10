$(document).ready(function () {
    $('.menu-there a').hover(function (e) { 
        e.preventDefault();
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
        $('body').addClass('open');
        $('.there-content').show().siblings().hide(); 
    });
    $('.menu-two a').hover(function (e) {
        e.preventDefault();
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
        $('body').addClass('open');
        $('.two-content').show().siblings().hide();
    });
    // $('.menu-there a').hover(function (e) {
    //     e.preventDefault();
    //     $(this).addClass('active');
    //     $('body').addClass('open');
    //     $('.there-content').show().siblings().hide(); 
            
    //     }
    //     , function (e) {
    //     $(this).removeClass('active');
    //     $('body').removeClass('open');
    //     }
    // );
});