// TO DO
document.addEventListener('DOMContentLoaded', function () {
  // e.target 事件發生的元素
  document.querySelector('#button').addEventListener('click', (e) =>{
    const ContentDiv = e.target.nextElementSibling;
    const Content2Span = e.target.nextElementSibling.lastElementChild;
    const TitleH1 = e.target.parentNode.parentNode.previousElementSibling;

    // 題目1: 把包著 內容1 的 div 加上 .pink 的 class
    ContentDiv.classList.toggle('pink');
    // 題目2: 把「內容1」加上 .blue class
    ContentDiv.firstElementChild.classList.toggle('blue');
    // 題目3: 把「內容2」的文字內容改變 
    if (Content2Span.textContent === '內容2') {
      Content2Span.textContent = 'Hii'
    }else{
      Content2Span.textContent = '內容2'
    }
    // 題目4 : 把「標題」的文字顏色改變
    if (TitleH1.style.color === 'red') {
      TitleH1.style.color = 'black'
    } else {
      TitleH1.style.color = 'red'
    }

  })
})