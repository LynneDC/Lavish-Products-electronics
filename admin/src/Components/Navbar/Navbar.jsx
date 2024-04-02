import React from 'react'
import './Navbar.css'
import tech from '../../assets/tech.png'
import navprofile from '../../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={tech} alt="" className="tech"/>
        <img src={navprofile} alt="" className="nav-profile"/>
    </div>
  )
}

export default Navbar