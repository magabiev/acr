import React from "react";
import { Alert } from "../../../../../../shared/components/styled";
import { CSSTransition } from "react-transition-group";
import { PaymentAddNotificationBlock } from "./styled";
import { useSelector } from "react-redux";

function PaymentAddNotification({ notification, setN }) {
  const adding = useSelector((state) => state.payments.adding);
  return (
    <CSSTransition
      in={notification}
      classNames="alert"
      timeout={5000}
      unmountOnExit
      onEntered={() => setN(false)}
    >
      <PaymentAddNotificationBlock>
        <Alert show={notification && adding} success>
          Добавлено{" "}
          <i onClick={() => setN(false)} className="material-icons">
            clear
          </i>
        </Alert>
      </PaymentAddNotificationBlock>
    </CSSTransition>
  );
}

export default PaymentAddNotification;
