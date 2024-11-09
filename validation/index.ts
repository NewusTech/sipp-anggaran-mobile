import { z } from "zod";

export const postLoginPayloadSchema = z.object({
  email: z.string({ message: "Harus diisi" }).email("Email tidak valid"),
  password: z.string({ message: "Harus diisi" }),
});
export type PostLoginPayload = z.infer<typeof postLoginPayloadSchema>;

export const userDataSchema = z.object({
  name: z.string({ message: "Harus diisi" }),
  email: z.string({ message: "Harus diisi" }).email("Email tidak valid"),
  gender: z.string({ message: "Harus diisi" }),
  birth_place: z.string({ message: "Harus diisi" }),
  birth_date: z.string({ message: "Harus diisi" }),
  address: z.string({ message: "Harus diisi" }),
  phone_number: z.string({ message: "Harus diisi" }),
});
export type userDataPayload = z.infer<typeof userDataSchema>;

export const userUpdatePasswordSchema = z.object({
  old_password: z.string({ message: "Harus diisi" }),
  password: z.string({ message: "Harus diisi" }),
  re_password: z.string({ message: "Harus diisi" }),
});
export type userUpdatePasswordPayload = z.infer<
  typeof userUpdatePasswordSchema
>;

export const kegiatanSchema = z.object({
  program: z.string({ message: "Harus diisi" }),
  bidang_id: z.string({ message: "Harus diisi" }),
  submber_dana: z.string({ message: "Harus diisi" }),
  kegiatan_id: z.string({ message: "Harus diisi" }),
  sub_kegiatan_id: z.string({ message: "Harus diisi" }),
  pagu: z.string({ message: "Harus diisi" }),
  title: z.string({ message: "Harus diisi" }),
  tahun: z.string({ message: "Harus diisi" }),
  jenis_pengadaan: z.string({ message: "Harus diisi" }),
  metode_pemilihan: z.string({ message: "Harus diisi" }),
});
export type kegiatanPayload = z.infer<typeof kegiatanSchema>;

export const kegiatanUpdateSchema = z.object({
  title: z.string({ message: "Harus diisi" }),
  no_detail_kegiatan: z.string({ message: "Harus diisi" }),
  no_kontrak: z.string({ message: "Harus diisi" }),
  no_spmk: z.string({ message: "Harus diisi" }),
  nilai_kontrak: z.string({ message: "Harus diisi" }),
  jenis_pengadaan: z.string({ message: "Harus diisi" }),
  awal_kontrak: z.string({ message: "Harus diisi" }),
  akhir_kontrak: z.string({ message: "Harus diisi" }),
  penyedia_jasa: z.string({ message: "Harus diisi" }),
  target: z.string({ message: "Harus diisi" }),
  alamat: z.string({ message: "Harus diisi" }),
  no_pekerjaan: z.string({ message: "Harus diisi" }),
  program: z.string({ message: "Harus diisi" }).optional(),
});
export type kegiatanUpdatePayload = z.infer<typeof kegiatanUpdateSchema>;
