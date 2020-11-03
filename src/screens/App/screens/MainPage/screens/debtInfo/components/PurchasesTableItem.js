import React from "react";
import { TableItem } from "./styled";

function PurchasesTableItem({
  purchase: { completed, date, id, name, price },
}) {
  return (
    <TableItem completed={completed}>
      <div>{id}</div>
      <div>{price}</div>
      <div>{date}</div>
      <div>{name}</div>
      <div>
        <i className="material-icons">{completed ? "check" : "schedule"}</i>
      </div>
    </TableItem>
  );
}

export default PurchasesTableItem;
