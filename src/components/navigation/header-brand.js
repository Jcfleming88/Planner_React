import React from "react";
import { NavLink } from "react-router-dom";

export const HeaderBrand = () => {
  return (
    <div className="header__brand">
      <NavLink to="/">
        <img
          className="header__logo"
          src="https://cdn.auth0.com/blog/hub/code-samples/hello-world/auth0-logo.svg"
          alt="Auth0 shield logo"
          width="36"
          height="36"
        />
      </NavLink>
    </div>
  );
};
