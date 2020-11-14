import React, { useState } from "react";
import { Table, TableHeader, TableItem } from "./styled";
import { LinkButton } from "../../../../../components/styled";
import { useSelector } from "react-redux";
// noinspection ES6CheckImport
import { useParams } from "react-router-dom";
import PaymentsTableItem from "./PaymentsTableItem";
import { openedPurchasesSelector } from "../../../../../../../redux/ducks/purchases";
import {
  openedPaymentsSelector,
  paymentsSelector,
} from "../../../../../../../redux/ducks/payments";

function PaymentsTable() {
  const [openTable, setOpenTable] = useState(false);
  const opened = useParams().id;
  const loadingPayments = useSelector((state) => state.payments.loading);
  const openedPurchases = useSelector((state) => {
    const getSelector = openedPurchasesSelector();
    return getSelector(state, opened);
  });
  const payments = useSelector(paymentsSelector);
  const openedPayments = useSelector((state) => {
    const getSelector = openedPaymentsSelector();
    return getSelector(state, openedPurchases, payments);
  });

  const toggleOpenTable = () => {
    setOpenTable(!openTable);
  };

  return (
    <>
      <TableHeader open={openTable}>
        <p onClick={toggleOpenTable}>
          Все платежи ({!loadingPayments && openedPayments.length})
          <i className="material-icons">navigate_next</i>
        </p>
        <LinkButton>+ добавить платеж</LinkButton>
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
          openedPayments.reverse().map((item, index) => {
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
