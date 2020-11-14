import React from "react";
import { AuthBlockParent, AuthContainer, AuthOtherBlock } from "./styled";
import { LinkButton } from "../../../components/styled";
import Authorization from "../screens/Authorization";

function AuthPage() {
  return (
    <AuthContainer>
      <AuthBlockParent>
        <Authorization />
        <AuthOtherBlock>
          <LinkButton>Регистрация</LinkButton>
          <LinkButton>Забыли пароль?</LinkButton>
        </AuthOtherBlock>
      </AuthBlockParent>
    </AuthContainer>
  );
}

export default AuthPage;
