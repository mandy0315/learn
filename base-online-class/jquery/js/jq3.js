$(document).ready(function () {
    $('.button').click(function (e) { 

        // (是毫秒,要算秒後面加000)
        // slideDown滑下/slideUp滑上/slideToggle滑下滑上
        $('.text').slideToggle(2000);
        
    });
});