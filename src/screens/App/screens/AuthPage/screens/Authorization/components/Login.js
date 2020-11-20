import React from "react";
import { LoginForm } from "./styled";

function Login({ value, handleChange }) {
  return (
    <LoginForm
      value={value}
      onChange={handleChange}
      placeholder="Введите логин"
    />
  );
}

export default Login;
