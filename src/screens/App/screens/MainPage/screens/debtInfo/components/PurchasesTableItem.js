import React from "react";
import { TableItem } from "./styled";
import dayjs from "dayjs";

function PurchasesTableItem({
  purchase: { completed, date, name, price },
  length,
}) {
  return (
    <TableItem completed={completed}>
      <div>{length}</div>
      <div>{price}</div>
      <div>{dayjs(date).format("D MMMM")}</div>
      <div>{name}</div>
      <div>
        <i className="material-icons">{completed ? "check" : "schedule"}</i>
      </div>
    </TableItem>
  );
}

export default PurchasesTableItem;
