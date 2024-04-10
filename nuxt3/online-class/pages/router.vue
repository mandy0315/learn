<script setup lang="ts">
const route = useRoute();
console.log(route); // useRoute 可以取得所有跟 route 網址有關的所有參數資訊

const router = useRouter(); // useRouter 提供許多函式讓你操作網址像是push、replace、go等方法，讓你可以再換頁上面更加方便
</script>

<template>
  <div>
    <h1>Router</h1>
    <NuxtLink to="/about" class="link"> about </NuxtLink>
    <NuxtLink to="https://thecodingpro.com/courses/nuxt3" target="_blank" external> Nuxt 3 高效入門全攻略 </NuxtLink>

    <!-- 嵌套式 Router -->
    <h2>嵌套式 Router</h2>

    <section>
      <div>
        <NuxtLink to="/router" class="link"> index </NuxtLink>
        <NuxtLink to="/router/a" class="link"> a </NuxtLink>
        <NuxtLink to="/router/b" class="link"> b </NuxtLink>
      </div>
      <main>
        <NuxtPage></NuxtPage>
      </main>
    </section>
  </div>
</template>

<style scoped>
.link {
  padding-right: 10px;
}
</style>
