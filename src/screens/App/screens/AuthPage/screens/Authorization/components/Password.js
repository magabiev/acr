import React, { useState } from "react";
import { PasswordBlock, ShowPassword, PasswordForm } from "./styled";

function Password({ value, handleChange }) {
  const [focusPassword, setFocusPassword] = useState(false);
  const [passShow, setPassShow] = useState(false);
  const passShowToggle = () => {
    setPassShow(!passShow);
  };
  return (
    <PasswordBlock focusBorder={focusPassword}>
      <PasswordForm
        value={value}
        onChange={handleChange}
        placeholder="Введите пароль"
        onFocus={() => setFocusPassword(true)}
        onBlur={() => setFocusPassword(false)}
        type={passShow ? "text" : "password"}
      />
      <ShowPassword onClick={passShowToggle} iconColor={passShow}>
        <i className="material-icons">
          {passShow ? "visibility" : "visibility_off"}
        </i>
      </ShowPassword>
    </PasswordBlock>
  );
}

export default Password;
