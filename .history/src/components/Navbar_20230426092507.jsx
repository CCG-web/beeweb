
import React, { useState, useEffect } from 'react'
import './Navbar.css'
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, seScreenWidth] =  useState(windows.innerWidth)

  const toggleNav = () => {

    setToggleMenu(!toggleMenu)
  }
  return (

    <nav>
      {toggleMenu && (
        <ul className="list">

          <li className="items">Home</li>
          <li className="items">Sobre nós</li>
          <li className="items">Uso</li>
          <li className="items">Contato</li>

        </ul>
      )

      }



      <button onClick={toggleNav} className='btn'>BTN</button>
    </nav>

  )
}

export default Navbar