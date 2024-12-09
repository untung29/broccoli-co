import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com",
  timeout: 5000,
  timeoutErrorMessage: "Timeout",
});
