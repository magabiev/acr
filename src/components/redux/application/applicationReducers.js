const initialState = {
  items: "",
};

export default function application(state = initialState, action) {
  switch (action.type) {
    case "start":
      return {
        ...state,
        items: "Цугаев Ахмад Якубович",
      };
    default:
      return {
        ...state,
      };
  }
}
