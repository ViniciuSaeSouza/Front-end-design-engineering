import { dadosAluno } from "../../types";
import { chaves } from "../../types";

export default function Cards ({key, nome, idade}: dadosAluno & chaves){
	return (
		<div key={key}>O aluno {nome} tem {idade} anos</div>
	)
}