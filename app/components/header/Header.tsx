import './header.css';

export default function Header() {
  return (
    <div id="header" className="container-fluid d-flex justify-content-end align-items-center fixed-top">
      <ul className="d-flex gap-5 pe-5">
        <li><a className='menu-link' href="#intro">Home</a></li>
        <li><a className='menu-link' href="#about">Sobre</a></li>
        <li><a className='menu-link' href="#skills">Habilidades</a></li>
        <li><a className='menu-link' href="#projects">Projetos</a></li>
        <li><a className='menu-link' href="#contact">Contato</a></li>
      </ul>
    </div>
  )
}