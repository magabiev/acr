import React, { useState } from "react";
import { Table, TableHeader, TableItem } from "./styled";
import { LinkButton } from "../../../../../components/styled";
import { useSelector } from "react-redux";
// noinspection ES6CheckImport
import { useParams } from "react-router-dom";
import PaymentsTableItem from "./PaymentsTableItem";

function PaymentsTable() {
  const [openTable, setOpenTable] = useState(false);

  const opened = useParams().id;
  const loadingPayments = useSelector((state) => state.payments.loading);
  const purchases = useSelector((state) =>
    state.purchases.items.filter((item) => {
      return opened === item?.clientId.toString();
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

  return (
    <>
      <TableHeader open={openTable}>
        <p onClick={() => setOpenTable(!openTable)}>
          Все платежи ({!loadingPayments && filteredPayments().length})
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
          filteredPayments()
            .reverse()
            .map((item, index) => {
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
