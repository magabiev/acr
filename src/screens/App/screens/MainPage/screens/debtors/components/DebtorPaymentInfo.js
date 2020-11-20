import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import {
  currentPurchasesSelector,
  currentPurchasesTotalSelector,
} from "../../../../../../../redux/ducks/purchases";
import {
  currentPaymentsSelector,
  currentPaymentsTotalSelector,
} from "../../../../../../../redux/ducks/payments";

function DebtorPaymentInfo({ debtorId }) {
  const selectCurrentPurchases = useMemo(currentPurchasesSelector, []);
  const currentPurchases = useSelector((state) =>
    selectCurrentPurchases(state, debtorId.toString())
  );
  const selectCurrentPayments = useMemo(currentPaymentsSelector, []);
  const currentPayments = useSelector((state) =>
    selectCurrentPayments(state, currentPurchases)
  );
  const selectCurrentPaymentsTotal = useMemo(currentPaymentsTotalSelector, []);
  const currentPaymentsTotal = useSelector((state) =>
    selectCurrentPaymentsTotal(state, currentPayments)
  );

  const selectCurrentPurchasesTotal = useMemo(
    currentPurchasesTotalSelector,
    []
  );
  const currentPurchasesTotal = useSelector((state) =>
    selectCurrentPurchasesTotal(state, currentPurchases)
  );

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
