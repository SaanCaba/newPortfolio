import React from 'react'
import './styles/Aboutme.css'
import fotoperfil from './images/fotoperfil.jpg'
import gif from './images/cat-nyan-cat.gif'
import { motion } from 'framer-motion'
import { FcDownload } from 'react-icons/fc'

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
            <div className='cont-foto position-relative'>
                <img src={fotoperfil} className='foto '  alt="foto perfil"/>
            </div>
                <div className='d-flex flex-column cont-aboutme-content'>
                <span>Hola soy Santiago, programador Web FullStack Jr. </span>
                <span> Realicé mis estudios en SoyHenry, durante 5 meses,</span>
                  <span> y más de 800 horas de prácticas.</span>
                <span> Proactivo, resiliente, paciente y compañero. </span> 
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