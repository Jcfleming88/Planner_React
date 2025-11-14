import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/icons/neonwolf_mono.png";

export const HeaderBrand = () => {
  return (
    <div className="header__brand">
      <NavLink to="/">
        <img
          className="header__logo"
          src={logo}
          alt="Auth0 shield logo"
        />
      </NavLink>
    </div>
  );
};
