<script setup lang="ts">
import type { Courses } from '@/types/index';

const coursesList = ref<Courses[]>([]);
const { data } = await useFetch<Courses[]>('https://vue-lessons-api.vercel.app/courses/list');
if (data.value) {
  coursesList.value = data.value;
}
</script>

<template>
  <div>
    <p>courses list</p>
    <CardList :courses="coursesList"></CardList>
    <NuxtPage />
  </div>
</template>
