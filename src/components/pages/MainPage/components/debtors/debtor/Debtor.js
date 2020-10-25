import React from "react";
import { DebtorBlock, DebtorInfo, DebtorName, DebtorOpenIcon } from "./styled";
// noinspection ES6CheckImport
import { useHistory, useParams } from "react-router-dom";
import DebtorPaymentInfo from "./debtorPaymentInfo/DebtorPaymentInfo";

function Debtor({ debtor }) {
  const history = useHistory();
  const opened = useParams().id;

  const handleClick = () => {
    if (debtor?.id.toString() !== opened) {
      history.push(debtor?.id.toString());
    }
  };

  return (
    <DebtorBlock onClick={handleClick}>
      <DebtorInfo>
        <DebtorName>
          {debtor?.lastName} {debtor?.firstName} {debtor?.surName}
          <i className="material-icons check">check</i>
        </DebtorName>
        <DebtorPaymentInfo debtorId={debtor?.id} />
      </DebtorInfo>
      <DebtorOpenIcon>
        <i className="material-icons open-arrow">arrow_forward</i>
      </DebtorOpenIcon>
    </DebtorBlock>
  );
}

export default Debtor;
