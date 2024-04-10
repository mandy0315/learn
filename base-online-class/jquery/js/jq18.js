$(document).ready(function () {
    $('.addcost').click(function (e) { 
        // 自己會變色
        $(this).toggleClass('active');
        
        // 進階：.addcost的父層級li的其他同階層裡的.addcost移除.addcost效果
        $(this).parent().siblings().find('.addcost').removeClass('active');

        // 進階：增加.parent() .addcost的上階層 li做效果 /li的其他同階層移除.active效果
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
});