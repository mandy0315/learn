// callback = 參數帶入的函式將在「未來某個時間點」被呼叫和執行 
  // function名稱 callback
function setCookTime(cookMethod, food, time,callback) {
  setTimeout(()=>{
    console.log('製作完成')
    // 呼叫 callback(result)
    callback( `${cookMethod}完美${food}`)
  }, time)
  console.log('準備中')
}

function start() {
  // 參數可以放 function 
  let result = setCookTime('煮', '泡麵', 2000,(result)=>{
    console.log(result)
  })
}
start()

