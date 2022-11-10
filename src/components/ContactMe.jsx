import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './styles/Contact.css'

function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8xn1126', 'template_afn7muo', form.current, 'gsBOg-q0c5EHAnEPY')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='cont-cont-contact'>
        {/* <div className='col-6 col-md-2 mb-3'>linkedin</div>
        <div className='col-6 col-md-2 mb-3'>github</div>
        <div className='col-6 col-md-2 mb-3'>twitter</div> */}
        <div className=''>
      <div className='cont-contact' >
    <form ref={form} onSubmit={sendEmail} >
    <h3 className='title-contact' >Mandame tu mensaje!</h3>
      <section className='cont-nombre d-flex flex-column' >
      <label>Nombre: </label>
      <input type="text" name="user_name" />
      </section>
      <section className='cont-email d-flex flex-column' >
      <label>Email: </label>
      <input type="email" name="user_email" />
      </section>
      <section className='cont-message d-flex flex-column' >
      <label >Mensaje: </label>
      <textarea className='' name="message" />
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