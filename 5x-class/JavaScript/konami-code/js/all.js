let array = [];
// keyup 放開鍵盤才會觸發事件
// document.addEventListener('keyup',
// function(e){
//   array.push(e.keyCode);
//   console.log(e.keyCode);
//   let a = array.join(',');
//   // 
//   if (a == ['38', '38', '40', '40', '37' ,'39', '37' ,'39', '66', '65'].join(',')){
//     alert("拿到武器")
//   }
//   // 5秒內設定為空
//   setTimeout(() => {
//     array = []
//   }, 5000);
// })
let getArms = [38, 38, 40, 40, 37 ,39, 37 ,39, 66, 65];
let flag = 0;
document.addEventListener('keyup',
function(e){
  array.push(e.keyCode);
  console.log(e.keyCode);
  // if(array.length === 10){
    for (let i = 0; i < array.length; i++) {
      // console.log(i)
      // console.log(typeof array[i])
      // console.log(typeof getArms[i])
      if (array[i] !== getArms[i]) {
        alert('有誤')
        array = []
        break
      }
      if(i === 9){
        console.log()
        alert('get')
      }
    // }

  }
  // 十秒內設定為空
  setTimeout(() => {
    array = []
  }, 5000);
})

