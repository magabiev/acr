import React from "react";
import { PopUpAddForm } from "../../../../../../shared/components/styled";

function PurchasePrice({ value, handleChange }) {
  return (
    <PopUpAddForm
      onChange={handleChange}
      value={value}
      width="235"
      placeholder="Цена"
      type="number"
    />
  );
}

export default PurchasePrice;
