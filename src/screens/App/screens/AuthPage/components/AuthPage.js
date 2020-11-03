import React, { useState } from "react";
import {
  AuthBlock,
  AuthBlockParent,
  AuthContainer,
  AuthHeader,
  AuthOtherBlock,
  Login,
  Password,
  PasswordBlock,
  ShowPassword,
  WrongData,
} from "./styled";
import { Button, LinkButton, Spinner } from "../../../components/styled";

function AuthPage() {
  const [focusPassword, setFocusPassword] = useState(false);
  return (
    <AuthContainer>
      <AuthBlockParent>
        <AuthBlock>
          <AuthHeader>Авторизация</AuthHeader>
          <WrongData>Данные введены неверно. Попробуйте еще раз</WrongData>
          <Login placeholder="Введите логин" />
          <PasswordBlock focusBorder={focusPassword}>
            <Password
              placeholder="Введите пароль"
              onFocus={() => setFocusPassword(true)}
              onBlur={() => setFocusPassword(false)}
            />
            <ShowPassword>
              <i className="material-icons">visibility_off</i>
            </ShowPassword>
          </PasswordBlock>
          <Button margin="20px auto">
            <Spinner />
            Авторизация
          </Button>
        </AuthBlock>
        <AuthOtherBlock>
          <LinkButton>Регистрация</LinkButton>
          <LinkButton>Забыли пароль?</LinkButton>
        </AuthOtherBlock>
      </AuthBlockParent>
    </AuthContainer>
  );
}

export default AuthPage;
