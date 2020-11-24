import React from "react";
import { PaymentHistoryItem } from "./styled";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import {
  openedPurchasesSelector,
  openedPurchasesTotalSelector,
  openedPurchaseFilterByDateSelector,
} from "../../../../../../../redux/ducks/purchases";
import {
  openedPaymentsFilterByDateSelector,
  openedPaymentsSelector,
  openedPaymentsTotalSelector,
} from "../../../../../../../redux/ducks/payments";
import { useParams } from "react-router-dom";

function PaymentHistory() {
  const opened = useParams().id;
  const openedPurchases = useSelector((state) =>
    openedPurchasesSelector(state, opened)
  );
  const openedPayments = useSelector((state) =>
    openedPaymentsSelector(state, openedPurchases)
  );
  const openedPaymentsTotal = useSelector((state) =>
    openedPaymentsTotalSelector(state, openedPayments)
  );

  const openedPurchasesTotal = useSelector((state) =>
    openedPurchasesTotalSelector(state, openedPurchases)
  );

  const paymentsDateFilter = useSelector((state) =>
    openedPaymentsFilterByDateSelector(state, openedPayments.reverse())
  );

  const purchasesDateFilter = useSelector((state) =>
    openedPurchaseFilterByDateSelector(state, openedPurchases.reverse())
  );
  const lastPurchase = purchasesDateFilter[0];
  const lastPurchasePayments = useSelector((state) =>
    openedPaymentsSelector(state, [lastPurchase])
  );
  const lastPurchasePaymentsTotal = useSelector((state) =>
    openedPaymentsTotalSelector(state, lastPurchasePayments)
  );
  const lastPayment = paymentsDateFilter[0];
  const nextPayment = dayjs(lastPayment?.date).add(dayjs.duration(30, "d"));

  return (
    <>
      <PaymentHistoryItem>
        Оплатил за последнюю покупку: {lastPurchasePaymentsTotal}
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
