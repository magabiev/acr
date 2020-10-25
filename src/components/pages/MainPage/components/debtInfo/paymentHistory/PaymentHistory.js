import React from "react";
import { PaymentHistoryItem } from "./styled";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

function PaymentHistory() {
  const opened = useParams().id;

  const purchases = useSelector((state) =>
    state.debtInfo.purchases.filter((item) => {
      return opened === item.clientId.toString();
    })
  );

  const payments = useSelector((state) =>
    state.debtInfo.payments.filter((item) => {
      return opened === item.clientId.toString();
    })
  );

  const nextPayment = useSelector((state) =>
    state.debtInfo.nextPayments.find((item) => {
      return opened === item.clientId.toString();
    })
  );

  const paymentTotal = payments.reduce((total, payment) => {
    return total + payment?.amount;
  }, 0);

  const purchasesTotal = purchases.reduce((total, purchase) => {
    return total + purchase?.price;
  }, 0);

  const lastPayment = payments[payments.length - 1];

  return (
    <>
      <PaymentHistoryItem>
        Оплатил за последнюю покупку: {lastPayment?.amount}
      </PaymentHistoryItem>
      <PaymentHistoryItem>
        Осталось к оплате: {purchasesTotal - paymentTotal}
      </PaymentHistoryItem>
      <PaymentHistoryItem>
        Следующая оплата: {dayjs(nextPayment?.date).fromNow()}
      </PaymentHistoryItem>
      <PaymentHistoryItem>
        Оплатил за все время: {paymentTotal}
      </PaymentHistoryItem>
    </>
  );
}

export default PaymentHistory;
