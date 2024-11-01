import Link from "next/link";
import Image from "next/image";
import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Banner from "@/components/Banner/Banner";
import Card from "@/components/Card/Card";
import Footer from "@/components/Footer/Footer";
import imgBanner1 from '@/images/img_banner_1.png'
import imgBanner2 from '@/images/img_banner_2.png'
import imgCard1 from '@/images/img-card-1.png'
import imgCard2 from '@/images/img-card-2.png'
import imgCard3 from '@/images/img-card-3.png'
import ImgCard from "@/components/ImgCard/ImgCard";

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
      estilo : "flex justify-evenly mt-20 p-14 items-center",
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

  const imagensCard = [imgCard1, imgCard2, imgCard3]

  return (
    <>
      <Banner imgSrc={banner1.src} alt={banner1.alt} estilo={banner1.estilo} texto={banner1.texto} estiloTexto={banner1.estiloTexto} />
      <div className="flex justify-center space-x-20">
        {dataCards.map( v => (
          <Card  rota={v.rota} titulo={v.titulo} descricao={v.descricao} textoLink={v.textoLink}/>
        ))}
      </div>
      <Banner imgSrc={banner2.src} alt={banner2.alt} estilo={banner2.estilo} texto={banner2.texto} estiloTexto={banner2.estiloTexto}/>
      {imagensCard.map(v => (
        <ImgCard imgSrc={v.src} />
        ))}
    </>
  );
}
