<script setup lang="ts">
const { $hello } = useNuxtApp();

const selectDate = ref(new Date());
</script>

<template>
  <div>
    <h1>plugins</h1>
    <p>{{ $hello('mandy') }}</p>
    <p>Custom Directives: <span v-timeformat="1700705124005"></span></p>
    <div>
      <h2>DatePicker (掛載 vue3 套件)</h2>
      <VDatePicker v-model="selectDate" mode="date" />
    </div>
  </div>
</template>
