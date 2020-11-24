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
  const [emptyInput, setEmptyInput] = useState(false);
  const [wrongData, setWrongData] = useState(false);

  const handleLogin = (e) => {
    setLogin(e.target.value);
    setEmptyInput(false);
    setWrongData(false);
  };

  const handlePass = (e) => {
    setPass(e.target.value);
    setEmptyInput(false);
    setWrongData(false);
  };

  const handleClick = useCallback(() => {
    if (login && pass) {
      dispatch(authorized(login, pass));
      setEmptyInput(false);
      setWrongData(true);
    } else {
      setEmptyInput(true);
    }
  }, [dispatch, login, pass]);

  return (
    <AuthBlock>
      <AuthHeader>Авторизация</AuthHeader>
      {login && pass && wrongData ? (
        <WrongData show={error}>
          Данные введены неверно. Попробуйте еще раз
        </WrongData>
      ) : (
        <WrongData show={emptyInput}>Заполните все поля</WrongData>
      )}
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
