import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { PageLayout } from "../components/page-layout";

export const HomePage = () => {
  const { isAuthenticated } = useAuth0();

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
