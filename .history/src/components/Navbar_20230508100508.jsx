
import React, { useState, useEffect, useRef } from 'react'
import logoBee from "../assets/logoBEE.svg"
import Headline from './Headline'
import { Divide as Hamburger } from 'hamburger-react'
import './Navbar.css'
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const ref = useRef();

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

const handleClick = () =>{
  ref.current?.scrollIntoView({behavior: 'smooth'})
}
  return (



    <nav>
      
 
      {(toggleMenu || screenWidth > 1000) && (
        <ul className="list">

          
          <li className="items" onClick={handleClick} >Home</li>
          <li className="items">Sobre nós</li>
          <li className="items">Uso</li>
          <li className="items">Contato</li>

        </ul>
      )

      }


       <img className="logo" src={logoBee} alt="" / >
       
      <button onClick={toggleNav} className='btn'><Hamburger/></button>
    </nav>

  )
}

export default Navbar;