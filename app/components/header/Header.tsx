'use client'
import { useState } from 'react';
import './header.css';

export default function Header() {

  const [theme, setTheme] = useState(detectTheme());

  function detectTheme() {
    const darkPages = ['#contact'];
    var currHash = window.document.location.hash;
    return (darkPages.includes(currHash)) ? 'dark': 'light';
  }

  return (
    <div id="header" className={`container-fluid d-flex justify-content-end align-items-center fixed-top ${theme}`}>
      <ul className="d-flex gap-5 pe-5">'
        <li><a className='menu-link' onClick={ () => setTheme('light') } href="#intro">Home</a></li>
        <li><a className='menu-link' onClick={ () => setTheme('light') } href="#about">Sobre</a></li>
        <li><a className='menu-link' onClick={ () => setTheme('light') } href="#skills">Habilidades</a></li>
        <li><a className='menu-link' onClick={ () => setTheme('light') } href="#projects">Projetos</a></li>
        <li><a className='menu-link' onClick={ () => setTheme('dark') } href="#contact">Contato</a></li>
      </ul>
    </div>
  )
}