import Hero from "./Hero";
import Contact from "./Contact";
import Skill from "./Skill";
import Projects from "./Projects";
import Navbar from "./Navbar";
import Header from "./Header";


const Main = () => {
    return (
        <div className="bg">
            <Header/>
            <Hero/>
            <Navbar/>
            <Skill/>
            <Projects/>
            <Contact/>
        </div>
    )
}

export default Main