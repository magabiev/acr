import { get } from "../../api/api";
import { createSelector } from "reselect";

/** Types **/
const LOAD_STARTED = "paymentMethods/load/started";
const LOAD_SUCCEED = "paymentMethods/load/succeed";
const CHOICE_PAYMENT_METHOD = "choice/paymentMethod/succeed";

/** State **/
const initialState = {
  items: [],
  loading: false,
  currentPaymentMethodId: "",
};

/** Reducer **/
export default function paymentMethods(state = initialState, action) {
  switch (action.type) {
    case LOAD_STARTED:
      return {
        ...state,
        loading: true,
      };
    case LOAD_SUCCEED:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case CHOICE_PAYMENT_METHOD:
      return {
        ...state,
        currentPaymentMethodId: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}

/** Thunks **/
export function loadPaymentMethods() {
  return (dispatch) => {
    dispatch({ type: LOAD_STARTED });
    get("paymentMethods").then((json) =>
      dispatch({
        type: LOAD_SUCCEED,
        payload: json,
      })
    );
  };
}
export function paymentMethodSelected(methodId) {
  return { type: CHOICE_PAYMENT_METHOD, payload: methodId };
}
/** Selectors **/
export const currentPaymentMethodSelector = createSelector(
  (state) => state.paymentMethods.items,
  (_, methodId) => methodId,
  (state, methodId) => state.find((item) => item.id === methodId)
);
