import { get } from "../../api/api";

const payments_load_started = "payments/load/started";
const payments_load_succeed = "payments/load/succeed";

const initialState = {
  items: [],
  loading: false,
};

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
