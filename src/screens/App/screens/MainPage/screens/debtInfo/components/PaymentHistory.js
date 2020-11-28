import React from "react";
import { PaymentHistoryItem } from "./styled";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import {
  openedPurchaseFilterByDateSelector,
  openedPurchasesTotalSelector,
} from "../../../../../../../redux/ducks/purchases";
import {
  openedPaymentsSelector,
  openedPaymentsTotalSelector,
} from "../../../../../../../redux/ducks/payments";

function PaymentHistory({ openedPayments, nextPayment, openedPurchases }) {
  const openedPaymentsTotal = useSelector((state) =>
    openedPaymentsTotalSelector(state, openedPayments)
  );

  const openedPurchasesTotal = useSelector((state) =>
    openedPurchasesTotalSelector(state, openedPurchases)
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
