var el = document.querySelector('.myTitle a');
// 取代修改 HTML 屬性 setAttribute('屬性','內容')
el.setAttribute('href','https://google.com.tw');
// 修改style屬性
el.style.color = "red";
// 新增屬性：id
var el2 = document.querySelector('.myTitle2');
el2.setAttribute('id','addId')
var el3 = document.querySelector('.myTitle');
// 撈出 getAttribute('屬性')
console.log(el.getAttribute('href'));
// 撈出內容textContent
console.log(el.textContent);
// 撈出html裡的...
console.log(el3.innerHTML);
