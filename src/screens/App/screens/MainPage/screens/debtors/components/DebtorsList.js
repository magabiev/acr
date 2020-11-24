import React, { useCallback, useEffect, useRef } from "react";
import { DebtorParent, Debtors, StickySearch } from "./styled";
import Search from "../../search";
import { useSelector } from "react-redux";
import Debtor from "./Debtor";
import { filteredDebtorsSelector } from "../../../../../../../redux/ducks/debtors";
import { Dot, DotWrapper } from "../../../../../../shared/components/styled";

function DebtorsList() {
  const searchBlock = useRef(null);
  const value = useSelector((state) => state.searchDebtors.value);

  const filterDebtors = useSelector((state) =>
    filteredDebtorsSelector(state, value)
  );

  const loadingDebtors = useSelector((state) => state.debtors.loading);

  const searchPaddingAdd = useCallback(() => {
    window.onscroll = () => {
      if (window.scrollY >= 120) {
        searchBlock.current.style.paddingTop = "20px";
      } else {
        searchBlock.current.style.padding = "0";
      }
    };
  }, []);

  useEffect(() => {
    searchPaddingAdd();
  }, [searchPaddingAdd]);

  if (!loadingDebtors) {
    return (
      <DebtorParent>
        <StickySearch ref={searchBlock}>
          <Search />
        </StickySearch>
        <Debtors>
          {filterDebtors.map((item) => {
            return <Debtor key={item.id} debtor={item} />;
          })}
        </Debtors>
      </DebtorParent>
    );
  }
  return (
    <DotWrapper>
      <Dot delay="0s" />
      <Dot delay=".1s" />
      <Dot delay=".2s" />
    </DotWrapper>
  );
}

export default DebtorsList;
