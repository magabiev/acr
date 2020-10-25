import React from "react";
import { DebtNameItem } from "./styled";

function DebtName({ fullName }) {
  return (
    <DebtNameItem>
      {fullName?.lastName} {fullName?.firstName} {fullName?.surName}
      <i className="material-icons">check</i>
    </DebtNameItem>
  );
}

export default DebtName;
