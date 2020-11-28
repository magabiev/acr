import React from "react";
import { DebtorNameBlock } from "./styled";

function DebtorName({ debtor, isDelayPayment }) {
  return (
    <DebtorNameBlock check={!isDelayPayment}>
      {debtor?.lastName} {debtor?.firstName} {debtor?.surName}
      <i className="material-icons">{isDelayPayment ? "warning" : "check"}</i>
    </DebtorNameBlock>
  );
}

export default DebtorName;
