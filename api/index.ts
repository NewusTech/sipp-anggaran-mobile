export * from "./sipp/auth";
export * from "./survey/auth";

export type ResponseError = {
  message: string;
  status: string;
  data?: {
    type: string;
    message: string;
    field: string;
  }[];
};
