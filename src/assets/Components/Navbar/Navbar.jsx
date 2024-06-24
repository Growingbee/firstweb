import React, { useEffect, useState } from 'react'
import './Navbar.css'
import getsitelogo from '../../Images/Logo.png'
import menu_icon from '../../Images/menu_icon.png'
import { Link } from 'react-scroll';

const Navbar = () => {


const [sticky,setSticky]    =   useState(false);

useEffect(()=>{

window.addEventListener('scroll',()=>{
  window.scrollY > 500 ? setSticky(true) :setSticky(false);
})

},[]);


const[mobileMenu,setmobileMenu] = useState(false);

const toggleMenu = ()=>{

  mobileMenu?setmobileMenu(false):setmobileMenu(true);




}


  return (
    <nav className={`container ${sticky? 'dark-nav': ''}`}>
<img src={getsitelogo} alt='logo' className='logo'/>
<ul className={mobileMenu?'':'hide-mobile-menu'}>
<li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
<li><Link to='about' smooth={true} offset={-260} duration={500}>About US</Link></li>
<li><Link to='product' smooth={true} offset={-330} duration={500}>Our Products</Link></li>
<li><Link to='contact' smooth={true} offset={-260} duration={500} >Contact US</Link></li>

</ul>

<img src={menu_icon} alt="" className='menu_icon'  onClick={toggleMenu}/>

    </nav>
  )
}

export default Navbar
