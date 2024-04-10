<script setup lang="ts">
const { count, add } = useCount();
</script>

<template>
  <div>
    <h1>Composables</h1>
    <div>數字： {{ count }}</div>
    <button @click="add">+1</button>
  </div>
</template>
