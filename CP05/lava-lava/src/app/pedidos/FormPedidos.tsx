import { PedidoProps } from "@/types";
import { ActionsProps } from "@/types";


export default function FormPedidos({marca, modelo, placa, nome, tipoLavagem, captura, add} : PedidoProps&ActionsProps){
	return (
		<div className="container" onSubmit={captura}>
			<h2>Cadastrar Pedido</h2>
			<form onSubmit={add} >
				<input type="text" name="marca" placeholder="Marca" value={marca} onChange={captura}/>
				<input type="text" name="modelo" placeholder="Modelo" value={modelo} onChange={captura}/>
				<input type="text" name="placa" placeholder="Placa" value={placa} onChange={captura}/>
				<input type="text" name="nome" placeholder="Nome" value={nome} onChange={captura}/>
				<input type="text" name="tipoLavagem" placeholder="tipo lavagem" value={tipoLavagem} onChange={captura}/>
				<button type="submit">Adicionar Pedido</button>
			</form>
		</div>
	)
}