
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