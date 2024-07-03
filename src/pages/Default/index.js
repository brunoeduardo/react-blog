import Banner from "components/Banner"
import "./Default.css"
import { Outlet } from "react-router-dom"

const Default = ({children}) => {
    return (
        <main>
            <Banner/>
            <Outlet/>
            {children}
        </main>
    )
}

export default Default