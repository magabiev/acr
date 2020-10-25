import React from "react";
import { DebtClose, DebtHeaderItem } from "./styled";
import { useHistory, useParams } from "react-router-dom";
import DebtName from "./debtName/DebtName";
import DebtContactInfo from "./debtContactInfo/DebtContactInfo";
import { useSelector } from "react-redux";

function DebtHeader() {
  const history = useHistory();
  const opened = useParams().id;
  const debtor = useSelector((state) =>
    state.debtors.items.find((item) => opened === item.id.toString())
  );
  const loading = useSelector((state) => state.debtors.loading);
  const handleClick = () => {
    history.push("");
  };

  return (
    <DebtHeaderItem>
      <div>
        <DebtName fullName={!loading && debtor} />
        <DebtClose onClick={handleClick}>
          <i className="material-icons">clear</i>
        </DebtClose>
      </div>
      <div>
        <DebtContactInfo contactInfo={!loading && debtor} />
      </div>
    </DebtHeaderItem>
  );
}

export default DebtHeader;
