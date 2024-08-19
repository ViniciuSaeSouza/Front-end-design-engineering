type CabecalhoProps = {
  titulo:string;
  children: React.ReactNode;
}

interface SloganProps{
  slogan:string;
}

export default function Cabecalho({titulo, children, slogan}:CabecalhoProps&SloganProps){
  return(
    <header>
      <h1>{titulo}</h1>
      <h2>{slogan}</h2>
      {children}
    </header>
  )
}