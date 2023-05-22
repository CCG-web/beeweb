import React from 'react'
import "../routes/Login.css"
import logoLogin from "../assets/logoLogin.svg"
import {Link} from "react-router-dom";

const reset = () => {
    return (
        <div className="row">
            <div className="col colOne">
                <img src={logoLogin} alt="Imagem de exemplo" className='center-image' />
            </div>
            <div className="col colTwo">
                <div className='Formcontainer'>
                    <h1 className='login'>  Esqueci a senha</h1>
                    <p className='resetText'>Insira seu email para receber instruções <br />
                        sobre como redefinir sua senha.</p>
                    <form className='formReset'>
                        <input type="email" name="email" placeholder="E-mail" className='email' />
                        
                        <Link type="backLogin" className='backLogin' to="../login">Voltar</Link>
                        <button type="submit" className='submitReset'>Enviar</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default reset