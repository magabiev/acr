import React, { useCallback, useEffect, useRef } from "react";
import {
  DebtClose,
  DebtHeaderItem,
  DebtHeaderParent,
  DebtHeaderContent,
} from "./styled";
import { useHistory, useParams } from "react-router-dom";
import DebtName from "./DebtName";
import DebtContactInfo from "./DebtContactInfo";
import { useSelector } from "react-redux";
import { currentDebtorSelector } from "../../../../../../../redux/ducks/debtors";

function DebtHeader() {
  const header = useRef();
  const headerName = useRef();
  const history = useHistory();
  const opened = useParams().id;

  const currentDebtor = useSelector((state) => {
    const getSelector = currentDebtorSelector();
    return getSelector(state, opened);
  });

  const loading = useSelector((state) => state.debtors.loading);

  const handleClick = () => {
    history.push("");
  };

  const scroll = useCallback(() => {
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
    scroll();
  });

  return (
    <DebtHeaderParent>
      <DebtHeaderContent ref={header}>
        <DebtHeaderItem>
          <div>
            <DebtName fullName={!loading && currentDebtor} />
            <DebtClose onClick={handleClick}>
              <i className="material-icons">clear</i>
            </DebtClose>
          </div>
          <div ref={headerName}>
            <DebtContactInfo contactInfo={!loading && currentDebtor} />
          </div>
        </DebtHeaderItem>
      </DebtHeaderContent>
    </DebtHeaderParent>
  );
}

export default DebtHeader;
