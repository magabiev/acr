import React from "react";
import { ScrollUpButton } from "./styled";
import { LinkButton } from "../../../../../../shared/components/styled";

function ScrollUp() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ScrollUpButton onClick={handleClick}>
      <LinkButton marginIcon="0 0 0 8px">
        Пролистать наверх
        <i className="material-icons">arrow_upward</i>
      </LinkButton>
    </ScrollUpButton>
  );
}

export default ScrollUp;
