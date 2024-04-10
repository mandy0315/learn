// switch一定會成立執行下方程式，但一符合條件不會在往下跑（不吃效能），適合已經有答案執行
// if 會跑完所有的程式碼

// switch方法
var say = document.querySelector('.say');
let eatFood = () => {
   const hungry = 5;
   switch(true){
        case hungry <= 4:
            return '吃便當'
            break;
        case hungry <= 7 && hungry > 4:
            return '吃甜點'
            break;
        default:
            return '吃飽了'
            break;
    }
}
say.textContent= '我現在' + eatFood();

