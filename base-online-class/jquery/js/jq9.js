$(document).ready(function () {
    // $('.btn').click(function (e) { 
    //     e.preventDefault();
    //     // 載入css .box會載style樣式
    //     $('.box').css('width', '500px');
    //     $('.box').css('background', 'pink');   
    // });

    // 滑入
    $('.box').hover(function () {
        // over滑入
        // 載入css .box會載style樣式
        $('.box').css('width', '500px');
        $('.box').css('background', 'pink');   
            
        }, function () {
            // out滑出
            $('.box').css('width', '300px');
            $('.box').css('background', 'black');   
        }
    );
});