import React from 'react'
import './Contato.css'
import { FaBeer } from 'react-icons/fa/BsFillTelephoneFill';

const Contato = () => {
    return (
        <div className="containerForm">

            <div className="itensForm first">

            <form className="form" action="#" method="post">

                <input type="text" id="name" name="name" placeholder="Seu nome" />


                <input type="text" id="email" name="email" placeholder="Seu e-mail" />


                <textarea id="message" name="message" placeholder="Sua mensagem"></textarea>

                <button type="submit">Enviar</button>
            </form>
        </div>
        <div className="itensForm Secord">
            <ul>
                <li className="listContact"> <i><FaBeer/></i> contato@plataformacidts.com</li>
                <li className="listContact">(85) 9 8956.6689</li>
                <li className="listContact">BR-020, km 209 - Boa Viagem</li>
            </ul>
        </div>
            </div>
    )
}

export default Contato