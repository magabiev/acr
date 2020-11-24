import React, { useEffect } from "react";
import Header from "../screens/header";
import Filters from "../screens/filter";
import { ContentSection } from "./styled";
import DebtInfo from "../screens/debtInfo";
// noinspection ES6CheckImport
import { BrowserRouter, Route } from "react-router-dom";
import DebtorsList from "../screens/debtors";
import ScrollUp from "../screens/scrollUp";
import { loadDebtors } from "../../../../../redux/ducks/debtors";
import { loadPurchases } from "../../../../../redux/ducks/purchases";
import { loadPayments } from "../../../../../redux/ducks/payments";
import { useDispatch, useSelector } from "react-redux";
import { loadAdmin } from "../../../../../redux/ducks/authorization";

function MainPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAdmin());
    dispatch(loadDebtors());
    dispatch(loadPurchases());
    dispatch(loadPayments());
  }, [dispatch]);

  const adminLoading = useSelector((state) => state.login.adminLoading);

  if (adminLoading) {
    return null;
  }

  return (
    <BrowserRouter>
      <Header />
      <ContentSection>
        <Filters />
        <Route path="/mainPage/debtors" component={DebtorsList} />
        <Route path="/mainPage/debtInfo/:id" component={DebtInfo} />
        <ScrollUp />
      </ContentSection>
    </BrowserRouter>
  );
}

export default MainPage;
