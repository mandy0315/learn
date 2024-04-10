var screenX = document.querySelector('.screenX');
var screenY = document.querySelector('.screenY');
var pageX = document.querySelector('.pageX');
var pageY = document.querySelector('.pageY');
var clientX = document.querySelector('.clientX');
var clientY = document.querySelector('.clientY');
// 讀取滑鼠圖案
var mouseimg = document.querySelector('.mouseimg');
var el = document.body;
function getPosition(e) {
    // screen 讀取電腦螢幕解析度尺寸
    screenX.textContent = e.screenX;
    screenY.textContent = e.screenY;
    // page 讀取網頁尺寸
    pageX.textContent = e.pageX;
    pageY.textContent = e.pageY;
    // client 讀取瀏覽器尺寸
    clientX.textContent = e.clientX;
    clientY.textContent = e.clientY;
    // .mouseimg新增 left的瀏覽器尺寸px
    mouseimg.style.left = e.clientX+'px';
    // .mouseimg新增 top的瀏覽器尺寸px
    mouseimg.style.top = e.clientY + 'px';

}
// 監聽body裡滑鼠移動的的位置
el.addEventListener('mousemove',getPosition,false);
