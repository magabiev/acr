import React, { useEffect } from "react";
import Header from "../screens/header";
import Filters from "../screens/filter";
import { ContentSection } from "./styled";
import DebtInfo from "../screens/debtInfo";
// noinspection ES6CheckImport
import { useParams } from "react-router-dom";
import DebtorsList from "../screens/debtors";
import { useDispatch } from "react-redux";
import { loadDebtors } from "../../../../../redux/ducks/debtors";
import { loadPurchases } from "../../../../../redux/ducks/purchases";
import { loadPayments } from "../../../../../redux/ducks/payments";

function MainPage() {
  const opened = useParams().id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadDebtors());
    dispatch(loadPurchases());
    dispatch(loadPayments());
  }, [dispatch]);

  return (
    <>
      <Header />
      <ContentSection>
        <Filters />
        {opened ? <DebtInfo /> : <DebtorsList />}
      </ContentSection>
    </>
  );
}

export default MainPage;
