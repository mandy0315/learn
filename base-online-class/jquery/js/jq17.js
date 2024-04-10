$(document).ready(function () {
    $('.menu a').click(function (e) { 
        // 針對(點選的a連結)＝（this)新增.active
        $(this).addClass('active');
        
        //進階：回父階層li 其他同階層li的子階層a 移除.active的效果 
        $(this).parent().siblings().find('a').removeClass('active');
    });
});