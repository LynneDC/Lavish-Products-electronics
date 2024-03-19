
import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className='hand-hand-icon'>
                <p>new</p>
                <img src={hand_icon} alt=''style={{ width: "100px", height: "auto" }} />
            </div>
            <p>collection</p>
            <p>for everyone</p>
        </div>
        <div className='hero-latest-btn'>
            <p>Shop Now</p>
            <img src={arrow} alt='' />
        </div>
        </div>
    <div className='hero-right'>
        <img src={hero_image} alt='' />
    </div>
    </div>
  )
}

export default Hero 
