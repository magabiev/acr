import React, { useMemo, useState } from "react";
import { Table, TableHeader, TableItem } from "./styled";
import { LinkButton } from "../../../../../../shared/components/styled";
import { useDispatch, useSelector } from "react-redux";
import PurchasesTableItem from "./PurchasesTableItem";
import { purchaseAddToggled } from "../../../../../../../redux/ducks/application";
import { currentPurchasesSelector } from "../../../../../../../redux/ducks/purchases";
import { useParams } from "react-router-dom";

function PurchasesTable() {
  const opened = useParams().id;
  const dispatch = useDispatch();
  const [openTable, setOpenTable] = useState(false);
  const loadingPurchases = useSelector((state) => state.purchases.loading);
  const selectCurrentPurchases = useMemo(currentPurchasesSelector, []);
  const currentPurchases = useSelector((state) =>
    selectCurrentPurchases(state, opened).reverse()
  );
  const toggleOpenTable = () => {
    setOpenTable(!openTable);
  };
  const purchaseAddShow = () => {
    dispatch(purchaseAddToggled());
  };

  return (
    <>
      <TableHeader open={openTable}>
        <p onClick={toggleOpenTable}>
          Все покупки ({currentPurchases.length})
          <i className="material-icons">navigate_next</i>
        </p>
        <LinkButton onClick={purchaseAddShow}>+ добавить покупку</LinkButton>
      </TableHeader>
      <Table open={openTable}>
        <TableItem>
          <div>№</div>
          <div>Цена</div>
          <div>Дата</div>
          <div>Название</div>
          <div>Комментарий</div>
        </TableItem>
        {!loadingPurchases &&
          currentPurchases.map((item, index) => {
            return (
              <PurchasesTableItem
                key={item.id}
                purchase={item}
                length={index + 1}
              />
            );
          })}
      </Table>
    </>
  );
}

export default PurchasesTable;
