import React from 'react'
import "../routes/Login.css"
const Login = () => {
  return (
    <div className="row">
      <div className="col colOne">
        <img src="https://via.placeholder.com/400x400" alt="Imagem de exemplo"  className='center-image '/>
      </div>
      <div className="col colTwo">
        <h1 className='login'>login</h1>
        <form>
          <input type="email" name="email" placeholder="E-mail" className='email' />
          <input type="password" name="password" placeholder="Senha" className='password' />
          <button type="submit" className='submit'>Entrar</button>
        </form>
        <a className='forgot' href="/">Esqueceu a senha?</a>
        <a className='cadastre' href="/">cadastre-se?</a>
      </div>
    </div>
    
  )
}

export default Login