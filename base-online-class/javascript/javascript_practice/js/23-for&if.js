window.addEventListener('DOMContentLoaded',function(){
    // for迴圈 有成立繼續執行
    // 初始狀態;條件;更新內容
    var farms = [
        {
            farmer: '卡斯伯',
            field: 6,
            chick: 20
        },
        {
            farmer: '查理',
            field: 10,
            chick: 50
        },
        {
            farmer: '敏佳',
            field: 8,
            chick: 150
        }
    ]
    // 幾個農場
    var farmTotal = farms.length;
    var farmSay = document.querySelector('.farmSay');
    for (var i =0; i < farmTotal; i++){
        // 第0~1農場裡的農夫名字
        // console.log(farms[i].chick)
        if (farms[i].chick > 100){
            farmSay.textContent = farms[i].farmer + '的小雞超過100以上';
        }
    }
})
