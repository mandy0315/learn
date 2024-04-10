import { defineStore } from 'pinia';

export const useMainStore = defineStore('mainStore', () => {
  const count = ref(0);
  const add = () => {
    count.value++;
  };

  return { count, add };
});
