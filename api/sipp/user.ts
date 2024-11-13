import { apiClientSIPP } from "@/lib/fatcher";
import { HttpStatusCode } from "axios";
import { PostResponseSuccess } from ".";
import { userDataPayload, userUpdatePasswordPayload } from "@/validation";
import { API_URL_SIPP } from "@/constants";
import { getAccessToken } from "@/store/sipp";

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

export const postUploadFotoProfile = async (payload: FormData) => {
  const accessToken = getAccessToken();
  try {
    const response = await fetch(`${API_URL_SIPP}/profile/photo`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: payload,
    });

    // Periksa apakah respons sukses (status 2xx)
    if (!response.ok) {
      // Jika tidak sukses, ambil pesan error
      const errorData = await response.json();
      // Buat error baru dengan pesan dari respons
      throw new Error(errorData.message || "Gagal memproses Data.");
    }
    // Respons sukses, kembalikan data JSON
    const result = await response.json();
    return result;
  } catch (error: any) {
    // Tangani error di sini
    console.error(
      `Error saat memproses Data: ${error.message} - ${error.data}`
    );
    // Kamu bisa mengembalikan error atau menampilkannya ke UI
    throw error;
  }
};
