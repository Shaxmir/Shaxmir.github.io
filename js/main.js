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




/////////////////////////////////////////////////ACCORDION///////////////////////////////////////////


const accordion = document.querySelectorAll('.accordion_item');
const touch = document.querySelectorAll('.accordion_link');

for (let i = 0; i < touch.length; i++) {
    touch[i].onclick = function() {
        
        hideAll();
        // hide();
    
    if(accordion[i].classList.contains('active') == false) {
        accordion[i].classList.add('active');
        accordion[i].classList.remove('close');
        console.log('Открыл');
  

    }
    

    
        
    
}
    }


// function hide() {
//     for (let i = 0; i < accordion.length; i++) {
//         touch[i].onclick = function () {
            
        
//         if(accordion[i].classList.contains('close') == false) {
          
//             accordion[i].classList.toggle("active");
//             accordion[i].classList.toggle("close");
//             console.log('Закрыл');
        
//     }
    
// }
// }
// }
function hideAll() {
    

for (let i = 0; i < accordion.length; i++) {
    
    if (accordion[i].classList.contains('active')) {
        accordion[i].classList.remove('active');
        console.log('Закрыл открытый');

        
    }
    
}
}


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