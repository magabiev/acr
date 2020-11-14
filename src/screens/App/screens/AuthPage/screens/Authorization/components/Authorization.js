import React from "react";
import { AuthBlock, AuthHeader, WrongData } from "./styled";
import { Button, Spinner } from "../../../../../components/styled";
import Password from "./Password";
import Login from "./Login";

function Authorization() {
  return (
    <AuthBlock>
      <AuthHeader>Авторизация</AuthHeader>
      <WrongData>Данные введены неверно. Попробуйте еще раз</WrongData>
      <Login />
      <Password />
      <Button margin="20px auto">
        <Spinner />
        Авторизация
      </Button>
    </AuthBlock>
  );
}

export default Authorization;
