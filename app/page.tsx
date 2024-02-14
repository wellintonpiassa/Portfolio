import Intro from "./pages/Intro/Intro";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Header from "./components/header/Header";
import Projects from "./pages/projects/Projects";
import Skills from "./pages/skills/Skills";

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
