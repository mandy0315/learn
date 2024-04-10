export default defineNuxtPlugin(nuxtApp => {
  return {
    provide: {
      hello: (name: string) => `Hello ${name}!`,
    },
  };
});
