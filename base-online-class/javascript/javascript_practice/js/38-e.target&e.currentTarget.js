var el = document.querySelector('.header');
el.addEventListener('click',function(e){
    // 觸發監聽事件的DOM
    console.log(e.target);
    // 註冊監聽事件的DOM
    console.log(e.currentTarget);
    // 滑鼠點擊抓出html標籤
    console.log(e.target.nodeName);
});