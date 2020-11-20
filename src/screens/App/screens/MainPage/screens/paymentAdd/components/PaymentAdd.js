import React, { useCallback, useMemo, useState } from "react";
import {
  BlackBlock,
  Button,
  PopUp,
  PopUpContent,
  Spinner,
} from "../../../../../../shared/components/styled";
import { useDispatch, useSelector } from "react-redux";
import { paymentAddToggled } from "../../../../../../../redux/ducks/application";
import { DebtPopUpName, PopUpDate } from "../../../../../../shared";
import PaymentMethod from "./PaymentMethod";
import PaymentAmount from "./PaymentAmount";
import PaymentComment from "./PaymentComment";
import { PopUpHeader } from "../../../../../../shared";
import { addedPayment } from "../../../../../../../redux/ducks/payments";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import { currentPurchasesSelector } from "../../../../../../../redux/ducks/purchases";
function PaymentAdd() {
  const opened = useParams().id;
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const [comment, setComment] = useState("");
  const handleComment = (e) => {
    setComment(e.target.value);
  };
  const paymentAddShowToggle = () => {
    dispatch(paymentAddToggled());
  };

  const paymentAddShow = useSelector(
    (state) => state.application.paymentAddShow
  );
  const selectCurrentPurchases = useMemo(currentPurchasesSelector, []);
  const currentPurchases = useSelector((state) =>
    selectCurrentPurchases(state, opened)
  );
  const currentPaymentMethodId = useSelector(
    (state) => state.paymentMethods.currentPaymentMethodId
  );
  const lastPurchaseId = currentPurchases[currentPurchases.length - 1]?.id;
  const adding = useSelector((state) => state.payments.adding);
  const todayDate = dayjs().format("YYYY-MM-DD");
  const addPayment = useCallback(() => {
    if (amount.length && currentPaymentMethodId) {
      dispatch(
        addedPayment(
          todayDate,
          lastPurchaseId,
          amount,
          comment,
          currentPaymentMethodId
        )
      );
    }
  }, [
    amount,
    comment,
    currentPaymentMethodId,
    dispatch,
    lastPurchaseId,
    todayDate,
  ]);

  return (
    <BlackBlock show={paymentAddShow}>
      <PopUp>
        <PopUpContent>
          <div>
            <PopUpHeader handleClick={paymentAddShowToggle} header="платеж" />
          </div>
          <div>
            <DebtPopUpName />
          </div>
          <div>
            <PaymentAmount value={amount} handleChange={handleAmount} />
            <PaymentMethod />
          </div>
          <PaymentComment value={comment} handleChange={handleComment} />
          <PopUpDate />
          <Button margin="auto" onClick={addPayment}>
            {adding && <Spinner />}
            Добавить
          </Button>
        </PopUpContent>
      </PopUp>
    </BlackBlock>
  );
}

export default PaymentAdd;
