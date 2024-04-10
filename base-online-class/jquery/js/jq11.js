$(document).ready(function () {
    $('.open').click(function (e) {
        $('.box1').delay(0).fadeIn();
        $('.box2').delay(500).slideDown();
        // .show這動態沒有預設 直接出現一定要給數值
        $('.box3').delay(1000).show(0);
        
    });
});