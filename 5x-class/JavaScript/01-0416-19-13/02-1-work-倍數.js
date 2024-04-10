// 0 1 1 2
// 費氏數列 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
// 1.他要的是：可在畫面上印出小於 100 的數列
// 2.他需要的語法  n < 100 使用 while 回圈 - 設定 前一個數(prevNum)、目前的數(nowNum)
function fibonacci(n) {
  let prevNum = 0;
  let nowNum = 1;
  while (nowNum < n) {
    console.log(nowNum);
    // 目前數=目前數+前數
    nowNum = prevNum + nowNum
    // 前數= 目前數-前總數
    prevNum = nowNum - prevNum
  }
}
fibonacci(100) 

// 老師解答
// function fibonacci(n) {
//   // 前一個數 , 當前的數
//   let [prev, current] = [0,1]
//   while (current <= n) {
//     // 1,1,3,5
//     console.log(current);
//     // 1 1;1 2; 2 3; 3 5;3 8
//     [prev, current] = [current, prev + current]
//   }
// }
// fibonacci(100) 