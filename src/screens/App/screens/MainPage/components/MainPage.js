import React, { useEffect } from "react";
import Header from "../screens/header";
import Filters from "../screens/filter";
import { ContentSection } from "./styled";
import DebtInfo from "../screens/debtInfo";
// noinspection ES6CheckImport
import { BrowserRouter, Route } from "react-router-dom";
import DebtorsList from "../screens/debtors";
import ScrollUp from "../screens/scrollUp";
import { useDispatch, useSelector } from "react-redux";
import { loadApplication } from "../../../../../redux/ducks/application";

function MainPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadApplication());
  }, [dispatch]);

  const adminLoading = useSelector((state) => state.authorization.adminLoading);

  if (adminLoading) {
    return null;
  }

  return (
    <BrowserRouter>
      <Header />
      <ContentSection>
        <Filters />
        <Route exact path="/mainPage" component={DebtorsList} />
        <Route path="/mainPage/debtInfo/:id" component={DebtInfo} />
        <ScrollUp />
      </ContentSection>
    </BrowserRouter>
  );
}

export default MainPage;
