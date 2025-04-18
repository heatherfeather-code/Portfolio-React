import React, { useRef } from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef(); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        form.current.reset();
    }, (error) => {
        console.log(error.text);
        alert('An error occurred, please try again.');
    });
  };

  return (
    <section id="connect" className="contact-form">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}> 
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="from_name" required /> 

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="reply_to" required /> 

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required />

        <button type="submit">Send</button>
      </form>
    </section>
  );
}
