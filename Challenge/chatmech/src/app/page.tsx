import Link from "next/link";
import Image from "next/image";
import Banner from "@/components/Banner/Banner";
import Card from "@/components/Card/Card";

import imgBanner1 from './../images/img_banner_1.png';
import imgBanner2 from '@/images/img_banner_2.png'
import imgCard1 from '@/images/img-card-1.png'
import imgCard2 from '@/images/img-card-2.png'
import imgCard3 from '@/images/img-card-3.png'
import ImgCard from "@/components/ImgCard/ImgCard";
import { list } from "postcss";

export default function Home() {


// Rota, Título, Descrição e TextoLink dos 3 cards
  const dataCards = [
    {
      rota:"/", 
      titulo: "Crie uma conta",
      descricao: "Cadastre-se e tenha acesso completo aos nossos serviços!",
      textoLink: "Quero me cadastrar!"
    },
    {
      rota:"/", 
      titulo: "Seja parceiro",
      descricao: "Gostaria de estabelecer uma nova parceria conosco?",
      textoLink: "Quero ser parceiro!"
    },
    {
      rota:"/", 
      titulo: "ChatMech",
      descricao: "Converse com o ChatMech e tenha uma experiência única.",
      textoLink: "Conhecer o ChatMech!"
    },
  ]
//  Props do 1° Componente Banner
  const banner1 = 
    {
      src : imgBanner1,
      alt : "Desenho de uma mulher sentada de pernas cruzadas com um laptop em seu colo",
      estilo : "flex justify-evenly mt-6 p-14 items-center",
      texto : <><span className='text-blue_3 leading-relaxed'>ChatMech</span> <br />Seu assistente, a qualquer hora!</>,
      estiloTexto : "font-roboto text-background text-5xl max-w-[500px] pl-28"
  }
  const banner2 = 
    {
      src : imgBanner2,
      alt : "Desenho de duas pessoas cumprimentando as mãos com um documento de conteúdo ilegível compondo o fundo do desenho",
      estilo : "flex justify-evenly mt-20 p-14 items-center drop-shadow-xl",
      texto : 
      <>
        Gostaria de conhecer mais? <br />
        <span className='text-blue_3 leading-relaxed'>Cadastra-se</span> e acesse sua área do cliente.
        <button className="border-white border-2 text-center rounded-xl p-2 mt-8 text-xl relative max-w-[60%] hover:bg-background hover:text-blue_1">
          <Link href={'/'}>Quero me cadastrar</Link>
        </button>
      </>,
      estiloTexto : "font-roboto text-background text-3xl max-w-[500px] pl-28 leading-relaxed"
  }

  const listInfo = [
    {
      titulo: "Agilidade: Obtenha um diagnóstico rápido.",
      descricao: "Com o nosso sistema, você pode se conectar rapidamente ao nosso assistente e realizar um diagnósticobreve do problema do seu veículo, sem a necessidade de passar por processos complexos e, o melhor de tudo,    sem sair do conforto de casa."
    },
    {
      titulo: "Oportunidade: Valorize sua mecânica.",
      descricao: "Ao se tornar nosso parceiro, sua mecânica estará na vanguarda da tecnologia. Com nossos recursos, você poderá acelerar os processos de diagnóstico, tornando-os mais rápidos e eficientes do que os métodos convencionais."
    },
    {
      titulo: "Segurança: Proteção à informação é nosso compromisso.",
      descricao: "Sinta-se tranquilo quanto a sua segurança e à privacidade dos dados trafegados, pois para nós, essas premissas são inegociáveis. A validação da segurança é disciplina presente em todas as etapas do nosso processo"
    },
    {
      titulo: "Ganhe Tempo: Aproveite melhor o seu dia.",
      descricao: "Com o nosso sistema, o tempo de espera para obter um diagnóstico é reduzido drasticamente Você já chegará à mecânica com um pré-diagnóstico em mãos, tornando o processo mais ágil e eficaz."
    },


  ]

  const imagensCard = [imgCard1, imgCard2, imgCard3]

  return (
    <>
      <Banner imgSrc={banner1.src} alt={banner1.alt} estilo={banner1.estilo} texto={banner1.texto} estiloTexto={banner1.estiloTexto} />
      <div className="flex justify-center space-x-20">
        {dataCards.map( (v,i) => (
          <Card key={i}  rota={v.rota} titulo={v.titulo} descricao={v.descricao} textoLink={v.textoLink}/>
        ))}
      </div>
      <Banner imgSrc={banner2.src} alt={banner2.alt} estilo={banner2.estilo} texto={banner2.texto} estiloTexto={banner2.estiloTexto}/>
      <div className="flex mt-20 mb-32 space-x-20 justify-center">
        {imagensCard.map((v,i) => (
          <ImgCard key={i} imgSrc={v} />
        ))}
      </div>
      <div className="grid grid-cols-3 grid-rows-2">
        <h3 className="text-4xl font-roboto text-blue_2 col-span-1 ml-16 row-span-1">Vantagens de Usar nossos Serviços</h3>
        <div className="col-span-2 row-span-2 ">
          <ul className="list-inside list-disc">
            {listInfo.map((v, i) => (
              <li key={i}>
                <p className="font-roboto font-bold ">{v.titulo}</p>
                <p>{v.descricao}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}