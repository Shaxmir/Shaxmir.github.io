$(document).ready(() => {
    var totalWidth = 0;
    $('.scroll_right').on('click', function(e){
        var slideWidth = $('.slide_kadr').width();
        var maxwidth = slideWidth * 5;
        totalWidth = totalWidth + slideWidth;
        
        console.log(maxwidth);
        if (totalWidth >= maxwidth) {
            totalWidth = 0;
            $('.slide_kadr').css('right',  totalWidth);
        }else {
            $('.slide_kadr').css('right', totalWidth);
        }
    })
    $('.scroll_left').on('click', function(e){
        var slideWidth = $('.slide_kadr').width();
        var maxwidth = slideWidth * 4;
        var minwidth = 0;
        totalWidth = totalWidth - slideWidth;
        
        console.log(maxwidth);
        if (totalWidth < minwidth) {
            totalWidth = maxwidth;
            $('.slide_kadr').css('right',  totalWidth);
        }else {
            $('.slide_kadr').css('right', totalWidth);
        }
    })
 });