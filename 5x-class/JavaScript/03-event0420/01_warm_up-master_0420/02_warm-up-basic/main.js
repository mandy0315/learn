window.addEventListener('DOMContentLoaded',function(){
  const Btn = document.querySelector('button');
  
  Btn.addEventListener('click',function() {
    const circleDiv= document.querySelector('.circle');
    circleDiv.classList.toggle('active');
  })

})

