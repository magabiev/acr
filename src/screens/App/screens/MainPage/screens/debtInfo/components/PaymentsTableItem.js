import React from "react";
import { TableItem } from "./styled";
import { useSelector } from "react-redux";

function PaymentsTableItem({ payment: { amount, date, id, methodId, note } }) {
  const paymentMethods = useSelector((state) =>
    state.paymentMethods.items.find((item) => {
      return item.id === methodId;
    })
  );
  const loadingPaymentMethods = useSelector(
    (state) => state.paymentMethods.loading
  );

  return (
    <TableItem>
      <div>{id}</div>
      <div>{amount}</div>
      <div>{date}</div>
      <div>{!loadingPaymentMethods && paymentMethods?.name}</div>
      <div>{note}</div>
    </TableItem>
  );
}

export default PaymentsTableItem;
