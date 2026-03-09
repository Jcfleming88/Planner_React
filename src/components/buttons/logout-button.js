import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const LogoutButton = () => {
  const { user, logout } = useAuth0();

  //#region Handlers
  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };
  //#endregion

  return (
    <button className="button" type='logout' onClick={handleLogout} color='secondary'>
      <div className="button_text">
        Log Out
      </div>
      <div className="id_bubble">
        {
          user && (user.given_name || user.family_name) ? 
            `${user.given_name ? user.given_name[0].toUpperCase() : ""}${user.family_name ? user.family_name[0].toUpperCase() : ""}` :
          "XX"
        }
      </div>
    </button>
  );
};