import { apiClientSIPP } from "@/lib/fatcher";
import { PostLoginPayload } from "@/validation";

export type PostLoginResponseSuccess = {
  data: {
    name: string;
    email: string;
    token: string;
    type: string;
    app_name: "SIPP-Anggaran" | "SIPP-Survey";
  };
};
export const postLogin = async (payload: PostLoginPayload) => {
  const response = await apiClientSIPP<PostLoginResponseSuccess>({
    method: "POST",
    url: "/auth/login",
    data: payload,
  });

  return response.data;
};
