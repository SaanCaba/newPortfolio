import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { GrLinkNext } from "react-icons/gr";
import images from "./images";
import logoGitLink from "./images/GitHub-Emblem.png";
import vercelLogo from "./images/vercellogo.png";
import "./styles/Project.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

function Projects() {
  return (
    <div id="proyecto" className="cont-projects">
      <h2 className="title-proyects">Proyectos</h2>
      <div className="grid-proyects">
        {images?.map((e, i) => {
          return (
            <div key={i} className="cont-map-pro">
              <div>
                <span className="h5 name-pro">{e.name}</span>
              </div>
              <div className="d-flex justify-content-center">
              <img src={e.img} className="img-proyecto" />
              </div>
                <div className="d-flex flex-column cont-info-pro">
                  <span className="name-pro">Tecnologías: {e.tecnologias}.</span>
                  <span className="capa-info">{e.info}</span>
                  <div className="bg-light">
                    <a href={e.repo} target="_blank">
                    <img src={logoGitLink} style={{width:'70px'}} />
                    </a>
                    {e.deploy && (
                      <a href={e.deploy} target="_blank">
                        <img src={vercelLogo} style={{width:'70px'}} />
                      </a>
                    ) }
                    
                  </div>
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
