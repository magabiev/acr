import React from "react";
import { PopUpAddForm } from "../../../../../../shared/components/styled";

function PurchaseName({ value, handleChange }) {
  return (
    <PopUpAddForm
      onChange={handleChange}
      value={value}
      width="235"
      placeholder="Название"
    />
  );
}

export default PurchaseName;
