import { Link } from "react-router-dom";
import stylesApp from '../../App.module.css'

export default function Menu(){
	return (
		<nav className= {stylesApp.nav}>
			<Link to='/'>Home</Link>
			<span> | </span>
			<Link to='/produtos'>Produtos</Link>
		</nav>
	)
}