import React from 'react'
import "../routes/Login.css"
import  logoLogin from "../assets/logoLogin.svg"

const reset = () => {
  return (
    <div className="row">
      <div className="col colOne">
        <img src={logoLogin} alt="Imagem de exemplo"  className='center-image'/>
      </div>
      <div className="col colTwo">
        <div className='Formcontainer'>
        <h1 className='login'>  Esqueci a senha</h1>
        <p>Insira seu email para receber instruções <br/>
sobre como redefinir sua senha.</p>
        <form>
          <input type="email" name="email" placeholder="E-mail" className='email' />
        
          <button type="submit" className='submit'>Reset Senha</button>
        </form>
      


sobre como redefinir sua senha.
      </div>
    </div>
    </div>
  )
}

export default reset