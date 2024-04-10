<script lang="ts" setup>
const route = useRoute();
// useSeoMeta ts 支援好、簡化層級
useSeoMeta({
  title: () => (route.meta.title ? `${route.meta.title} | Nuxt3 高效入門全攻略` : 'Nuxt3 高效入門全攻略'),
  ogTitle: () => (route.meta.title ? `${route.meta.title} | Nuxt3 高效入門全攻略` : 'Nuxt3 高效入門全攻略'),
});
</script>

<template>
  <div>
    <header>header</header>
    <slot />
    <footer>footer</footer>
  </div>
</template>

<style scoped></style>
