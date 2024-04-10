window.addEventListener('DOMContentLoaded',function(){
    // 呼叫：執行函式
    waiter();
    customer(8,1);

    // 宣告函式:function 函式名稱：greet(參數：放變數)
    function waiter() {
        const waiterGreet = '歡迎光臨，請問你需要點什麼？ 目前漢堡還有8個';
        document.getElementById('greetId').textContent = waiterGreet;
    }
    // 計算 greet(參數 ：名稱+Num數量)
    function customer(hamNum,cokeNum) {
        let total = (hamNum * 50) + (cokeNum * 20);
        document.getElementById('totalId').textContent = total;

    }
})


