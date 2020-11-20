import React, { useCallback, useState } from "react";
import { AuthBlock, AuthHeader, WrongData } from "./styled";
import { Button, Spinner } from "../../../../../../shared/components/styled";
import Password from "./Password";
import Login from "./Login";
import { authorized } from "../../../../../../../redux/ducks/authorization";
import { useDispatch, useSelector } from "react-redux";

function Authorization() {
  const dispatch = useDispatch();
  const authorizing = useSelector((state) => state.login.authorizing);
  const error = useSelector((state) => state.login.error);

  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = (e) => {
    setLogin(e.target.value);
  };

  const handlePass = (e) => {
    setPass(e.target.value);
  };

  const handleClick = useCallback(() => {
    if (login && pass) {
      dispatch(authorized(login, pass));
    }
  }, [dispatch, login, pass]);

  return (
    <AuthBlock>
      <AuthHeader>Авторизация</AuthHeader>
      <WrongData show={error}>
        Данные введены неверно. Попробуйте еще раз
      </WrongData>
      <Login value={login} handleChange={handleLogin} />
      <Password value={pass} handleChange={handlePass} />
      <Button onClick={handleClick} margin="20px auto">
        {authorizing && <Spinner />}
        Авторизация
      </Button>
    </AuthBlock>
  );
}

export default Authorization;
