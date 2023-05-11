import React from 'react'

const Navbar = () => {
  return (
  <div className="container">
    <h1>Logo</h1>
<nav>
  <ul className="List">
<li className="list">
  <li className="items">Home</li>
  <li className="items">Sobre nós</li>
  <li className="items">Uso</li>
  <li className="items">Contato</li>
</li>
  </ul>
    <a href='/#'>Home</a>
    <a href='/#'>Sobre nós</a>
    <a href='/#'>Uso</a>
    <a href='/#'>Contato</a>
</nav>
  </div>
    )
}

export default Navbar