const debtors_search_started = "debtors/search/started";

const initialState = {
  value: "",
};

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

export function searchRequest(value) {
  return { type: debtors_search_started, payload: value };
}
