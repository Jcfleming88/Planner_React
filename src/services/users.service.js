import { callExternalApi } from "./external-api.service";
const crypto = require('crypto-js');

const apiServerUrl = process.env.REACT_APP_API_SERVER_URL;

export const setUserInfo = async (accessToken, user) => {
  const userId = crypto.SHA256(user.sub).toString();

  const config = {
    url: `${apiServerUrl}/Users`,
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    data: JSON.stringify({
      Id: userId,
      Name: user.name,
      Email: user.email})
  };

  const { data, error } = await callExternalApi({ config });
  
  return {
    data: data || null,
    error,
  };
};