import React from "react";
import { CommentForm } from "../../../../../../shared/components/styled";

function PaymentComment({ value, handleChange }) {
  return (
    <CommentForm
      onChange={handleChange}
      value={value}
      placeholder="Комментарий"
    />
  );
}

export default PaymentComment;
