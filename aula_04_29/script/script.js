console.log('primeira mensagem')

// function somar(num1 , num2) {
//     return num1 + num2
// }


// function somar(...nums) {

//     let total = 0
//     for (let num of nums){
//         total += num
//     }
    
//     return total
// }

// function aviso(){
//     alert('Só estou passando para avisar!!!')
// }

// aviso()

let recado = function(){ //Função anônima
        alert('Criei uma função anonima')
}

//let nome = document.getElementById('nome')

let nome = document.querySelector("#nome")
console.log(nome)

nome.innerHTML = "Saes"

let novo = document.getElementById("idTexto")

function mudar(){
    document.getElementById("title").innerHTML = novo.value
}