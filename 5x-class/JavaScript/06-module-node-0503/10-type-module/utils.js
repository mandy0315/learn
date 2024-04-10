export const timeoutPromise = ms => new Promise((resolve, _reject) => {
  setTimeout(() => {
    resolve();
  }, ms);
})
// 0 ~ 1000
// 1000 ~ 3000
export const sample = (form,to) => form + (to - form) * Math.random();
