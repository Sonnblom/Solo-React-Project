import React from 'react'
import {} from 'react-router-dom'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
<div className='Home'>
<div className="navBar">
      <div className="navIcon1">
        <Link to="/">Home</Link>
      </div>
      <div className="navIcon2">
        <Link to="/about">About Me</Link>
      </div>
      <div className="navIcon3">
        <Link to="/shop">Shop</Link>
      </div>
      <div className="navIcon4">
      <Link to="/contact">Contact</Link>
      </div>
      <div className="navBarGradient"></div>
    </div>
    </div>
  );
}

export default Navbar

