import { getDashboardchart, getDashboardKegiatan, getDashboardRealisasi, getDashboardTableData } from "@/api/sipp";
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
