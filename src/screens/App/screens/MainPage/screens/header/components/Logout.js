import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { HeaderOtherOption } from "./styled";
import { useSelector } from "react-redux";

function Logout() {
  const history = useHistory();
  const handleClick = () => {
    localStorage.removeItem("token");
  };

  const token = useSelector((state) => state.authorization.token);
  useEffect(() => {
    if (!token) {
      history.push("/authPage");
    }
  }, [history, token]);

  return <HeaderOtherOption onClick={handleClick}>Выход</HeaderOtherOption>;
}

export default Logout;
