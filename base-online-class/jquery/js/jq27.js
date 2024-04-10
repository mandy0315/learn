$(document).ready(function () {
    $('.top a').click(function (e) { 
        e.preventDefault();
        // animate動畫效果 styles外要加{}
        $('html,body').animate({ scrollTop: 0 }, "easing");
    });
    $('button').click(function (e) { 
        var box = $('.box');
        box.animate({
            height: "300px",width: "300px"}, 300 ,function() {
                $(this).css("background-color", "red")
            }
        );

    });
    
});