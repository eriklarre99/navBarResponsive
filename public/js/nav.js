"use strict";
const enlances = document.getElementsByClassName('enlaces')[0];
// console.log(enlances);
const hamburguesa = document.getElementsByClassName('hamburguesa')[0]
const menuHamburguesa = document.getElementById('iconHamburguesa') 
let openShow = false;

const toggleMenu = () => {
    enlances.classList.toggle('enlaces2');
    enlances.style.transition = 'transform 0.5s ease-in-out';
}

hamburguesa.addEventListener('click', () => {
    toggleMenu();
    if (document.querySelector('.enlaces.enlaces2')) {
        openShow = true;
    } else {
        openShow = false;
    }
})

window.addEventListener('click', (e) => {
    if(openShow){
        if (e.target !== menuHamburguesa) {
            toggleMenu();
            openShow = false;
        }
    }
})

window.addEventListener('resize', ()=> {
    if (screen.width > 700) {
        if (openShow) {
            toggleMenu();
            enlances.style.transition = 'none';
            openShow = false;
        }
    }
})