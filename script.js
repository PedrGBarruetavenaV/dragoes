let botaoEl = document.querySelector('#abre-menu');
let menuB = document.querySelector('#nav-dragoes');

function alternaMenu() {
    menuB.classList.toggle('visivel');
    menuB.classList.toggle('invisivel');
}

botaoEl.addEventListener('click', alternaMenu);
