
const { ref,createApp } = Vue;
// const ref = Vue.ref
createApp({
  // 生命週期 開始
  setup(){
    // ref 偵測值 
    const name = ref('mandy');
    const price = ref(100);
    
    const calPrice = price => {
      if(isNaN(price)){
        return '我不是數字'
      }else if(price >= 1000){
        return price - 100;
      }else{
        return price;
      }
    };
    return {
      name,
      price,
      calPrice
    }
  }
}).mount('#demo');