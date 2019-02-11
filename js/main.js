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

const accordion = document.querySelector('.accordion_item');
const touch = document.querySelector('.accordion_link');


touch.addEventListener('click', a => {
    if(accordion.classList.contains('active') == false) {
        accordion.classList.add('active');
  

    }
    if(accordion.classList.contains('active') == true) {
        accordion.classList.remove('active');
    }
});

const acc = document.querySelector('.accord_item');
const tou = document.querySelector('.accord_link');


tou.addEventListener('click', a => {
    if(acc.classList.contains('active') == false) {
        acc.classList.add('active');
  

    }
    if(acc.classList.contains('active') == true) {
        acc.classList.remove('active');
    }
});