import { get } from "../../api/api";
import { createSelector } from "reselect";

/** Types **/
const paymentMethods_load_started = "paymentMethods/load/started";
const paymentMethods_load_succeed = "paymentMethods/load/succeed";

/** State **/
const initialState = {
  items: [],
  loading: false,
};

/** Reducer **/
export default function paymentMethods(state = initialState, action) {
  switch (action.type) {
    case paymentMethods_load_started:
      return {
        ...state,
        loading: true,
      };
    case paymentMethods_load_succeed:
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
/** Selectors **/
const currentPaymentMethod = (state, methodId) =>
  state.paymentMethods.items.find((item) => item.id === methodId);

export const currentPaymentMethodSelector = createSelector(
  [currentPaymentMethod],
  (items) => items
);

/** Actions **/
export function loadPaymentMethods() {
  return (dispatch) => {
    dispatch({ type: paymentMethods_load_started });
    get("paymentMethods").then((json) =>
      dispatch({
        type: paymentMethods_load_succeed,
        payload: json,
      })
    );
  };
}
