import { NavLink } from "react-router-dom"
import "./MenuLink.css"

const MenuLink = ({children, to}) => {
    return (
        <NavLink className="link" to={to}>                 
            {children}
        </NavLink>
    )
}

export default MenuLink