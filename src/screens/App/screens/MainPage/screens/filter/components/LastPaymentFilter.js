import React, { useState } from "react";
import { FilterItem, Radio } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import {
  lastPaymentMonthAgoLoad,
  lastPaymentWeekAgoLoad,
  loadDebtors,
} from "../../../../../../../redux/ducks/debtors";

function LastPaymentFilter() {
  const dispatch = useDispatch();
  const [week, setWeek] = useState(false);
  const [month, setMonth] = useState(false);
  const [all, setAll] = useState(true);
  const allDelayFilter = useSelector((state) => state.debtors.allDelayFilter);
  const handleWeek = () => {
    setWeek(true);
    setMonth(false);
    setAll(false);
    dispatch(lastPaymentWeekAgoLoad());
  };
  const handleMonth = () => {
    setMonth(true);
    setWeek(false);
    setAll(false);
    dispatch(lastPaymentMonthAgoLoad());
  };
  const handleAll = () => {
    setAll(true);
    setMonth(false);
    setWeek(false);
    dispatch(loadDebtors());
  };
  return (
    <FilterItem disable={allDelayFilter}>
      <p>Последняя оплата</p>
      <div>
        <Radio checked={all} onClick={handleAll} />
        <p>Все</p>
      </div>
      <div>
        <Radio checked={week} onClick={handleWeek} />
        <p>Неделю назад</p>
      </div>
      <div>
        <Radio checked={month} onClick={handleMonth} />
        <p>Месяц назад</p>
      </div>
    </FilterItem>
  );
}

export default LastPaymentFilter;
