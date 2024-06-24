import React from 'react'
import './Product.css'


import EnzyShan from '../../Images/EnzyShan.png'
import EnzyShanHD from '../../Images/EnzyShanHD.jpg'
import HeamShan from '../../Images/HeamShan.png'
import RozyShan from '../../Images/RozyShanHD.png'
import ShannPro from '../../Images/Shann-Pro.png'
import CaroShank2 from '../../Images/CaroShan-K2.png'

const Product = () => {
  return (
    <div className='products'>
        <div className='product'>
<img src={EnzyShan} alt=""></img>
        </div>
        <div className='product'>
<img src={EnzyShanHD} alt=""></img>
        </div>
        <div className='product'>
<img src={HeamShan} alt=""></img>
        </div>
        <div className='product'>
<img src={RozyShan} alt=""></img>
        </div>
        <div className='product'>
<img src={ShannPro} alt=""></img>
        </div>
        <div className='product'>
<img src={CaroShank2} alt=""></img>
        </div>

      
    </div>
  )
}

export default Product
