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

/** Selectors **/
const debtorsSelector = (state, openedId) =>
  state.debtors.items.find((item) => {
    return item.id.toString() === openedId;
  });

export const openedDebtor = createSelector(
  [debtorsSelector],
  (debtors) => debtors
);

/** Actions **/
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

export function debtorsFiltered(...id) {
  if (id) {
    return (dispatch) => {
      dispatch({ type: load_started });
      get(`clients?id=${id}`).then((json) =>
        dispatch({
          type: load_succeed,
          payload: json,
        })
      );
    };
  }
}
