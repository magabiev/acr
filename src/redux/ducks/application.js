/** Types **/
const paymentAdd_toggle = "paymentAdd/toggle";
const purchaseAdd_toggle = "purchaseAdd/toggle";

/** State **/
const initialState = {
  purchaseAddShow: false,
  paymentAddShow: false,
};

/** Reducer **/
export default function application(state = initialState, action) {
  switch (action.type) {
    case paymentAdd_toggle:
      return {
        ...state,
        paymentAddShow: !state.paymentAddShow,
      };
    case purchaseAdd_toggle:
      return {
        ...state,
        purchaseAddShow: !state.purchaseAddShow,
      };
    default:
      return {
        ...state,
      };
  }
}

/** Actions **/

export const paymentAddToggled = () => {
  return { type: paymentAdd_toggle };
};
export const purchaseAddToggled = () => {
  return { type: purchaseAdd_toggle };
};
