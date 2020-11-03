import React from "react";
import { FilterItem, Radio } from "./styled";

function LastPaymentFilter() {
  return (
    <FilterItem>
      <p>Последняя оплата</p>
      <div>
        <Radio checked />
        <p>Все</p>
      </div>
      <div>
        <Radio />
        <p>Неделю назад</p>
      </div>
      <div>
        <Radio />
        <p>Месяц назад</p>
      </div>
    </FilterItem>
  );
}

export default LastPaymentFilter;
