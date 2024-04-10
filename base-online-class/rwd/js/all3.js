$(document).ready(function() {
  // 打開選單
  $('.menulike').click(function (event) {
    
    $('body').addClass('open');
  });
  // 關閉選單
  $('.menuclose').click(function (event) {
    $('body').removeClass('open');
  });
});