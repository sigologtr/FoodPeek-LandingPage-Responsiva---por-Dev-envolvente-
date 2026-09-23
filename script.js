const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');
const titulosRodape = document.querySelectorAll('.rodape-titulo');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
    })

titulosRodape.forEach(titulo => {
    titulo.addEventListener('click', () => {
        titulo.parentElement.classList.toggle('aberto');
    })
})
