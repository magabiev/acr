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
import { Dot, DotWrapper } from "../../../../../../shared/components/styled";
import { openedPurchasesSelector } from "../../../../../../../redux/ducks/purchases";
import {
  openedPaymentsFilterByDateSelector,
  openedPaymentsSelector,
} from "../../../../../../../redux/ducks/payments";
import dayjs from "dayjs";

function DebtInfo() {
  const opened = useParams().id;
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.debtors.loading);

  const openedPurchases = useSelector((state) =>
    openedPurchasesSelector(state, opened)
  );
  const openedPayments = useSelector((state) =>
    openedPaymentsSelector(state, openedPurchases)
  );

  const paymentsDateFilter = useSelector((state) =>
    openedPaymentsFilterByDateSelector(state, openedPayments.reverse())
  );

  const lastPayment = paymentsDateFilter[0];
  const nextPayment = dayjs(lastPayment?.date).add(dayjs.duration(30, "d"));
  const isDelayPayment = !dayjs().isSameOrBefore(nextPayment);

  useEffect(() => {
    dispatch(loadPaymentMethods());
  }, [dispatch, opened]);

  if (!loading) {
    return (
      <>
        <PurchaseAdd />
        <PaymentAdd />
        <DebtInfoMain>
          <DebtHeader isDelayPayment={isDelayPayment} />
          <DebtInfoParent>
            <DebtInfoContent>
              <PaymentHistory
                openedPayments={openedPayments}
                openedPurchases={openedPurchases}
                nextPayment={nextPayment}
              />
              <PaymentsTable />
              <PurchasesTable />
            </DebtInfoContent>
          </DebtInfoParent>
        </DebtInfoMain>
      </>
    );
  }
  return (
    <DotWrapper>
      <Dot delay="0s" />
      <Dot delay=".1s" />
      <Dot delay=".2s" />
    </DotWrapper>
  );
}

export default DebtInfo;
