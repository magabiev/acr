import React, { useMemo } from "react";
import { FilterParent } from "./styled";
import BalanceOwedFilter from "./BalanceOwedFilter";
import LastPaymentFilter from "./LastPaymentFilter";
import RepaidDebtFilter from "./RepaidDebtFilter";
import AllDelaysFilter from "./AllDelaysFilter";
import { useSelector } from "react-redux";

function Filters() {
  const debtors = useSelector((state) => state.debtors.items);
  const payments = useSelector((state) => state.payments.items);
  const purchases = useSelector((state) => state.purchases.items);

  const filterArrays = (filterArr, clientId) => {
    return filterArr.filter((item) => {
      return item.clientId === clientId;
    });
  };

  // 1 - сумма всех покупок (10000)
  // 2 - сумма всех оплат (4000)

  const customerId = useMemo(() => {
    return [...new Set(purchases.map((item) => item.clientId))];
  }, [purchases]);

  const debtorPaymentsInfo = customerId.map((debtor) => {
    const purchasesTotalAmount = filterArrays(purchases, debtor).reduce(
      (total, purchase) => {
        return total + purchase?.price;
      },
      0
    );
    const paymentsTotalAmount = filterArrays(payments, debtor).reduce(
      (total, payment) => {
        return total + payment?.amount;
      },
      0
    );

    const filteredPayments = filterArrays(payments, debtor.id);

    return {
      clientId: debtor,
      paymentBalances: purchasesTotalAmount - paymentsTotalAmount,
      lastPaymentDate: filteredPayments[filteredPayments.length - 1]?.date,
    };
  });

  return (
    <FilterParent>
      <p>Фильтр ({debtors.length})</p>
      <AllDelaysFilter />
      <BalanceOwedFilter totalBalances={debtorPaymentsInfo} />
      <LastPaymentFilter />
      <RepaidDebtFilter />
    </FilterParent>
  );
}

export default Filters;
