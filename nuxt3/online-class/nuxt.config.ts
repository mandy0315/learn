// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/styles/base.scss'],
  typescript: {
    typeCheck: true,
  },
  // components: {
  //   dirs: [
  //     {
  //       path: '~/components/global',
  //       global: true,
  //     },
  //   ],
  // },
  imports: {
    dirs: ['composables/**', 'stores'],
  },
  modules: ['@pinia/nuxt'],
  app: {
    head: {
      viewport: 'width=500, initial-scale=1',
      meta: [
        { name: 'description', content: 'Nuxt3 高效入門全攻略課程練習' },
        { property: 'og:title', content: 'Nuxt3 高效入門全攻略' },
        { property: 'og:url', content: 'http://localhost:3000/' },
        { property: 'og:description', content: 'Nuxt3 高效入門全攻略課程練習' },
      ],
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
          tagPosition: 'bodyClose', // https://nuxt.com/docs/getting-started/seo-meta#body-tags
        },
      ],
    },
  },
});
