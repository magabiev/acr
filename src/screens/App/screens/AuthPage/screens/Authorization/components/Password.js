import React, { useState } from "react";
import { PasswordBlock, ShowPassword, PasswordForm } from "./styled";

function Password(props) {
  const [focusPassword, setFocusPassword] = useState(false);
  return (
    <PasswordBlock focusBorder={focusPassword}>
      <PasswordForm
        placeholder="Введите пароль"
        onFocus={() => setFocusPassword(true)}
        onBlur={() => setFocusPassword(false)}
      />
      <ShowPassword>
        <i className="material-icons">visibility_off</i>
      </ShowPassword>
    </PasswordBlock>
  );
}

export default Password;
