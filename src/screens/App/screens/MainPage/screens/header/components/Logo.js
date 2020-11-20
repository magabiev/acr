import React from "react";
import { LogoBlock } from "./styled";
import { useSelector } from "react-redux";

function Logo() {
  const adminInfo = useSelector((state) => state.login.admin);
  return (
    <LogoBlock>
      {/*<span>{adminInfo.login[0]}</span>*/}
      {/*{adminInfo.login.slice(1)}*/}
    </LogoBlock>
  );
}

export default Logo;
