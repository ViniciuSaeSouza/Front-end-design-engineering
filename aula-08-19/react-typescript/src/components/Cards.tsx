type AlunosProps = {
  nome:string;
  idade:number;
}

type KeyProps = {
  key:number;
}

export default function Cards({nome, idade, key}:AlunosProps&KeyProps){
  return(
    <div key={key}>O aluno {nome} tem {idade} anos</div>
  )
}