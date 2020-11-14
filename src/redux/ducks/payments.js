import { get } from "../../api/api";
import { createSelector } from "reselect";
/** Types **/
const payments_load_started = "payments/load/started";
const payments_load_succeed = "payments/load/succeed";

/** State **/
const initialState = {
  items: [],
  loading: false,
};
/** Reducer **/
export default function payments(state = initialState, action) {
  switch (action.type) {
    case payments_load_started:
      return {
        ...state,
        loading: true,
      };
    case payments_load_succeed:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
}

/** Actions **/
export function loadPayments() {
  return (dispatch) => {
    dispatch({ type: payments_load_started });
    get("payments").then((json) =>
      dispatch({
        type: payments_load_succeed,
        payload: json,
      })
    );
  };
}

/** Selectors **/
export const paymentsSelector = (state) => state.payments.items;

const openedPayments = (state, purchases, payments) => {
  let items = [];
  purchases.forEach((purchase) => {
    const pay = payments.filter(
      (payment) => payment.purchaseId === purchase.id
    );
    items = [...items, ...pay];
  });
  return items;
};

export const openedPaymentsSelector = () =>
  createSelector([openedPayments], (items) => items);

const openedPaymentsTotal = (state, openedPayment) => {
  return openedPayment.reduce((total, payment) => {
    return total + payment?.amount;
  }, 0);
};

export const openedPaymentsTotalSelector = () =>
  createSelector([openedPaymentsTotal], (items) => items);
