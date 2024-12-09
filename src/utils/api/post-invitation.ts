import { axiosClient } from "./axios-client";

export const postInvitation = (name: string, email: string) => {
  return axiosClient.post("/prod/fake-auth", {
    email,
    name,
  });
};
