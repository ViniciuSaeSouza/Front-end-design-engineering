// type CabecacalhoProps = {
//     titulo:string;
//     capitulo:number;
//     aviso:()=>void;
// }
import { CabecacalhoProps } from "../types"
import './Cabecalho.css'


export default function Cabecacalho({titulo, capitulo, aviso}:CabecacalhoProps){
    const paragrafo = {
        color:'Orange',
        fontFamily:'Arial',
    }
    
    return(
        <>
            <header className="divBorder">
                <h1>Olá {titulo}! - Cap.{capitulo}</h1>
                <p style={paragrafo}>Apenas um parágrafo singelo</p>
                <button onClick={aviso}>Aviso</button>
            </header>
        </>
    )
}