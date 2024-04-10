window.addEventListener('DOMContentLoaded',()=>{
  const addBtn = document.querySelector('#addBtn'),
        ul = document.querySelector('ul'),
        li = document.querySelectorAll('li'),
        spanClose = document.querySelectorAll('.close');
  // 原本陣列裡的元素 點擊效果 ＆ 刪除效果
  li.forEach((el) => {
    el.addEventListener('click',(e)=>{
      e.currentTarget.classList.toggle('checked');
    })
  })
  spanClose.forEach((el) => {
    el.addEventListener('click',(e)=>{
      e.currentTarget.parentElement.remove();
    })
  })
  // 點擊新增按鈕效果
  addBtn.addEventListener('click',(e)=>{
    let value = e.currentTarget.previousElementSibling.value;
    const liEl = document.createElement('li');
    console.log(liEl);
    liEl.textContent = value;
    liEl.addEventListener('click',(e)=>{
      e.currentTarget.classList.toggle('checked');
    })

    const spanEl = document.createElement('span');
    spanEl.classList.add('close');
    spanEl.textContent = 'x';
    spanEl.addEventListener('click',(e)=>{
      e.currentTarget.parentElement.remove();
    })

    ul.insertAdjacentElement('beforeend',liEl).appendChild(spanEl);
  })

})
