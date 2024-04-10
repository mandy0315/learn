$(document).ready(function () {
    // a擷取href裡面設定擷取名稱 在::before新增class樣式
    $("a[href$='.doc']").addClass('far fa-file-word');
    $("a[href$='.jpg']").addClass('far fa-file-image');
    $("a[href$='.zip']").addClass('far fa-file-archive');
});