import { listaProdutos } from "@/listaProdutos"
import Link from "next/link"

export default function ProdutosEletronicos(){
    return(
        <main>
            <h1>
                Lista de produtos eletrônicos
            </h1>
            {
                listaProdutos.map(p=>(
                    <div>Produto: {p.nome} - <Link href={`/produtos/editar/${p.id}`}>Editar Produtos</Link></div>
                ))
            }
        </main>
    )
}