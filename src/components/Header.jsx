import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

/**
 * Component used to render the Header
 * 
 * @returns {*}
 */

export default function Header() {
    return (
        <header className="header">
            <img src={Logo} alt='' />
            <nav className='header_nav_t'>
                <Link to={"/"}>Accueil</Link>
                <Link to={"/"}>Profil</Link>
                <Link to={"/"}>Réglages</Link>
                <Link to={"/"}>Communauté</Link>
            </nav>
        </header>
    )
}