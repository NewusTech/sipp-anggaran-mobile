import {
  getBidang,
  getDashboardchart,
  getDashboardKegiatan,
  getDashboardRealisasi,
  getDashboardTableData,
  getDetailAnggaran,
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
