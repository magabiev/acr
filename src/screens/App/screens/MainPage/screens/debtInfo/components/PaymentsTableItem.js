import React from "react";
import { TableItem } from "./styled";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { currentPaymentMethodSelector } from "../../../../../../../redux/ducks/paymentMethods";

function PaymentsTableItem({
  payment: { amount, date, methodId, note },
  length,
}) {
  const currentPaymentMethod = useSelector((state) =>
    currentPaymentMethodSelector(state, methodId)
  );

  const loadingPaymentMethods = useSelector(
    (state) => state.paymentMethods.loading
  );

  return (
    <TableItem>
      <div>{length}</div>
      <div>{amount}</div>
      <div>{dayjs(date).format("D MMMM")}</div>
      <div>{!loadingPaymentMethods && currentPaymentMethod?.name}</div>
      <div>{note}</div>
    </TableItem>
  );
}

export default PaymentsTableItem;
