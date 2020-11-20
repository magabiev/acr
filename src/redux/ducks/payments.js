import { get, post } from "../../api/api";
import { createSelector } from "reselect";
/** Types **/
const PAYMENTS_LOAD_STARTED = "payments/load/started";
const PAYMENTS_LOAD_SUCCEED = "payments/load/succeed";
const PAYMENT_BALANCE_LOAD_STARTED = "paymentsBalance/load/started";
const PAYMENT_BALANCE_LOAD_SUCCEED = "paymentsBalance/load/succeed";
const PAYMENT_ADD_STARTED = "payment/add/started";
const PAYMENT_ADD_SUCCEED = "payment/add/succeed";

/** State **/
const initialState = {
  items: [],
  loading: false,
  balance: [],
  balanceLoading: false,
  adding: false,
};
/** Reducer **/
export default function payments(state = initialState, action) {
  switch (action.type) {
    case PAYMENTS_LOAD_STARTED:
      return {
        ...state,
        loading: true,
      };
    case PAYMENTS_LOAD_SUCCEED:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case PAYMENT_BALANCE_LOAD_STARTED:
      return {
        ...state,
        balanceLoading: true,
      };
    case PAYMENT_BALANCE_LOAD_SUCCEED:
      return {
        ...state,
        balance: action.payload,
        balanceOwedLoading: false,
      };
    case PAYMENT_ADD_STARTED:
      return {
        ...state,
        adding: true,
      };
    case PAYMENT_ADD_SUCCEED:
      return {
        ...state,
        items: [...state.items, action.payload],
        adding: false,
      };
    default:
      return {
        ...state,
      };
  }
}

/** Thunks **/
export function loadPayments() {
  return (dispatch) => {
    dispatch({ type: PAYMENTS_LOAD_STARTED });
    get("payments").then((json) =>
      dispatch({
        type: PAYMENTS_LOAD_SUCCEED,
        payload: json,
      })
    );
  };
}

export function loadPaymentsBalance() {
  return (dispatch) => {
    dispatch({ type: PAYMENT_BALANCE_LOAD_STARTED });
    get("paymentsBalances").then((json) =>
      dispatch({
        type: PAYMENT_BALANCE_LOAD_SUCCEED,
        payload: json,
      })
    );
  };
}
export function addedPayment(date, lastPurchaseId, amount, note, methodId) {
  return (dispatch, getState) => {
    const payments = getState().payments.items;
    const nextPaymentId = payments[payments.length - 1].id + 1;
    dispatch({ type: PAYMENT_ADD_STARTED });
    post(`payments`, {
      id: nextPaymentId,
      date,
      purchaseId: lastPurchaseId,
      amount: Number(amount),
      note,
      methodId,
    }).then((json) =>
      dispatch({
        type: PAYMENT_ADD_SUCCEED,
        payload: json,
      })
    );
  };
}
/** Selectors **/
export const paymentsBalance = (state) => state.payments.balance;

export const paymentBalanceSelector = createSelector(
  [paymentsBalance],
  (items) => items.map((item) => item.paymentBalances)
);

export const paymentsSelector = (state) => state.payments.items;

export const currentPaymentsSelector = () =>
  createSelector(
    (state) => state.payments.items,
    (_, purchases) => purchases,
    (state, purchases) => {
      let items = [];
      purchases.forEach((purchase) => {
        const pay = state.filter(
          (payment) => payment.purchaseId === purchase.id
        );
        items = [...items, ...pay];
      });
      return items;
    }
  );

export const currentPaymentsTotalSelector = () =>
  createSelector(
    (_, openedPayment) => openedPayment,
    (openedPayment) =>
      openedPayment.reduce((total, payment) => {
        return total + payment?.amount;
      }, 0)
  );
