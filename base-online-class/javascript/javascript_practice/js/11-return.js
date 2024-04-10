window.addEventListener('DOMContentLoaded',function(){
    let mandyBuy = hamPrice(10);
    function hamPrice(Num){
        const hamPrice = 50;
        let total = hamPrice * Num
        //return 回傳值
        return total
    }
    document.querySelector('.total').textContent = mandyBuy;
})


