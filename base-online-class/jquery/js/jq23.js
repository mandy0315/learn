$(document).ready(function () {
    //載入.html樣式 
    $('.box').html('<div><h1 class="ddd">xxxx<span>sssss</span></h1> <h2 class="ddd">xxxx<span>sssss</span></h2></div>');
    
    //載入.text必須要在html加標籤 
    $('.box2>a').text('我');

    $(".box3").prepend("<div>指令碼之家歡迎您</div>");
});