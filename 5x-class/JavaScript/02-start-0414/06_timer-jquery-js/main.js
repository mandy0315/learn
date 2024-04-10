document.addEventListener('DOMContentLoaded',function() {
  const Btn = document.querySelector('button');
  const RunTxt = document.getElementById('running');
  const Dots = document.querySelector('.dots');
  let timer,dotsTimer,cnt = 0;
  Btn.addEventListener('click',function(){
    if(timer){
      // 第二次按下
      clearInterval(timer);
      clearInterval(dotsTimer);
      timer = null;
      dotsTimer = null;
      Btn.textContent = 'Start';
      RunTxt.style.height = '0px';
    }else{
      // 第一次按下
      Btn.textContent = 'Stop';
      RunTxt.style.height = '40px';
      timer = setInterval(function () {
        cnt += 1
        const TimeTxt = document.getElementById('seconds');
        TimeTxt.textContent = cnt;
      }, 1000);
      dotsTimer = setInterval(function () {
        Dots.insertAdjacentElement('afterbegin',Dots.lastElementChild);
      }, 100);
    }
  });
});