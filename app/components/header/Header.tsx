import './header.css';

export default function Header() {
  return (
    <div id="header" className="h-20 w-11/12 flex justify-end items-center fixed">
      <ul className="flex gap-10">
        <li><a className='menu-link' href="#intro">Home</a></li>
        <li><a className='menu-link' href="#about">Sobre</a></li>
        <li><a className='menu-link' href="#skills">Habilidades</a></li>
        <li><a className='menu-link' href="#projects">Projetos</a></li>
        <li><a className='menu-link' href="#contact">Contato</a></li>
      </ul>
    </div>
  )
}