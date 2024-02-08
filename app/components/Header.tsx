import './header.css';

export default function Header() {
  return (
    <div id="header" className="mx-auto h-20 w-10/12 flex justify-end items-center">
      <ul className="flex gap-10 text-lg">
        <li><a className='menu-link' href="">Home</a></li>
        <li><a className='menu-link' href="">Sobre</a></li>
        <li><a className='menu-link' href="">Habilidades</a></li>
        <li><a className='menu-link' href="">Projetos</a></li>
        <li><a className='menu-link' href="">Contato</a></li>
      </ul>
    </div>
  )
}