import { StaticImageData } from "next/image";
export type PedidoProps ={

	marca: string;
	modelo: string;
	placa: string;
	nome: string;
	tipoLavagem: string;
}

export type RemoveProps = {
    remove: (placa:string) => void;
}
 
export type ActionsProps = {
    add: (e:React.FormEvent<HTMLFormElement>) => void;
	captura: (e:React.ChangeEvent<HTMLInputElement>) => void;
}

export type CardProps = {
    nome: string;
    img: string | StaticImageData;
    frase: string;
}

export type KeyProps = {
    index: number;
}