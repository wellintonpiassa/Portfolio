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
  ReactOriginal,
  NextjsOriginal,
  TypescriptOriginal,
  PostgresqlOriginal,
  LaravelOriginal
} from 'devicons-react';

export default function Skills(props: any) {
  return (
    <section id="skills">
      <div className='container'>
        <div className='wrapper'>
          <div className='d-flex flex-column flex-lg-row justify-content-center'>
            <Slide
              className='float-title'
              triggerOnce={true}>
                <h1>Habilidades</h1>
            </Slide>
            <Fade
            className='col-12 col-lg-8'
            triggerOnce={true}
            delay={500}>
              <div className='card'>
                <ul>
                  <Fade cascade damping={0.1} direction='up' triggerOnce={true}>
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
                      <NextjsOriginal size={80}/>
                      <span>Next JS</span>
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
                      <JavascriptOriginal size={80}/>
                      <span>Javascript</span>
                    </li>
                    <li>
                      <TypescriptOriginal size={80}/>
                      <span>TypeScript</span>
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
                      <MysqlOriginal size={80}/>
                      <span>MySQL</span>
                    </li>
                    <li>
                      <PostgresqlOriginal size={80}/>
                      <span>PostgreSQL</span>
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
                      <DockerOriginal size={80} />
                      <span>Docker</span>
                      <span>Aprendizado em andamento</span>
                    </li>
                    <li className='disabled'>
                      <LaravelOriginal size={80}/>
                      <span>Laravel</span>
                      <span>Aprendizado em andamento</span>
                    </li>
                    <li className='disabled'>
                      <ReactOriginal size={80}/>
                      <span>React Native</span>
                      <span>Aprendizado em andamento</span>
                    </li>
                  </Fade>
                </ul>
              </div>
            </Fade>
          </div>
          <Arrow pageId={3} action={props.handlePageChange}></Arrow>
        </div>
      </div>
    </section>
  )
}