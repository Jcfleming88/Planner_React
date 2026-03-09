import { callExternalApi } from "./external-api.service";
const crypto = require('crypto-js');

const apiServerUrl = process.env.REACT_APP_API_SERVER_URL;

export const getAllTasks = async (accessToken, user) => {
  const userId = crypto.SHA256(user.sub).toString();

  const config = {
    url: `${apiServerUrl}/Taskitems?userId=${userId}`,
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    }
  };

  const { data, error } = await callExternalApi({ config });
  
  return {
    data: data || null,
    error,
  };
};