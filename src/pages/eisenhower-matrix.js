import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { PageLayout } from "../components/page-layout";
import { getProtectedResource } from "../services/message.service";

export const EisenhowerMatrixPage = () => {
  const { getAccessTokenSilently } = useAuth0();

  // Example of fetching protected resource
  // useEffect(() => {
  //   let isMounted = true;

  //   const getMessage = async () => {
  //     const accessToken = await getAccessTokenSilently();
  //     const { data, error } = await getProtectedResource(accessToken);

  //     if (!isMounted) {
  //       return;
  //     }

  //     if (data) {
  //       setMessage(JSON.stringify(data, null, 2));
  //     }

  //     if (error) {
  //       setMessage(JSON.stringify(error, null, 2));
  //     }
  //   };

  //   getMessage();

  //   return () => {
  //     isMounted = false;
  //   };
  // }, [getAccessTokenSilently]);

  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Eisenhower Matrix
        </h1>
        <div className="content__body">
          <p id="page-description">
            <span>
              This page gives all tasks in an Eisenhower Matrix format.
            </span>
            <span>
              <strong>Only authenticated users should access this page.</strong>
            </span>
          </p>
        </div>
      </div>
    </PageLayout>
  );
};
