import { useParams, useNavigate } from "react-router-dom"
import { listaProdutos } from "../../listaProdutos"
import { Produtos } from "../../types"


export default function EditarProduto(){
  const lista:Produtos[] = listaProdutos
  const navegacao = useNavigate()
  const { id } = useParams()
  const idProd:number = Number(id)
  
  const proc = lista.filter(prod=> prod.id === idProd)
  const produto = proc[0]

  const salvar = () =>{
    alert(`Produto: ${produto.nome} editado com sucesso`)
    return navegacao('/produto')
  }

  return (
    <main>
      <h1>Editar Produtos</h1>
      <p>Editando os dados do produto: {produto.nome}</p>
      <button onClick={salvar}>Salvar</button>
    </main>
  )
}