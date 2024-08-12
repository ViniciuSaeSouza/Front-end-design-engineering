const alunos = [
  { nome: "Carlos", nota: 7 },
  { nome: "Bruno", nota: 4 },
  { nome: "Jorge", nota: 6 },
  { nome: "Joana", nota: 3 },
  { nome: "Livia", nota: 9 },
];

const nomeALunos = alunos.map((aluno) => aluno.nome);

const listaAlunos = alunos.map((aluno, i) => `${i + 1}° aluno ${aluno.nome}`);

const alunoAprovados = alunos
  .filter((aluno) => aluno.nota >= 6)
  .map((aluno) => `Olá ${aluno.nome}, você foi aprovado!`);

// console.log("Alunos aprovados: ",alunoAprovados);

const vendedores = [
  { nome: "Lucas", idade: 22, vendas: 15 },
  { nome: "Jorge", idade: 25, vendas: 11 },
  { nome: "Luis", idade: 30, vendas: 25 },
  { nome: "Jessica", idade: 21, vendas: 14 },
];

const totalVendas = vendedores.reduce(
  (acc, vendedor) => acc + vendedor.vendas,
  0
);

console.log(`Total de vendas: ${totalVendas}`);

const dadosVendas = vendedores.reduce(
  (acc, item) => {
    const maisNovo = acc.maisNovo < item.idade ? acc.maisNovo : item.idade;
    const maisVelho = acc.maisVelho > item.idade ? acc.maisVelho : item.idade;

    return {
      totalVendas: acc.totalVendas + item.vendas,
      maisNovo: maisNovo,
      maisVelho: maisVelho,
    };
  },
  { totalVendas: 0, maisNovo: undefined, maisVelho: undefined }
);

console.log("Dados Vendas: ", dadosVendas);

const filaBrinquedo = [
  { nome: "Sara", idade: 14, altura: 1.5 },
  { nome: "Luciana", idade: 17, altura: 1.7 },
  { nome: "Kleber", idade: 16, altura: 1.65 },
  { nome: "Anderson", idade: 14, altura: 1.8 },
];

const todaFilaPode = filaBrinquedo.every((pessoa) => pessoa.altura >= 1.6);

console.log(todaFilaPode ? "Vamos lá!" : "Nem todos podem!");

const verificarIdade = filaBrinquedo.some((pessoa) => pessoa.idade >= 18);

console.log(verificarIdade);

const responsavel = filaBrinquedo.find((pessoa) => pessoa.idade >= 18);

console.log(responsavel);

const convidados = [
  "prof Luis",
  "Lucas",
  "Gilberto",
  "Maria",
  "Vinicius",
  "prof Cordeiro",
];

const professoresConvidados = convidados.filter((convidado) =>
  convidado.includes("prof")
);

console.log("Professores convidados: ", professoresConvidados);

const frutas = ["maçã", "banana", "uva"];
const verduras = ["couve", "alface", "agrião"];

const feira = [...frutas, ...verduras];

console.log(feira);

let pessoa = {
    nome: 'Andréia',
    idade: 35,
    altura: 1.60
}

pessoa = {...pessoa, idade: 38}

pessoa = {...pessoa, cpf: '468.288.898-56'}

console.log("Pessoa: ", pessoa);


// Rest parameter

function somarTodos(...args){
    return args.reduce((acc, item)=> acc += item)
}


console.log(somarTodos(5, 7, 9,8,10,100,99,42,66));