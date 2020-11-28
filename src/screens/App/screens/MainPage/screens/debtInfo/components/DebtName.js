import React from "react";
import { DebtNameItem } from "./styled";

function DebtName({ fullName, isDelayPayment }) {
  return (
    <DebtNameItem check={!isDelayPayment}>
      {fullName?.lastName} {fullName?.firstName} {fullName?.surName}
      <i className="material-icons">{isDelayPayment ? "warning" : "check"}</i>
    </DebtNameItem>
  );
}

export default DebtName;
