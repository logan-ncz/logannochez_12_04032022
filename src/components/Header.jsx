import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <header className="header">
            <img src={Logo} alt='' />
            <nav className='header_nav_t'>
                <Link to={"/"}>Accueil</Link>
                <Link to={"/"}>Profil</Link>
                <Link to={"/"}>Réglage</Link>
                <Link to={"/"}>Communauté</Link>
            </nav>
        </header>
    )
}