import React, { useCallback, useEffect, useState } from "react";
import { FilterForm, FilterItem, FormHint } from "./styled";
import { useDispatch } from "react-redux";
import { debtorsFiltered } from "../../../../../../../redux/ducks/debtors";

function BalanceOwedFilter({ totalBalances }) {
  const dispatch = useDispatch();
  const totalBalancesAmount = totalBalances.map((item) => {
    return item.paymentBalances;
  });
  const maxPaymentBalance = Math.max(...totalBalancesAmount);
  const minPaymentBalance = Math.min(...totalBalancesAmount);
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");

  // /clients
  // /clients/?from=1000&to=2000&hide=1
  // /clients/?

  const filteredBalance = useCallback(() => {
    const balanceList = totalBalances.filter((item) => {
      if (fromValue && toValue) {
        return (
          item.paymentBalances >= fromValue && toValue >= item.paymentBalances
        );
      } else if (fromValue) {
        return item.paymentBalances >= fromValue;
      } else if (toValue) {
        return item.paymentBalances <= toValue;
      }
      return item.paymentBalances;
    });
    return balanceList.map((item) => item.clientId);
  }, [toValue, fromValue, totalBalances]);

  const fromHandle = (e) => {
    setFromValue(e.target.value);
  };

  const toHandle = (e) => {
    setToValue(e.target.value);
  };

  useEffect(() => {
    dispatch(debtorsFiltered(filteredBalance().join("&id=")));
  }, [dispatch, toValue, fromValue]);

  return (
    <FilterItem justify="space-between">
      <p>Остаток платы</p>
      <div>
        <FormHint>От</FormHint>
        <FormHint>До</FormHint>
      </div>
      <div>
        <FilterForm
          onChange={fromHandle}
          value={fromValue}
          placeholder={minPaymentBalance}
          type="number"
        />
        <FilterForm
          onChange={toHandle}
          value={toValue}
          placeholder={maxPaymentBalance}
          type="number"
        />
      </div>
    </FilterItem>
  );
}

export default BalanceOwedFilter;
