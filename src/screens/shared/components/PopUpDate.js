import React from "react";
import { LinkButton } from "./styled";
import { DateOfAdd } from "./styled";

function PopUpDate() {
  return (
    <DateOfAdd>
      Дата оплаты: <LinkButton>Сегодня</LinkButton>
    </DateOfAdd>
  );
}

export default PopUpDate;
