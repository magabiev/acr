import { get } from "../../api/api";

export function loadPayments() {
  return (dispatch) => {
    dispatch({ type: "payments/load/started" });
    get("payments").then((json) =>
      dispatch({
        type: "payments/load/succeed",
        payload: json,
      })
    );
  };
}

export function loadPurchases() {
  return (dispatch) => {
    dispatch({ type: "purchases/load/started" });
    get("purchases").then((json) =>
      dispatch({
        type: "purchases/load/succeed",
        payload: json,
      })
    );
  };
}

export function loadPaymentMethods() {
  return (dispatch) => {
    dispatch({ type: "paymentMethods/load/started" });
    get("paymentMethods").then((json) =>
      dispatch({
        type: "paymentMethods/load/succeed",
        payload: json,
      })
    );
  };
}
export function loadNextPayments() {
  return (dispatch) => {
    dispatch({ type: "nextPayments/load/started" });
    get("nextPayments").then((json) =>
      dispatch({
        type: "nextPayments/load/succeed",
        payload: json,
      })
    );
  };
}
