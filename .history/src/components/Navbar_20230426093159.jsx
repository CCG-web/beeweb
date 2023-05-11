
import React, { useState, useEffect } from 'react'
import './Navbar.css'
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] =  useState(window.innerWidth)

  const toggleNav = () => {

    setToggleMenu(!toggleMenu)
  }

  const changeWidth = () =>{
    setScreenWidth(window.innerWidth)
  }
  return (

    <nav>
      {(toggleMenu || screenWidth > 500) && (
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