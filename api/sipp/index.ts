import { API_URL_SIPP } from "@/constants";
import { apiClientSIPP } from "@/lib/fatcher";
import { getAccessToken } from "@/store/sipp";
import { kegiatanPayload, kegiatanUpdatePayload } from "@/validation";
import { HttpStatusCode } from "axios";

export * from "./auth";
export * from "./user";

export type PostResponseSuccess = {
  status: HttpStatusCode;
  message: string;
};

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
    alamat: "Setia Agung";
    jenis_pengadaan: "Lelang";
    penyedia_jasa: "PT Kontraktor Indonesia";
    progres: {
      id: number;
      detail_kegiatan_id: number;
      minggu: string;
      bulan: string;
      jenis_progres: string;
      nilai: number;
    }[];
    kegiatan: {
      id: 3;
      title: "Penyelenggaraan Jalan Kabupaten/Kota";
      bidang_id: 6;
      bidang: {
        id: 6;
        name: "Bidang Bina Marga";
      };
    };
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
    alamat: "Setia Agung";
    jenis_pengadaan: "Lelang";
    penyedia_jasa: "PT Kontraktor Indonesia";
    progres: {
      id: number;
      detail_kegiatan_id: number;
      minggu: string;
      bulan: string;
      jenis_progres: string;
      nilai: number;
    }[];
    kegiatan: {
      id: 3;
      title: "Penyelenggaraan Jalan Kabupaten/Kota";
      bidang_id: 6;
      bidang: {
        id: 6;
        name: "Bidang Bina Marga";
      };
    };
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

export type detailKegiatanResponseSuccess = {
  status: HttpStatusCode;
  message: string;
  data: {
    id: 226;
    title: "Pembangunan Taman Pemancingan Wisata di Agrowisata";
    no_detail_kegiatan: "22";
    no_kontrak: "600/22/KONTRAK/DPUPR/TUBABA/X/2024";
    no_spmk: "600/22/SPMK/DPUPR/TUBABA/X/2024";
    nilai_kontrak: "312832000";
    jenis_pengadaan: "Konstruksi";
    awal_kontrak: "2024-10-02T17:00:00.000000Z";
    akhir_kontrak: "2024-12-30T17:00:00.000000Z";
    penyedia_jasa: "CV. GLOBAL KONSTRUKSI";
    target: "100%";
    alamat: "Pulung Kencana";
  };
};

export const getDetailKegiatan = async (id?: string) => {
  const response = await apiClientSIPP<detailKegiatanResponseSuccess>({
    method: "GET",
    url: `/detail-kegiatan/${id}`,
  });
  return response.data;
};

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

export type detailAnggaranKurvaFisikResponseSuccess = {
  status: HttpStatusCode;
  message: string;
  data: {
    chart: {
      labels: any[];
      data_fisik: number[];
      data_rencana: number[];
    };
    data: {
      realisasi_fisik: {
        id: number;
        detail_kegiatan_id: number;
        tanggal: string;
        bulan: any;
        minggu: string;
        jenis_progres: string;
        nilai: number;
      }[];
      rencana_fisik: {
        id: number;
        detail_kegiatan_id: number;
        bulan: any;
        minggu: string;
        keuangan: number;
        fisik: number;
      }[];
    };
  };
};

export const getDetailAnggaranKurvaFisik = async (id?: string) => {
  const response = await apiClientSIPP<detailAnggaranKurvaFisikResponseSuccess>(
    {
      method: "GET",
      url: `/detail-anggaran/${id}/kurfa-fisik/`,
    }
  );
  return response.data;
};

export type detailAnggaranKurvaKeuanganResponseSuccess = {
  status: HttpStatusCode;
  message: string;
  data: {
    chart: {
      labels: any[];
      data_Keuangan: number[];
    };
    data: {
      relaisasi_keuangan: {
        id: number;
        detail_kegiatan_id: number;
        tanggal: string;
        bulan: string;
        minggu: string;
        jenis_progres: string;
        nilai: number;
      }[];
    };
  };
};

export const getDetailAnggaranKurvaKeuangan = async (id?: string) => {
  const response =
    await apiClientSIPP<detailAnggaranKurvaKeuanganResponseSuccess>({
      method: "GET",
      url: `/detail-anggaran/${id}/kurfa-keuangan/`,
    });
  return response.data;
};

export type detailAnggaranPenanggungJawabResponseSuccess = {
  status: HttpStatusCode;
  message: string;
  data: {
    id: number;
    detail_kegiatan: {
      penyedia_jasa: string;
    };
    kegiatan: {
      penanggung_jawab: {
        id: number;
        pptk_name: string;
        pptk_nip: null;
        pptk_email: string;
        pptk_telpon: string;
        ppk_name: string;
        ppk_nip: null;
        ppk_email: string;
        ppk_telpon: string;
        bidang_pptk: null;
        bidang_ppk: null;
      };
    };
  };
};

export const getDetailAnggaranPenanggungJawab = async (id?: string) => {
  const response =
    await apiClientSIPP<detailAnggaranPenanggungJawabResponseSuccess>({
      method: "GET",
      url: `/detail-anggaran/${id}/penanggung-jawab/`,
    });
  return response.data;
};

export type dataPenanggungJawabResponseSuccess = {
  status: HttpStatusCode;
  message: string;
  data: {
    id: 1;
    pptk_name: "Arma Yoga";
    bidang_pptk: null;
    bidang_ppk: null;
  }[];
};

export const getDataPenanggungJawab = async () => {
  const response = await apiClientSIPP<dataPenanggungJawabResponseSuccess>({
    method: "GET",
    url: `/list-penanggung-jawab`,
  });
  return response.data;
};

export type detailAnggaranDokumentasiResponseSuccess = {
  status: HttpStatusCode;
  message: string;
  data: {
    detail_kegiatan: {
      id: 188;
      no_detail_kegiatan: "1";
      title: "Pembangunan Bronjong Mulya Jaya - Sp.Mulya Sari";
      no_kontrak: "-";
      jenis_pengadaan: "Konstruksi";
      nilai_kontrak: "2312312312312";
      pagu: "12816169900";
      awal_kontrak: "2024-07-21T17:00:00.000000Z";
      akhir_kontrak: "2024-09-21T17:00:00.000000Z";
      latitude: string | null;
      longitude: string | null;
      status: string | null;
      target: string;
      real: string | null;
      dev: string | null;
      progress: string | null;
      alamat: "bandar Lampung";
      kegiatan_id: 3;
      sub_kegiatan_id: 1;
      daya_serap_kontrak: string | null;
      sisa_kontrak: null;
      sisa_anggaran: null;
      deleted_at: null;
      penyedia_jasa_id: null;
      realisasi: "0.00";
      sumber_dana_id: 2;
      metode_pemilihan: "Tender";
      verifikasi_admin: "false";
      komentar_admin: null;
      verifikasi_pengawas: "false";
      komentar_pengawas: null;
      penyedia_jasa: "test jasa";
      no_spmk: "test Nomor";
      penanggung_jawab_id: 1;
    };
    dokumentasi: {
      id: 6;
      detail_kegiatan_id: 226;
      name: "8";
      keterangan: "35.12";
      files: [
        {
          id: 7;
          dokumentasi_id: 6;
          file_name: "WhatsApp Image 2024-10-22 at 17.51.16.jpeg";
          type: "image/jpeg";
          path: "file/dokumentasi/WhatsApp Image 2024-10-22 at 17.51.16.jpeg";
        }
      ];
    }[];
  };
};

export const getDetailAnggaranDokumentasi = async (id?: string) => {
  const response =
    await apiClientSIPP<detailAnggaranDokumentasiResponseSuccess>({
      method: "GET",
      url: `/detail-anggaran/${id}/dokumentasi/`,
    });
  return response.data;
};

export type detailAnggaranTitikLokasiResponseSuccess = {
  status: HttpStatusCode;
  message: string;
  data: {
    detail_kegiatan: {
      id: 226;
      title: "Pembangunan Taman Pemancingan Wisata di Agrowisata";
      no_detail_kegiatan: "22";
      no_kontrak: "600/22/KONTRAK/DPUPR/TUBABA/X/2024";
      jenis_pengadaan: "Konstruksi";
      penyedia_jasa: "CV. GLOBAL KONSTRUKSI";
      no_spmk: "600/22/SPMK/DPUPR/TUBABA/X/2024";
      latitude: "-4.495920741817778";
      longitude: "105.07950305479937";
      realisasi: "0.00";
      awal_kontrak: "2024-10-02T17:00:00.000000Z";
      akhir_kontrak: "2024-12-30T17:00:00.000000Z";
      target: "100%";
      kegiatan_id: 6;
      kegiatan: {
        id: 6;
        title: "Pengembangan dan Pengelolaan Sistem Irigasi Primer dan Sekunder pada Daerah Irigasi yang Luasnya di Bawah 1000 Ha dalam 1 (Satu) Daerah Kabupaten/Kota";
        bidang_id: 8;
        alokasi: "0.00";
        program: {
          id: 2;
          name: "PROGRAM  PENGELOLAAN  SUMBER  DAYA  AIR (SDA)";
        };
        bidang: {
          id: 8;
          name: "Bidang Pengairan";
          created_at: "2024-05-28T05:42:05.000000Z";
          updated_at: "2024-07-23T04:06:38.000000Z";
          deleted_at: null;
          kode: "2";
        };
      };
    };
    lokasi: {
      latitude: "-4.495920741817778";
      longitude: "105.07950305479937";
    };
  };
};

export const getDetailAnggaranTitikLokasi = async (id?: string) => {
  const response =
    await apiClientSIPP<detailAnggaranTitikLokasiResponseSuccess>({
      method: "GET",
      url: `/detail-anggaran/${id}/titik-lokasi/`,
    });
  return response.data;
};

export type kegiatanDanSubKegiatan = {
  status: HttpStatusCode;
  message: string;
  data: {
    kegiatan: {
      id: number;
      title: string;
      bidang: string | null;
    }[];
  };
};

export const getKegiatanDanSubKegiatan = async () => {
  const response = await apiClientSIPP<kegiatanDanSubKegiatan>({
    method: "GET",
    url: `/detail-kegiatan/kegitan-and-sub-kegiatan`,
  });
  return response.data;
};

export type bidangDanSumberDana = {
  status: HttpStatusCode;
  message: string;
  data: {
    bidang: {
      id: number;
      name: string;
      kode: string;
    }[];
    sumber_dana: {
      id: number;
      name: string;
    }[];
  };
};

export const getBidangDanSumberDana = async () => {
  const response = await apiClientSIPP<bidangDanSumberDana>({
    method: "GET",
    url: `/detail-kegiatan/bidang-and-sumber-dana`,
  });
  return response.data;
};

export type subKegiatan = {
  status: HttpStatusCode;
  message: string;
  data: {
    id: number;
    title: string;
  }[];
};

export const getSubKegiatan = async () => {
  const response = await apiClientSIPP<subKegiatan>({
    method: "GET",
    url: `/detail-kegiatan/sub-kegiatan`,
  });
  return response.data;
};

export type program = {
  status: HttpStatusCode;
  message: string;
  data: {
    id: number;
    name: string;
    kode: string;
  }[];
};

export const getProgram = async () => {
  const response = await apiClientSIPP<program>({
    method: "GET",
    url: `/detail-kegiatan/program`,
  });
  return response.data;
};

/////

export const putDetailAnggaranKurvaFisikRencana = async (
  id: string,
  payload: any
) => {
  const response = await apiClientSIPP<PostResponseSuccess>({
    method: "PUT",
    url: `/detail-anggaran/${id}/kurfa-fisik/rencana`,
    data: payload,
  });
  return response.data;
};

export const putDetailAnggaranKurvaFisikProgress = async (
  id: string,
  payload: any
) => {
  const response = await apiClientSIPP<PostResponseSuccess>({
    method: "PUT",
    url: `/detail-anggaran/${id}/kurfa-fisik/progres`,
    data: payload,
  });
  return response.data;
};

export const putDetailAnggaranKurvaKeuanganRealisasi = async (
  id: string,
  payload: any
) => {
  const response = await apiClientSIPP<PostResponseSuccess>({
    method: "PUT",
    url: `/detail-anggaran/${id}/kurfa-keuangan`,
    data: payload,
  });
  return response.data;
};

export const putDetailAnggaranPenanggungJawab = async (
  id: string,
  payload: {
    penanggung_jawab_id: string;
  }
) => {
  const response = await apiClientSIPP<PostResponseSuccess>({
    method: "PUT",
    url: `/detail-anggaran/${id}/penanggung-jawab`,
    data: payload,
  });
  return response.data;
};

export const postDetailAnggaranDokumentasi = async (
  id: string,
  payload: FormData
) => {
  const accessToken = getAccessToken();
  try {
    const response = await fetch(
      `${API_URL_SIPP}/detail-anggaran/${id}/dokumentasi`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: payload,
      }
    );

    // Periksa apakah respons sukses (status 2xx)
    if (!response.ok) {
      // Jika tidak sukses, ambil pesan error
      const errorData = await response.json();
      // Buat error baru dengan pesan dari respons
      throw new Error(errorData.message || "Gagal memproses Data.");
    }
    // Respons sukses, kembalikan data JSON
    const result = await response.json();
    return result;
  } catch (error: any) {
    // Tangani error di sini
    console.error(
      `Error saat memproses Data: ${error.message} - ${error.data}`
    );
    // Kamu bisa mengembalikan error atau menampilkannya ke UI
    throw error;
  }
};

export const putDetailAnggaranDokumentasi = async (
  id: string,
  payload: FormData,
  id_doc: number
) => {
  const accessToken = getAccessToken();
  try {
    const response = await fetch(
      `${API_URL_SIPP}/detail-anggaran/${id}/dokumentasi/${id_doc}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: payload,
      }
    );

    // Periksa apakah respons sukses (status 2xx)
    if (!response.ok) {
      // Jika tidak sukses, ambil pesan error
      const errorData = await response.json();
      // Buat error baru dengan pesan dari respons
      throw new Error(errorData.message || "Gagal memproses Data.");
    }
    // Respons sukses, kembalikan data JSON
    const result = await response.json();
    return result;
  } catch (error: any) {
    // Tangani error di sini
    console.error(
      `Error saat memproses Data: ${error.message} - ${error.data}`
    );
    // Kamu bisa mengembalikan error atau menampilkannya ke UI
    throw error;
  }
};

export const postKegiatan = async (payload: kegiatanPayload) => {
  const response = await apiClientSIPP<PostResponseSuccess>({
    method: "POST",
    url: `/detail-kegiatan`,
    data: payload,
  });
  return response.data;
};

export const putKegiatan = async (
  id: string,
  payload: kegiatanUpdatePayload
) => {
  const response = await apiClientSIPP<PostResponseSuccess>({
    method: "PUT",
    url: `/detail-kegiatan/${id}`,
    data: payload,
  });
  return response.data;
};

export const deleteKegiatan = async (id: string) => {
  const response = await apiClientSIPP<PostResponseSuccess>({
    method: "DELTE",
    url: `/detail-kegiatan/${id}`,
  });
  return response.data;
};

export const postDetailAnggaranTitikLokasi = async (
  id: string,
  payload: {
    latitude: string;
    longitude: string;
  }
) => {
  const response = await apiClientSIPP<PostResponseSuccess>({
    method: "POST",
    url: `/detail-anggaran/${id}/titik-lokasi`,
    data: payload,
  });
  return response.data;
};
