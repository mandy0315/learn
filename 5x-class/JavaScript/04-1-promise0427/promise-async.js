function setCookTime(cookMethod, food, time) {
  return new Promise((resolve,reject) =>{
    setTimeout(()=>{
      console.log('製作完成')
      resolve( `${cookMethod}完美${food}`)
    }, time)
    console.log('準備中')
  })
}
  
// async 宣告非同步 function 搭配 await
async function start() {
  // await 等待 Promise 拿到成功的值，指定給result
  let result = await setCookTime('煮', '泡麵', 2000)
  console.log(result)
}

start()