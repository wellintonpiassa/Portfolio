import Intro from "./components/Intro/Intro";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

export default function Home() {
  return (
    
    <main className="mx-auto">
      <Header></Header>
      <Intro></Intro>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </main>
  );
}
