
/////////////////////////////////////////////////BURGER MENU///////////////////////////////////////////



const menu = document.querySelector('.head');
const burger = document.querySelector('.touch');
const iks = document.querySelector('.iks');


burger.addEventListener('click', e => {
    if (menu.classList.contains('active') == false) {
        menu.classList.add('active');
    } 
});

iks.addEventListener('click', e => {
    if (menu.classList.contains('active') == true) {
        menu.classList.remove('active');
        menu.classList.add('no');
    } 
});




/////////////////////////////////////////////////ACCORDION TEAM///////////////////////////////////////////


const accordion = document.querySelectorAll('.accordion_item');
const touch = document.querySelectorAll('.accordion_link');

for (let i = 0; i < touch.length; i++) {
    touch[i].onclick = function(a) {
        a.preventDefault();

        hide();
    
    if(accordion[i].classList.contains('active') == false) {
        accordion[i].classList.add('active');
        accordion[i].classList.remove('close');
        console.log('Открыл');
  

    }
    

    
        
    
}
    }



function hide() {
    

for (let i = 0; i < accordion.length; i++) {
    
    if (accordion[i].classList.contains('active')) {
        accordion[i].classList.remove('active');
        console.log('Закрыл открытый');

        
    }
    
}
}


/////////////////////////////////////////////////ACCORDION MENU///////////////////////////////////////////

const acc = document.querySelectorAll('.accord_item');
const but = document.querySelectorAll('.accord_link');

for (let i = 0; i < but.length; i++) {
    but[i].onclick = function(e) {
        
        e.preventDefault();
        hideAll();
        // hide();
    
    if(acc[i].classList.contains('active') == false) {
        acc[i].classList.add('active');
        acc[i].classList.remove('close');
        console.log('Открыл');
  

    }
    

    
        
    
}
    }



function hideAll() {
    

for (let i = 0; i < acc.length; i++) {
    
    if (acc[i].classList.contains('active')) {
        acc[i].classList.remove('active');
        console.log('Закрыл открытый');

        
    }
    
}
}


/////////////////////////////////////////////////SLAIDER///////////////////////////////////////////

const left = document.querySelector('.scroll_left');
const right = document.querySelector('.scroll_right');
const item = document.querySelector('.slide_kadr');

right.addEventListener("click", function() {
    loop("right");
    slideChange()
  });
  
  left.addEventListener("click", function() {
    loop("left");
    slideChange()
  });
  
  function loop(direction) {
    if (direction === "right") {
      item.appendChild(item.firstElementChild);
    } else {
      item.insertBefore(item.lastElementChild, item.firstElementChild);
    }
  }

  function slideChange() {
    console.log("__start");
    var myVar = setTimeout(change, 1000);
  }

/////////////////////////////////////////////////SEND FORM///////////////////////////////////////////


// var formData = new FormData('.form');
const form = document.querySelector('.form');
const button = document.querySelector('.buy_in');
test = form.innerHTML || form.textContent;

if (form.elements.text === true) {
console.log('Что то есть');
    
}else {
console.log('Нету ничего');

}
button.addEventListener('click', e => {
    e.preventDefault();

    // try {
    //     if (condition) {
            
    //     }
        
    // } catch (error) {
        
    // }

});
//////////////////////////////////////////////MAP/////////////////////////////////////////////////////////////

 
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [59.939095, 30.315868],
                zoom: 9
                
            }, {
                searchControlProvider: 'yandex#search'
            }),
    
            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),
    
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Здесь наше заведение',
                balloonContent: 'Вы можете найти нас в центре города!'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: '/icons/map-marker.svg',
                // Размеры метки.
                iconImageSize: [30, 42],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38]
            }),
    
            myPlacemarkWithContent = new ymaps.Placemark([59.919095, 30.305868], {
                hintContent: 'Адмиралтейский район',
                balloonContent: 'Будите тут , не забудьте перекусить =)',
                // iconContent: '12'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#imageWithContent',
                // Своё изображение иконки метки.
                iconImageHref: '/icons/map-marker.svg',
                // Размеры метки.
                iconImageSize: [30, 42],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-24, -24],
                // Смещение слоя с содержимым относительно слоя с картинкой.
                iconContentOffset: [15, 15],
                // Макет содержимого.
                iconContentLayout: MyIconContentLayout
            }),
            myPlacemarkWithContent2 = new ymaps.Placemark([59.989095, 30.345868], {
                hintContent: 'Лесной проспект',
                balloonContent: 'Запах наших бургеров сам приведет вас к нам =)',
                // iconContent: '12'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#imageWithContent',
                // Своё изображение иконки метки.
                iconImageHref: '/icons/map-marker.svg',
                // Размеры метки.
                iconImageSize: [30, 42],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-24, -24],
                // Смещение слоя с содержимым относительно слоя с картинкой.
                iconContentOffset: [15, 15],
                // Макет содержимого.
                iconContentLayout: MyIconContentLayout
            });
            
    
        myMap.geoObjects
            .add(myPlacemark)
            .add(myPlacemarkWithContent)
            .add(myPlacemarkWithContent2);

            myMap.behaviors.disable('scrollZoom') 
    });