import { ResponseError } from "@/api";
import {
  getBidang,
  getDashboardchart,
  getDashboardKegiatan,
  getDashboardRealisasi,
  getDashboardTableData,
  getDataPenanggungJawab,
  getDetailAnggaran,
  getDetailAnggaranDokumentasi,
  getDetailAnggaranKurvaFisik,
  getDetailAnggaranKurvaKeuangan,
  getDetailAnggaranPenanggungJawab,
  getDetailAnggaranTitikLokasi,
  getKegiatan,
  getLaporan,
  getRealisasiFisik,
  getRealisasiKeuangan,
  postDetailAnggaranDokumentasi,
  postKegiatan,
  putDetailAnggaranDokumentasi,
  putDetailAnggaranKurvaFisikProgress,
  putDetailAnggaranKurvaFisikRencana,
  putDetailAnggaranKurvaKeuanganRealisasi,
  putDetailAnggaranPenanggungJawab,
  putKegiatan,
  getDetailKegiatan,
  deleteKegiatan,
  getKegiatanDanSubKegiatan,
  getBidangDanSumberDana,
  getSubKegiatan,
  getProgram,
  postDetailAnggaranTitikLokasi,
  putKegiatanVerifikasiPengawas,
  putKegiatanVerifikasiAdmin,
} from "@/api/sipp";
import { useAccessToken } from "@/store/sipp";
import { kegiatanPayload, kegiatanUpdatePayload } from "@/validation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export * from "./user";

export const useGetDashoardKegiatan = (query?: string) => {
  const accessToken = useAccessToken();

  return useQuery({
    queryKey: ["useGetDashoardKegiatan", query, accessToken],
    // TODO replace with actual get Profile API
    queryFn: () => getDashboardKegiatan(query),
    enabled: !!accessToken,
    refetchOnWindowFocus: true,
  });
};

export const useGetDashoardCart = (query?: string) => {
  const accessToken = useAccessToken();

  return useQuery({
    queryKey: ["useGetDashoardCart", query, accessToken],
    // TODO replace with actual get Profile API
    queryFn: () => getDashboardchart(query),
    enabled: !!accessToken,
    refetchOnWindowFocus: true,
  });
};

export const useGetDashoardRealisasi = (query?: string) => {
  const accessToken = useAccessToken();

  return useQuery({
    queryKey: ["useGetDashoardRealisasi", query, accessToken],
    // TODO replace with actual get Profile API
    queryFn: () => getDashboardRealisasi(query),
    enabled: !!accessToken,
    refetchOnWindowFocus: true,
  });
};

export const useGetDashoardTableData = (query?: string) => {
  const accessToken = useAccessToken();

  return useQuery({
    queryKey: ["useGetDashoardTableData", query, accessToken],
    // TODO replace with actual get Profile API
    queryFn: () => getDashboardTableData(query),
    enabled: !!accessToken,
    refetchOnWindowFocus: true,
  });
};

export const useGetKegiatan = (query?: string) => {
  const accessToken = useAccessToken();

  return useQuery({
    queryKey: ["useGetKegiatan", query, accessToken],
    // TODO replace with actual get Profile API
    queryFn: () => getKegiatan(query),
    enabled: !!accessToken,
    refetchOnWindowFocus: true,
  });
};

export const useGetBidang = (query?: string) => {
  const accessToken = useAccessToken();

  return useQuery({
    queryKey: ["useGetBidang", query, accessToken],
    // TODO replace with actual get Profile API
    queryFn: () => getBidang(query),
    enabled: !!accessToken,
    refetchOnWindowFocus: true,
  });
};
export const useGetLaporan = (query?: string) => {
  const accessToken = useAccessToken();

  return useQuery({
    queryKey: ["useGetLaporan", query, accessToken],
    // TODO replace with actual get Profile API
    queryFn: () => getLaporan(query),
    enabled: !!accessToken,
    refetchOnWindowFocus: true,
  });
};
export const useGetRealisasiFisik = (query?: string) => {
  const accessToken = useAccessToken();

  return useQuery({
    queryKey: ["useGetRealisasiFisik", query, accessToken],
    // TODO replace with actual get Profile API
    queryFn: () => getRealisasiFisik(query),
    enabled: !!accessToken,
    refetchOnWindowFocus: true,
  });
};

export const useGetRealisasiKeuangan = (query?: string) => {
  const accessToken = useAccessToken();

  return useQuery({
    queryKey: ["useGetRealisasiKeuangan", query, accessToken],
    // TODO replace with actual get Profile API
    queryFn: () => getRealisasiKeuangan(query),
    enabled: !!accessToken,
    refetchOnWindowFocus: true,
  });
};

export const useGetDetailAnggaran = (id?: string) => {
  const accessToken = useAccessToken();

  return useQuery({
    queryKey: ["useGetDetailAnggaran", id, accessToken],
    // TODO replace with actual get Profile API
    queryFn: () => getDetailAnggaran(id),
    enabled: !!accessToken,
    refetchOnWindowFocus: true,
  });
};

export const useGetDetailAnggaranKurvaFisik = (id?: string) => {
  const accessToken = useAccessToken();

  return useQuery({
    queryKey: ["useGetDetailAnggaranKurvaFisik", id, accessToken],
    // TODO replace with actual get Profile API
    queryFn: () => getDetailAnggaranKurvaFisik(id),
    enabled: !!accessToken,
    refetchOnWindowFocus: true,
  });
};
export const useGetDetailAnggaranKurvaKeuangan = (id?: string) => {
  const accessToken = useAccessToken();

  return useQuery({
    queryKey: ["useGetDetailAnggaranKurvaKeuangan", id, accessToken],
    // TODO replace with actual get Profile API
    queryFn: () => getDetailAnggaranKurvaKeuangan(id),
    enabled: !!accessToken,
    refetchOnWindowFocus: true,
  });
};
export const useGetDetailAnggaranPenanggungJawab = (id?: string) => {
  const accessToken = useAccessToken();

  return useQuery({
    queryKey: ["useGetDetailAnggaranPenanggungJawab", id, accessToken],
    // TODO replace with actual get Profile API
    queryFn: () => getDetailAnggaranPenanggungJawab(id),
    enabled: !!accessToken,
    refetchOnWindowFocus: true,
  });
};
export const useGetDataPenanggungJawab = (id?: string) => {
  const accessToken = useAccessToken();

  return useQuery({
    queryKey: ["useGetDataPenanggungJawab", id, accessToken],
    // TODO replace with actual get Profile API
    queryFn: () => getDataPenanggungJawab(),
    enabled: !!accessToken,
    refetchOnWindowFocus: true,
  });
};
export const useGetDetailAnggaranDokumentasi = (id?: string) => {
  const accessToken = useAccessToken();

  return useQuery({
    queryKey: ["useGetDetailAnggaranDokumentasi", id, accessToken],
    // TODO replace with actual get Profile API
    queryFn: () => getDetailAnggaranDokumentasi(id),
    enabled: !!accessToken,
    refetchOnWindowFocus: true,
  });
};

export const useGetDetailAnggaranTitikLokasi = (id?: string) => {
  const accessToken = useAccessToken();

  return useQuery({
    queryKey: ["useGetDetailAnggaranTitikLokasi", id, accessToken],
    // TODO replace with actual get Profile API
    queryFn: () => getDetailAnggaranTitikLokasi(id),
    enabled: !!accessToken,
    refetchOnWindowFocus: true,
  });
};
export const useGetDetailKegiatan = (id?: string) => {
  const accessToken = useAccessToken();

  return useQuery({
    queryKey: ["useGetDetailKegiatan", id, accessToken],
    // TODO replace with actual get Profile API
    queryFn: () => getDetailKegiatan(id),
    enabled: !!accessToken,
    refetchOnWindowFocus: true,
  });
};

export const useGetKegiatanDanSubKegiatan = () => {
  const accessToken = useAccessToken();

  return useQuery({
    queryKey: ["useGetKegiatanDanSubKegiatan", accessToken],
    // TODO replace with actual get Profile API
    queryFn: () => getKegiatanDanSubKegiatan(),
    enabled: !!accessToken,
    refetchOnWindowFocus: true,
  });
};
export const useGetBidangDanSumberDana = () => {
  const accessToken = useAccessToken();

  return useQuery({
    queryKey: ["useGetBidangDanSumberDana", accessToken],
    // TODO replace with actual get Profile API
    queryFn: () => getBidangDanSumberDana(),
    enabled: !!accessToken,
    refetchOnWindowFocus: true,
  });
};
export const useGetSubKegiatan = () => {
  const accessToken = useAccessToken();

  return useQuery({
    queryKey: ["useGetSubKegiatan", accessToken],
    // TODO replace with actual get Profile API
    queryFn: () => getSubKegiatan(),
    enabled: !!accessToken,
    refetchOnWindowFocus: true,
  });
};
export const useGetProgram = () => {
  const accessToken = useAccessToken();

  return useQuery({
    queryKey: ["useGetProgram", accessToken],
    // TODO replace with actual get Profile API
    queryFn: () => getProgram(),
    enabled: !!accessToken,
    refetchOnWindowFocus: true,
  });
};

//
export const usePutDetailAnggaranKurvaFisikRencana = () => {
  return useMutation({
    mutationFn: (payload: { id: string; payload: any }) =>
      putDetailAnggaranKurvaFisikRencana(payload.id, payload.payload),
    onError: (error: AxiosError<ResponseError>) => error,
  });
};
export const usePutDetailAnggaranKurvaFisikProgress = () => {
  return useMutation({
    mutationFn: (payload: { id: string; payload: any }) =>
      putDetailAnggaranKurvaFisikProgress(payload.id, payload.payload),
    onError: (error: AxiosError<ResponseError>) => error,
  });
};
export const usePutDetailAnggaranKurvaKeuanganRealisasi = () => {
  return useMutation({
    mutationFn: (payload: { id: string; payload: any }) =>
      putDetailAnggaranKurvaKeuanganRealisasi(payload.id, payload.payload),
    onError: (error: AxiosError<ResponseError>) => error,
  });
};
export const usePutDetailAnggaranPenanggungJawab = () => {
  return useMutation({
    mutationFn: (payload: {
      id: string;
      payload: { penanggung_jawab_id: string };
    }) => putDetailAnggaranPenanggungJawab(payload.id, payload.payload),
    onError: (error: AxiosError<ResponseError>) => error,
  });
};
export const usePostDetailAnggaranDokumentasi = () => {
  return useMutation({
    mutationFn: (payload: { id: string; data: FormData }) =>
      postDetailAnggaranDokumentasi(payload.id, payload.data),
    onError: (error: AxiosError<ResponseError>) => error,
  });
};
export const usePutDetailAnggaranDokumentasi = () => {
  return useMutation({
    mutationFn: (payload: { id: string; data: FormData; id_doc: number }) =>
      putDetailAnggaranDokumentasi(payload.id, payload.data, payload.id_doc),
    onError: (error: AxiosError<ResponseError>) => error,
  });
};
export const usePostKegiatan = () => {
  return useMutation({
    mutationFn: (payload: kegiatanPayload) => postKegiatan(payload),
    onError: (error: AxiosError<ResponseError>) => error,
  });
};
export const usePutKegiatan = () => {
  return useMutation({
    mutationFn: (payload: { id: string; data: kegiatanUpdatePayload }) =>
      putKegiatan(payload.id, payload.data),
    onError: (error: AxiosError<ResponseError>) => error,
  });
};
export const useDeleteKegiatan = () => {
  return useMutation({
    mutationFn: (payload: string) => deleteKegiatan(payload),
    onError: (error: AxiosError<ResponseError>) => error,
  });
};
export const usePostDetailAnggaranTitikLokasi = () => {
  return useMutation({
    mutationFn: (payload: {
      id: string;
      data: {
        latitude: string;
        longitude: string;
      };
    }) => postDetailAnggaranTitikLokasi(payload.id, payload.data),
    onError: (error: AxiosError<ResponseError>) => error,
  });
};

export const usePutKegiatanVerifikasiPengawas = () => {
  return useMutation({
    mutationFn: (payload: {
      id: string;
      verifikasi_pengawas: boolean;
      komentar_pengawas: string;
    }) => putKegiatanVerifikasiPengawas(payload),
    onError: (error: AxiosError<ResponseError>) => error,
  });
};
export const usePutKegiatanVerifikasiAdmin = () => {
  return useMutation({
    mutationFn: (payload: {
      id: string;
      verifikasi_admin: boolean;
      komentar_admin: string;
    }) => putKegiatanVerifikasiAdmin(payload),
    onError: (error: AxiosError<ResponseError>) => error,
  });
};
