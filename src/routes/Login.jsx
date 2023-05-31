import React, { useState } from 'react';
import logoLogin from '../assets/logoLogin.svg';
import '../routes/Login.css';
import { apiFetch } from '../utils/axios';

const Login = () => {
  const [[email, setEmail], [password, setPassword]] = [
    useState(''),
    useState(''),
  ];

  async function handleSubmission() {
    const response = await apiFetch.post('/user/auth', {
      email,
      password,
    });

    if (response.status === 200) {
      /*
        Para o caso de tudo dar certo, e o usuário tiver digitado corretamente a senha e o email
        a API irá retornar um token de autenticação que deverá ser guardado aqui no front
      */
    }
  }

  return (
    <div className="row">
      <div className="col colOne">
        <img
          src={logoLogin}
          alt="Imagem de exemplo"
          className="center-image"
        />
      </div>
      <div className="col colTwo">
        <div className="Formcontainer">
          <h1 className="login">login</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              className="email"
              onInput={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Senha"
              className="password"
              onInput={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="submit"
              onClick={handleSubmission}
            >
              Entrar
            </button>
          </form>
          <a
            className="forgot"
            href="/"
          >
            Esqueceu a senha?
          </a>
          <label>Não tem conta?</label>
          <a
            className="cadastre"
            href="/"
          >
            Cadastre-se?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
