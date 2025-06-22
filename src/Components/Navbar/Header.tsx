import Logo from "./Logo"
import Navmenu from "./Navmenu"
import '../../assets/Styles/header.css'

function Header() {
    return (
        <header className="header">
            <nav className="navbar container">
                <Logo />
                <Navmenu />
            </nav>
        </header>
    )
}

export default Header