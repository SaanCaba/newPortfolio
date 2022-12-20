import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './styles/Contact.css'
import { useState } from 'react';
import Swal from 'sweetalert2';

function ContactMe() {
  const form = useRef();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  console.log(name, email, message)
  const sendEmail = (e) => {
    e.preventDefault();
    if(name === '' || email === '' || message === ''){
      return Swal.fire({
        icon:'error',
        text:'Faltan rellenar campos!',
        background: '#c4684f',
        iconColor: '#611c0a',
        color:'white',
        confirmButtonColor:'#86d984',
        confirmButtonText:'Continuar',
      })
    }

    emailjs.sendForm('service_8xn1126', 'template_afn7muo', form.current, 'gsBOg-q0c5EHAnEPY')
      .then((result) => {
          console.log(result.text);
          setEmail('')
          setMessage('')
          setName('')
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='cont-cont-contact'>
        <div className=''>
      <div className='cont-contact' >
    <form ref={form} onSubmit={sendEmail} >
    <h3 className='title-contact' >Mandame tu mensaje!</h3>
      <section className='cont-nombre d-flex flex-column' >
      <label>Nombre: </label>
      <input type="text" name="user_name" onChange={(e) => setName(e.target.value) } />
      </section>
      <section className='cont-email d-flex flex-column' >
      <label>Email: </label>
      <input type="email"  name="user_email" onChange={(e) => setEmail(e.target.value)} />
      </section>
      <section className='cont-message d-flex flex-column' >
      <label >Mensaje: </label>
      <textarea className='' name="message" onChange={(e)=> setMessage(e.target.value)} />
      </section>
      <button className='btn-contact' type="submit" value="Send">Enviar</button>
    </form>
    </div>
    <div id='con'>
    </div>
        </div>
    </div>
  )
}

export default ContactMe
  