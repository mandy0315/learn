window.addEventListener('DOMContentLoaded',function() {
  // 字串要加引號 要空格直接打空白鍵
  const hello = '你好 ';
  const myName = '敏佳';
  // 字串與變數做變數值
  // const helloMyName = hello + myName + '小姐'
  const helloMyName = `${hello}${myName}小姐`
  document.getElementById('myName').textContent = helloMyName;

})
