import React, { useCallback, useEffect, useRef } from "react";
import { DebtorParent, Debtors, StickySearch } from "./styled";
import Search from "../../search";
import { useSelector } from "react-redux";
import Debtor from "./Debtor";
import { valueSelector } from "../../../../../../../redux/ducks/search";
import { filteredDebtorsSelector } from "../../../../../../../redux/ducks/debtors";

function DebtorsList() {
  const searchBlock = useRef(null);
  const value = useSelector(valueSelector);

  const filterDebtors = useSelector((state) =>
    filteredDebtorsSelector(state, value)
  );

  const loadingDebtors = useSelector((state) => state.debtors.loading);

  const scroll = useCallback(() => {
    window.onscroll = () => {
      if (window.scrollY >= 120) {
        searchBlock.current.style.paddingTop = "20px";
      } else {
        searchBlock.current.style.padding = "0";
      }
    };
  }, []);

  useEffect(() => {
    scroll();
  });

  return (
    <DebtorParent>
      <StickySearch ref={searchBlock}>
        <Search />
      </StickySearch>
      <Debtors>
        {!loadingDebtors &&
          filterDebtors.map((item) => {
            return <Debtor key={item.id} debtor={item} />;
          })}
      </Debtors>
    </DebtorParent>
  );
}

export default DebtorsList;
