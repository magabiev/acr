import React, { useCallback, useEffect, useState } from "react";
import { FilterForm, FilterItem, FormHint } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { debtorsPaymentBalanceLoad } from "../../../../../../../redux/ducks/debtors";
import {
  loadPaymentsBalance,
  paymentBalanceSelector,
} from "../../../../../../../redux/ducks/payments";

function BalanceOwedFilter() {
  const dispatch = useDispatch();
  const paymentBalance = useSelector(paymentBalanceSelector);
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const allDelayFilter = useSelector((state) => state.debtors.allDelayFilter);

  const fromHandle = (e) => {
    setFromValue(e.target.value);
  };

  const toHandle = (e) => {
    setToValue(e.target.value);
  };

  const filterBalanceOwed = useCallback(() => {
    if (fromValue.length || toValue.length) {
      dispatch(debtorsPaymentBalanceLoad(Number(fromValue), Number(toValue)));
    }
  }, [dispatch, fromValue, toValue]);

  useEffect(() => {
    filterBalanceOwed();
    dispatch(loadPaymentsBalance());
  }, [dispatch, filterBalanceOwed]);

  return (
    <FilterItem justify="space-between" disable={allDelayFilter}>
      <p>Остаток платы</p>
      <div>
        <FormHint>От</FormHint>
        <FormHint>До</FormHint>
      </div>
      <div>
        <FilterForm
          onChange={fromHandle}
          value={fromValue}
          placeholder={Math.min(...paymentBalance)}
          type="number"
        />
        <FilterForm
          onChange={toHandle}
          value={toValue}
          placeholder={Math.max(...paymentBalance)}
          type="number"
        />
      </div>
    </FilterItem>
  );
}

export default BalanceOwedFilter;
