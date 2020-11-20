import React, { useEffect } from "react";
import { DebtInfoContent, DebtInfoParent, DebtInfoMain } from "./styled";
import PaymentHistory from "./PaymentHistory";
import DebtHeader from "./DebtHeader";
import PaymentsTable from "./PaymentsTable";
import PurchasesTable from "./PurchasesTable";
import { loadPaymentMethods } from "../../../../../../../redux/ducks/paymentMethods";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PaymentAdd from "../../paymentAdd";
import PurchaseAdd from "../../purchaseAdd";

function DebtInfo() {
  const opened = useParams().id;
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.debtors.loading);

  useEffect(() => {
    dispatch(loadPaymentMethods());
  }, [dispatch, opened]);

  if (!loading) {
    return (
      <>
        <PurchaseAdd />
        <PaymentAdd />
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
      </>
    );
  }
  return null;
}

export default DebtInfo;
