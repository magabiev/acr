import { get } from "../../api/api";
import { createSelector } from "reselect";

/** Types **/
const load_started = "debtors/load/started";
const load_succeed = "debtors/load/succeed";

/** State **/
const initialState = {
  items: [],
  loading: false,
};

/** Reducer **/
export default function debtors(state = initialState, action) {
  switch (action.type) {
    case load_started:
      return {
        ...state,
        loading: true,
      };
    case load_succeed:
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

/** Thunks **/
export function loadDebtors() {
  return (dispatch) => {
    dispatch({ type: load_started });
    get("clients").then((json) =>
      dispatch({
        type: load_succeed,
        payload: json,
      })
    );
  };
}

export function debtorsPaymentBalance(from = 0, to = 0) {
  return (dispatch) => {
    dispatch({ type: load_started });
    get(`/paymentsBalances/from=:${from}/to=:${to}`).then((json) =>
      dispatch({
        type: load_succeed,
        payload: json,
      })
    );
  };
}

/** Selectors **/
const allDebtors = (state) => state.debtors.items;

export const filterDebtors = (state, searchValue) => {
  return state.debtors.items.filter((item) => {
    return (
      item.firstName.toUpperCase().indexOf(searchValue.toUpperCase()) !== -1 ||
      item.lastName.toUpperCase().indexOf(searchValue.toUpperCase()) !== -1 ||
      item.surName.toUpperCase().indexOf(searchValue.toUpperCase()) !== -1
    );
  });
};

export const filteredDebtorsSelector = createSelector(
  [filterDebtors],
  (items) => items
);

export const allDebtorsSelector = createSelector(
  [allDebtors],
  (items) => items
);

const currentDebtor = (state, openedId) =>
  state.debtors.items.find((item) => {
    return item.id.toString() === openedId;
  });

export const currentDebtorSelector = () =>
  createSelector([currentDebtor], (debtors) => debtors);
