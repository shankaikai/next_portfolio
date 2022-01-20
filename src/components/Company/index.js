import { Icon } from "@iconify/react";
import React from "react";
import { CompanyTitle } from "./CompanyStyles";

export default function Company({ active, icon, company, onClick }) {
  return (
    <CompanyTitle active={active} onClick={onClick}>
      <Icon icon={icon} />
      {company}
    </CompanyTitle>
  );
}
