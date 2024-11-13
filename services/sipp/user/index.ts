import { postLogin, ResponseError } from "@/api";
import {
  getUserProfile,
  postUploadFotoProfile,
  putEditProfile,
  putProfilePassword,
} from "@/api/sipp/user";
import { useAccessToken } from "@/store/sipp";
import {
  PostLoginPayload,
  userDataPayload,
  userUpdatePasswordPayload,
} from "@/validation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useAuthLogin = () => {
  return useMutation({
    mutationFn: (payload: PostLoginPayload) => postLogin(payload),
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

export const useUpdatePrfoile = () => {
  return useMutation({
    mutationFn: (payload: userDataPayload) => putEditProfile(payload),
    onError: (error: AxiosError<ResponseError>) => error,
  });
};

export const useUpadatePassword = () => {
  return useMutation({
    mutationFn: (payload: userUpdatePasswordPayload) =>
      putProfilePassword(payload),
    onError: (error: AxiosError<ResponseError>) => error,
  });
};

export const usePostUploadFotoProfile = () => {
  return useMutation({
    mutationFn: (payload: FormData) => postUploadFotoProfile(payload),
    onError: (error: AxiosError<ResponseError>) => error,
  });
};
