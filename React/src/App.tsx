import "./App.css";
import Cabecalho from "./Components/Cabecalho/Cabecalho";
import Cards from "./Components/Cabecalho/Cards";
import { dadosAluno } from "./types";
// import Carros from './Components/Carros';
// import Parceiros from './Components/Parceiros';

function App() {
    const pagina: string = "Página Inicial";
    const nrPagina: number = 1;
    const status = "loading";
    const aviso = () => alert("GÁÁÁÁÁÁÁÁÁIISSSSS 💨");

    const alunos: dadosAluno[] = [
        { nome: "João", idade: 25 },
        { nome: "Maria", idade: 30 },
        { nome: "Pedro", idade: 35 },
    ];

    return (
        <>
            <Cabecalho
                pagina={pagina}
                aviso={aviso}
                nrPagina={nrPagina}
                status={status}
            >
                <ul>
                    <li>Opção 1</li>
                    <li>Opção 2</li>
                    <li>Opção 3</li>
                    <li>Opção 4</li>
                    <li>Opção 5</li>
                </ul>
            </Cabecalho>
            {
                alunos.map((aluno, i) => ( <Cards key={i} nome={aluno.nome} idade={aluno.idade}/>))
            }
            {/* <Carros /> */}
            {/* <Parceiros/> */}
        </>
    );
}

export default App;
