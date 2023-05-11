
import React, { useState, useEffect, } from 'react'
import logoBee from "../assets/logoBEE.svg"
import Headline from './Headline'
import { Divide as Hamburger } from 'hamburger-react'
import './Navbar.css'
const Navbar = (props) => {
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
  const ref = useRef(null)

  const hanleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (



    <nav>
      
 
      {(toggleMenu || screenWidth > 1000) && (
        <ul className="list">

          
          <li  className="items" onClick={hanleClick} >{props.Home}</li>
          <li  className="items"  >{props.sobre}</li>
          <li  className="items"  >{props.uso}</li>
          <li  className="items"  >{props.Contato}</li>
          

        </ul>
      )

      }


       <img className="logo" src={logoBee} alt="" / >
       
      <button onClick={toggleNav} className='btn'><Hamburger/></button>
    </nav>

  )
}

export default Navbar;