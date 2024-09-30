import Card from "@/components/Card";
import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";
import carro1 from "@/img/carro1.jpg"
import carro2 from "@/img/carro2.png"
import carro3 from "@/img/carro3.png"

export default function Home() {
  const listaCards = [
    {nome: 'Paula Matos', img: carro1, frase: 'Muito boa a lavagem!'},
    {nome: 'Lucas Vieira', img: carro2, frase: 'Serviço muito bom!'},
    {nome: 'Marcelo Barros', img: carro3, frase: 'Entregaram meu carro limpíssimo!'},
  ]

  return (
    <>

      <Cabecalho/>
      <div className="cardContainer">
        {
          listaCards.map((cliente, index) => (
            <Card index={index} nome={cliente.nome} img={cliente.img} frase={cliente.frase}/> 
          ))
        }
      </div>
      <Rodape/>
    </>
  );
}