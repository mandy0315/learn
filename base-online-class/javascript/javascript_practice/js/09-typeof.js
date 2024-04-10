window.addEventListener('DOMContentLoaded',function(){
    const number = 10,
          string = '我',
          boolean = true,
          object = {
              name: 'mandy',
          },
          array = [1,2,3];
    console.log(typeof(number));
    console.log(typeof(string));
    console.log(typeof(boolean));
    console.log(typeof(object));
    // 陣列也是物件一種
    console.log(typeof(array));
})
