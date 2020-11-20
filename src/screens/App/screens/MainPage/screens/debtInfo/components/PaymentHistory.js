import React, { useMemo } from "react";
import { PaymentHistoryItem } from "./styled";
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
import { useParams } from "react-router-dom";

function PaymentHistory() {
  const opened = useParams().id;
  const selectCurrentPurchases = useMemo(currentPurchasesSelector, []);
  const currentPurchases = useSelector((state) =>
    selectCurrentPurchases(state, opened)
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

  return (
    <>
      <PaymentHistoryItem>
        Оплатил за последнюю покупку: {lastPayment?.amount}
      </PaymentHistoryItem>
      <PaymentHistoryItem>
        Осталось к оплате: {currentPurchasesTotal - currentPaymentsTotal}
      </PaymentHistoryItem>
      <PaymentHistoryItem>
        Следующая оплата: {dayjs(nextPayment).fromNow()}
      </PaymentHistoryItem>
      <PaymentHistoryItem>
        Оплатил за все время: {currentPaymentsTotal}
      </PaymentHistoryItem>
    </>
  );
}

export default PaymentHistory;
