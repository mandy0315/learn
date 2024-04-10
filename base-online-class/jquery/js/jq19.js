$(document).ready(function () {
    $('.menu li').click(function (e) { 
        $(this).addClass('active').siblings().hide();
    });
});