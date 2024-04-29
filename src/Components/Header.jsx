import React from 'react'

function Header() {
  return (
    <>
    <nav className={`container-container`}>
      <ul>
        <li>menu</li>
        <li>about</li>
        <li>blog</li>
        <li>contact</li>
        <li><button className='btn  btn-nav'>Explore More</button></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>

    </>
  )
}

export default Header