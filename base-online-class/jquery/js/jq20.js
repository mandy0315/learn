$(document).ready(function () {
    $('.menu li').click(function (e) { 
        e.preventDefault();
        // .find()是找子階層 .parent()找父階層
        $(this).find('a').toggleClass('active');
    });
});