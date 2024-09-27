import { Children } from "react";

type CabecalhoProps = {
    pagina: String;
    nrPagina: string | number;
};

interface CabecalhoProps2 {
    children: React.ReactNode;
    aviso:Function;
    status: "deployed" | "loading";
}

export default function Cabecalho({
    pagina,
    aviso,
    nrPagina,
    status,
    children,
}: CabecalhoProps & CabecalhoProps2) {
    if (typeof nrPagina === "number") {
        document.title = status + "-" + nrPagina;
        nrPagina = "Página nr: " + nrPagina;
    } else {
        document.title = status + " - ??";
        nrPagina = "Pagina nr: ??";
    }

    return (
        <header>
            <h1>{pagina + "\n" + nrPagina}</h1>
            {children}
            <button onClick={() => aviso()}>Ó O GÁIS</button>
        </header>
    );
}
