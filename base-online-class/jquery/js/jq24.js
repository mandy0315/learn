$(document).ready(function () {
    
    // .on的效果能監聽到.wrap裡面 點 到h1
    $('.wrap').on('click','h1', function () {
        alert('有效');
    });
    // 如果是在click後面載入的h1就不會執行
    $('h1').click(function (e) { 
        alert('有效');
    });

    //載入.html樣式 
    $('.box1').html('<h1>在jq裡寫的h1</h1>');
});