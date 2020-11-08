import React from "react";
import { TableItem } from "./styled";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

function PaymentsTableItem({
  payment: { amount, date, methodId, note },
  length,
}) {
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
      <div>{length}</div>
      <div>{amount}</div>
      <div>{dayjs(date).format("D MMMM")}</div>
      <div>{!loadingPaymentMethods && paymentMethods?.name}</div>
      <div>{note}</div>
    </TableItem>
  );
}

export default PaymentsTableItem;
