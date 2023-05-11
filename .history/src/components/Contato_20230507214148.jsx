import React from 'react'
import './Contato.css'

const Contato = () => {
    return (
        <div className="containerForm">

            <div className="itensForm">

            <form className="form" action="#" method="post">

                <input type="text" id="name" name="name" placeholder="Seu nome..." />


                <input type="text" id="email" name="email" placeholder="Seu e-mail..." />


                <textarea id="message" name="message" placeholder="Sua mensagem..."></textarea>

                <button type="submit">Enviar</button>
            </form>
        </div>
        <div className="itensForm">
            fszc
        </div>
            </div>
    )
}

export default Contato