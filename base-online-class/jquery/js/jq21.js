$(document).ready(function () {
    $('.qa h3').click(function (e) {
        // 點選h3效果 
        $(this).toggleClass('active').parent().siblings().find('h3').removeClass('active');
        // h3點選p出現的效果 
        $(this).parent().find('p').slideToggle().parent().siblings().find('p').slideUp();
        
    });
});