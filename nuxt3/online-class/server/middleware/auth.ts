export default defineEventHandler(event => {
  console.log(event.node.req.url); // 只能攔截站內
});
