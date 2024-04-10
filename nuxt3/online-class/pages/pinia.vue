<script setup lang="ts">
const mainStore = useMainStore();
const count = computed(() => mainStore.count);
</script>

<template>
  <div>
    <h1>Pinia</h1>
    <div>數量{{ count }}</div>
    <button @click="mainStore.add">+1</button>
  </div>
</template>
