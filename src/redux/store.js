import { createLogger } from "redux-logger";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import debtors from "./ducks/debtors";
import payments from "./ducks/payments";
import purchases from "./ducks/purchases";
import searchDebtors from "./ducks/search";
import paymentMethods from "./ducks/paymentMethods";
/**
 * Настройка логгера
 */
const logger = createLogger({
  collapsed: true,
  diff: true,
});

const reducers = combineReducers({
  debtors,
  payments,
  purchases,
  searchDebtors,
  paymentMethods,
});

export const store = createStore(
  reducers,
  applyMiddleware(thunk, process.env.NODE_ENV !== "production" && logger)
);
