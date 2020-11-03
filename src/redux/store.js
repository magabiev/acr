import { createLogger } from "redux-logger";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import debtors from "./ducks/debtors";
import payments from "./ducks/payments";
import purchases from "./ducks/purchases";
import search from "./ducks/search";
import paymentMethods from "./ducks/paymentMethods";
/**
 * Настройка логгера
 */
const logger = createLogger({
  collapsed: true,
  diff: true,
});

//todo логгер должен работать только в режиме разработки

const reducers = combineReducers({
  debtors,
  payments,
  purchases,
  search,
  paymentMethods,
});

// if(process.env.NODE_ENV === "development") {
//
// }

export const store = createStore(reducers, applyMiddleware(thunk, logger));
