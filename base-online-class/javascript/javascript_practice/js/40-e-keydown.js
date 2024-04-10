// 讀取整個網頁
var body = document.body;
function rockUp(e) {
    // e.keyCode 鍵盤操控事件讀取啟動數值
    console.log(e.keyCode);
    switch (e.keyCode) {
        // 鍵盤1的數值，執行動畫 ;動速度css transition
        case 49: document.querySelector('.rocket-1').style.bottom = '2000px'
        break;//中斷
        // 鍵盤2的數值，執行動畫
        case 50: document.querySelector('.rocket-2').style.bottom = '2000px'
        break;
        // 鍵盤3的數值，執行動畫
        case 51: document.querySelector('.rocket-3').style.bottom = '2000px'
        break;
    }

}
// 整個網頁 進行監聽事件 鍵盤操控執行函數
body.addEventListener('keydown',rockUp,false);
