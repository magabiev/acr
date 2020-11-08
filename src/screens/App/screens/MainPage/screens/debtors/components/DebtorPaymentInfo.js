import React from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

function DebtorPaymentInfo({ debtorId }) {
  const purchases = useSelector((state) =>
    state.purchases.items.filter((item) => {
      return debtorId === item.clientId;
    })
  );

  const payments = useSelector((state) => state.payments.items);

  const filteredPayments = () => {
    let items = [];
    purchases.forEach((purchase) => {
      const pay = payments.filter(
        (payment) => payment.purchaseId === purchase.id
      );
      items = [...items, ...pay];
    });
    return items;
  };

  const paymentTotal = filteredPayments().reduce((total, payment) => {
    return total + payment?.amount;
  }, 0);

  const purchasesTotal = purchases.reduce((total, purchase) => {
    return total + purchase?.price;
  }, 0);

  const lastPayment = filteredPayments()[filteredPayments().length - 1];
  const nextPayment = dayjs(lastPayment?.date).add(dayjs.duration(30, "d"));
  const isDelayPayment = !dayjs().isSameOrBefore(nextPayment);

  return (
    <>
      <p>
        Последня оплата: {dayjs(lastPayment?.date).fromNow()} на сумму{" "}
        {lastPayment?.amount}
      </p>
      <p>Осталось к оплате: {purchasesTotal - paymentTotal}</p>
      {isDelayPayment && (
        <p>Просрочка платежа: {dayjs(nextPayment).fromNow(true)} </p>
      )}
    </>
  );
}

export default DebtorPaymentInfo;
