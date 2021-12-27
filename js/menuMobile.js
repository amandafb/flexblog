const btnMobile = document.getElementById('btn-mobile')
const linkMenu = document.querySelectorAll('.menu-item')

function toggleMenu(event){
    if(event.type === 'touchstart'){
        event.preventDefault();
    }

const nav = document.getElementById('nav')
nav.classList.toggle('active')

//se a classe for active, a variavel tem o valor true adicionado, se não tiver, o valor é false
//esse trecho faz com que seja dito aos leitores de tela que o botão do menu mobile é "expansível", ou seja, 
//existe mais conteúdo ao clicar nele. Se for true ele está aberto e se for false, está fechado
const active = nav.classList.contains('active')
event.currentTarget.setAttribute('aria-expanded', active)

if(active){
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
} else{
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
}
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)

linkMenu.forEach(link => {
    link.addEventListener('click', ()=>{
        const nav = document.getElementById('nav')
        nav.classList.remove('active')
    })
});