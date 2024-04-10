$(document).ready(function () {
    if($('section').hasClass('container')){
        // alert('有效');
        var putInside = $('.put-inside').clone();
        $('.put-inside').remove();
        $('.container').append(putInside);
        $('.inner,.put-inside').append('<span>&emsp;mandy</span>');
    };

});