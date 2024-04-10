// let's start coding:
document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('create-element').addEventListener('click',function(){
    const timeDiv= document.createElement('div');
    timeDiv.classList.add('time');
    timeDiv.textContent= (new Date()).toString();
    // appendChild 移動html ＋ timeDiv 新增html
    document.querySelector('.right').appendChild(timeDiv);
  })
  document.getElementById('reset-inner-html').addEventListener('click',function(){
    document.querySelector('.right').innerHTML= '<div class="title" style="background-color: green;">DOMMM practice...</div>';
  })
  document.getElementById('remove').addEventListener('click',function(){
    const lastTimeDiv= document.querySelector('.time:last-child');
    // 判斷他還有最後一行，防止 js 最後出錯
    if (lastTimeDiv) {
      lastTimeDiv.remove();
    }
  })
  document.getElementById('create-element-insert-adjacent').addEventListener('click',function(){
    const timeDiv= document.createElement('div');
    timeDiv.classList.add('time');
    timeDiv.textContent= (new Date()).toString();
    document.querySelector('.title').insertAdjacentElement('afterend',timeDiv);
  })
})