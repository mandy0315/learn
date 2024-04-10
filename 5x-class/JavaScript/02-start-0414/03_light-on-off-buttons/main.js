document.addEventListener('DOMContentLoaded' ,function(){
  const $onBtn= document.getElementById('on');
  const $offBtn= document.getElementById('off');
  const statusDiv = document.querySelector('.status');

  $onBtn.addEventListener('click',function(){
    // 控制顏色
    document.body.classList.add('light');
    // 狀態文字
    document.querySelector('.status span').textContent= '開';
    // 狀態顏色
    statusDiv.classList.add('on');
    statusDiv.classList.remove('off');
  })
  $offBtn.addEventListener('click',function(){
    document.body.classList.remove('light');
    document.querySelector('.status span').textContent = '關';

    statusDiv.classList.remove('on');
    statusDiv.classList.add('off');
    
  })
})