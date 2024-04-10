document.addEventListener('DOMContentLoaded' ,function(){
  document.querySelector('input').addEventListener('input', function(){
    document.querySelector('#toggle').classList.add('toggle')
  })
  document.querySelector('#toggle').addEventListener('click', function(){
    document.querySelector('#toggle').classList.remove('toggle')
  })
})

  // 對input監聽 當裡面的value改變時class會多出save
  
  // 對saveBtn監聽 當save之後取消save黃線
  

  // user在input裡面輸入值
  // saveBtn會多出黃色線
  // 按下savaBtn取消黃色線

  // 只要input的直沒有改變
  // 按下saveBtn不會發生任何事情

