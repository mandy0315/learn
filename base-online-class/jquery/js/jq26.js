$(document).ready(function () {
    // hide 只是在.box裡加上display:none;
    // $('.box').hide();

    // remove 整個移除.box的class
    // $('.box').remove();
    
    // 按刪除鍵的父階層td的父階層tr 移除掉
    $('.remove').click(function (e) { 
        $(this).parent().parent().remove();
        
    });
});