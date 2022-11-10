import React from 'react'
import './styles/Aboutme.css'
import fotoperfil from './images/fotoperfil.jpg'
import gif from './images/cat-nyan-cat.gif'
import { motion } from 'framer-motion'
import { FcDownload } from 'react-icons/fc'
import { Link} from 'react-scroll'

function Aboutme() {
  return (
    <div className='cont-aboutme'>
        <motion.div 
        initial={{ scale:0 }}
        animate={{scale: 1}}
        transition={{
          duration: 1.5,
          
        }}
        
        className=''>
            <div className=' position-relative'>
            <div 
            // animate={{ marginBottom:'10px' }}
            // transition={{
            //   repeat: Infinity, duration: 2 
            // }}
            className='cont-foto position-relative'>
                <motion.img 
                src={fotoperfil} className='foto '  alt="foto perfil"/>
            </div>
                <div className='d-flex flex-column cont-aboutme-content'>
                <span>Hola, soy Santiago, Full Stack Developer.</span>
                <span> Realicé mis estudios en SoyHenry durante 5 meses,</span>
                <span>en los cuales desarrollé 2 <Link className='link-pro' to='proyecto' spy={true} offset={50} duration={500} smooth={true}>proyectos</Link>,</span>
                  <span> y además cuento con 800 horas de prácticas.</span>
                <span> Proactivo, resiliente, paciente y tenaz. </span> 
                <span className='cont-ubi'>📍 Buenos Aires, Argentina.</span>
                <a href='CV SANTIAGO CABALLERO..pdf'
             download= "CV SANTIAGO CABALLERO..pdf">
              <button className='btn-resume'>Resume <FcDownload size={27} /> </button>
            </a>
                </div>
                </div>
                
            <div>
            </div>
            
        </motion.div>
        {/* <img className='gif-animation' src={gif} />  */}

    </div>
  )
}

export default Aboutme