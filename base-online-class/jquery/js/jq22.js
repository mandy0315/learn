$(document).ready(function () {
    $('.menu > li > a').click(function (e) { 
        e.preventDefault();

        $(this).toggleClass('active').parent().siblings().find(' a').removeClass('active');
        
        $(this).parent().find('ul').slideToggle().parent().siblings().find('ul').slideUp();
    });
});