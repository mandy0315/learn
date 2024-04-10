// 先捕捉再冒泡
// false冒泡/true捕捉
var elBody = document.querySelector('.Body');
elBody.addEventListener('click',function(e){
  alert('點到Body');
},false);
// e.stopPropagation(); 終止冒泡
var el = document.querySelector('.box');
el.addEventListener('click',function(e){
  e.stopPropagation();
  alert('box');
},false);ㄋ