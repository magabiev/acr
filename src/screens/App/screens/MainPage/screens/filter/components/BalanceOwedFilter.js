import React, { useState } from "react";
import { FilterForm, FilterItem, FormHint } from "./styled";
import { useDispatch } from "react-redux";

function BalanceOwedFilter({ totalBalances }) {
  const dispatch = useDispatch();

  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");

  const fromHandle = (e) => {
    setFromValue(e.target.value);
  };

  const toHandle = (e) => {
    setToValue(e.target.value);
  };

  return (
    <FilterItem justify="space-between">
      <p>Остаток платы</p>
      <div>
        <FormHint>От</FormHint>
        <FormHint>До</FormHint>
      </div>
      <div>
        <FilterForm
          onChange={fromHandle}
          value={fromValue}
          placeholder={"minPaymentBalance"}
          type="number"
        />
        <FilterForm
          onChange={toHandle}
          value={toValue}
          placeholder={"maxPaymentBalance"}
          type="number"
        />
      </div>
    </FilterItem>
  );
}

export default BalanceOwedFilter;
