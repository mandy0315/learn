// 定義在 vue 裡
const { ref,createApp } = Vue;
// const ref = Vue.ref
createApp({
  setup(){ 
    const currentPage = ref(1);
    const setPage= pager =>{
      if(pager > 0){
        currentPage.value = pager;
      }
    }

    const greeting = (e) => {
      alert('hello')
    }
    
    return{
      setPage,
      greeting,
      currentPage
    }

  }
}).mount('#demo');