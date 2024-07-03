import "./Error404.css"
import error404Img from "assets/error_404.png"

const error404 = () => {
    return (
        <>
            <div className="contentContainer404">
                <span className="text404">404</span>
                <h1 className="title404">
                    Ops! Page not found
                </h1>

                <p className="paragraph404">
                    Are you sure this is what you were looking for?
                </p>

                <p className="paragraph404">
                    Please wait a moment and reload the page, or return to the homepage.
                </p>

                <div className="btnContainer">
                    <button>Voltar</button>
                </div>
                <img className="imageDog" src={error404Img} alt="Dog with glasses" />
            </div>
            <div className="whiteSpace"></div>
        </>
    )
}

export default error404  