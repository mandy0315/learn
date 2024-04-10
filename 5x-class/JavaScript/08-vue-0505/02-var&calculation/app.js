// vue 實體物件
Vue.createApp({
  // 存放資料的地方
  data() {
    return {
      name: 'mandy',
      price: 100
    }
  },
  methods: {
    calPrice(price){
      if(price <= 1000){
        return price - 100
      }else{
        return price
      }
    }
  }
}).mount('#demo'); // 掛載 demo id上 ，vue 只能控制上 #demo 上
