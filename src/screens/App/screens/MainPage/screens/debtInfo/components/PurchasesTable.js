import React, { useState } from "react";
import { Table, TableHeader, TableItem } from "./styled";
import { LinkButton } from "../../../../../components/styled";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PurchasesTableItem from "./PurchasesTableItem";

function PurchasesTable() {
  const [openTable, setOpenTable] = useState(false);
  const opened = useParams().id;
  const loadingPurchases = useSelector((state) => state.purchases.loading);
  const purchases = useSelector((state) =>
    state.purchases.items.filter((item) => {
      return opened === item.clientId.toString();
    })
  );

  return (
    <>
      <TableHeader open={openTable}>
        <p onClick={() => setOpenTable(!openTable)}>
          Все покупки ({purchases.length})
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
          purchases.map((item) => {
            return <PurchasesTableItem key={item.id} purchase={item} />;
          })}
      </Table>
    </>
  );
}

export default PurchasesTable;
