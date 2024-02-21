'use client'
import './header.css';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

export default function Header() {

  const [theme, setTheme] = useState('')
  const router = useRouter();
  const params = useParams();

  function pushToPage (link:string) {
    router.push(link);
  }

  useEffect(() => {
    const darkPages = ['#contact'];
    var currHash = window.document.location.hash;
    (darkPages.includes(currHash)) ? setTheme('dark') : setTheme('light')
  });

  return (
    <div id="header" className={`container-fluid d-flex justify-content-end align-items-center fixed-top ${theme}`}>
      <ul className="d-flex gap-5 pe-5">
        <li><a className='menu-link' onClick={() => pushToPage('#intro')}>Home</a></li>
        <li><a className='menu-link' onClick={() => pushToPage('#about')}>Sobre</a></li>
        <li><a className='menu-link' onClick={() => pushToPage('#skills')}>Habilidades</a></li>
        <li><a className='menu-link' onClick={() => pushToPage('#projects')}>Projetos</a></li>
        <li><a className='menu-link' onClick={() => pushToPage('#contact')}>Contato</a></li>
      </ul>
    </div>
  )
}