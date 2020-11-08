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

  const debtorsId = useMemo(() => {
    return [...new Set(purchases.map((item) => item.clientId))];
  }, [purchases]);

  const debtorPaymentsInfo = debtorsId.map((debtor) => {
    const purchasesTotalAmount = filterArrays(purchases, debtor).reduce(
      (total, purchase) => {
        return total + purchase?.price;
      },
      0
    );

    const paymentsFiltered = () => {
      let items = [];
      filterArrays(purchases, debtor).forEach((purchase) => {
        const pay = payments.filter(
          (payment) => payment.purchaseId === purchase.id
        );
        items = [...items, ...pay];
      });
      return items;
    };

    const paymentsTotalAmount = paymentsFiltered().reduce((total, payment) => {
      return total + payment?.amount;
    }, 0);

    return {
      clientId: debtor,
      paymentBalances: purchasesTotalAmount - paymentsTotalAmount,
      lastPaymentDate: paymentsFiltered()[paymentsFiltered().length - 1]?.date,
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
