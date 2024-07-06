import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg" >
        <Header/>
        <Hero/>
        <Navbar/>
        <Skill/>
        <Projects/>
        <Contact/>
    </div>
)
}

export default App;
