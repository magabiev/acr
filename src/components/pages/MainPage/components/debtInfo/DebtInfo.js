import React from "react";
import { DebtInfoParent } from "./styled";
import InfoTables from "./infoTables/InfoTables";
import PaymentHistory from "./paymentHistory/PaymentHistory";
import DebtHeader from "./debtHeader/DebtHeader";

function DebtInfo() {
  return (
    <DebtInfoParent>
      <DebtHeader />
      <PaymentHistory />
      <InfoTables />
    </DebtInfoParent>
  );
}

export default DebtInfo;
