import { get, post } from "../../api/api";
import { createSelector } from "reselect";
import dayjs from "dayjs";

/** Types **/
const PURCHASES_LOAD_STARTED = "purchases/load/started";
const PURCHASES_LOAD_SUCCEED = "purchases/load/succeed";
const PURCHASE_ADD_STARTED = "purchase/add/started";
const PURCHASE_ADD_SUCCEED = "purchase/add/succeed";

/** State **/
const initialState = {
  items: [],
  loading: false,
  adding: false,
};
/** Reducer **/
export default function purchases(state = initialState, action) {
  switch (action.type) {
    case PURCHASES_LOAD_STARTED:
      return {
        ...state,
        loading: true,
      };
    case PURCHASES_LOAD_SUCCEED:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case PURCHASE_ADD_STARTED:
      return {
        ...state,
        adding: true,
      };
    case PURCHASE_ADD_SUCCEED:
      return {
        ...state,
        adding: false,
        items: [...state.items, action.payload],
      };
    default:
      return {
        ...state,
      };
  }
}

/** Actions **/
export function loadPurchases() {
  return (dispatch) => {
    get("purchases").then((json) =>
      dispatch({
        type: PURCHASES_LOAD_SUCCEED,
        payload: json,
      })
    );
  };
}

export function loadCurrentPurchases(clientId) {
  return (dispatch) => {
    dispatch({ type: PURCHASES_LOAD_STARTED });
    get(`purchases/clientId=${clientId}`).then((json) =>
      dispatch({
        type: PURCHASES_LOAD_SUCCEED,
        payload: json,
      })
    );
  };
}
export function addedPurchase(name, clientId, price, date) {
  return (dispatch, getState) => {
    const purchases = getState().purchases.items;
    dispatch({ type: PURCHASE_ADD_STARTED });
    const nextPurchaseId = purchases[purchases.length - 1].id + 1;
    post(`purchases`, {
      id: nextPurchaseId,
      name,
      clientId: Number(clientId),
      price: Number(price),
      date,
      completed: false,
    }).then((json) =>
      dispatch({
        type: PURCHASE_ADD_SUCCEED,
        payload: json,
      })
    );
  };
}
/** Selectors **/

/**
 * Селектор который нужен в одном экземпляре компонента для вывода покупок текущего клиента
 */
export const openedPurchasesSelector = createSelector(
  (state) => state.purchases.items,
  (_, opened) => opened,
  (state, opened) => {
    return state.filter((item) => {
      return opened === item.clientId.toString();
    });
  }
);

/**
 * Селектор который нужен в нескольких экземплярах компонента для вывода покупок текущего клиента
 */
export const currentPurchasesSelector = () =>
  createSelector(
    (state) => state.purchases.items,
    (_, opened) => opened,
    (state, opened) => {
      return state.filter((item) => {
        return opened === item.clientId.toString();
      });
    }
  );

/**
 * Селектор который нужен в одном экземпляре компонента для фильтрации покупок по дате
 */
export const openedPurchaseFilterByDateSelector = createSelector(
  (_, array) => array,
  (array) => {
    console.log("by date");
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
 * Селектор который нужен в нескольких экземплярах компонента для фильтрации покупок по дате
 */
export const currentPurchaseFilterByDateSelector = () =>
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

/**
 * Селектор который нужен в одном экземпляре компонента для суммирования цен
 * всех покупок текущего клиента
 */
export const openedPurchasesTotalSelector = createSelector(
  (_, openedPurchase) => openedPurchase,
  (openedPurchase) =>
    openedPurchase.reduce((total, purchase) => {
      return total + purchase?.price;
    }, 0)
);

/**
 * Селектор который нужен в нескольких экземпляреах компонента для суммирования цен
 * всех покупок текущего клиента
 */
export const currentPurchasesTotalSelector = () =>
  createSelector(
    (_, openedPurchase) => openedPurchase,
    (openedPurchase) =>
      openedPurchase.reduce((total, purchase) => {
        return total + purchase?.price;
      }, 0)
  );
