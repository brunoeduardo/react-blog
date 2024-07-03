import "./About.css"
import PostTemplate from "components/PostTemplate"
import photoCover from "assets/about_cover.png"
import aboutMe from "assets/about_me.png"

const About = () => {
    return(
        <PostTemplate photoCover={photoCover} title="About">
            <h3 className="subtitle">
                It's a me!
            </h3>
            <img src={aboutMe} alt="It's a me" className="photoAbout"/>

            <p className="aboutParagraph">
                Hello, I'm Alex, a passionate Front-end Developer with a deep love for creating beautiful and intuitive web experiences. My journey into the world of web development began at a young age, driven by a curiosity for how websites worked and a desire to bring ideas to life through code.
            </p>
            <p className="aboutParagraph">
                I hold a degree in Computer Science from [University Name], where I honed my skills in HTML, CSS, JavaScript, and various modern frameworks like React and Vue.js. My professional experience includes working at Bright Innovations, where I contributed to high-profile projects and collaborated with cross-functional teams to deliver top-notch user interfaces.
            </p>
            <p className="aboutParagraph">
                Currently, I'm the Lead Front-end Developer at GreenWave, a startup dedicated to sustainable tech solutions. Here, I oversee the front-end development processes, mentor junior developers, and lead projects that make a positive impact on our environment. One of my proudest achievements is developing a web application that helps users monitor and reduce their carbon footprint, which has received accolades for its innovative design and functionality.
            </p>
            <p className="aboutParagraph">
                I thrive on challenges and continuously seek opportunities to learn and grow. Whether it's improving website performance, enhancing user experience, or exploring new technologies, I'm always eager to push the boundaries of what's possible in web development.
            </p>
            <p className="aboutParagraph">
                When I'm not coding, you can find me exploring nature, experimenting with new recipes, or diving into a good book. Feel free to reach out if you'd like to collaborate or just chat about the latest trends in web development!
            </p>
            <p className="aboutParagraph">
                Let's create something amazing together.
            </p>
        </PostTemplate>
    )
}

export default About