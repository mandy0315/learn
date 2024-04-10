// 定義在 vue 裡
const { ref,createApp } = Vue;
// const ref = Vue.ref
createApp({
  setup(){ 
    const names =['jack','John','Mike','Mary']
    const checkedNames = ref([]);
    return{
      names,
      checkedNames
    }

  }
}).mount('#demo');