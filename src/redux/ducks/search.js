/** Types **/
const DEBTORS_SEARCH = "debtors/search";

/** State **/
const initialState = {
  value: "",
};

/** Reducer **/
export default function searchDebtors(state = initialState, action) {
  switch (action.type) {
    case DEBTORS_SEARCH:
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

/** Actions **/
export function searchRequest(value) {
  return { type: DEBTORS_SEARCH, payload: value };
}
