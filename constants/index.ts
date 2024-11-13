export * from "@/constants/Colors";
export * from "./formatDate";

export const API_URL_SIPP = process.env.EXPO_PUBLIC_API_URL_SIPP;
export const BASE_URL_SIPP =
  process.env.EXPO_PUBLIC_API_URL_SIPP?.split("api")[0];
export const API_URL_SURVEY = process.env.EXPO_PUBLIC_API_URL_SURVEY;
export const MAPBOX_ACCESS_TOKEN = process.env.EXPO_PUBLIC_MAPBOX_ACCESS_TOKEN;
