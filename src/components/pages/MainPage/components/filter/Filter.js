import React from "react";
import {
  CheckBox,
  FilterForm,
  FilterItem,
  FilterParent,
  FormHint,
  Radio,
} from "./styled";

function Filter() {
  return (
    <FilterParent>
      <p>Фильтр (20)</p>
      <FilterItem>
        <div>
          <CheckBox checked>
            <i className="material-icons">check</i>
          </CheckBox>
          <p>Показать все просрочки</p>
        </div>
      </FilterItem>
      <FilterItem justify="space-between">
        <p>Остаток платы</p>
        <div>
          <FormHint>От</FormHint>
          <FormHint>До</FormHint>
        </div>
        <div>
          <FilterForm placeholder="100" />
          <FilterForm placeholder="2038" />
        </div>
      </FilterItem>
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
      <FilterItem>
        <div>
          <CheckBox checked>
            <i className="material-icons">check</i>
          </CheckBox>
          <p>Скрыть всех погасивших</p>
        </div>
      </FilterItem>
    </FilterParent>
  );
}

export default Filter;
