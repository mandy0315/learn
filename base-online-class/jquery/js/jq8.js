$(document).ready(function () {
    // (e)=event＝事件
    $('.close').click(function (e) { 
        //e.preventDefault() 事件取消預設行為(a元素不會往上跑)
        e.preventDefault();
    });
});