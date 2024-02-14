'use client'
import Typewriter from 'typewriter-effect';

export default function Intro() {
  return (
    <section id="intro">
      <div className='container flex flex-col justify-center'>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .changeDelay(50)
              .typeString('Olá, eu sou o')
              .start();
          }}
        />
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(900)
              .changeDelay(50)
              .typeString('Wellinton Piassa')
              .start();
          }}
        />
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(2000)
              .changeDelay(50)
              .typeString('Desenvolvedor Web')
              .start();
          }}
        />
      
        <ul className='flex gap-4'>
          <li>Github</li>
          <li>Linkedin</li>
          <li>Email</li>
        </ul>
      
      </div>
    </section>
  )
}