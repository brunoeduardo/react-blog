import "./Menu.css"
import MenuLink from "../MenuLink";
import Banner from "../Banner";

const Menu = () => {

    return(
        <header>
            <nav className="navegation">
                <MenuLink to="/">Home</MenuLink>
                <MenuLink to="/about">About</MenuLink>
            </nav>
            <Banner/>
        </header>
    )
}

export default Menu