import React from "react";
import dayjs from "dayjs";

function DebtorPaymentInfo(props) {
  return (
    <>
      <p>
        Последня оплата: {dayjs(props.lastPayment?.date).fromNow()} на сумму{" "}
        {props.lastPayment?.amount}
      </p>
      <p>
        Осталось к оплате:{" "}
        {props.currentPurchasesTotal - props.currentPaymentsTotal}
      </p>
      {props.isDelayPayment && (
        <p>Просрочка платежа: {dayjs(props.nextPayment).fromNow(true)} </p>
      )}
    </>
  );
}

export default DebtorPaymentInfo;
