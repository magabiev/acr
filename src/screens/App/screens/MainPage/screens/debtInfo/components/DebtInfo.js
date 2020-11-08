import React, { useEffect } from "react";
import { DebtInfoContent, DebtInfoParent, DebtInfoMain } from "./styled";
import PaymentHistory from "./PaymentHistory";
import DebtHeader from "./DebtHeader";
import PaymentsTable from "./PaymentsTable";
import PurchasesTable from "./PurchasesTable";
import { loadPaymentMethods } from "../../../../../../../redux/ducks/paymentMethods";
import { useDispatch } from "react-redux";

function DebtInfo() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPaymentMethods());
  }, [dispatch]);

  return (
    <DebtInfoMain>
      <DebtHeader />
      <DebtInfoParent>
        <DebtInfoContent>
          <PaymentHistory />
          <PaymentsTable />
          <PurchasesTable />
        </DebtInfoContent>
      </DebtInfoParent>
    </DebtInfoMain>
  );
}

export default DebtInfo;
