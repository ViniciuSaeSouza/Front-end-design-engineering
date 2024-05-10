// document.querySelector("#btn_aviso").onclick = ()=> alert('Teste Click!!')
let botao = document.querySelector("#btn_aviso")

botao.addEventListener('click', clicou)
botao.addEventListener('mouseenter', entrou)
botao.addEventListener('mouseout', saiu)

function clicou(){
    botao.innerHTML = "Clicou, não entra e nem sai mais!!!"
    botao.removeEventListener('mouseenter', entrou)
    botao.removeEventListener('mouseout', saiu)
}

function entrou(){
    botao.innerHTML = 'Entrou no botão'
}

function saiu(){
    botao.innerHTML = 'Ai, Bota de volta'
}

let botoes = document.querySelectorAll('.item')

botoes.forEach((item, i)=>{
    item.addEventListener('click', ()=>{
        console.log('Clicou!!!'+i);
    })
})