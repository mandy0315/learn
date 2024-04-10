window.addEventListener('DOMContentLoaded',function(){
  const cookiePrice = 35;
  const myMoney = 20;
  // 加 + 減 - 乘 ＊ 除 / 除後的餘數 ％
  let fiveCookieTea = cookiePrice * 5 + 10;
  let fiveCookieTea2 = (cookiePrice * 5 + 10) * 2;
  let total = cookiePrice - myMoney;
  // 一包餅乾要
  document.getElementById('cookiePriceId').textContent = cookiePrice;
  // 我口袋只有
  document.getElementById('myMoneyId').textContent = myMoney;
  // 我還需要
  document.getElementById('totalId').textContent = total;

  // 第一種寫法 五包餅乾加麥香紅茶
  // document.getElementById('fiveCookie-TeaID').textContent = cookiePrice * 5 + 10;
  // 第二種寫法 五包餅乾加麥香紅茶
  document.getElementById('fiveCookie-TeaID').textContent = fiveCookieTea;
  document.getElementById('fiveCookie-Tea2ID').textContent = fiveCookieTea2;
})

