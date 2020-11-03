import React from "react";
import { DebtorParent, Debtors, StickySearch } from "./styled";
import Search from "../../search";
import { useSelector } from "react-redux";
import Debtor from "./Debtor";

function DebtorsList() {
  const debtors = useSelector((state) => {
    const { value } = state.search;
    return state.debtors.items.filter((item) => {
      return (
        item.firstName.toUpperCase().indexOf(value.toUpperCase()) !== -1 ||
        item.lastName.toUpperCase().indexOf(value.toUpperCase()) !== -1 ||
        item.surName.toUpperCase().indexOf(value.toUpperCase()) !== -1
      );
    });
  });
  const loadingDebtors = useSelector((state) => state.debtors.loading);

  return (
    <DebtorParent>
      <StickySearch>
        <Search />
      </StickySearch>
      <Debtors>
        {!loadingDebtors &&
          debtors.map((item) => {
            return <Debtor key={item.id} debtor={item} />;
          })}
      </Debtors>
    </DebtorParent>
  );
}

export default DebtorsList;
