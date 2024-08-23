type CabecacalhoProps = {
    titulo:string;
    capitulo:number;
    aviso:()=>void;
}


export default function Cabecacalho({titulo, capitulo, aviso}:CabecacalhoProps){
    return(
        <>
            <header>
                <h1>Olá {titulo}! - Cap.{capitulo}</h1>
                <button onClick={aviso}>Aviso</button>
            </header>
        </>
    )
}