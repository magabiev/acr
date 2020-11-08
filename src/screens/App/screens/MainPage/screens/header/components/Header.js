import React from "react";
import {
  ButtonHeader,
  HeaderBlock,
  HeaderParentBlock,
  LogoBlock,
} from "./styled";
import Export from "./Export";
import Logout from "./Logout";

function Header() {
  return (
    <HeaderParentBlock>
      <HeaderBlock>
        <LogoBlock>
          <span>M</span>agabiev
        </LogoBlock>
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
