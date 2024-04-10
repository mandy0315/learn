<script setup lang="ts">
const getData = async () => {
  const { data } = await useFetch('/api/hello');
  console.log('data', data.value);
};
</script>

<template>
  <div>
    <h1>server</h1>
    <button @click="getData">取得資料</button>
  </div>
</template>
