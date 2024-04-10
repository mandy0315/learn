function setCookTime(cookMethod, food, time) {
  // Promise 暫存的值 resolve解決 呼叫 
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log('製作完成')
      resolve( `${cookMethod}完美${food}`)
    }, time)
    console.log('準備中')
  });
}

function start() {
  // then 接收成功值 裡面也是 function
  setCookTime('煮', '泡麵', 2000).then((res) => {console.log(res)})
}

start()

