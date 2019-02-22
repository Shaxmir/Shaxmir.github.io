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
    ///////////////////////////////////scroll navigator////////////////////////
    const sections = $(".section");
    const display = $(".big_block");
    let inScroll = false;
    
    const mobileDetect = new MobileDetect(window.navigator.userAgent);
    const isMobile = mobileDetect.mobile();
    
    const setActiveMenuItem = itemEq => {
      $('.nav_touch').eq(itemEq).addClass('activ_nav')
        .siblings().removeClass('activ_nav')
    } 
    
    const performTransition = sectionEq => {
      const position = `${sectionEq * -100}%`;
    
      if (inScroll) return;
    
      inScroll = true;
    
      sections
        .eq(sectionEq)
        .addClass("activ_nav")
        .siblings()
        .removeClass("activ_nav");
    
      display.css({
        transform: `translate(0, ${position})`,
        "-webkit-transform": `translate(0, ${position})`
      });
    
      setTimeout(() => {
        inScroll = false;
        setActiveMenuItem(sectionEq);
      }, 1300); // продолжительность анимации + 300ms - потому что закончится инерция
    };
    
    const scrollToSection = direction => {
      const activeSection = sections.filter(".activ_nav");
      const nextSection = activeSection.next();
      const prevSection = activeSection.prev();
    
      if (direction === "up" && prevSection.length) {
        performTransition(prevSection.index());
      }
    
      if (direction === "down" && nextSection.length) {
        performTransition(nextSection.index());
      }
    };
    
    $(document).on({
      wheel: e => {
        const deltaY = e.originalEvent.deltaY;
        const direction = deltaY > 0 ? "down" : "up";
    
        scrollToSection(direction);
      },
      keydown: e => {
        switch (e.keyCode) {
          case 40:
            scrollToSection("down");
            break;
    
          case 38:
            scrollToSection("up");
            break;
        }
      },
      touchmove: e => e.preventDefault()
    
      // touchstart touchend touchmove 
    });
    
    
    $('[data-scroll-to]').on('click', e => {
      e.preventDefault();
    
      const target = parseInt($(e.currentTarget).attr('data-scroll-to'));
    
    
      performTransition(target);
    
    })
    
    if (isMobile) {
      $(document).swipe({
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
          /**
           * плагин возвращает фактическое...
           * ...
           */
          const scrollDirection = direction === 'down' ? 'up' : 'down';
          
          scrollToSection(scrollDirection);
        }
      });
    }

    // $("#menu").on("click","a", function (event) {
	// 	//отменяем стандартную обработку нажатия по ссылке
	// 	event.preventDefault();

	// 	//забираем идентификатор бока с атрибута href
    //     var id  = $(this).attr('href'),
        
        
	// 	//узнаем высоту от начала страницы до блока на который ссылается якорь
    //         top = $(id).offset().top;

		
	// 	//анимируем переход на расстояние - top за 1500 мс
	// 	$('body,html').animate({scrollTop: top}, 1500);
    // });


    // $('.nav_touch').on('click', function (params) {
    //     $('.activ_nav').removeClass('activ_nav');
	// 	$(this).addClass('activ_nav');
    // });
 });