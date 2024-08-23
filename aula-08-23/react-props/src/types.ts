export type CabecacalhoProps = {
    titulo:string;
    capitulo:number;
    aviso:()=>void;
}

export type AlunosProps = {
    subtitulo: string;
    children: React.ReactNode; // Ou React.ReactNode para não ter que fazer o import
}