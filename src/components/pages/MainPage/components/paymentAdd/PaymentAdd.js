import React from "react";
import { BlackBlock, Button, LinkButton, PopUp } from "../../../../App/styled";
import {
  CommentForm,
  DateOfAdd,
  DebtAddForm,
  DebtAddItem,
  PaymentMethod,
  PayMethodList,
  PayMethodParent,
} from "../debtInfo/styled";

function PaymentAdd() {
  return (
    <BlackBlock>
      <PopUp>
        <DebtAddItem>
          <div>
            <p>Добавить платеж</p>
            <i className="material-icons">clear</i>
          </div>
          <div>
            <DebtAddForm
              width="535"
              placeholder="Цугаев Ахмад Якубович"
              disabled
            />
          </div>
          <div>
            <DebtAddForm width="235" placeholder="Сумма" />
            <PayMethodParent>
              <PaymentMethod placeholder="Способ оплаты" />
              <i className="material-icons">keyboard_arrow_down</i>
              <PayMethodList>
                <div>Sberbank</div>
                <div>Alfa Bank</div>
              </PayMethodList>
            </PayMethodParent>
          </div>
          <CommentForm placeholder="Комментарий" />
          <DateOfAdd>
            Дата оплаты: <LinkButton>Сегодня</LinkButton>
          </DateOfAdd>
          <Button margin="auto">Добавить</Button>
        </DebtAddItem>
      </PopUp>
    </BlackBlock>
  );
}

export default PaymentAdd;
