import React from "react";
import { LogoBlock } from "./styled";
import { useSelector } from "react-redux";

/**
 * todo странное поведение ключа admin
 */
function Logo() {
  const adminInfo = useSelector((state) => state.login.admin);
  const token = useSelector((state) => state.login.token);
  return (
    <LogoBlock>
      {console.log("adm", adminInfo)}
      {/*<span>{adminInfo?.login[0]}</span>*/}
      {/*{adminInfo?.login.slice(1)}*/}
    </LogoBlock>
  );
}

export default Logo;
