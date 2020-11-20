import React from "react";
import { PopUpAddForm } from "../../../../../../shared/components/styled";

function PaymentAmount({ value, handleChange }) {
  return (
    <PopUpAddForm
      onChange={handleChange}
      value={value}
      width="235"
      placeholder="Сумма"
      type="number"
    />
  );
}

export default PaymentAmount;
