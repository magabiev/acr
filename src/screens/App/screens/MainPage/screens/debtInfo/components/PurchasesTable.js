import React, { useState } from "react";
import { Table, TableHeader, TableItem } from "./styled";
import { LinkButton } from "../../../../../components/styled";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PurchasesTableItem from "./PurchasesTableItem";
import { openedPurchasesSelector } from "../../../../../../../redux/ducks/purchases";

function PurchasesTable() {
  const [openTable, setOpenTable] = useState(false);
  const opened = useParams().id;
  const loadingPurchases = useSelector((state) => state.purchases.loading);
  const openedPurchases = useSelector((state) => {
    const getSelector = openedPurchasesSelector();
    return getSelector(state, opened);
  });
  const toggleOpenTable = () => {
    setOpenTable(!openTable);
  };

  return (
    <>
      <TableHeader open={openTable}>
        <p onClick={toggleOpenTable}>
          Все покупки ({openedPurchases.length})
          <i className="material-icons">navigate_next</i>
        </p>
        <LinkButton>+ добавить покупку</LinkButton>
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
          openedPurchases.map((item, index) => {
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
