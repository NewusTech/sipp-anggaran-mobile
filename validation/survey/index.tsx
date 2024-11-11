import { z } from "zod";

export const postLoginPayloadSchemaSurvey = z.object({
  email: z.string({ message: "Harus diisi" }).email("Email tidak valid"),
  password: z.string({ message: "Harus diisi" }),
});
export type PostLoginPayloadSurvey = z.infer<typeof postLoginPayloadSchemaSurvey>;
