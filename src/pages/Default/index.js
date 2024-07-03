import Banner from "components/Banner"
import "./Default.css"
import { Outlet } from "react-router-dom"

const Default = () => {
    return (
        <main>
            <Banner/>
            <Outlet/>
        </main>
    )
}

export default Default