import axios from "axios";

export const apiInstance = axios.create({});

//cors method for frontend to backend

export const apiConnector = (method, url, body, headers, params) => {
  return apiInstance({
    method: `${method}`,
    url: `${url}`,
    data: body ? body : null,
    headers: headers ? headers : null,
    params: params ? params : null,
  });
};
