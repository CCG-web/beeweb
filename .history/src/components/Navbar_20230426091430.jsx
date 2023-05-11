import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="container">
      <h1>Logo</h1>
      <nav>
        <ul className="list">
         
            <li className="items">Home</li>
            <li className="items">Sobre nós</li>
            <li className="items">Uso</li>
            <li className="items">Contato</li>
          </li>
        </ul>
        <button className='btn'>BTN</button>
      </nav>
    </div>
  )
}

export default Navbar