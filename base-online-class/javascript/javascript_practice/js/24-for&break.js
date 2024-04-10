// for迴圈 有成立繼續執行
// 初始狀態;條件;更新內容
var farms = [
    {
        farmer: '卡斯伯',
        field: 6,
        chick: 100
    },
    {
        farmer: '查理',
        field: 10,
        chick: 50
    },
    {
        farmer: '敏家',
        field: 8,
        chick: 20
    }
]
// 幾個農場
var farmTotal = farms.length;
var chickTotal = 0;
for (var i =0; i < farmTotal; i++){
    if(farms[i].chick > 50){
        console.log(farms[i].farmer+'的農場剛有50隻小雞')
        farms[i].chick=farms[i].chick-50
        console.log(farms[i].farmer+'的農場剩下'+farms[i].chick+'隻雞')
    }
    // 跑第一個物件符合就終止
    break;
}
