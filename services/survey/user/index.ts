import { postLoginSurvey, ResponseError } from "@/api";
import { getUserProfile } from "@/api/sipp/user";
import { useAccessToken } from "@/store/sipp";
import { PostLoginPayloadSurvey } from "@/validation/survey";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useAuthLoginSurvey = () => {
  return useMutation({
    mutationFn: (payload: PostLoginPayloadSurvey) => postLoginSurvey(payload),
    onError: (error: AxiosError<ResponseError>) => error,
  });
};

export const useGetProfile = () => {
  const accessToken = useAccessToken();

  return useQuery({
    queryKey: ["useGetProfile", accessToken],
    // TODO replace with actual get Profile API
    queryFn: () => getUserProfile(),
    enabled: !!accessToken,
    refetchOnWindowFocus: true,
  });
};

// export const useUpdatePrfoile = () => {
//   return useMutation({
//     mutationFn: (payload: { data: FormData; slug: string }) =>
//       putEditProfile(payload.data, payload.slug),
//     onError: (error: AxiosError<ResponseError>) => error,
//   });
// };

