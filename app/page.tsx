'use client'
import Intro from "./pages/Intro/Intro";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Header from "./components/header/Header";
import Projects from "./pages/projects/Projects";
import Skills from "./pages/skills/Skills";
import ReactPageScroller from "react-page-scroller";
import { useState } from "react";

export default function Home() {

  const [currPage, setCurrPage] = useState(0);

  const handlePageChange = (pageNumber: number) => {
    setCurrPage(pageNumber);
  }

  interface PageInfo {
    id: number,
    name: string
  }

  const pagesInfo: PageInfo[] = [
    { id: 0, name: "Home" },
    { id: 1, name: "Sobre" },
    { id: 2, name: "Habilidades" },
    { id: 3, name: "Projetos" },
    { id: 4, name: "Contato" }
  ]

  const pagesElements = () => {
    return (
      <ul className={"d-flex gap-5 pe-5 " + (currPage == 4 ? 'dark' : '')}>
        {pagesInfo.map((page) => {
          return (
            <li key={page.id}>
              <button 
                className={"menu-link " + (currPage == page.id ? 'active' : '')} 
                onClick={() => handlePageChange(page.id)}>
                {page.name}
              </button>
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <main id="main" className="mx-auto">
      <Header>
        {pagesElements()}
      </Header>
      <ReactPageScroller
        pageOnChange={handlePageChange}
        customPageNumber={currPage}
      >
        <Intro handlePageChange={handlePageChange}/>
        <About handlePageChange={handlePageChange}/>
        <Skills handlePageChange={handlePageChange}/>
        <Projects handlePageChange={handlePageChange}/>
        <Contact handlePageChange={handlePageChange}/>
      </ReactPageScroller>
    </main>
  );
}