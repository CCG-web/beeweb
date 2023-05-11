import React from 'react'
import "../routes/Login.css"
import Footer from '../components/Footer'
const Login = () => {
  return (
    <div className="row">
      <div className="col">
        <img src="https://via.placeholder.com/400x400" alt="Imagem de exemplo" />
      </div>
      <div className="col">
        <h1>Login</h1>
        <form>
          <input type="email" name="email" placeholder="E-mail" />
          <input type="password" name="password" placeholder="Senha" />
          <button type="submit">Entrar</button>
        </form>
        <a href="/">Esqueceu a senha?</a>
      </div>
      </Footer>
    </div>
  )
}

export default Login