import { get, post } from "../../api/api";
import { createSelector } from "reselect";
import dayjs from "dayjs";
/** Types **/
const PAYMENTS_LOAD_STARTED = "payments/load/started";
const PAYMENTS_LOAD_SUCCEED = "payments/load/succeed";
const PAYMENT_BALANCE_LOAD_STARTED = "paymentsBalance/load/started";
const PAYMENT_BALANCE_LOAD_SUCCEED = "paymentsBalance/load/succeed";
const PAYMENT_ADD_STARTED = "payment/add/started";
const PAYMENT_ADD_SUCCEED = "payment/add/succeed";

/** State **/
const initialState = {
  items: [],
  loading: false,
  balance: [],
  balanceLoading: false,
  adding: false,
};
/** Reducer **/
export default function payments(state = initialState, action) {
  switch (action.type) {
    case PAYMENTS_LOAD_STARTED:
      return {
        ...state,
        loading: true,
      };
    case PAYMENTS_LOAD_SUCCEED:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case PAYMENT_BALANCE_LOAD_STARTED:
      return {
        ...state,
        balanceLoading: true,
      };
    case PAYMENT_BALANCE_LOAD_SUCCEED:
      return {
        ...state,
        balance: action.payload,
        balanceLoading: false,
      };
    case PAYMENT_ADD_STARTED:
      return {
        ...state,
        adding: true,
      };
    case PAYMENT_ADD_SUCCEED:
      return {
        ...state,
        items: [...state.items, action.payload],
        adding: false,
      };
    default:
      return {
        ...state,
      };
  }
}

/** Thunks **/
export function loadPayments() {
  return (dispatch) => {
    dispatch({ type: PAYMENTS_LOAD_STARTED });
    get("payments").then((json) =>
      dispatch({
        type: PAYMENTS_LOAD_SUCCEED,
        payload: json,
      })
    );
  };
}

export function loadPaymentsBalance() {
  return (dispatch) => {
    dispatch({ type: PAYMENT_BALANCE_LOAD_STARTED });
    get("paymentsBalances").then((json) =>
      dispatch({
        type: PAYMENT_BALANCE_LOAD_SUCCEED,
        payload: json,
      })
    );
  };
}
export function addedPayment(date, lastPurchaseId, amount, note, methodId) {
  return (dispatch, getState) => {
    const payments = getState().payments.items;
    const nextPaymentId = payments[payments.length - 1].id + 1;
    dispatch({ type: PAYMENT_ADD_STARTED });
    post(`payments`, {
      id: nextPaymentId,
      date,
      purchaseId: lastPurchaseId,
      amount: Number(amount),
      note,
      methodId,
    }).then((json) =>
      dispatch({
        type: PAYMENT_ADD_SUCCEED,
        payload: json,
      })
    );
  };
}
/** Selectors **/
/**
 * Селектор который нужен в одном экземпляре компонента для вывода остатка платежец текущего клиента
 */
export const paymentBalanceSelector = createSelector(
  (state) => state.payments.balance,
  (items) => items.map((item) => item.paymentBalances)
);

/**
 * Селектор который нужен в одном экземпляре компонента для вывода платежей текущего клиента
 */
export const openedPaymentsSelector = createSelector(
  (state) => state.payments.items,
  (_, purchases) => purchases,
  (state, purchases) => {
    let items = [];
    purchases.forEach((purchase) => {
      const payments = state.filter(
        (payment) => payment.purchaseId === purchase.id
      );
      items = [...items, ...payments];
    });
    return items;
  }
);

/**
 * Селектор который нужен в нескольких экземплярах компонента для вывода платежей текущего клиента
 */
export const currentPaymentsSelector = () =>
  createSelector(
    (state) => state.payments.items,
    (_, purchases) => purchases,
    (state, purchases) => {
      let items = [];
      purchases.forEach((purchase) => {
        const payments = state.filter(
          (payment) => payment.purchaseId === purchase.id
        );
        items = [...items, ...payments];
      });
      return items;
    }
  );

/**
 * Селектор который нужен в одном экземпляре компонента для суммирования цен
 * всех платежей текущего клиента
 */
export const openedPaymentsTotalSelector = createSelector(
  (_, openedPayment) => openedPayment,
  (openedPayment) => {
    return openedPayment.reduce((total, payment) => {
      return total + payment?.amount;
    }, 0);
  }
);

/**
 * Селектор который нужен в нескольких экземплярах компонента для суммирования цен
 * всех платежей текущего клиента
 */
export const currentPaymentsTotalSelector = () =>
  createSelector(
    (_, openedPayment) => openedPayment,
    (openedPayment) =>
      openedPayment.reduce((total, payment) => {
        return total + payment?.amount;
      }, 0)
  );

/**
 * Селектор который нужен в одном экземпляре компонента для фильтрации платежей по дате
 */
export const openedPaymentsFilterByDateSelector = createSelector(
  (_, array) => array,
  (array) => {
    const dateDiffs = array.map((item) => {
      const dateDiff = dayjs().diff(item.date, "day");
      return { id: item.id, dateDiff };
    });
    const sortByDate = [...dateDiffs.sort((a, b) => a.dateDiff - b.dateDiff)];
    return sortByDate.map((payment) => {
      return array.find((item) => item.id === payment.id);
    });
  }
);

/**
 * Селектор который нужен в нескольких экземплярах компонента для фильтрации платежей по дате
 */
export const currentPaymentsFilterByDateSelector = () =>
  createSelector(
    (_, array) => array,
    (array) => {
      const dateDiffs = array.map((item) => {
        const dateDiff = dayjs().diff(item.date, "day");
        return { id: item.id, dateDiff };
      });
      const sortByDate = [...dateDiffs.sort((a, b) => a.dateDiff - b.dateDiff)];
      return sortByDate.map((payment) => {
        return array.find((item) => item.id === payment.id);
      });
    }
  );
