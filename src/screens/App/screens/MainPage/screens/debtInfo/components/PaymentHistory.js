import React from "react";
import { PaymentHistoryItem } from "./styled";
import { useParams } from "react-router-dom";
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

function PaymentHistory() {
  const opened = useParams().id;

  const openedPurchases = useSelector((state) => {
    const getSelector = openedPurchasesSelector();
    return getSelector(state, opened);
  });

  const payments = useSelector(paymentsSelector);

  const openedPayments = useSelector((state) => {
    const getSelector = openedPaymentsSelector();
    return getSelector(state, openedPurchases, payments);
  });

  const openedPaymentsTotal = useSelector((state) => {
    const getSelector = openedPaymentsTotalSelector();
    return getSelector(state, openedPayments);
  });

  const openedPurchasesTotal = useSelector((state) => {
    const getSelector = openedPurchasesTotalSelector();
    return getSelector(state, openedPurchases);
  });

  const lastPayment = openedPayments[openedPayments.length - 1];
  const nextPayment = dayjs(lastPayment?.date).add(dayjs.duration(30, "d"));

  return (
    <>
      <PaymentHistoryItem>
        Оплатил за последнюю покупку: {lastPayment?.amount}
      </PaymentHistoryItem>
      <PaymentHistoryItem>
        Осталось к оплате: {openedPurchasesTotal - openedPaymentsTotal}
      </PaymentHistoryItem>
      <PaymentHistoryItem>
        Следующая оплата: {dayjs(nextPayment).fromNow()}
      </PaymentHistoryItem>
      <PaymentHistoryItem>
        Оплатил за все время: {openedPaymentsTotal}
      </PaymentHistoryItem>
    </>
  );
}

export default PaymentHistory;
