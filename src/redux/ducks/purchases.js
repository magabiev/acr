import { get } from "../../api/api";

const purchases_load_started = "purchases/load/started";
const purchases_load_succeed = "purchases/load/succeed";

const initialState = {
  items: [],
  loading: false,
};

export default function purchases(state = initialState, action) {
  switch (action.type) {
    case purchases_load_started:
      return {
        ...state,
        loading: true,
      };
    case purchases_load_succeed:
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

export function loadPurchases() {
  return (dispatch) => {
    dispatch({ type: purchases_load_started });
    get("purchases").then((json) =>
      dispatch({
        type: purchases_load_succeed,
        payload: json,
      })
    );
  };
}
