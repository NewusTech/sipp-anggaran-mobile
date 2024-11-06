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
} from "@/api/sipp";
import { useAccessToken } from "@/store/sipp";
import { useQuery } from "@tanstack/react-query";

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
