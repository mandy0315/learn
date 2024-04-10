$(document).ready(function () {
    // attr是更改html裡的屬性值

    $('a').attr('href','https://oscarotero.com/jquery/');
    $('.big').click(function (e) { 
        e.preventDefault();
        $('img').attr('width', '200px');
        
    });
});