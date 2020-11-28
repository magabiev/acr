import React, { useCallback, useEffect, useRef } from "react";
import {
  DebtClose,
  DebtHeaderItem,
  DebtHeaderParent,
  DebtHeaderContent,
} from "./styled";
import { useHistory } from "react-router-dom";
import DebtName from "./DebtName";
import DebtContactInfo from "./DebtContactInfo";
import { useSelector } from "react-redux";
import { currentDebtorSelector } from "../../../../../../../redux/ducks/debtors";
import { useParams } from "react-router-dom";

function DebtHeader({ isDelayPayment }) {
  const opened = useParams().id;
  const header = useRef();
  const headerName = useRef();
  const history = useHistory();

  const currentDebtor = useSelector((state) =>
    currentDebtorSelector(state, opened)
  );

  const handleClick = () => {
    history.push("/mainPage/debtors");
  };

  const addHeaderPadding = useCallback(() => {
    window.onscroll = () => {
      if (window.scrollY >= 120) {
        header.current.style.boxShadow = "0px 2px 8px rgba(0, 0, 0, 0.1)";
        header.current.style.paddingTop = "20px";
        headerName.current.style.marginTop = "10px";
      } else {
        header.current.style.boxShadow = "";
        header.current.style.paddingTop = "";
        headerName.current.style.marginTop = "30px";
      }
    };
  }, []);

  useEffect(() => {
    addHeaderPadding();
  }, [addHeaderPadding]);

  return (
    <DebtHeaderParent>
      <DebtHeaderContent ref={header}>
        <DebtHeaderItem>
          <div>
            <DebtName
              fullName={currentDebtor}
              isDelayPayment={isDelayPayment}
            />
            <DebtClose onClick={handleClick}>
              <i className="material-icons">clear</i>
            </DebtClose>
          </div>
          <div ref={headerName}>
            <DebtContactInfo contactInfo={currentDebtor} />
          </div>
        </DebtHeaderItem>
      </DebtHeaderContent>
    </DebtHeaderParent>
  );
}

export default DebtHeader;
