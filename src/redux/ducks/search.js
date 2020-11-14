import { createSelector } from "reselect";
/** Types **/

const debtors_search_started = "debtors/search/started";

/** State **/
const initialState = {
  value: "",
};

/** Reducer **/
export default function searchDebtors(state = initialState, action) {
  switch (action.type) {
    case debtors_search_started:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
/** Selectors **/
const value = (state) => state.searchDebtors.value;
//todo comment all reselects
export const valueSelector = createSelector([value], (items) => items);

/** Actions **/
export function searchRequest(value) {
  return { type: debtors_search_started, payload: value };
}
