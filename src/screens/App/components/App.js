import React from "react";
import { Container, GlobalStyles } from "./styled";
import MainPage from "../screens/MainPage";
// noinspection ES6CheckImport
import { BrowserRouter, Route } from "react-router-dom";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { tutu } from "../../../redux/ducks/debtors";

function App() {
  /**
   * Организация файлов по методу роутинга
   * Пример: https://dev.to/surajjadhav/how-should-we-structure-our-react-code-1-2-1ecm
   */

  /**
   * Настройка плагинов dayjs
   * @type {dayjs.PluginFunc}
   */
  const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
  const duration = require("dayjs/plugin/duration");
  const relativeTime = require("dayjs/plugin/relativeTime");
  const locale_ru = require("dayjs/locale/ru");
  dayjs.extend(relativeTime, locale_ru);
  dayjs.extend(duration);
  dayjs.extend(isSameOrBefore);
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
