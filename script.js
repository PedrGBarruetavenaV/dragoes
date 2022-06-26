// Por enquanto o javascript não funciona (tentei mas não deu)

let botaoEl = document.querySelector('#abre-menu');
let menuB = document.querySelector('#nav-dragoes');

function alternaMenu() {
    menuB.classList.add('.visivel');
    menuB.classList.remove('.invisivel');
}

botaoEl.addEventListener('click', alternaMenu);
