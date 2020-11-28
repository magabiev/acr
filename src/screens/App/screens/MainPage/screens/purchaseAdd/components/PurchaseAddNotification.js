import React from "react";
import { PaymentAddNotificationBlock } from "../../paymentAdd/components/styled";
import { Alert } from "../../../../../../shared/components/styled";
import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";

function PurchaseAddNotification({ notification, setN }) {
  const adding = useSelector((state) => state.purchases.adding);
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

export default PurchaseAddNotification;
