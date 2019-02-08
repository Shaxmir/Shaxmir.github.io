const menu = document.querySelector('.menu_in');
const burger = document.querySelector('.touch');


burger.addEventListener('click', e => {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        menu.classList.add('no');
    }else {
        menu.classList.add('active');
        menu.classList.remove('no');
    }
    if (burger.classList.contains('active')) {
        burger.classList.remove('active');
    }else {
        burger.classList.add('active');
    }
    
});

