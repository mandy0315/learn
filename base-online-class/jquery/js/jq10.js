$(document).ready(function () {
    // $('.dropdown').click(function (e) { 
    //     e.preventDefault();
    //     // 變藍
    //     $('.dropdown').toggleClass('active');
    //     // 選單下滑
    //     $('.dropdown-open').slideToggle(500);
        
    // });
    $('.dropdown').hover(function () {
        // over
        $('.dropdown').addClass('active');
        $('.dropdown-open').slideDown(500);
            
        }, function () {
            // out
            $('.dropdown').removeClass('active');
            $('.dropdown-open').slideUp(500);
        }
    );
});