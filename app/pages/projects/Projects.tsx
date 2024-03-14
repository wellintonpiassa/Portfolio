'use client'
import './projects.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import Arrow from '@/app/components/arrow/Arrow';

export default function Projects(props: any) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 3,
    speed: 600
  };
  return (
    <section id="projects">
      <div className='container'>
        <div className='wrapper'>
          <div className='position-relative'>
            <Fade
            triggerOnce={true}>
              <h1>Projetos</h1>
            </Fade>
            
            <Fade
            triggerOnce={true}>
              <Slider {...settings}>
                <div className='card'>
                  <Image
                    src="/assets/projects/galaxy-defenders.png"
                    width={250}
                    height={250}
                    alt="Galaxy Defenders"
                  />
                  <div>
                    <h2>Galaxy Defenders</h2>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                  </div>
                </div>

                <div className='card'>
                  <Image
                    src="/assets/projects/galaxy-defenders.png"
                    width={500}
                    height={500}
                    alt="Galaxy Defenders"
                  />
                  <div>
                    <h2>Galaxy Defenders</h2>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                  </div>
                </div>

                <div className='card'>
                  <Image
                    src="/assets/projects/galaxy-defenders.png"
                    width={500}
                    height={500}
                    alt="Galaxy Defenders"
                  />
                  <div>
                    <h2>Galaxy Defenders</h2>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                  </div>
                </div>

                <div className='card'>
                  <Image
                    src="/assets/projects/galaxy-defenders.png"
                    width={500}
                    height={500}
                    alt="Galaxy Defenders"
                  />
                  <div>
                    <h2>Galaxy Defenders</h2>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                  </div>
                </div>

              </Slider>
            </Fade>

          </div>
          <Arrow pageId={4} action={props.handlePageChange}/>
        </div>
      </div>
    </section>
  )
}