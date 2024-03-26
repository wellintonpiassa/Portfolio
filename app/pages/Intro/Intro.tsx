'use client'
import './intro.css'
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import Arrow from '@/app/components/arrow/Arrow';
import { Fade } from 'react-awesome-reveal';
import Slider from "react-slick";

export default function Intro(props:any) { 
  const settings = {
    vertical: true,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    slidesToShow: 1,
  }; 
  return (
    <section id="intro">
        <div className='container'>
          <div className='wrapper'>
            <div>
              <Typewriter
                options={{
                  cursor: ""
                }}
                onInit={(typewriter) => {
                  typewriter
                    .changeDelay(50)
                    .typeString('Olá, eu sou o')
                    .start();
                }}
              />
              <Typewriter
                options={{
                  cursor: ""
                }}
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(900)
                    .changeDelay(60)
                    .typeString('Wellinton Piassa')
                    .start();
                }}
              />
              <Slider {...settings}>
                <Typewriter
                  options={{
                    cursor: ""
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(2000)
                      .changeDelay(50)
                      .typeString('Desenvolvedor Web')
                      .start();
                  }}
                />
                <Typewriter
                  options={{
                    cursor: ""
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(2000)
                      .changeDelay(50)
                      .typeString('Dev Full Stack')
                      .start();
                  }}
                />
              </Slider>
            </div>
            <Fade 
              triggerOnce={true}
              delay={3500}>
              <ul className='d-flex social-media'>
                <li>
                  <a href="https://linkedin.com/in/wellinton-piassa" target='_blank'>
                    <Image
                      src="/icons/linkedin.svg"
                      width={30}
                      height={30}
                      alt="Ícone do Linkedin"
                    />
                  </a>
                </li>
                <li>
                  <a href="mailto:wellintonpiassa@hotmail.com.br" target='_blank'>
                    <Image
                      src="/icons/mail.svg"
                      width={30}
                      height={30}
                      alt="Ícone do Email"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/wellintonpiassa" target='_blank'>
                    <Image
                      src="/icons/github.svg"
                      width={30}
                      height={30}
                      alt="Ícone do Github"
                    />
                  </a>
                </li>
              </ul>
            </Fade>
            <Fade 
              triggerOnce={true}
              delay={3500}>
              <a className='cv-button' download={true} href="assets/files/CV-Wellinton-Piassa.pdf">Download Currículo</a>
            </Fade>
            <Arrow delay={4000} pageId={1} action={props.handlePageChange}/>
          </div>
        </div>
    </section>
  )
}