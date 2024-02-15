'use client'
import './skills.css'
import { Slide, Fade } from 'react-awesome-reveal'
import Arrow from '@/app/components/arrow/Arrow';
import { 
  Html5Original,
  Css3Original,
  BootstrapOriginal,
  JqueryOriginal,
  COriginal,
  JavaOriginal,
  PythonOriginal,
  PhpOriginal,
  JavascriptOriginal,
  MysqlOriginal,
  GitOriginalWordmark,
  LinuxOriginal,
  BashOriginal,
  DockerOriginal,
  AngularOriginal
} from 'devicons-react';

export default function Skills() {
  return (
    <section id="skills">
      <div className='container flex flex-col justify-center'>
        <div className='flex items-center justify-center wrapper'>
          <Slide
            className='w-1/12'
            triggerOnce={true}>
              <h1>Habilidades</h1>
          </Slide>
          <Fade
          className='w-3/5'
          triggerOnce={true}
          delay={500}>
            <div className='card'>
              <ul>
                <li>
                  <Html5Original size={80}/>
                  <span>HTML</span>
                </li>
                <li>
                  <Css3Original size={80}/>
                  <span>CSS</span>
                </li>
                <li>
                  <BootstrapOriginal size={80}/>
                  <span>Bootstrap</span>
                </li>
                <li>
                  <JqueryOriginal size={80}/>
                  <span>jQuery</span>
                </li>
                <li>
                  <COriginal size={80}/>
                  <span>C</span>
                </li>
                <li>
                  <JavaOriginal size={80}/>
                  <span>Java</span>
                </li>
                <li>
                  <PythonOriginal size={80}/>
                  <span>Python</span>
                </li>
                <li>
                  <PhpOriginal size={80}/>
                  <span>PHP</span>
                </li>
                <li>
                  <JavascriptOriginal size={80}/>
                  <span>Javascript</span>
                </li>
                <li>
                  <MysqlOriginal size={80}/>
                  <span>MySQL</span>
                </li>
                <li>
                  <BashOriginal size={80}/>
                  <span>Bash</span>
                </li>
                <li>
                  <GitOriginalWordmark size={80}/>
                  <span>Git</span>
                </li>
                <li>
                  <LinuxOriginal size={80}/>
                  <span>Linux</span>
                </li>
                <li className='disabled'>
                  <AngularOriginal size={80}/>
                  <span>Angular</span>
                  <span>Aprendizado em andamento</span>
                </li>
                <li className='disabled'>
                  <DockerOriginal size={80} />
                  <span>Docker</span>
                  <span>Aprendizado em andamento</span>
                </li>
              </ul>
            </div>
          </Fade>
          <Arrow link={"#projects"}></Arrow>
        </div>
      </div>
    </section>
  )
}