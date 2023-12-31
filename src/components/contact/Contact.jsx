import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import  { useRef } from 'react';
import emailjs, { send } from '@emailjs/browser';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yhrwid7', 'template_aigiham', form.current, '7W3WUtwN818-GNzJ_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>mahmoudyousri2011@gmail.com</h5>
            <a href="mailto:mahmoudyousri@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+20 1208527441</h5>
            <a href="https://api.whatsapp.com/send?phone=201208527441"target='_blank'>Send a message</a>
          </article>
          
        </div>
       { <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name="email"placeholder='Your Email' required/>
          <textarea name="message" cols="30" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>}
      </div>
    </section>
  )
}

export default Contact