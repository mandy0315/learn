const btn = document.getElementById('countId')
const total = document.getElementById('totalId')
const HamEl = document.getElementById('hamNumId')
const CokeEl = document.getElementById('cokeNumId')

btn.addEventListener('click',result,false)
function result(e) {
    const HamPrice = 45
    const CokePrice = 30
    let HamValue = parseInt(HamEl.value)
    let CokeValue = parseInt(CokeEl.value)
    let cost = (HamValue * HamPrice) + (CokeValue * CokePrice)
    if(HamEl.value === '' && CokeEl.value === ''){
        alert("欄位為空");
    }else if(isNaN(HamValue && CokeValue) === true){
        alert("欄位不是數字");
    }else{
        total.textContent= cost;
    }
}
