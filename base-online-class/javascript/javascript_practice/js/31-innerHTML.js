// 33.js 方法一：innerHTML + for
const farms =[
    {
        farmer: '卡斯伯',
        field: 6,
        chick: 120
    },
    {
        farmer: '查理',
        field: 10,
        chick: 50
    }
]
const farmEl = document.querySelector('.farm');
const farmsLen = farms.length;
let farmerTotal = '';
for (var i = 0; i < farmsLen;i++){
    let content = '<li>' + farms[i].farmer +'</li>';
    // farmerTotal累加執行兩次
    farmerTotal += content;
}
// // 輸出farmerTotal
farmEl.innerHTML = farmerTotal;

