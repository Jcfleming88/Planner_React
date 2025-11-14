import React from "react";
import { HeaderBrand } from "./header-brand";
import { HeaderButtons } from "./header-buttons";

export const Header = () => {
  return (
    <div className="header__container">
      <nav className="header">
        <HeaderBrand />
        <HeaderButtons />
      </nav>
    </div>
  );
};
