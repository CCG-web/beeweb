import React from 'react'
import './Contato.css'

const Contato = () => {
  return (
    <div className="container">
    <form className="form" action="#" method="post">
      <label htmlFor="name">Nome:</label>
      <input type="text" id="name" name="name" placeholder="Seu nome..." />

      <label htmlFor="email">E-mail:</label>
      <input type="text" id="email" name="email" placeholder="Seu e-mail..." />

      <label htmlFor="message">Escreva sua mensagem aqui:</label>
      <textarea id="message" name="message" placeholder="Sua mensagem..."></textarea>

      <button type="submit">Enviar</button>
    </form>
  </div>
  )
}

export default Contato