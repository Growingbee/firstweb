import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { FaBeer } from 'react-icons/fa';
import { FaEnvelope } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa6";


const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact-col'></div>
        <h3>Send Us a message</h3>
        <p>feel free to reach out through contact form or find our contact info below. your feedback questions and suggestions are important to us.</p>
        <ul>
<li><FaEnvelope/>contact.shannonls@gmail.com</li>
<li><FaPhone/>9990104772</li>

<li><FaAddressCard/>B-1227, S/F,GD Colony, Mayur Vihar, Phase-3,
Delhi 110096</li>


        </ul>
        
        
        <div></div>
      
    </div>
  )
}

export default Contact
