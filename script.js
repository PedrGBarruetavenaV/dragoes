const menuB = document.querySelector('#nav-dragoes');

//itens do menu para deslocar
const menuDesloc1 = document.querySelector('#normal1');
const menuDesloc2 = document.querySelector('#normal2');
const menuDesloc3 = document.querySelector('#normal3');
const menuDesloc4 = document.querySelector('#normal4');

const botaoMenu = document.querySelector('#botao-menu');


function alternaMenu() {
    menuB.classList.toggle('visivel');
    menuB.classList.toggle('invisivel');

    //menu
    menuB.classList.toggle('visivel-deslocado');
    menuDesloc1.classList.toggle('desloc');
    menuDesloc2.classList.toggle('desloc');
    menuDesloc3.classList.toggle('desloc');
    menuDesloc4.classList.toggle('desloc');
}

botaoMenu.addEventListener('click', alternaMenu);
//dragoesNav.addEventListener('mouseover', alternaMenu);
