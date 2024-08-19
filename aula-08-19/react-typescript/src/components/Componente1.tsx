type TiposComponente1 = {
  nomeUsuario:string;
  subtitulo:string;
}

type Comprados = {
  produtoComprado:string
}

export default function Componente1({produtoComprado,nomeUsuario,subtitulo}:TiposComponente1&Comprados){
  let curso:string = "JavaScript"
  return(
    <div>
      <h2>{subtitulo}</h2>
      <p>O curso que estamos vendo é: {curso}</p>
      <p>Seja bem-vindo(a) {nomeUsuario}!</p>
      <p>Produto comprado: {produtoComprado}</p>
    </div>
  )
}