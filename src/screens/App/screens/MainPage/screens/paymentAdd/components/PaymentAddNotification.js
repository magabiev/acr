import React, { useEffect, useState } from "react";
import { Alert } from "../../../../../../shared/components/styled";
import { CSSTransition } from "react-transition-group";
import { PaymentAddNotificationBlock } from "./styled";

function PaymentAddNotification({ notification, setN }) {
  /**
   * todo всплывающее уведомление
   */
  return (
    <CSSTransition
      in={notification}
      classNames="alert"
      timeout={5000}
      unmountOnExit
      onEntered={() => setN(false)}
    >
      <PaymentAddNotificationBlock>
        <Alert show={notification} success={notification}>
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
