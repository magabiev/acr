import React from "react";
import { ButtonHeader, HeaderBlock, HeaderParentBlock } from "./styled";
import Export from "./Export";
import Logout from "./Logout";
import Logo from "./Logo";

function Header() {
  return (
    <HeaderParentBlock>
      <HeaderBlock>
        <Logo />
        <ButtonHeader>Добавить клиента</ButtonHeader>
      </HeaderBlock>
      <HeaderBlock>
        <Export />
        <Logout />
      </HeaderBlock>
    </HeaderParentBlock>
  );
}

export default Header;
