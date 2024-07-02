import "./Menu.css"
import MenuLink from "../MenuLink";

const Menu = () => {

    return(
        <header>
            <nav className="navegation">
                <MenuLink to="/">Home</MenuLink>
                <MenuLink to="/about">About</MenuLink>
            </nav>
        </header>
    )
}

export default Menu