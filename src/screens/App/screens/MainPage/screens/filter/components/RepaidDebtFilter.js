import React from "react";
import { CheckBox, FilterItem } from "./styled";

function RepaidDebtFilter() {
  return (
    <FilterItem>
      <div>
        <CheckBox checked>
          <i className="material-icons">check</i>
        </CheckBox>
        <p>Скрыть всех погасивших</p>
      </div>
    </FilterItem>
  );
}

export default RepaidDebtFilter;
