'use client'
import './about.css'
import Arrow from '@/app/components/arrow/Arrow'
import Image from 'next/image';
import { Fade, Slide } from 'react-awesome-reveal';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';


export default function About(props: any) {

  const [maxHeightDescription, setMaxHeightDescription] = useState<number>();

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
                <div className='about-box' style={{maxHeight: maxHeightDescription}}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ipsum urna, imperdiet a sapien quis, pretium commodo velit. Phasellus ac risus vel nisi lobortis laoreet non in magna. Vestibulum sollicitudin volutpat tempor. Sed tempor tincidunt enim vel fringilla. Ut sed dui vitae leo euismod euismod viverra eu justo. Suspendisse potenti. Praesent ut ante justo. Integer in dolor magna. Vestibulum vel auctor purus, quis venenatis magna. Maecenas tincidunt libero commodo elit accumsan dictum. Praesent pellentesque sem quis massa facilisis, quis commodo purus euismod. Sed sollicitudin, orci malesuada pharetra blandit, nibh diam luctus diam
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ipsum urna, imperdiet a sapien quis, pretium commodo velit. Phasellus ac risus vel nisi lobortis laoreet non in magna. Vestibulum sollicitudin volutpat tempor. Sed tempor 
                  </p>
                  <p>
                    Integer ultricies libero et ante ullamcorper suscipit. Suspendisse lorem dui, posuere sed odio sit amet, tempor molestie est. Morbi quis massa eu odio suscipit dapibus. Aliquam sollicitudin orci et sollicitudin tristique. Integer sollicitudin tincidunt magna, nec efficitur elit interdum ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus porta, felis nec cursus lobortis, metus turpis iaculis dui, quis posuere nisi nunc ut justo. Donec sed orci semper, scelerisque metus non, mattis nibh. Sed tempus vulputate felis, ac suscipit nunc viverra et. Aliquam vel nisi fermentum, finibus erat id, vestibulum nulla. Vivamus eget nulla eget elit cursus tristique non at leo. Aliquam mollis nibh neque, in consectetur nisi viverra in.
                  </p>
                  <p>
                    Integer ultricies libero et ante ullamcorper suscipit. Suspendisse lorem dui, posuere sed odio sit amet, tempor molestie est. Morbi quis massa eu odio suscipit dapibus. Aliquam sollicitudin orci et sollicitudin tristique. Integer sollicitudin tincidunt magna, nec efficitur elit interdum ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus porta, felis nec cursus lobortis, metus turpis iaculis dui, quis posuere nisi nunc ut justo. Donec sed orci semper, scelerisque metus non, mattis nibh. Sed tempus vulputate felis, ac suscipit nunc viverra et. Aliquam vel nisi fermentum, finibus erat id, vestibulum nulla. Vivamus eget nulla eget elit cursus tristique non at leo. Aliquam mollis nibh neque, in consectetur nisi viverra in.
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