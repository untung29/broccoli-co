import { notifications } from "@mantine/notifications";
import axios from "axios";

export const showErrorNotification = ({ title = "", message = "" }) => {
  return notifications.show({
    title: title,
    message: message,
    position: "bottom-right",
    autoClose: 5000,
    color: "red",
  });
};

export const axiosClient = axios.create({
  baseURL: "https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com",
  timeout: 10000,
  timeoutErrorMessage: "Timeout",
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const errorMessage = error.response?.data?.errorMessage;
    showErrorNotification({ message: errorMessage });
    throw error;
  }
);
