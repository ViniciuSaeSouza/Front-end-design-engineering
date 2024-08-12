const inputNome = document.querySelector("#input-nome");
const btnAdicionarNome = document.querySelector("#btn-adicionar-nome");

const btnOrdenarLista = document.querySelector("#btn-ordem-alfabetica");
const btnReverteOrdem = document.querySelector("#btn-reverter-ordem");
const btnRemoverNome = document.querySelector("#btn-remover-nome");
const listaNomes = document.querySelector("#lista-nomes");

let arrayNomes = [];

function mostrarNomes() {
  listaNomes.innerHTML = '';
  for (let i = 0; i < arrayNomes.length; i++){
    let li = document.createElement('li');
    li.textContent = arrayNomes[i];
    listaNomes.appendChild(li)
  }
}

arrayNomes.map

btnAdicionarNome.addEventListener('click', (e) => {
  e.preventDefault();
  let nome = inputNome.value;
  arrayNomes.push(nome.toLowerCase());
  mostrarNomes()
  console.log(arrayNomes);
})

btnOrdenarLista.addEventListener('click', () => {
  arrayNomes.sort()
})




