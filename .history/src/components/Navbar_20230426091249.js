import React, {useState,useEffect} from 'react'
import React from 'react'
import './Navbar.css'
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (

      <nav>
        {toggleMenu &&(
          <ul className="list">
         
         <li className="items">Home</li>
         <li className="items">Sobre nós</li>
         <li className="items">Uso</li>
         <li className="items">Contato</li>

        </ul>
        )}
      
        <button className='btn'>BTN</button>
      </nav>
   
  )
}

export default Navbar