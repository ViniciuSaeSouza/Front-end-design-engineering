import Image from 'next/image'
import logo from "@/img/logo.jpg"
export default function Cabecalho(){

return(
    <header className="cabecalho">
        <div className="logo">
            <Image src={logo} alt="logo" width={150} height={150}/>
        </div>
        <nav className="nav">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/pedidos">Pedidos</a></li>
            </ul>
        </nav>
    </header>
)

}