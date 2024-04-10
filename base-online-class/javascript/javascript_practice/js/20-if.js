// if 判斷
var say = document.querySelector('.say');
let eatFood = () => {
   const hungry = 5;
   if (hungry <=4 ){
      return '想吃便當';
   }else if (hungry <=7 && hungry >=5 ){
      return '想吃甜點';
   }else{
      return '吃飽了';
   }
}
say.textContent= '我現在' + eatFood();