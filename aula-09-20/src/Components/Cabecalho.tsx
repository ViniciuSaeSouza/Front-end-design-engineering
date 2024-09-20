import Link from "next/link";

export default function Cabecalho(){
    return (
        <header>
            <Link href={'/'}>Home</Link>
            <span> | </span>
            <Link href={'/produtos'}>Produtos</Link>
        </header>
    )
}