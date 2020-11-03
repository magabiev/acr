import React from "react";
import { CheckBox, FilterItem } from "./styled";

function AllDelaysFilter() {
  return (
    <FilterItem>
      <div>
        <CheckBox checked>
          <i className="material-icons">check</i>
        </CheckBox>
        <p>Показать все просрочки</p>
      </div>
    </FilterItem>
  );
}

export default AllDelaysFilter;
