var el =document.querySelector('.list');
function getLI(e) {
    // .list事件讀取html標籤 不等於LI回傳空值
    // return回傳 如果是空值也能當“中止事件”
    if (e.target.nodeName !== 'LI'){return};
    // .list事件讀取html語法裡的內容
    console.log(e.target.textContent);
}
// 點擊.list事件 讀取LI
el.addEventListener('click', getLI,false);