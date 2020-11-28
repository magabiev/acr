import React, { useMemo } from "react";
import { DebtorBlock, DebtorInfo, DebtorOpenIcon } from "./styled";
// noinspection ES6CheckImport
import { useHistory, useParams } from "react-router-dom";
import DebtorPaymentInfo from "./DebtorPaymentInfo";
import {
  currentPurchasesSelector,
  currentPurchasesTotalSelector,
} from "../../../../../../../redux/ducks/purchases";
import { useSelector } from "react-redux";
import {
  currentPaymentsFilterByDateSelector,
  currentPaymentsSelector,
  currentPaymentsTotalSelector,
} from "../../../../../../../redux/ducks/payments";
import DebtorName from "./DebtorName";
import dayjs from "dayjs";

function Debtor({ debtor }) {
  const history = useHistory();
  const opened = useParams().id;

  const handleClick = () => {
    if (debtor?.id.toString() !== opened) {
      history.push(`/mainPage/debtInfo/${debtor?.id.toString()}`);
    }
  };
  const selectCurrentPurchases = useMemo(currentPurchasesSelector, []);
  const currentPurchases = useSelector((state) =>
    selectCurrentPurchases(state, debtor.id.toString())
  );
  const selectCurrentPayments = useMemo(currentPaymentsSelector, []);
  const currentPayments = useSelector((state) =>
    selectCurrentPayments(state, currentPurchases)
  );
  const selectCurrentPaymentsTotal = useMemo(currentPaymentsTotalSelector, []);
  const currentPaymentsTotal = useSelector((state) =>
    selectCurrentPaymentsTotal(state, currentPayments)
  );

  const selectCurrentPurchasesTotal = useMemo(
    currentPurchasesTotalSelector,
    []
  );
  const currentPurchasesTotal = useSelector((state) =>
    selectCurrentPurchasesTotal(state, currentPurchases)
  );

  const selectFilterByDate = useMemo(currentPaymentsFilterByDateSelector, []);
  const paymentsFilterByDate = useSelector((state) =>
    selectFilterByDate(state, currentPayments)
  );

  const lastPayment = paymentsFilterByDate[0];
  const nextPayment = dayjs(lastPayment?.date).add(dayjs.duration(30, "d"));
  const isDelayPayment = !dayjs().isSameOrBefore(nextPayment);

  return (
    <DebtorBlock onClick={handleClick}>
      <DebtorInfo>
        <DebtorName debtor={debtor} isDelayPayment={isDelayPayment} />
        <DebtorPaymentInfo
          currentPaymentsTotal={currentPaymentsTotal}
          currentPurchasesTotal={currentPurchasesTotal}
          isDelayPayment={isDelayPayment}
          lastPayment={lastPayment}
          nextPayment={nextPayment}
        />
      </DebtorInfo>
      <DebtorOpenIcon>
        <i className="material-icons open-arrow">arrow_forward</i>
      </DebtorOpenIcon>
    </DebtorBlock>
  );
}

export default Debtor;
