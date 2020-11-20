import { get } from "../../api/api";
import { createSelector } from "reselect";

/** Types **/
const LOAD_STARTED = "debtors/load/started";
const LOAD_SUCCEED = "debtors/load/succeed";

/** State **/
const initialState = {
  items: [],
  loading: false,
};

/** Reducer **/
export default function debtors(state = initialState, action) {
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
    default:
      return {
        ...state,
      };
  }
}

/** Thunks **/
export function loadDebtors() {
  return (dispatch) => {
    dispatch({ type: LOAD_STARTED });
    get("clients").then((json) =>
      dispatch({
        type: LOAD_SUCCEED,
        payload: json,
      })
    );
  };
}

export function debtorsPaymentBalanceLoad(from = 0, to = 0) {
  return (dispatch) => {
    dispatch({ type: LOAD_STARTED });
    get(`paymentsBalances/from=${from}/to=${to}`).then((json) =>
      dispatch({
        type: LOAD_SUCCEED,
        payload: json,
      })
    );
  };
}
export function lastPaymentWeekAgoLoad() {
  return (dispatch) => {
    dispatch({ type: LOAD_STARTED });
    get("lastPayment/weekAgo").then((json) =>
      dispatch({
        type: LOAD_SUCCEED,
        payload: json,
      })
    );
  };
}
export function lastPaymentMonthAgoLoad() {
  return (dispatch) => {
    dispatch({ type: LOAD_STARTED });
    get("lastPayment/monthAgo").then((json) =>
      dispatch({
        type: LOAD_SUCCEED,
        payload: json,
      })
    );
  };
}
export function unpaidDebtLoad() {
  return (dispatch) => {
    dispatch({ type: LOAD_STARTED });
    get("unpaidDebt").then((json) =>
      dispatch({
        type: LOAD_SUCCEED,
        payload: json,
      })
    );
  };
}
/** Selectors **/
export const filteredDebtorsSelector = createSelector(
  (state) => state.debtors.items,
  (_, searchValue) => searchValue,
  (state, searchValue) =>
    state.filter((item) => {
      return (
        item.firstName.toUpperCase().indexOf(searchValue.toUpperCase()) !==
          -1 ||
        item.lastName.toUpperCase().indexOf(searchValue.toUpperCase()) !== -1 ||
        item.surName.toUpperCase().indexOf(searchValue.toUpperCase()) !== -1
      );
    })
);

export const currentDebtorSelector = createSelector(
  (state) => state.debtors.items,
  (_, debtorId) => debtorId,
  (state, debtorId) => state.find((item) => item.id.toString() === debtorId)
);
