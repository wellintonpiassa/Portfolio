'use client'
import './about.css'
import Arrow from '@/app/components/arrow/Arrow'
import Image from 'next/image'
import { Fade, Slide } from "react-awesome-reveal"

export default function About() {
  return (
    <section id="about">
      <div className='container flex flex-col justify-center'>
        <Slide
          triggerOnce={true}>
          <h1>Sobre mim</h1>
        </Slide>
        <div className='profile gap-x-28'>
          <Fade
            triggerOnce={true}
            delay={1000}>
            <Image
              src="/assets/profile.jpg"
              width={300}
              height={300}
              alt="Foto de perfil"
            />
          </Fade>
          <Fade
            className='w-1/2'
            triggerOnce={true}
            delay={1000}>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ipsum urna, imperdiet a sapien quis, pretium commodo velit. Phasellus ac risus vel nisi lobortis laoreet non in magna. Vestibulum sollicitudin volutpat tempor. Sed tempor tincidunt enim vel fringilla. Ut sed dui vitae leo euismod euismod viverra eu justo. Suspendisse potenti. Praesent ut ante justo. Integer in dolor magna. Vestibulum vel auctor purus, quis venenatis magna. Maecenas tincidunt libero commodo elit accumsan dictum. Praesent pellentesque sem quis massa facilisis, quis commodo purus euismod. Sed sollicitudin, orci malesuada pharetra blandit, nibh diam luctus diam
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ipsum urna, imperdiet a sapien quis, pretium commodo velit. Phasellus ac risus vel nisi lobortis laoreet non in magna. Vestibulum sollicitudin volutpat tempor. Sed tempor 
                </p>
              </div>
          </Fade>
        </div>
        <Arrow link={"#skills"}/>
      </div>
    </section>
  )
}