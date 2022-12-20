import React from 'react'
import { Link} from 'react-scroll'
import { BsCodeSlash} from "react-icons/bs"
import { motion } from 'framer-motion';
import './styles/Navbar.css'
// import { FcDownload } from 'react-icons/fc'
function Navbar() {
  return (
    <div>
        <nav className="navbar cont-nav ">
            
            <motion.div  
            initial={{ scale:0 }}
            animate={{scale: 1}}
            transition={{
              duration: 1.5,
              
            }}
            className="mt-4 cont-name ">
            <span className="sc-name">Santiago Caballero <BsCodeSlash/>  </span>
            </motion.div>
            <div className='cont-cont-temas'>

            <motion.div 
            initial={{ scale:0 }}
            animate={{scale: 1}}
            transition={{
              duration: 1.5,
              
            }}
            className='d-flex cont-temas mr-3'>
              <div className='m-3'>
                <Link to='inicio' spy={true} offset={50} duration={500} smooth={true} className='a-nav'>
                Inicio 
                </Link>
                </div>
                <div className='m-3'>
                <Link to='tec' spy={true} offset={50} duration={500}  smooth={true} className='a-nav' >
                Tecnologias
              </Link>
                </div>
                <div className='m-3'>
                  <Link to='proyecto' spy={true} offset={50} duration={500} smooth={true} className='a-nav'>
                  Proyectos
                  </Link>
                </div>
                <div className='m-3'>
                  <Link to='con' spy={true} smooth={true} offset={50} duration={500} className='a-nav'>
                  Contacto
                  </Link>
                </div>
              </motion.div>
            </div>

        </nav>
    </div>
  )
}

export default Navbar