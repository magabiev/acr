import React from "react";
import { Container, GlobalStyles } from "./styled";
// noinspection ES6CheckImport
import { BrowserRouter, Route, Redirect } from "react-router-dom";
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
   * Настройка плагинов dayjs
   * @type {dayjs.PluginFunc}
   */
  dayjs.extend(relativeTime, locale_ru);
  dayjs.extend(duration);
  dayjs.extend(isSameOrBefore);
  dayjs.locale("ru");

  const token = useSelector((state) => state.authorization.token);
  /**
   * todo авторизация и роутинг
   */
  return (
    <BrowserRouter>
      <Container>
        {token ? (
          <>
            <Route path="/mainPage" component={MainPage} />
            <Redirect to="/mainPage/debtors" />
          </>
        ) : (
          <>
            <Route path="/authPage" component={AuthPage} />
            <Redirect to="/authPage" />
          </>
        )}
        <GlobalStyles />
      </Container>
    </BrowserRouter>
  );
}

export default App;
