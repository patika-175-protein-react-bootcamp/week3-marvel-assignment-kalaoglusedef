import axios from "axios";
const qs = require("qs");

const http = axios.create({
  baseURL: "https://gateway.marvel.com:443/v1/public",
  timeout: 3000,
 
  paramsSerializer: function (params) {
    return qs.stringify(params, {
      encode: false,
    });
  },
});

http.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
      return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
