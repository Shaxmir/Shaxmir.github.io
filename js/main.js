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

