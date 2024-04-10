// 定義在 vue 裡
const { ref,createApp } = Vue;
// const ref = Vue.ref
createApp({
  // template:``, 覆蓋 html
  template: `
    <div class="box">
        <div v-on:click="currentPage--"
        class="pager">&lt;</div>

        <div v-for="n in 10"
        class="pager">
          {{ n + (10 * (currentPage - 1)) }}
        </div>

        <div @click="currentPage++"
        class="pager">&gt;</div>

        <a class="alink" @click.prevent="greeting($event)" 
        href="https://book.vue.tw/CH1/1-5-events.html">vue</a>
    </div>

  `,
  setup(){ 
    const currentPage = ref(1);
    const greeting = (e) => {
      alert('hello')
    }
    
    return{
      greeting,
      currentPage
    }

  }
}).mount('#demo');