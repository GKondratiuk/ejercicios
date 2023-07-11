import React from 'react'
import './Navbar.css'
export const Navbar = () => {
  
  
  
  
  return (
<>
<nav>
    <div className='logo'>
    <i class="bi bi-circle-fill"></i>
    <h2>Your brand</h2>
    </div>
    <div className='buscador'>
      <i class="bi bi-search"></i>
    <input type="text" placeholder='Search goods...'/>
  </div>
    <div className='contacto'>
      <p>Contact</p>
      <i class="bi bi-house-door-fill"></i>
      <i class="bi bi-search"></i>
      <i class="bi bi-cart3"></i>
    </div>
    </nav>
</>
  )
}


export default Navbar