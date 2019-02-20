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


    $("#menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        
        
		//узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
    });


    $('.nav_touch').on('click', function (params) {
        $('.activ_nav').removeClass('activ_nav');
		$(this).addClass('activ_nav');
    });
    
 });