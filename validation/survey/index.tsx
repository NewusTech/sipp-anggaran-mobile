import { z } from "zod";

export const postLoginPayloadSchemaSurvey = z.object({
  email: z.string({ message: "Harus diisi" }).email("Email tidak valid"),
  password: z.string({ message: "Harus diisi" }),
});
export type PostLoginPayloadSurvey = z.infer<typeof postLoginPayloadSchemaSurvey>;

// add drainase foto
export const drainaseFotoSchema = z.object({
  desa_id: z.string({ message: "Harus diisi" }),
  photo: z.string({ message: "Harus diisi" }),
});
export type drainaseFotoPayload = z.infer<typeof drainaseFotoSchema>;