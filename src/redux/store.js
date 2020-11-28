import { createLogger } from "redux-logger";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import debtors from "./ducks/debtors";
import payments from "./ducks/payments";
import purchases from "./ducks/purchases";
import searchDebtors from "./ducks/search";
import paymentMethods from "./ducks/paymentMethods";
import authorization from "./ducks/authorization";
import application from "./ducks/application";
/**
 * Настройка логгера
 */
const logger = createLogger({
  collapsed: true,
  diff: true,
});

const reducers = combineReducers({
  authorization,
  debtors,
  payments,
  purchases,
  searchDebtors,
  paymentMethods,
  application,
});

export const store = createStore(reducers, applyMiddleware(thunk, logger));
