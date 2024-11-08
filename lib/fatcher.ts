import { API_URL_SIPP, API_URL_SURVEY } from "@/constants";
import { handleLogoutSession } from "@/services/auth.service";
import { getAccessToken } from "@/store/sipp";
import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const apiClientSIPP = axios.create({
  baseURL: API_URL_SIPP,
});

const apiClientSurvey = axios.create({
  baseURL: API_URL_SURVEY,
});

const requestInterceptor = (config: InternalAxiosRequestConfig<any>) => {
  const accessToken = getAccessToken();

  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
};

const responseInterceptorSuccess = (response: AxiosResponse) => {
  console.log(response.config.url, {
    type: "api success",
    data: response.data,
  });
  return response;
};

const responseInterceptorError = (error: AxiosError) => {
  const accessToken = getAccessToken();
  console.error(error.config?.url, error);

  // force logout user if got status 401 Unauthorized
  if (error.response?.status === 401 && accessToken) {
    handleLogoutSession();
  }

  return Promise.reject(error);
};

apiClientSIPP.interceptors.request.use(requestInterceptor);
apiClientSIPP.interceptors.response.use(
  responseInterceptorSuccess,
  responseInterceptorError
);
apiClientSurvey.interceptors.request.use(requestInterceptor);
apiClientSurvey.interceptors.response.use(
  responseInterceptorSuccess,
  responseInterceptorError
);

export { apiClientSIPP, apiClientSurvey };
