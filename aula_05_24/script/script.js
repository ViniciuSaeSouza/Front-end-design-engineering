// Web storage

// lovalStorage = guarda as informações mesmo que o navegador seja fechado

//sessionStorage = só guarda as informações enquanto os informações enquanto o navegador estiver aberto

//setItem
//getItem
//removeItem
//clear

localStorage.setItem('produto', 'Monitor');

let produto = localStorage.getItem('produto');

console.log(produto);

localStorage.removeItem('produto');

console.log(produto);

localStorage.setItem('produto', 'Monitor');
localStorage.setItem('preco', '1000,00');
localStorage.setItem('quantidade', '3');

localStorage.clear();

sessionStorage.setItem('vendedor', 'João');

console.log(sessionStorage.getItem('vendedor'));

let numeros = [1,2,3,4,5,6]

sessionStorage.setItem('nums', JSON.stringify(numeros))
console.log(sessionStorage.getItem('nums'));

sessionStorage.setItem('nums', JSON.parse(sessionStorage.getItem('nums')));


let frutas = ['maça', 'banana', 'pera','uva']

sessionStorage.setItem('frutas', JSON.stringify(frutas))

console.log(sessionStorage.getItem('frutas'))
