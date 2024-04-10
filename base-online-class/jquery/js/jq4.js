$(document).ready(function () {
    $('.button').click(function (e) { 

        // (是毫秒,要算秒後面加000)
        // fadeIn淡入/slideOut淡出/fadeToggle淡入淡出
        $('.text').fadeToggle(2000);
        
    });
});