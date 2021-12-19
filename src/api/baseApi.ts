import axios, { Method, AxiosRequestConfig } from "axios";

const request = ({
  url,
  method,
  data,
  params,
  headers: headersArg,
  responseType,
}: AxiosRequestConfig): Promise<any> => {
  const headers = {
    "Content-Type": "application/json",
    ...headersArg,
  };

  return axios
    .request({
      url,
      method,
      headers,
      data,
      params,
      responseType,
    })
    .then((response) => response.data);
};

const obtainSpecifiedRequest =
  (method: Method) => (config: Omit<AxiosRequestConfig, "method">) =>
    request({ ...config, method });

export const baseApi = {
  get: obtainSpecifiedRequest("GET"),
  post: obtainSpecifiedRequest("POST"),
};
