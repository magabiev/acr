import React from "react";
import { HeaderOtherOption } from "./styled";
import { logout } from "../../../../../../../redux/ducks/authorization";
import { useDispatch } from "react-redux";

function Logout() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logout());
  };

  return <HeaderOtherOption onClick={handleClick}>Выход</HeaderOtherOption>;
}

export default Logout;
