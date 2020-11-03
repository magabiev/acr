import React from "react";
import { DebtContactInfoItem } from "./styled";
import { LinkButton } from "../../../../../components/styled";

function DebtContactInfo({ contactInfo }) {
  /**
   * Валидация номера телефона
   * @param phone
   * @returns {*}
   */
  const phoneMask = (phone) => {
    const regex = /(\d?)(\d{3})(\d{3})(\d{2})(\d{2})/g;
    const subst = "($2) $3-$4-$5";
    return phone?.replace(regex, subst);
  };

  return (
    <>
      <DebtContactInfoItem>
        <i className="material-icons">phone</i>
        {contactInfo?.countryCode} {phoneMask(contactInfo?.phone)}
        <LinkButton>Отправить напоминание</LinkButton>
      </DebtContactInfoItem>
      <DebtContactInfoItem>
        <i className="material-icons">location_on</i>
        г. {contactInfo?.city}
      </DebtContactInfoItem>
    </>
  );
}

export default DebtContactInfo;
