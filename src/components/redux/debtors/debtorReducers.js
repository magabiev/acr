const initialState = {
  items: [],
  loading: false,
};

export default function debtors(state = initialState, action) {
  switch (action.type) {
    case "debtors/load/started":
      return {
        ...state,
        loading: true,
      };
    case "debtors/load/succeed":
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
