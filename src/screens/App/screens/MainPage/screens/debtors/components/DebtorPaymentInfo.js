import React from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import {
  openedPurchasesSelector,
  openedPurchasesTotalSelector,
} from "../../../../../../../redux/ducks/purchases";
import {
  openedPaymentsSelector,
  openedPaymentsTotalSelector,
  paymentsSelector,
} from "../../../../../../../redux/ducks/payments";

function DebtorPaymentInfo({ debtorId }) {
  const currentPurchases = useSelector((state) => {
    const getSelector = openedPurchasesSelector();
    return getSelector(state, debtorId.toString());
  });

  const payments = useSelector(paymentsSelector);

  const currentPayments = useSelector((state) => {
    const getSelector = openedPaymentsSelector();
    return getSelector(state, currentPurchases, payments);
  });

  const currentPaymentsTotal = useSelector((state) => {
    const getSelector = openedPaymentsTotalSelector();
    return getSelector(state, currentPayments);
  });

  const currentPurchasesTotal = useSelector((state) => {
    const getSelector = openedPurchasesTotalSelector();
    return getSelector(state, currentPurchases);
  });

  const lastPayment = currentPayments[currentPayments.length - 1];
  const nextPayment = dayjs(lastPayment?.date).add(dayjs.duration(30, "d"));
  const isDelayPayment = !dayjs().isSameOrBefore(nextPayment);

  return (
    <>
      <p>
        Последня оплата: {dayjs(lastPayment?.date).fromNow()} на сумму{" "}
        {lastPayment?.amount}
      </p>
      <p>Осталось к оплате: {currentPurchasesTotal - currentPaymentsTotal}</p>
      {isDelayPayment && (
        <p>Просрочка платежа: {dayjs(nextPayment).fromNow(true)} </p>
      )}
    </>
  );
}

export default DebtorPaymentInfo;
