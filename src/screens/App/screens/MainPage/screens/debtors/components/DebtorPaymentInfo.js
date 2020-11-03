import React from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

function DebtorPaymentInfo({ debtorId }) {
  const purchases = useSelector((state) =>
    state.purchases.items.filter((item) => {
      return debtorId === item.clientId;
    })
  );

  const payments = useSelector((state) =>
    state.payments.items.filter((item) => {
      return debtorId === item.clientId;
    })
  );

  const paymentTotal = payments.reduce((total, payment) => {
    return total + payment?.amount;
  }, 0);

  const purchasesTotal = purchases.reduce((total, purchase) => {
    return total + purchase?.price;
  }, 0);

  const lastPayment = payments[payments.length - 1];

  const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
  dayjs.extend(isSameOrBefore);
  // const isDelayPayment = !dayjs().isSameOrBefore(nextPayment?.date);

  return (
    <>
      <p>
        Последня оплата: {dayjs(lastPayment?.date).fromNow()} на сумму
        {lastPayment?.amount}
      </p>
      <p>Осталось к оплате: {purchasesTotal - paymentTotal}</p>
      {/*<p>Просрочка платежа: {dayjs(nextPayment?.date).fromNow(true)} </p>*/}
    </>
  );
}

export default DebtorPaymentInfo;
