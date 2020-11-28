import { loadAdmin } from "./authorization";
import { loadDebtors } from "./debtors";
import { loadPurchases } from "./purchases";
import { loadPayments } from "./payments";

/** Types **/
const PAYMENT_ADD_TOGGLE = "paymentAdd/toggle";
const PURCHASE_ADD_TOGGLE = "purchaseAdd/toggle";

/** State **/
const initialState = {
  purchaseAddShow: false,
  paymentAddShow: false,
};

/** Reducer **/
export default function application(state = initialState, action) {
  switch (action.type) {
    case PAYMENT_ADD_TOGGLE:
      return {
        ...state,
        paymentAddShow: !state.paymentAddShow,
      };
    case PURCHASE_ADD_TOGGLE:
      return {
        ...state,
        purchaseAddShow: !state.purchaseAddShow,
      };
    default:
      return {
        ...state,
      };
  }
}

/** Actions **/
export function loadApplication() {
  return (dispatch) => {
    dispatch(loadAdmin());
    dispatch(loadDebtors());
    dispatch(loadPurchases());
    dispatch(loadPayments());
  };
}

export const paymentAddToggled = () => {
  return { type: PAYMENT_ADD_TOGGLE };
};
export const purchaseAddToggled = () => {
  return { type: PURCHASE_ADD_TOGGLE };
};
