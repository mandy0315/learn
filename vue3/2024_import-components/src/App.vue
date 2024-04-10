<script setup>

document.addEventListener('click', function (event) {
  console.log('click')

  // // 阻止事件的默认行为
  // event.preventDefault();

  // 阻止事件在冒泡阶段继续传播
  event.stopPropagation();
  console.log(event.target.nodeName)

  if (['BUTTON', 'A'].includes(event.target.nodeName)) {
    console.log('button')
  }
  // 在这里执行你的其他操作，例如检查点击的目标元素并执行相应的操作
  // 例如：
  // if (event.target.id === 'someButton') {
  //     // 执行某些操作
  // }
}, true);

const test = (num) => {
  console.log(`test ${num}`)
}

</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <button @click="test(1)">1</button>
  <button @click="test(2)">2</button>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
