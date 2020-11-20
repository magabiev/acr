import React from "react";
import { PopUpAddForm } from "./styled";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { currentDebtorSelector } from "../../../redux/ducks/debtors";

function DebtPopUpName() {
  const opened = useParams().id;

  const currentDebtor = useSelector((state) =>
    currentDebtorSelector(state, opened)
  );
  return (
    <PopUpAddForm
      width="535"
      placeholder={`${currentDebtor?.lastName} ${currentDebtor?.firstName} ${currentDebtor?.surName}`}
      disabled
    />
  );
}

export default DebtPopUpName;
