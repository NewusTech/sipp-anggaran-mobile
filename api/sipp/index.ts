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

export type kegiatanResponseSuccess = {
  status: HttpStatusCode;
  message: "Success Get User Profiles";
  data: {
    id: number;
    name: string;
    kode: string;
    kegiatan: {
      id: number;
      title: string;
      bidang: {
        name: string;
        kode: string;
      };
      sub_kegiatan: {
        title: string;
        detail: {
          id: number;
          pagu: string;
          nilai_kontrak: string;
          jenis_kegiatan: string;
          title: string;
          progres: {
            id: number;
            nilai: number;
          }[];
        }[];
      }[];
    }[];
  }[];
};

export const getKegiatan = async (query?: string) => {
  const response = await apiClientSIPP<kegiatanResponseSuccess>({
    method: "GET",
    url: `/kegiatan?${query && query}`,
  });
  return response.data;
};

export type realisasiFisikResponseSuccess = {
  status: HttpStatusCode;
  message: string;
  data: {
    id: number;
    title: string;
    progres: {
      id: number;
      detail_kegiatan_id: number;
      minggu: string;
      bulan: string;
      jenis_progres: string;
      nilai: number;
    }[];
  }[];
};

export const getRealisasiFisik = async (query?: string) => {
  const response = await apiClientSIPP<realisasiFisikResponseSuccess>({
    method: "GET",
    url: `/realisasi/fisik?${query && query}`,
  });
  return response.data;
};

export type realisasiKeuanganResponseSuccess = {
  status: HttpStatusCode;
  message: string;
  data: {
    id: number;
    title: string;
    progres: {
      id: number;
      detail_kegiatan_id: number;
      minggu: string;
      bulan: string;
      jenis_progres: string;
      nilai: number;
    }[];
  }[];
};

export const getRealisasiKeuangan = async (query?: string) => {
  const response = await apiClientSIPP<realisasiKeuanganResponseSuccess>({
    method: "GET",
    url: `/realisasi/keuangan?${query && query}`,
  });
  return response.data;
};

export type getBidangResponseSuccess = {
  status: HttpStatusCode;
  message: string;
  data: {
    id: number;
    name: string;
  }[];
};

export const getBidang = async (query?: string) => {
  const response = await apiClientSIPP<getBidangResponseSuccess>({
    method: "GET",
    url: `/laporan/bidang?${query && query}`,
  });
  return response.data;
};

export type laporanResponseSuccess = {
  status: HttpStatusCode;
  message: string;
  data: {
    bidang: {
      id: number;
      name: string;
      kode: string;
      kegiatan: {
        id: number;
        title: string;
        detail: {
          id: number;
          title: string;
          no_kontrak: string;
          jenis_pengadaan: string;
          nilai_kontrak: string;
          pagu: string;
          awal_kontrak: string;
          akhir_kontrak: string;
          status: string | null;
          target: string;
          progress: number;
          penyedia_jasa: string;
          no_spmk: string;
          total_keuangan: number;
          total_fisik: number;
        }[];
      }[];
    }[];
  };
};

export const getLaporan = async (query?: string) => {
  const response = await apiClientSIPP<laporanResponseSuccess>({
    method: "GET",
    url: `/laporan?${query && query}`,
  });
  return response.data;
};

// export type detailKegiatanResponseSuccess = {
//   status: HttpStatusCode;
//   message: string;
//   data: {
//     id: number;
//     title: string;
//     no_detail_kegiatan: string;
//     no_kontrak: string;
//     no_spmk: string;
//     nilai_kontrak: string;
//     jenis_pengadaan: string;
//     awal_kontrak: string;
//     akhir_kontrak: string;
//     penyedia_jasa: string;
//     target: string;
//     alamat: string;
//     progres: {
//       id: number;
//       detail_kegiatan_id: number;
//       tanggal: string;
//       bulan: string;
//       minggu: string;
//       jenis_progres: string;
//       nilai: number;
//     }[];
//     rencana_kegiatans: {
//       id: number;
//       detail_kegiatan_id: number;
//       bulan: string;
//       minggu: string;
//       keuangan: number;
//       fisik: number;
//     }[];
//   };
// };

// export const getDetailKegiatan = async (id?: string) => {
//   const response = await apiClientSIPP<detailKegiatanResponseSuccess>({
//     method: "GET",
//     url: `/detail-kegiatan/${id}`,
//   });
//   return response.data;
// };
export type detailAnggaranResponseSuccess = {
  status: HttpStatusCode;
  message: string;
  data: {
    id: number;
    title: string;
    no_detail_kegiatan: number;
    no_kontrak: string;
    jenis_pengadaan: string;
    penyedia_jasa: string;
    no_spmk: string;
    realisasi: string;
    awal_kontrak: string;
    akhir_kontrak: string;
    target: string;
    kegiatan_id: number;
    nilai_kontrak: string;
    kegiatan: {
      id: number;
      title: string;
      bidang_id: number;
      alokasi: string;
      program: {
        id: number;
        name: string;
      };
      tahun: string;
      bidang: {
        id: number;
        name: string;
        kode: number;
      };
    };
  };
};

export const getDetailAnggaran = async (id?: string) => {
  const response = await apiClientSIPP<detailAnggaranResponseSuccess>({
    method: "GET",
    url: `/detail-anggaran/${id}`,
  });
  return response.data;
};
