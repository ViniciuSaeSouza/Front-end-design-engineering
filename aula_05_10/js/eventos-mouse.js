let minhaDiv = document.querySelector("#div1")

minhaDiv.addEventListener('mouseenter', entrou)
minhaDiv.addEventListener('mouseout', saiu)
//minhaDiv.addEventListener('click', clicou)
minhaDiv.addEventListener('contextmenu', clickDireito)
minhaDiv.addEventListener('dblclick', clickDuplo)
minhaDiv.addEventListener('mousemove', moveu)
minhaDiv.addEventListener('mousedown', apertou)
minhaDiv.addEventListener('mouseup', soltou)


function soltou(){
    minhaDiv.innerHTML = "Botão solto"
    minhaDiv.style.backgroundColor = 'gold'
}


function apertou(){
    minhaDiv.innerHTML = "Botão Apertado"
    minhaDiv.style.backgroundColor = 'purple'
}


function moveu(e){
    let x = e.clientX - this.offsetLeft;
    let y = e.clientY - this.offsetTop;
    let res = document.querySelector('span')
    res.innerHTML = `Posição x: ${x} e y: ${y}`
}

function clickDuplo(){
    minhaDiv.innerHTML = "Click Duplo"
    minhaDiv.style.backgroundColor = 'red'
}


function clickDireito(e){
    e.preventDefault()
    minhaDiv.innerHTML = "Click Direito!"
    minhaDiv.style.backgroundColor = 'pink'
}

function clicou(){
    minhaDiv.innerHTML = "Você clicou"
    minhaDiv.style.backgroundColor = 'orange'
}

function entrou(){
    minhaDiv.innerHTML = 'Você entrou'
    minhaDiv.style.backgroundColor = 'blue'
}

function saiu(){
    minhaDiv.innerHTML = "Você saiu"
    minhaDiv.style.backgroundColor = 'cyan'
}