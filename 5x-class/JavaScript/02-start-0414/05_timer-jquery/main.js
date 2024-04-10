$(document).ready(function(){
  // cnt 移出 點下停止不會每此歸0
  // timer 不設 undefined
  let timer,cnt = 0;

  $('button').click(function (e) { 
    // 第一次 開始，判斷 timer - false 執行 else
    // 第二次按 停止，timer = null; 空值
    // 第三次按 繼續開始，因為 timer = null false
    if (timer) {
      clearInterval(timer);
      timer = null;
      $('button').text('Start');
      $('#running').slideUp();
    }else{
      // 計時器
      timer = setInterval(function() {
        cnt += 0.1;
        $('#seconds').text(Math.floor(cnt));
        $('.dots').prepend($('div:last-child'));
      }, 100);
      $('button').text('Stop');
      $('#running').slideDown();
    }
  });
})