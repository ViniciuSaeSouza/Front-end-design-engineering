import { ReactNode } from "react";

export type TipoProduto = {
    id:number;
    nome:string;
    preco: number;
    estoque:number;
}


export type ModalProps = {
    open: boolean;
    onClose: ()=> void;
    children: ReactNode;
}