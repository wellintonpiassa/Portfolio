import './arrow.css'
import { Fade } from "react-awesome-reveal"
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Arrow({direction="down", delay=1000, link=""}:any) {
  const router = useRouter();
  return (
    <Fade 
      delay={delay}
      triggerOnce={true}
      childClassName={`arrow ${direction}`} >
        <a href='#' onClick={() => router.push(link)}>
          <Image
            src="/icons/arrow.svg"
            width={30}
            height={30}
            alt="Seta para baixo"
          />
        </a>
    </Fade>
  )
}