$(document).ready(() => {
    $('.scroll_left').on('click', function(e){
        
        var sldr = $('.slide_kadr'),
        sldrContent = sldr.html(),
        slideWidth = $('.slide_kadr').outerWidth(),
        slideCount = $('.slide_kadr .slide_item_kadr').length - 1;
        console.log(sldr);
        console.log(sldrContent);
        console.log(slideWidth);
        console.log(slideCount);
        $('.slide_kadr').css('right', slideWidth);
    })
});