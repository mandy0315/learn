const SentBtn = document.querySelector('.btn');
const Input = document.querySelector('.text');
const list = document.querySelector('.list');
let data = JSON.parse(localStorage.getItem('listData'))||[]

// 執行事件 函式
SentBtn.addEventListener('click',upData);
readerView(data);
list.addEventListener('click',delData);

// 上傳、更新 data localStorage
function upData(e) {
  e.preventDefault;
  let value = Input.value;
  let todo = {
    content: value
  }
  data.push(todo);
  localStorage.setItem('listData',JSON.stringify(data))
  readerView(data);
}

// data 顯示畫面
function readerView(data){
  let len = data.length;
  list.innerHTML = '';
  for(let i = 0; i < len ; i++){
    const liEl = document.createElement('li');
    liEl.textContent = data[i].content;
    const span = document.createElement('span');
    span.innerHTML = `<button class="del" data-index=${i}>刪除</button>&nbsp;`
    liEl.insertAdjacentElement('afterbegin',span)
    list.appendChild(liEl);
  }
}

// 父層點選 li，刪除 li
function delData(e) {
  e.preventDefault;
  if(e.target.textContent === '刪除'){
    let dataIndex = e.target.dataset.index;
    data.splice(dataIndex,1);
    localStorage.setItem('listData',JSON.stringify(data));
    readerView(data);
  }
}