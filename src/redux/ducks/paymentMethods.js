import { get } from "../../api/api";

const paymentMethods_load_started = "paymentMethods/load/started";
const paymentMethods_load_succeed = "paymentMethods/load/succeed";

const initialState = {
  items: [],
  loading: false,
};

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
