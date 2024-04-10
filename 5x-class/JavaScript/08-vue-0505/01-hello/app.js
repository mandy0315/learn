// vue 實體物件
Vue.createApp({
  // 存放資料的地方
  data() {
    return {
      message: 'aaa',
      hello: 'hello'
    }
  }
}).mount('#demo'); // 掛載 demo id上 ，vue 只能控制上 #demo 上
