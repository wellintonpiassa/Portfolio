import './arrow.css'
import { Fade } from "react-awesome-reveal"
import Image from 'next/image';

interface Arrow {
  direction?: string,
  delay?: number,
  pageId: number,
  action: Function
}

export default function Arrow({ direction="down", delay=1000, pageId, action }: Readonly<Arrow>) {
  return (
    <Fade 
      delay={delay}
      triggerOnce={true}
      childClassName={`arrow ${direction}`} >
        <button onClick={() => action(pageId)}>
          <Image
            src="/icons/arrow.svg"
            width={30}
            height={30}
            alt="Seta para baixo"
          />
        </button>
    </Fade>
  )
}