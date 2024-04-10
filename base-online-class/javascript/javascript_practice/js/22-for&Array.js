// for迴圈 有成立繼續執行
// for(初始狀態;條件;更新內容)
// for (var i= 1;i < 9;i++){console.log(i+'*'+i+"="+i*i);}
var farms =[
    {
        farmer: '敏佳',
        field: 6

    },
    {
        farmer: '辜',
        field: 12

    }
];
var farmsTotel= farms.length;
var say = document.querySelectorAll('.say');
for(var i=0 ; i < farmsTotel ; i++){
    say[i].textContent= '第' + (i+1) + '個農場' + '農夫叫' + farms[i].farmer + '有' + farms[i].field + "個田";
}