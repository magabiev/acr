import React, { useState } from "react";
import { PaymentMethodForm, PayMethodList, PayMethodParent } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { paymentMethodSelected } from "../../../../../../../redux/ducks/paymentMethods";

function PaymentMethod() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const openPayMethodToggle = () => {
    setShow(!show);
  };
  const [value, setValue] = useState("");

  const paymentMethods = useSelector((state) => state.paymentMethods.items);

  const handleChange = (method) => {
    dispatch(paymentMethodSelected(method.id));
    setValue(method.name);
    setShow(false);
  };

  return (
    <PayMethodParent>
      <PaymentMethodForm placeholder="Способ оплаты" disabled value={value} />
      <i onClick={openPayMethodToggle} className="material-icons">
        keyboard_arrow_down
      </i>
      <PayMethodList show={show}>
        {paymentMethods.map((item) => (
          <div key={item.id} onClick={() => handleChange(item)}>
            {item.name}
          </div>
        ))}
      </PayMethodList>
    </PayMethodParent>
  );
}

export default PaymentMethod;
