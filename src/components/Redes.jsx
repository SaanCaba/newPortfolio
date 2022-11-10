import React from 'react'
import github from './images/github.png'
import linkedin from './images/linkedin.png'
import './styles/Redes.css'

function Redes() {
  return (
    <div className='cont-imgs-lkd'>
        <div className='cont-redes'>
       <a href='https://github.com/SaanCaba' target='_blank' >
       <img src={github} style={{height:'50px'}} /> 
       </a>
       <a href='https://www.linkedin.com/in/santiago-caballero-82aa241a1/' target='_blank' >
        <img src={linkedin} style={{height:'50px'}} />
       </a>
        
        </div>
    </div>
  )
}

export default Redes
