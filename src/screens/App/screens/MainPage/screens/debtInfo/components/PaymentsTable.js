import React, { useMemo, useState } from "react";
import { Table, TableHeader, TableItem } from "./styled";
import { LinkButton } from "../../../../../../shared/components/styled";
import { useDispatch, useSelector } from "react-redux";
import PaymentsTableItem from "./PaymentsTableItem";
import { paymentAddToggled } from "../../../../../../../redux/ducks/application";
import { currentPurchasesSelector } from "../../../../../../../redux/ducks/purchases";
import { currentPaymentsSelector } from "../../../../../../../redux/ducks/payments";
import { useParams } from "react-router-dom";

function PaymentsTable() {
  const opened = useParams().id;
  const dispatch = useDispatch();
  const [openTable, setOpenTable] = useState(false);
  const selectCurrentPurchases = useMemo(currentPurchasesSelector, []);
  const currentPurchases = useSelector((state) =>
    selectCurrentPurchases(state, opened)
  );
  const selectCurrentPayments = useMemo(currentPaymentsSelector, []);
  const currentPayments = useSelector((state) =>
    selectCurrentPayments(state, currentPurchases).reverse()
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
          Все платежи ({!loadingPayments && currentPayments.length})
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
          currentPayments.map((item, index) => {
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
