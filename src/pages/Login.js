import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="Login__page">
      <div className="Login_page_container">
        <div className="Login__card">
          <h2>Inicia Sesion</h2>
          <form className="Login_container_form">
            <input
              className="Form__input"
              type="text"
              placeholder="Usuario"
            />
            <input
              className="Form__input"
              type="password"
              placeholder="Contraseña"
            />
            <button className="Form__button">Iniciar sesion</button>
              <a href="#!" className="Form__remember_me">Olvide mi contraseña</a>
          </form>
          <p className="Form__register">
            ¿No tienes cuenta? <a href="#!" className="Form__remember_me">Registrate</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
