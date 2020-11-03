import React from "react";
import { DebtInfoParent } from "./styled";
import PaymentHistory from "./PaymentHistory";
import DebtHeader from "./DebtHeader";
import PaymentsTable from "./PaymentsTable";
import PurchasesTable from "./PurchasesTable";

function DebtInfo() {
  return (
    <DebtInfoParent>
      <DebtHeader />
      <PaymentHistory />
      <PaymentsTable />
      <PurchasesTable />
    </DebtInfoParent>
  );
}

export default DebtInfo;
