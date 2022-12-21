import React, { useState, useEffect, useRef } from "react";
import "./styles/Tecnologias.css";
import js from "./images/JavaScript-logo (1).png";
import html from "./images/htmlpng (2).png";
import css from "./images/css.png";
import nodejs from "./images/nodejs.png";
import reactjs from "./images/react.png";
import redux from "./images/Redux (1).png";
import bootstrap from "./images/Bootstrap.png";
import mongodb from "./images/mongodb.png";
import express from "./images/express.png";
import postgreSQL from "./images/postgresql-logo.png";
import git from "./images/git-logo.png";
import ts from './images/ts.png'
import tailwind from './images/tailwind.png'
import nextjs from './images/800px-Nextjs-logo.svg.png'
import { motion, useAnimation} from "framer-motion";
import { useInView } from "react-intersection-observer";

function Tecnologias() {
  const boxVariant = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  }
  const control = useAnimation()
  const [ref, inView] = useInView()
  const refPrueba = useRef()
  const [img, setImgs] = useState([
    js,
    ts,
    html,
    css,
    nodejs,
    reactjs,
    nextjs,
    redux,
    bootstrap,
    tailwind,
    mongodb,
    express,
    postgreSQL,
    git,
  ]);

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }else{
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <div className="cont-tecnologias" id='tec' ref={refPrueba}>
      <motion.div 
      // ref={ref}
      // variants={boxVariant}
      initial="hidden"
      animate={control}
      className="title-tec">
        <h4  className="tec-name" >TECNOLOGIAS!</h4>
      </motion.div>
      <div className="d-flex justify-content-center">
        <motion.div
          initial="hidden"
          animate={control}
          className="cont-imgs"
        >
          {img.length &&
            img.map((e, i) => {
              return (
                <motion.div
                key={i}
                whileHover={{ scale: 1.3, cursor: 'pointer'}}
                whileTap={{ scale: 1.3 }}
                className='box-img'
                >
                  <img className="img-tec" src={e} />
                </motion.div>
              );
            })}
        </motion.div>
      </div>
    </div>
  );
}

export default Tecnologias;
