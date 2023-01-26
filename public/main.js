const botao = document.querySelector('#botao')

botao.addEventListener('click', () =>{
    window.scroll({top: window.innerHeight, behavior: "smooth"})
})