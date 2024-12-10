import { axiosClient } from "./axios-client";

export const postInvitation = (
  name: string,
  email: string
): Promise<{ data: string }> => {
  return axiosClient.post("/prod/fake-auth", {
    email,
    name,
  });
};
