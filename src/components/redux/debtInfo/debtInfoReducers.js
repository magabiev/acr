const initialState = {
  payments: [],
  purchases: [],
  paymentMethods: [],
  nextPayments: [],
  loadingPaymentMethods: false,
  loadingPayments: false,
  loadingPurchases: false,
  loadingNextPayments: false,
};

export default function debtInfo(state = initialState, action) {
  switch (action.type) {
    case "payments/load/started":
      return {
        ...state,
        loadingPayments: true,
      };
    case "payments/load/succeed":
      return {
        ...state,
        payments: action.payload,
        loadingPayments: false,
      };
    case "purchases/load/started":
      return {
        ...state,
        loadingPurchases: true,
      };
    case "purchases/load/succeed":
      return {
        ...state,
        purchases: action.payload,
        loadingPurchases: false,
      };
    case "paymentMethods/load/started":
      return {
        ...state,
        loadingPaymentMethods: true,
      };
    case "paymentMethods/load/succeed":
      return {
        ...state,
        paymentMethods: action.payload,
        loadingPaymentMethods: false,
      };
    case "nextPayments/load/started":
      return {
        ...state,
        loadingNextPayments: true,
      };
    case "nextPayments/load/succeed":
      return {
        ...state,
        nextPayments: action.payload,
        loadingNextPayments: false,
      };
    default:
      return {
        ...state,
      };
  }
}
