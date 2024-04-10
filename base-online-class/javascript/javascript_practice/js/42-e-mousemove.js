// 讀取多個css
var el = document.querySelectorAll('.box');
// 算出有多少列css
var len = el.length;
// 進行迴圈
for (var i = 0; i < len;i++){
    // 所有的box 監聽滑鼠移動到box
    el[i].addEventListener('mousemove',
    // 視窗跳出 Game over
    function() {
        alert('Game over');
    }, false);
};