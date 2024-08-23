// import { ReactNode } from "react";

// type AlunosProps ={
//     subtitulo: string;
//     children: ReactNode; // Ou React.ReactNode para não ter que fazer o import
// }

import { AlunosProps } from "../types"
import stylesAlunos from './Alunos.module.css'

export default function Alunos({subtitulo, children}:AlunosProps){
    return(
        <div className={stylesAlunos.divBorder}>
            <h2>{subtitulo}</h2>
            {children}
        </div>
    )
}