import React from "react";
import { FilterParent } from "./styled";
import BalanceOwedFilter from "./BalanceOwedFilter";
import LastPaymentFilter from "./LastPaymentFilter";
import UnpaidDebtFilter from "./UnpaidDebtFilter";
import AllDelaysFilter from "./AllDelaysFilter";
import { useSelector } from "react-redux";

function Filters() {
  const debtors = useSelector((state) => state.debtors.items);

  return (
    <FilterParent>
      <p>Фильтр ({debtors.length})</p>
      <AllDelaysFilter />
      <BalanceOwedFilter />
      <LastPaymentFilter />
      <UnpaidDebtFilter />
    </FilterParent>
  );
}

export default Filters;
