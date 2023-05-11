import React from 'react'
import "../routes/Login.css"
import  logoLogin from "../assets/logoLogin.svg"
const Login = () => {
  return (
    <div className="row">
      <div className="col colOne">
        <img src={logoLogin} alt="Imagem de exemplo"  className='center-image'/>
      </div>
      <div className="col colTwo">
        <div className='Formcontainer'>
        <h1 className='login'>login</h1>
        <form>
          <input type="email" name="email" placeholder="E-mail" className='email' />
          <input type="password" name="password" placeholder="Senha" className='password' />
          <button type="submit" className='submit'>Entrar</button>
        </form>
        <a className='forgot' href="/">Esqueceu a senha?</a>
        <label >Não tem conta?</label>
        <a className='cadastre' href="/">Cadastre-se?</a>
      </div>
    </div>
    </div>
    
  )
}

export default Login