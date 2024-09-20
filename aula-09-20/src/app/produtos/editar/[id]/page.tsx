import { listaProdutos } from "@/listaProdutos"
import { useParams } from "next/navigation"

export default function EditarProduto(){
    const {id} = useParams()
    const idProd: number = Number(id)
    const proc = listaProdutos.filter(p => p.id === idProd)


    return(
        <main>
            <h1>EditarProdutos</h1>
            <p>O produto selecionado é: {proc[0].nome}</p>
        </main>
    )
}