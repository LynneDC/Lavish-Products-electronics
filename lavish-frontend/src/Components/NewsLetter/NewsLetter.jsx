import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get exclusive offers in your Email</h1>
        <p>Subscribe to our newsletter and get 10% off your first purchase</p>
        <div>
            <input type='text' placeholder='Enter your email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
export default NewsLetter
