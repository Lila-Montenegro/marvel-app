import React, { Component, useState } from "react";
import "./LoginForm.css";

export default () => {
  // state = {
  //   user: this.props.user,
  //   password: this.props.password,
  // };

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  // setUser(e) {
  //   this.setState({ user: e.target.value });
  // }

  // setPassword(e) {
  //   this.setState({ password: e.target.value });
  // }

  return (
    <div className="login-form">
      <h2 className="bem-vindo">Bem-vindo(a) de volta!</h2>
      <span className="acesse">Acesse sua conta:</span>
      <form action="">
        <input
          type="text"
          placeholder="Usuário"
          className="userData"
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          className="userData"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="checkbox" id="save-login" />
        <label htmlFor="save-login" className="save-login">
          Salvar login
        </label>
        <a href="" className="forgot-password">
          Esqueci a senha
          <hr className="forgot-password-line" />
        </a>
      </form>
      <button
        className="botao-login"
        onClick={() => {
          window.location.assign("/#/home");
        }}
      >
        Entrar
      </button>

      <span className="no-login">
        Ainda não tem o login?{" "}
        <a href="" className="highlight">
          Cadastre-se
        </a>
      </span>
    </div>
  );
};
