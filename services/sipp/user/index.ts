import { postLogin, ResponseError } from "@/api";
import { getUserProfile } from "@/api/sipp/user";
import { removeItem } from "@/lib/async-storage";
import { getAuthActions, useAccessToken } from "@/store/sipp";
import { PostLoginPayload } from "@/validation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import Toast from "react-native-toast-message";

export const useAuthLogin = () => {
  return useMutation({
    mutationFn: (payload: PostLoginPayload) => postLogin(payload),
    onError: (error: AxiosError<ResponseError>) => error,
  });
};

export const handleLogoutSession = async () => {
  const { clearAuthSession } = getAuthActions();
  clearAuthSession();
  await removeItem("accesstoken");
  await removeItem("app_name");

  Toast.show({ text1: "Loging Out", text2: "Berhasil Logout" });
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

