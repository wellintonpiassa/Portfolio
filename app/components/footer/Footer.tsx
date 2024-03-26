import "./footer.css"
import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <div>
        <p>© Wellinton Piassa - 2024</p>
      </div>
      <div>
        <ul>
          <li>
            <a href="https://linkedin.com/in/wellinton-piassa" target='_blank'>
              <Image
                src="/icons/linkedin-white.svg"
                width={30}
                height={30}
                alt="Ícone do Linkedin"
              />
            </a>
          </li>
          <li>
            <a href="mailto:wellintonpiassa@hotmail.com.br" target='_blank'>
              <Image
                src="/icons/mail-white.svg"
                width={30}
                height={30}
                alt="Ícone do Email"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/wellintonpiassa" target='_blank'>
              <Image
                src="/icons/github-white.svg"
                width={30}
                height={30}
                alt="Ícone do Github"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}