import React from "react";

function PopUpHeader({ handleClick, header }) {
  return (
    <>
      <p>Добавить {header}</p>
      <i onClick={handleClick} className="material-icons">
        clear
      </i>
    </>
  );
}

export default PopUpHeader;
