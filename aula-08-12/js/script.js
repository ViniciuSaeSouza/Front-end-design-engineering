// Spread (...<array>) - Espalha o conteúdo do array ou objeto em outro(array ou objeto).

const frutas = ["maçã", "banana", "uva"];
const legume = ["batata", "cenura", "brocolis"];

const feira = [...frutas, ...legume];

// console.log(feira);

let carro = {
  marca: "VW",
  modelo: "Gol",
  ano: 2014,
};
// console.log(carro);

carro = { ...carro, modelo: "Polo" }; // Alterar um atributo dentro do objeto

carro = { ...carro, motor: "1.0 turbo" }; // Adicionar um atributo ao objeto

// console.log(carro);

// Rest Parameter - permite que uma função aceite um número variável de argumentos.

//Exemplo sem 'Rest Parameter':
function soma(n1, n2) {
  return n1 + n2;
}

// console.log(soma(4,5));

// Exemplo COM 'Rest Parameter':

function soma(...numeros) {
  return numeros.reduce((acc, atual) => (acc += atual));
}

// console.log(soma(4, 5, 10));

//Destructuring - permite extrair valores de arrays ou objetos e atribuí-los a variáveis.

let alunos = ["Adriano", "Bianca", "Carolina"];

let [a, b, c] = alunos;

// console.log(a);
// console.log(b);
// console.log(c);

// *********************** //
// let car1, car2, car3, car4;

// [car1, car2, car3, car4] = ["Civic", "Cruze", "Corolla", "Opala"];

// console.log(car1);
// console.log(car2);
// console.log(car3);
// console.log(car4);

// *********************** //
// let car1, car2, car3, car4;

// [car1 = 'Civic', car2 = 'Cruze', car3 = "Corolla", car4 = 'Sentra'] =['City', ,'BYD'];

// console.log(car1);
// console.log(car2);
// console.log(car3);
// console.log(car4);
// // *********************** //

// const exemploFilmes = {
//   ficcao : 'Vingadores',
//   terror : 'O Exorcista',
//   comedia : 'Aqueles caras'
// }

// let {ficcao, terror} = exemploFilmes;

// ficcao = 'X-men'

// ******************************************************** //

//        MANIPULAÇÃO DE ELEMENTOS DO DOM - CreateElement

const titulo = document.createElement('h1');

titulo.setAttribute('id','titulo')

const texto = document.createTextNode('Este é o Título da Página')

titulo.appendChild(texto)

document.querySelector('body').appendChild(titulo)