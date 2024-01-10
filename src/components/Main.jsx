import Nav from "./Nav";
import Hero from "./Hero";
import Contact from "./Contact";
import Skill from "./Skill";
import Projects from "./Projects";

const Main = () => {
    return (
        <div className=" bg-purple-600 ">
            <Nav />
            <Hero />
            <Skill />
            <Projects />
            <Contact />
        </div>
    )
}

export default Main