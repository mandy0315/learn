window.addEventListener('DOMContentLoaded',function(){
    // Number(string) 各種類型轉數字
    // parseInt(string) 針對字串轉整數 (無條件捨去)
    // parseFloat(string) 針對字串轉小數
    const Btn = document.getElementById('buttonId');
    Btn.onclick = function() {
        const hamPrice = 50;
        const colaPrice = 30;
        let hamNum = parseInt(document.getElementById('hamNumId').value) * hamPrice;
        let colaNum = parseInt(document.getElementById('colaNumId').value) * colaPrice;
        document.getElementById('totalId').textContent = hamNum + colaNum;
    }
})

