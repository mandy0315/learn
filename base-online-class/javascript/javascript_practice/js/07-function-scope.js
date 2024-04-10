window.addEventListener('DOMContentLoaded',function(){
    // 外面var是全域變數 會一直在js裡
    let total;
    // 宣告函式:function 函式名稱：greet(參數：放變數)
    function customer(hamNum,cokeNum) {
        total = (hamNum * 50) + (cokeNum * 20);
        // return 回傳值
        return total;
    }
    total = customer(10, 1);
    console.log(total);
})


