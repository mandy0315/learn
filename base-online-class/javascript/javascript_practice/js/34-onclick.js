window.addEventListener('DOMContentLoaded',function(){
  // onclick 只能執行一件，覆蓋掉前一個事件
document.getElementById('send').onclick = function(){
  var str = document.getElementById('content').value;
  document.getElementById('main').innerHTML = str;
}
})
