
// jQ載入瀏覽器環境 打rea /ready準備/function功能
$(document).ready(function () {
    // 快速鍵：jq＋效果英文
    // 點選button功能 h1會開啟與消失
    $('.button').click(function (e) {
        // toggle切換
        //toggle可以隱藏與出現
        // $('h1').toggle(); $('p').toggle();
        $('h1,p').toggle();
     });
    $('.button2').click(function (e) {
        //toggle可以h1隱藏與p2出現
        $('h2,.p2').toggle();
    });
   });