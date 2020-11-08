import { get } from "../../api/api";
import { createSelector } from "reselect";

/** Types **/
const purchases_load_started = "purchases/load/started";
const purchases_load_succeed = "purchases/load/succeed";

/** State **/
const initialState = {
  items: [],
  loading: false,
};

/** Reducer **/
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

/** Selectors **/
const openedPurchases = (state, opened) =>
  state.purchases.items.filter((item) => {
    return opened === item.clientId.toString();
  });

const openedPurchasesTotal = (_, openedPurchase) => {
  return openedPurchase.reduce((total, purchase) => {
    return total + purchase?.price;
  }, 0);
};

export const openedPurchasesTotalSelector = createSelector(
  [openedPurchasesTotal],
  (items) => items
);

export const openedPurchasesSelector = createSelector(
  [openedPurchases],
  (items) => items
);

/** Actions **/
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
