// jQ載入瀏覽器環境 打rea /ready準備/function功能
$(document).ready(function () {
    // 快速鍵：jq＋效果英文
    // 結尾要加;
    // 點選button功能 h1會開啟
    $('.button').click(function (e) {
        $('h1').show();
    });
    // 點選”p標籤”功能 h1會隱藏
    $('p').click(function (e) {
        $('h1').hide();
    });
});