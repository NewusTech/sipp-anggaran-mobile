import { apiClientSurvey } from "@/lib/fatcher";
import { PostLoginPayloadSurvey } from "@/validation/survey";

export type PostLoginResponseSuccessSurvey = {
  data: {
    name: string;
    email: string;
    token: string;
    type: string;
    app_name: "SIPP-Anggaran" | "SIPP-Survey";
  };
};
export const postLoginSurvey = async (payload: PostLoginPayloadSurvey) => {
  const response = await apiClientSurvey<PostLoginResponseSuccessSurvey>({
    method: "POST",
    url: "/auth/login",
    data: payload,
  });

  return response.data;
};
