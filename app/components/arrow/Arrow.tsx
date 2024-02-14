import './arrow.css'
import FadeIn from 'react-fade-in';
import Image from 'next/image';

export default function Arrow(props:any) {
  return (
    <FadeIn 
      delay={4000}
      className={`arrow ${props.direction}`} >
        <a href="#about">
          <Image
            src="/icons/arrow.svg"
            width={30}
            height={30}
            alt="Seta para baixo"
          />
        </a>
    </FadeIn>
  )
}