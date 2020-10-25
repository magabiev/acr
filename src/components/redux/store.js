import { createLogger } from "redux-logger";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import application from "./application/applicationReducers";
import debtors from "./debtors/debtorReducers";
import debtInfo from "./debtInfo/debtInfoReducers";
/**
 * Настройка логгера
 */
const logger = createLogger({
  collapsed: true,
  diff: true,
});

/**
 * Комбинирование редюсеров
 */
const reducers = combineReducers({ application, debtors, debtInfo });

/**
 *  Создание настройка и стора
 */
export const store = createStore(reducers, applyMiddleware(thunk, logger));
