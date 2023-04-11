import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
  // process.env.VUE_APP_NODE_ENV == 'development'
  //   ? process.env.VUE_APP_BASE_URL_DEV
  //   : window.location.origin,
  withCredentials: true,
});
