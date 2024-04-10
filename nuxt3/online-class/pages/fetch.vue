<script setup lang="ts">
/** 1.$fetch 會導致打兩次
 * 首先伺服器端打一次，取得狀態不會輸出客戶端，所以客戶端會再打一次 */
const dataTwice = await $fetch('https://vue-lessons-api.vercel.app/seo/about');
console.log(dataTwice);

/** 2.useFetch 只會打一次
 * 在伺服器端時候就會打資料，資料保留到客戶端不需要再打
 * 檢查原始碼可以看到資料
 * 實現 ssr 渲染 */
interface Data {
  name: string;
  userName: string;
  location: string;
  company: string;
  jobTitle: string;
  updatedAt: string;
}
const {
  data,
  pending, // 是否在載入中
  error, // 資料取得失敗，則傳回錯誤物件
  refresh, // 刷新回傳資料
} = await useFetch<Data>('https://3cbf5914-1e9a-41b8-b1f7-07ebf6d943d2.mock.pstmn.io/getUser?data=full', {
  headers: {
    'x-api-key': 'PMAK-656804bc8df83129f1f16c09-db747057cb160360984624947779656976',
  },
});
console.log('錯誤', error);
// 攔截器 interceptors
// const { data } = await useFetch('https://3cbf5914-1e9a-41b8-b1f7-07ebf6d943d2.mock.pstmn.io/getUser?data=full', {
//   onRequest({ request, options }) {
//     // 設置 request headers
//     options.headers = options.headers || {};
//     options.headers = {
//       ...options.headers,
//       authorization: `Bearer token`,
//       'x-api-key': 'PMAK-XXX',
//     };
//     console.log(options.headers);
//   },
//   onResponse({ request, response, options }) {
//     // 處理回傳資料
//     return response._data;
//   },
// });

/** 3.useAsyncData + $fetch
 * 與 useFetch 一樣，唯一不同可以針對 key 做反應
 */
// const {
//   data: asyncData,
// } = await useAsyncData('userInfos', () =>
//   $fetch('https://3cbf5914-1e9a-41b8-b1f7-07ebf6d943d2.mock.pstmn.io/getUser?data=full', {
//     headers: {
//       'x-api-key': 'PMAK-656804bc8df83129f1f16c09-db747057cb160360984624947779656976',
//     },
//   }),
// );
// const refreshData = () => refreshNuxtData('userInfos');

/** 4.多個 api 請求 */
// const { data: orgData } = await useFetch('https://api.github.com/orgs/nuxt');
// const { data: reposData } = await useFetch('https://api.github.com/orgs/nuxt/repos');
// const [{ data: orgData }, { data: reposData }] = await Promise.all([
//   useFetch('https://api.github.com/orgs/nuxt'),
//   useFetch('https://api.github.com/orgs/nuxt/repos'),
// ]);
</script>

<template>
  <div>
    <div>fetch</div>
    <button @click="refresh()">refresh</button>
    <div>isLoading: {{ pending }}</div>
    <div>dataName:{{ data?.name }}</div>

    <h2>多個 api</h2>
    <!-- <div>{{ orgData }}</div>
    <div>{{ reposData }}</div> -->
  </div>
</template>
