import { apiClientSIPP } from "@/lib/fatcher";
import { HttpStatusCode } from "axios";
import { PostResponseSuccess } from ".";
import { userDataPayload, userUpdatePasswordPayload } from "@/validation";

export type userProfileResponseSuccess = {
  status: HttpStatusCode;
  message: "Success Get User Profiles";
  data: {
    id: 6;
    name?: string;
    email: string;
    email_verified_at?: string;
    gender?: string;
    birth_place?: string;
    birth_date?: string;
    address?: string;
    phone_number?: string;
    image: string;
    username: string;
    bidang_id?: string;
    nip?: string;
  };
};

export const getUserProfile = async () => {
  const response = await apiClientSIPP<userProfileResponseSuccess>({
    method: "GET",
    url: "/profile",
  });
  return response.data;
};

export const putEditProfile = async (payload: userDataPayload) => {
  const response = await apiClientSIPP<PostResponseSuccess>({
    method: "PUT",
    url: `/profile`,
    data: payload,
  });
  return response.data;
};

export const putProfilePassword = async (
  payload: userUpdatePasswordPayload
) => {
  const response = await apiClientSIPP<PostResponseSuccess>({
    method: "PUT",
    url: `/profile/password`,
    data: payload,
  });
  return response.data;
};