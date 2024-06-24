import React from 'react'
import Navbar from './assets/Components/Navbar/Navbar'
import Hero from './assets/Components/Hero/Hero'
import Product from './assets/Components/Products/Product'
import Title from './assets/Components/Title/Title'
import About from './assets/Components/About/About'
import Contact from './assets/Components/Contact/Contact'
const App = () => {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <div className='container'>
<Title subTitle='About Us' Title='Our Journey'/>
<About/>
<Title subTitle='Our Products' Title='What We offer'/>
     <Product/>
    
     <Title subTitle='Contact Us' Title='Get In Touch'/>
     <Contact/>
     </div>
    </div>
  )
}

export default App
