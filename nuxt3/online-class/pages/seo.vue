<script setup lang="ts">
// useHead({
//   title: 'seo 頁面 - Nuxt3 高效入門全攻略',
//   meta: [
//     { property: 'og:title', content: 'seo 頁面 - Nuxt3 高效入門全攻略' },
//     { property: 'og:url', content: 'http://localhost:3000/about' },
//     { property: 'og:image', content: 'http://localhost:3000/share.jpg' },
//     { name: 'description', content: 'seo 頁面 - 最棒的Nuxt3的線上課程' },
//     { property: 'og:description', content: 'seo 頁面 - 最棒的Nuxt3的線上課程' },
//   ],
// });

// 簡化 useHead 的寫法，使用 useSeoMeta，更好 ts 支援
// useSeoMeta({
//   title: 'About - Nuxt3 高效入門全攻略',
//   description: '關於我們 - 最棒的Nuxt3的線上課程',
//   ogDescription: '關於我們 - 最棒的Nuxt3的線上課程',
//   ogTitle: 'About - Nuxt3 高效入門全攻略',
//   ogImage: 'http://localhost:3000/share.jpg',
// });

// 與 useSeoMeta 一樣，但是會在 server 端渲染
type Data = {
  title: string;
  description: string;
};
const { data: about } = await useFetch<Data>('https://vue-lessons-api.vercel.app/seo/about');
if (!about.value) {
  throw createError({ statusCode: 404, statusMessage: 'seo/about not found', fatal: true });
}
// 只有在 server 端渲染才會執行
// useServerSeoMeta({
//   title: () => `${about.value?.title} - Nuxt3`,
//   ogTitle: () => `${about.value?.title} - Nuxt3`,
//   description: () => `${about.value?.description} - Nuxt3`,
//   ogDescription: () => `${about.value?.description} - Nuxt3`,
// });
// 載入外部資源
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
    },
  ],
  script: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js',
      async: true,
      // valid options are: 'head' | 'bodyClose' | 'bodyOpen'
      tagPosition: 'head', // 載入頁面前還是頁面後
    },
  ],
});

// 元件的 SEO
const title = computed(() => `${about.value?.title} - Nuxt3`);
const description = computed(() => `${about.value?.description} - 最棒的Nuxt3的線上課程`);
</script>

<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="description" />
      <Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    </Head>

    <h1>USER</h1>
  </div>
</template>
