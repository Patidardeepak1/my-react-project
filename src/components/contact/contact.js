import React, { useRef } from "react";
import './contact.css'; // Make sure you have styles in this file
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import WhatsappIcon from '../../assets/whatsaap-icon-modified .png'
import emailjs from "@emailjs/browser";
// import {Link} from  "react-scroll"

function Contact() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm('service_oe3q5c9', 'template_leuvn2b', form.current, 'DfpfCNrO0nJJu-jpF');
      console.log(result.text);
      e.target.reset();
      alert("Email sent successfully!");
    } catch (error) {
      console.error(error.text);
      alert("Error sending email. Please try again later.");
    }
  };

  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunity</span>

        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <label htmlFor="your_name">Your Name</label>
          <input type="text" id="your_name" className="name" placeholder="Your Name" name="from_name" required />

          <label htmlFor="your_email">Your Email</label>
          <input type="email" id="your_email" className="email" placeholder="Your Email" name="from_email" required />

          <label htmlFor="message">Your Message</label>
          <textarea id="message" placeholder="Your Message" className="msg" name="message" rows="5" required></textarea>

          <button type="submit" className="submitBtn">Submit</button>

          <div className="links">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">   <img src={FacebookIcon} alt="Facebook" className="link" /></a>
       
            <a href="https://twitter.com/deepak_pati2026" target="_blank" rel="noopener noreferrer">
            <img src={TwitterIcon} alt="Twitter" className="link" /> </a>
            <a href="https://www.youtube.com/@Deepak-gk3dq" target="_blank" rel="noopener noreferrer">
            <img src={YoutubeIcon} alt="YouTube" className="link" />
            </a>
            <a href="https://www.instagram.com/deepak_.patidar_?igsh=MW9veXFobmxtdjloZA==" target="_blank" rel="noopener noreferrer">
            <img src={InstagramIcon} alt="Instagram" className="link" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=9713402267" target="_blank" rel="noopener noreferrer">
            <img src={WhatsappIcon} alt="whatsapp" className="link" />
            </a>
    
           
         
            
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;



