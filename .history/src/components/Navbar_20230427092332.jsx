
import React, { useState, useEffect } from 'react'
import logoBee from "../assets/logoBEE.svg"
import { Divide as Hamburger } from 'hamburger-react'
import './Navbar.css'
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const toggleNav = () => {

    setToggleMenu(!toggleMenu)
  }
  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)
    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])

  return (

    <nav>
      
      {(toggleMenu || screenWidth > 1000) && (
        <ul className="list">

          
          <li className="items">Home</li>
          <li className="items">Sobre nós</li>
          <li className="items">Uso</li>
          <li className="items">Contato</li>

        </ul>
      )

      }


       <img src={logoBee} alt="" />
       <Hamburger
      <button onClick={toggleNav} className='btn'>BTN</button>
    </nav>

  )
}

export default Navbar