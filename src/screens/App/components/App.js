import React from "react";
import { Container, GlobalStyles } from "./styled";
// noinspection ES6CheckImport
import { BrowserRouter, Route } from "react-router-dom";
import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import locale_ru from "dayjs/locale/ru";
import AuthPage from "../screens/AuthPage";
import { useSelector } from "react-redux";
import MainPage from "../screens/MainPage";

function App() {
  /**
   * Организация файлов по методу роутинга
   * Пример: https://dev.to/surajjadhav/how-should-we-structure-our-react-code-1-2-1ecm
   */

  /**
   * Настройка плагинов dayjs
   * @type {dayjs.PluginFunc}
   */
  dayjs.extend(relativeTime, locale_ru);
  dayjs.extend(duration);
  dayjs.extend(isSameOrBefore);
  dayjs.locale("ru");

  const token = useSelector((state) => state.login.token);

  return (
    <BrowserRouter>
      <Route path="/:id?">
        <Container>
          <MainPage />
          {/*{token ? <MainPage /> : <AuthPage />}*/}
          <GlobalStyles />
        </Container>
      </Route>
    </BrowserRouter>
  );
}

export default App;
