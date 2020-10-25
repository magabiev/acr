import React from "react";
import { DebtorParent, StickySearch } from "./styled";
import Search from "../search/Search";
import { useSelector } from "react-redux";
import Debtor from "./debtor/Debtor";

function Debtors() {
  const { items, loading } = useSelector((state) => state.debtors);
  return (
    <DebtorParent>
      <StickySearch>
        <Search />
      </StickySearch>
      {!loading &&
        items.map((item) => {
          return <Debtor key={item.id} debtor={item} />;
        })}
    </DebtorParent>
  );
}

export default Debtors;
