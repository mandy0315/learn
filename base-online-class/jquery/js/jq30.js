$(document).ready(function () {
    // 複製html
    var putInside = $('.put-inside').clone();
    // 刪除外部html
    $('.put-inside').remove();
    // 方法一：.container裡加入putInside
    $('.container').append(putInside);
    $('.inner,.put-inside').append('<span>&emsp;mandy</span>');
    // $('.put-inside').append('<span>mandy</span>');
    // 方法二：putInside加入到.container裡(前面一定要加入jq)
    // $(putInside).appendTo('.container');
});