window.addEventListener('DOMContentLoaded',function() {
  const Btn = document.querySelector('button');
  Btn.addEventListener('click',function() {
    const Box = document.querySelector('.box');
    const circleDiv= document.createElement('div');
    circleDiv.className = 'circle';
    
    Box.appendChild(circleDiv);
  })
  
})
