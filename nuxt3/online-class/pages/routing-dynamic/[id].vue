<script setup lang="ts">
import type { Courses, CourseDetail } from '@/types/index';

const route = useRoute();
const id = route.params.id;
const course = ref<Courses | null>(null);
const { data } = await useFetch<CourseDetail>(`https://vue-lessons-api.vercel.app/courses/${id}`);
if (data.value) {
  course.value = data.value.data[0];
}
</script>

<template>
  <div>{{ course }}</div>
</template>
