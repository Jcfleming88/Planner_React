import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { setUserInfo } from "../services/users.service";
import { PageLayout } from "../components/page-layout";

export const HomePage = () => {
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();

  React.useEffect(() => {
    if (isAuthenticated && user) {
      const initializeUserInfo = async () => {
        try {
          const accessToken = await getAccessTokenSilently();
          const { error } = await setUserInfo(accessToken, user);

          if (error) {
            console.error("Error setting user info:", error);
          } else {
            console.log("User info set successfully");
          }
          
        } catch (error) {
          console.error("Error setting user info:", error);
        }
      };
      
      initializeUserInfo();
    }
  }, [isAuthenticated, user, getAccessTokenSilently]);


  return (
    <PageLayout>
      {
        isAuthenticated ? (
          <div className="content-layout">
            <h1 id="page-title" className="content__title">
              Home
            </h1>
            <div className="content__body">
              <p id="page-description">
                <span>
                  Welcome to the Planner App! Use the navigation menu to access different features.
                </span>
              </p>
            </div>
          </div>
        ) : (
          <div className="content-layout">
            <h1 id="page-title" className="content__title">
              Home
            </h1>
            <div className="content__body">
              <p id="page-description">
                <span>
                  Please log in to access your planner features.
                </span>
              </p>
            </div>
          </div>
        )     
      }
    </PageLayout>
  )
};
