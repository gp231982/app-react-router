import React from "react";
import "../styles/LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login">
      <label style={{}} htmlFor="login"> Podaj login
        <input type="text" />
      </label>
      <label htmlFor="password"> Podaj hasło
        <input type="password" />
      </label>
      <button>Zaloguj</button>
    </div>
  );
};

export default LoginPage;
