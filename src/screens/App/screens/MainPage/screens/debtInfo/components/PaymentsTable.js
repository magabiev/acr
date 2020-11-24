import React, { useState } from "react";
import { Table, TableHeader, TableItem } from "./styled";
import { LinkButton } from "../../../../../../shared/components/styled";
import { useDispatch, useSelector } from "react-redux";
import PaymentsTableItem from "./PaymentsTableItem";
import { paymentAddToggled } from "../../../../../../../redux/ducks/application";
import { openedPurchasesSelector } from "../../../../../../../redux/ducks/purchases";
import {
  openedPaymentsSelector,
  openedPaymentsFilterByDateSelector,
} from "../../../../../../../redux/ducks/payments";
import { useParams } from "react-router-dom";

function PaymentsTable() {
  const opened = useParams().id;
  const dispatch = useDispatch();
  const [openTable, setOpenTable] = useState(false);
  const openedPurchases = useSelector((state) =>
    openedPurchasesSelector(state, opened)
  );

  const openedPayments = useSelector((state) =>
    openedPaymentsSelector(state, openedPurchases)
  );

  const dateFilter = useSelector((state) =>
    openedPaymentsFilterByDateSelector(state, openedPayments.reverse())
  );

  const loadingPayments = useSelector((state) => state.payments.loading);

  const toggleOpenTable = () => {
    setOpenTable(!openTable);
  };
  const paymentAddShow = () => {
    dispatch(paymentAddToggled());
  };

  return (
    <>
      <TableHeader open={openTable}>
        <p onClick={toggleOpenTable}>
          Все платежи ({!loadingPayments && openedPayments.length})
          <i className="material-icons">navigate_next</i>
        </p>
        <LinkButton onClick={paymentAddShow}>+ добавить платеж</LinkButton>
      </TableHeader>
      <Table open={openTable}>
        <TableItem>
          <div>№</div>
          <div>Сумма</div>
          <div>Дата</div>
          <div>Способ</div>
          <div>Комментарий</div>
        </TableItem>
        {!loadingPayments &&
          dateFilter.map((item, index) => {
            return (
              <PaymentsTableItem
                key={item.id}
                payment={item}
                length={index + 1}
              />
            );
          })}
      </Table>
    </>
  );
}

export default PaymentsTable;
