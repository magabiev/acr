import React, { useEffect } from "react";
import { CheckBox, FilterItem } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import {
  allDelaysFilterToggled,
  lastPaymentMonthAgoLoad,
  loadDebtors,
} from "../../../../../../../redux/ducks/debtors";

function AllDelaysFilter() {
  const dispatch = useDispatch();
  const allDelayFilter = useSelector((state) => state.debtors.allDelayFilter);
  const handleAllDelay = () => {
    dispatch(allDelaysFilterToggled());
    dispatch(loadDebtors());
  };

  useEffect(() => {
    if (allDelayFilter) {
      dispatch(lastPaymentMonthAgoLoad());
    }
  }, [allDelayFilter, dispatch]);

  return (
    <FilterItem>
      <div>
        <CheckBox checked={allDelayFilter} onClick={handleAllDelay}>
          <i className="material-icons">check</i>
        </CheckBox>
        <p>Показать все просрочки</p>
      </div>
    </FilterItem>
  );
}

export default AllDelaysFilter;
