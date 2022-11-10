import React, {useRef, useEffect, useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from 'framer-motion';
import { GrLinkNext } from 'react-icons/gr'
import images from './images';
import logoGitLink from './images/GitHub-Emblem.png'
import vercelLogo from './images/vercellogo.png'
import './styles/Project.css'


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

function Projects() {

  return (
    <div id='proyecto' className='cont-projects' >
        <h2 className='title-proyects'>Proyectos</h2>
    <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwipe"
      >
        {
            images?.map((e, i) => {
                return(
                    <div key={i}>
                        <SwiperSlide key={i}>
                            <div className='d-flex flex-column'>
                              <span className='name-pro'>{e.name}</span>
                              <div className='position-relative'>
                            <img src={e.img} className='img-proyect' />
                            <div className='capa'>
                        <h1>{e.name}</h1>
                        <div className='d-flex flex-column'>
                        <span>Tecnologias: {e.tecnologias}</span>
                        <span className=''>{e.info}</span>
                        </div>
                        </div>
                        </div>

                            <div className='d-flex justify-content-center cont-repos'>
                            <a href={e.repo} style={{ zIndex:1001 }} target='_blank'>
                        <img style={{ height: '34px' }} src={logoGitLink}/>
                        
                        </a>
                        {
                        e.deploy ?  <a href={e.deploy} target='_blank'>
                        <img id='pro'  style={{ height: '25px', marginTop:'4px' }} src={vercelLogo} />
                        </a>
                        : ''
                        }
                            </div>
                            </div>
                             </SwiperSlide>
                        
                    </div>
                )
            })
        }
      </Swiper>
    

    </div>

  )
}



export default Projects