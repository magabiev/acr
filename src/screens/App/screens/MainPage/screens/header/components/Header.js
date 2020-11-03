import React, { useState } from "react";
import {
  ButtonHeader,
  Dropdown,
  DropdownItem,
  HeaderBlock,
  HeaderOtherOption,
  HeaderParentBlock,
  Logo,
} from "./styled";

function Header() {
  const [vis, setVis] = useState(false);
  return (
    <HeaderParentBlock>
      <HeaderBlock>
        <Logo>
          <span>M</span>agabiev
        </Logo>
        <ButtonHeader>Добавить клиента</ButtonHeader>
      </HeaderBlock>
      <HeaderBlock>
        <HeaderOtherOption onClick={() => setVis(!vis)}>
          Экспорт
          <i className="material-icons">keyboard_arrow_down</i>
        </HeaderOtherOption>
        <Dropdown show={vis}>
          <DropdownItem>Экспорт в PDF</DropdownItem>
          <DropdownItem>Экспорт в Excel</DropdownItem>
        </Dropdown>
        <HeaderOtherOption>Выход</HeaderOtherOption>
      </HeaderBlock>
    </HeaderParentBlock>
  );
}

export default Header;
