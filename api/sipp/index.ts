import { apiClientSIPP } from "@/lib/fatcher";
import { HttpStatusCode } from "axios";

export * from "./auth";
export * from "./user";

export type dashboardKegiatanDataResponseSuccess = {
  status: HttpStatusCode;
  message: "Success Get User Profiles";
  data: {
    total_pagu: number;
    total_realisasi: number;
    total_sisa: number;
  };
};

export const getDashboardKegiatan = async (query?: string) => {
  const response = await apiClientSIPP<dashboardKegiatanDataResponseSuccess>({
    method: "GET",
    url: `/dashboard/total-pagu-realisasi?${query && query}`,
  });
  return response.data;
};

export type dashboardchartResponseSuccess = {
  status: HttpStatusCode;
  message: "Success Get User Profiles";
  data: {
    chart_data: {
      labels: number[];
      data_fisik: number[];
      data_keuangan: number[];
    };
  };
};

export const getDashboardchart = async (query?: string) => {
  const response = await apiClientSIPP<dashboardchartResponseSuccess>({
    method: "GET",
    url: `/dashboard/chart?${query && query}`,
  });
  return response.data;
};

export type dashboardRealisasiResponseSuccess = {
  status: HttpStatusCode;
  message: "Success Get User Profiles";
  data: {
    realisasi_fisik: {
      id: number;
      title: string;
      progres: [
        {
          id: number;
          detail_kegiatan_id: number;
          minggu: string;
          bulan: string;
          jenis_progres: string;
          nilai: number;
        }
      ];
    }[];
    realisasi_keuangan: {
      id: number;
      title: string;
      progres: [
        {
          id: number;
          detail_kegiatan_id: number;
          minggu: string;
          bulan: string;
          jenis_progres: string;
          nilai: number;
        }
      ];
    }[];
    total_paket: number;
    total_paket_belum_mulai: number;
    total_paket_dikerjakan: number;
    total_paket_selesai: number;
  };
};

export const getDashboardRealisasi = async (query?: string) => {
  const response = await apiClientSIPP<dashboardRealisasiResponseSuccess>({
    method: "GET",
    url: `/dashboard/realisasi-data?${query && query}`,
  });
  return response.data;
};

export type dashboardTableDataResponseSuccess = {
  status: HttpStatusCode;
  message: "Success Get User Profiles";
  data: {
    data: {
      id: number;
      title: string;
      progress: null;
      akhir_kontrak: string;
      latitude: null;
      longitude: null;
      kegiatan: {
        bidang: {
          name: string;
        };
      };
      progres: {
        nilai: number;
      }[];
    }[];
    current_page: number;
    last_page: number;
    total: number;
  };
};

export const getDashboardTableData = async (query?: string) => {
  const response = await apiClientSIPP<dashboardTableDataResponseSuccess>({
    method: "GET",
    url: `/dashboard/tabel-data?${query && query}`,
  });
  return response.data;
};
