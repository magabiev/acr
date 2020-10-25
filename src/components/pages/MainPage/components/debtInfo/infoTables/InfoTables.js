import React from "react";
import PaymentsTable from "./payments/PaymentsTable";
import PurchasesTable from "./purchases/PurchasesTable";

function InfoTables() {
  return (
    <>
      <PaymentsTable />
      <PurchasesTable />
    </>
  );
}

export default InfoTables;
