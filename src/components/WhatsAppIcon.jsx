import React from 'react'
import { BsCodeSlash,BsWhatsapp } from "react-icons/bs"
import ReactWhatsapp from 'react-whatsapp'
import './styles/IconWpp.css'
function WhatsAppIcon() {
  return (
    <div className='cont-iconwpp'>
            <ReactWhatsapp className='link-wpp' number="+54 1160198446" message='Hola'>
            {/* <WhatsappIcon className='wpp-icon'  /> */}
            <BsWhatsapp size={32} color="#35f067" />
            </ReactWhatsapp>
    </div>
  )
}

export default WhatsAppIcon