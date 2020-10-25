import { get } from "../../api/api";

export function loadDebtors() {
  return (dispatch) => {
    dispatch({ type: "debtors/load/started" });
    get("clients").then((json) =>
      dispatch({
        type: "debtors/load/succeed",
        payload: json,
      })
    );
  };
}
