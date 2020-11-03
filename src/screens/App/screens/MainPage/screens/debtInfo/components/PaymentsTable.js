import React, { useEffect, useState } from "react";
import { Table, TableHeader, TableItem } from "./styled";
import { LinkButton } from "../../../../../components/styled";
import { useDispatch, useSelector } from "react-redux";
// noinspection ES6CheckImport
import { useParams } from "react-router-dom";
import PaymentsTableItem from "./PaymentsTableItem";
import { loadPaymentMethods } from "../../../../../../../redux/ducks/paymentMethods";

function PaymentsTable() {
  const [openTable, setOpenTable] = useState(false);
  const dispatch = useDispatch();
  const opened = useParams().id;
  const loadingPayments = useSelector((state) => state.payments.loading);
  const payments = useSelector((state) =>
    state.payments.items.filter((item) => {
      return opened === item?.clientId.toString();
    })
  );

  useEffect(() => {
    dispatch(loadPaymentMethods());
  }, [dispatch]);

  return (
    <>
      <TableHeader open={openTable}>
        <p onClick={() => setOpenTable(!openTable)}>
          Все платежи ({!loadingPayments && payments.length})
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
          payments.map((item) => {
            return <PaymentsTableItem key={item.id} payment={item} />;
          })}
      </Table>
    </>
  );
}

export default PaymentsTable;
