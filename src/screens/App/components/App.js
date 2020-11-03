import React from "react";
import { Container, GlobalStyles } from "./styled";
import MainPage from "../screens/MainPage";
// noinspection ES6CheckImport
import { BrowserRouter, Route } from "react-router-dom";
import dayjs from "dayjs";

function App() {
  const relativeTime = require("dayjs/plugin/relativeTime");
  const locale_ru = require("dayjs/locale/ru");
  dayjs.extend(relativeTime, locale_ru);
  dayjs.locale("ru");

  return (
    <BrowserRouter>
      <Route path="/:id?">
        <Container>
          <MainPage />
          <GlobalStyles />
        </Container>
      </Route>
    </BrowserRouter>
  );
}

export default App;
