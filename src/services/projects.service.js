import { callExternalApi } from "./external-api.service";
const crypto = require("crypto-js");

const apiServerUrl = process.env.REACT_APP_API_SERVER_URL;

export const getAllProjects = async (accessToken, user) => {
  const userId = crypto.SHA256(user.sub).toString();

  const config = {
    url: `${apiServerUrl}/Projects?userId=${userId}`,
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const { data, error } = await callExternalApi({ config });

  return {
    data: data || null,
    error,
  };
};
