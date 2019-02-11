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

const accordion = document.querySelectorAll('.accordion_item');
const touch = document.querySelectorAll('.accordion_link');

for (let i = 0; i < touch.length; i++) {
    const le = touch[i];

}
for (let i = 0; i < accordion.length; i++) {
    const el = accordion[i];
    
}

touch[0].addEventListener('click', a => {
    if(accordion[0].classList.contains('active') == false) {
        accordion[0].classList.add('active');
        console.log('ntntntntntntn');
  

    }else {
        accordion[0].classList.remove('active');
        console.log('dsfdsfsdfsdfsdfsdf');
    }
});
touch[1].addEventListener('click', a => {
    if(accordion[1].classList.contains('active') == false) {
        accordion[1].classList.add('active');
        console.log('ntntntntntntn');
  

    }else {
        accordion[1].classList.remove('active');
        console.log('dsfdsfsdfsdfsdfsdf');
    }
});
touch[2].addEventListener('click', a => {
    if(accordion[2].classList.contains('active') == false) {
        accordion[2].classList.add('active');
        console.log('ntntntntntntn');
  

    }else {
        accordion[2].classList.remove('active');
        console.log('dsfdsfsdfsdfsdfsdf');
    }
});
touch[3].addEventListener('click', a => {
    if(accordion[3].classList.contains('active') == false) {
        accordion[3].classList.add('active');
        console.log('ntntntntntntn');
  

    }else {
        accordion[3].classList.remove('active');
        console.log('dsfdsfsdfsdfsdfsdf');
    }
});


// const acc = document.querySelector('.accord_item');
// const tou = document.querySelector('.accord_link');


// tou.addEventListener('click', a => {
//     if(acc.classList.contains('active') == false) {
//         acc.classList.add('active');
  

//     }
//     if(acc.classList.contains('active') == true) {
//         acc.classList.remove('active');
//     }
// });