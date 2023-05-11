import React from 'react'
import logoifce from '../assets/logoifce.svg'
import logociditis from '../assets/cidits.svg'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='itensFooter'>
                  teste
        </div>
        <div className='itensFooter'>
        <img  src={logociditis} alt=""/>
        </div>
        <div className='itensFooter'>
        <img  src={logoifce} alt="" / >
        </div>
    </div>
   
  )
}

export default Footer