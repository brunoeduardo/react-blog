import "./Banner.css"
import colorfulCircle from "assets/colorful_circle.png"
import myPhoto from "assets/about_me.png"


const Banner = () => {
    return(
        <div className="banner">
            <div>
                <h1 className="banner-title">
                    Hello world!
                </h1>
                <p className="paragraph">
                    Welcome to my personal space! I am Antônio Evaldo, a Front-end instructor at Alura. Here I share various knowledge, and I hope you learn something new :)
                </p>
            </div>
            <div className="images">
                <img className="colorfulCircle" src={colorfulCircle} alt="" aria-hidden={true}/>
                <img className="myPhoto" src={myPhoto} alt="Perfil photography" />
            </div>
        </div>
    )
}

export default Banner