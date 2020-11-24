import React, { useEffect, useState } from "react";
import { CheckBox, FilterItem } from "./styled";
import {
  loadDebtors,
  unpaidDebtLoad,
} from "../../../../../../../redux/ducks/debtors";
import { useDispatch, useSelector } from "react-redux";

function UnpaidDebtFilter() {
  const dispatch = useDispatch();
  const [unpaid, setUnpaid] = useState(false);
  const allDelayFilter = useSelector((state) => state.debtors.allDelayFilter);
  const handleUnpaid = () => {
    setUnpaid(!unpaid);
    dispatch(loadDebtors());
  };

  useEffect(() => {
    if (unpaid) {
      dispatch(unpaidDebtLoad());
    }
  }, [dispatch, unpaid]);

  return (
    <FilterItem disable={allDelayFilter}>
      <div>
        <CheckBox checked={unpaid} onClick={handleUnpaid}>
          <i className="material-icons">check</i>
        </CheckBox>
        <p>Скрыть всех погасивших</p>
      </div>
    </FilterItem>
  );
}

export default UnpaidDebtFilter;
