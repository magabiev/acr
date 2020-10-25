import React, { useEffect } from "react";
import Header from "./components/header/Header";
import Filter from "./components/filter/Filter";
import { ContentSection } from "./styled";
import DebtInfo from "./components/debtInfo/DebtInfo";
// noinspection ES6CheckImport
import { useParams } from "react-router-dom";
import Debtors from "./components/debtors/Debtors";
import { loadDebtors } from "../../redux/debtors/debtorActions";
import { useDispatch } from "react-redux";
import {
  loadNextPayments,
  loadPayments,
  loadPurchases,
} from "../../redux/debtInfo/debtInfoActions";

function MainPage() {
  const opened = useParams().id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadDebtors());
    dispatch(loadPurchases());
    dispatch(loadPayments());
    dispatch(loadNextPayments());
  }, [dispatch]);

  return (
    <>
      <Header />
      <ContentSection>
        <Filter />
        {opened ? <DebtInfo /> : <Debtors />}
      </ContentSection>
    </>
  );
}

export default MainPage;
