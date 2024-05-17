let data = new Date();
console.log(data);

console.log(data.getDate());

console.log(('0'+data.getDate()).slice(-2)); // dia

console.log((data.getMonth()+1)); // Índice do mês dentro do array

console.log(data.getFullYear()); //ano

let diasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

console.log(diasSemana[data.getDay()]); //Dia da semana

data.setDate(data.getDate()+5); // mudar o dia

console.log(('0'+data.getDate()).slice(-2));

data.setMonth(data.getMonth()+5); //mudar o mês

console.log(data.getMonth());

data.setFullYear(data.getFullYear()+5); //mudar o ano

console.log(data.getFullYear());

console.log(data.toDateString()); //retorna o foramto global de data

console.log(data.toLocaleDateString()); // retorna o formato local

let data2 = new Date()

let dia = ('0'+data2.getDate()).slice(-2)

let mes = data2.getMonth();

let ano = data2.getFullYear()

let meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho'
]

console.log(`${dia} de ${meses[mes]} de ${ano}`)