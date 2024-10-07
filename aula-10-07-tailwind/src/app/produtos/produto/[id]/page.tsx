'use client'
import { TipoProduto } from "@/types"
import { useEffect, useState } from "react"
import { GiChainMail } from "react-icons/gi"

export default function Produto({params}:{params:{id:number}}){

	const [produto, setProduto] = useState<TipoProduto>()
	useEffect(() => {
		const chamadaApi = async () => {
			const response = await fetch(`http://localhost:3000/api/base-produtos/${params.id}`)
			const data = await response.json()
			setProduto(data)
		}
		chamadaApi()
	}, [])
	return (
		<main>
			<h2>Produto</h2>
			<div>
				<p>id: {produto?.id}</p>
				<p>Nome: {produto?.nome}</p>
				<p>Preço: {produto?.preco}</p>
				<p>Estoque: {produto?.estoque}</p>
			</div>
		</main>
	)
}