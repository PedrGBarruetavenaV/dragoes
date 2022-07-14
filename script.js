let dragoesNav = document.querySelector('#abre-menu');
let menuB = document.querySelector('#nav-dragoes');
let conj = document.querySelectorAll('.conjunto-menu');
let botaoMenu = document.querySelector('#botao-menu');

function alternaMenu() {
    menuB.classList.toggle('visivel');
    menuB.classList.toggle('invisivel');
}

botaoMenu.addEventListener('click', alternaMenu);
//dragoesNav.addEventListener('mouseover', alternaMenu);
//conj.addEventListener('mouseout', alternaMenu);
