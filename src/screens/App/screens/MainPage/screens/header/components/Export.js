import React, { useState } from "react";
import { Dropdown, DropdownItem, HeaderOtherOption } from "./styled";
import OutsideClickHandler from "react-outside-click-handler/esm/OutsideClickHandler";

function Export() {
  const [isShow, setIsShow] = useState(false);
  return (
    <OutsideClickHandler onOutsideClick={() => setIsShow(false)}>
      <HeaderOtherOption onClick={() => setIsShow(!isShow)}>
        Экспорт
        <i className="material-icons">keyboard_arrow_down</i>
      </HeaderOtherOption>
      <Dropdown show={isShow}>
        <DropdownItem>Экспорт в PDF</DropdownItem>
        <DropdownItem>Экспорт в Excel</DropdownItem>
      </Dropdown>
    </OutsideClickHandler>
  );
}

export default Export;
