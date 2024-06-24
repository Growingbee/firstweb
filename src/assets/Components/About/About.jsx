import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './About.css'
import EnzyShan from '../../Images/EnzyShan.png'
import EnzyShanHD from '../../Images/EnzyShanHD.jpg'
import HeamShan from '../../Images/HeamShan.png'
import RozyShan from '../../Images/RozyShanHD.png'
import ShannPro from '../../Images/Shann-Pro.png'
import CaroShank2 from '../../Images/CaroShan-K2.png'

const About = () => {
  return (
    <div className='about'>
      {/* <div className='about-left'>
        <img src={EnzyShan} alt="" className='about-img'></img>
        <img src={EnzyShan} alt="" className='about-img'></img>
        <FontAwesomeIcon icon="fa-solid fa-play" />
      </div> */}
      <div className='about-right'>
<h3>About Shannon LifeScienses</h3>
<h2>OUR  AIM</h2>
<p>We provide affordable medicines for healthier lives, our patients and partners trust our medicines. We focus our energies on renewing this trust day by day. As we keep the interests of our patients at the centre of all that we do, our promises drive us to reach higher levels of excellence innovation and learning while continuously reaching for higher levels of excellence.</p>
<h2>PROMISES</h2>
<p>Our patients trust our medicines. We focus our energies on renewing this trust every day. As we keep the interests of our patients at the centre of all that we do, our promises drive us to reach higher levels of excellence.</p>
      </div>
    </div>
  )
}

export default About
