'use client'
import './about.css'
import Arrow from '@/app/components/arrow/Arrow'
import Image from 'next/image';
import { Fade, Slide } from 'react-awesome-reveal';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';


export default function About(props: any) {

  const [maxHeightDescription, setMaxHeightDescription] = useState<number>();
  const yearsWork = new Date().getFullYear() - 2021;  

  useEffect(() => {
    setMaxHeightDescription(window.innerHeight - 400);
    window.addEventListener("resize", () => {
      setMaxHeightDescription(window.innerHeight - 400);
    });
  }, []);

  return (
    <motion.section id="about"
      initial={{y:'100%'}}
      animate={{y:'0%'}}
      transition={{duration:0.75, ease: 'easeOut'}}
    >
      <div className='container'>
        <div className='wrapper offset-lg-1'>
          <Slide
            triggerOnce={true}>
            <h1>Sobre mim</h1>
          </Slide>
          <div className='profile d-flex flex-wrap'>
            <Fade
              className='col-12 col-lg-3 d-flex justify-content-center justify-content-lg-start'
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
              className='col-12 col-lg-7 offset-lg-2 col-xl-8 offset-xl-1 offset-xxl-0'
              triggerOnce={true}
              delay={1000}>
                <div className='about-box' style={{maxHeight: maxHeightDescription, overflowY: 'visible'}}>
                  <p className='about-text'>
                    Graduado em Ciência da Computação pela Universidade Estadual de Londrina (2019-2023) e atuando na área {yearsWork} anos.
                    Iniciei minha carreira profissional em 2021, durante a minha gradução, onde ingressei como estagiário de Desenvolvimento Web, trabalhando como programador na área de e-commerce. Ao final da graduação em 2023, comecei a atuar como Desenvolvedor Full Stack Jr. na mesma empresa.
                  </p>
                  <p className='about-text'>
                    Hoje sou Desenvolvedor Full Stack Pleno, trabalhando com Node e VueJs voltado a integrações entre sistemas envolvendo e-commerces, ERPs, marketplaces, drop shipping e cross docking. Além disso, estou aberto para desenvolver projetos como freelancer, caso tenha interesse, tenha alguma dúvida ou queira saber mais, pode entrar em contato comigo pela página de contato.
                  </p>
                </div>
            </Fade>
          <Arrow pageId={2} action={props.handlePageChange}/>
          </div>
        </div>
      </div>
    </motion.section>
  )
}