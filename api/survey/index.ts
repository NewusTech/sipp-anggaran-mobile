import { apiClientSurvey } from "@/lib/fatcher";
import { HttpStatusCode } from "axios";

export * from "./auth";

export type dashboardRoadSectionResponseSuccess = {
  status: HttpStatusCode;
  message: "Success Get User Profiles";
  data: {
    tot_panjang_jalan: number;
    jumlah_ruas: number;
  };
};

export const getDashboardRoadSection = async (query?: string) => {
  const response = await apiClientSurvey<dashboardRoadSectionResponseSuccess>({
    method: "GET",
    url: `/dashboard?${query && query}`,
  });
  return response.data;
};

// getTableDashboardRuasJalan
export type RuasJalanData = {
  id: number;
  ruas_jalan_id: number;
  nama_ruas: string;
  id_koridor: number | null;
  nama_koridor: string | null;
  panjang_ruas: string;
  no_ruas: string;
  lebar: string;
  akses: string;
  rigit: string;
  hotmix: string;
  lapen: string;
  telford: string;
  tanah: string;
  tahun: number;
  baik: string;
  sedang: string;
  rusak_ringan: string;
  rusak_berat: string;
  created_at: string;
  name_kecamatan: string | null;
  lhr: string | null;
  keterangan: string | null;
  mantap: string;
  tmantap: string;
};

export type RuasJalanResponse = {
  success: boolean;
  data: {
    current_page: number;
    data: RuasJalanData[];
  };
};
export const getDashboardTableRoadSection = async (query?: string) => {
  const response = await apiClientSurvey<RuasJalanResponse>({
    method: "GET",
    url: `/survey/jenis_perkerasan?${query && query}`,
  });
  return response.data;
};
// getTableDashboardRuasJalan

// getDetailRuasJalan
export type RuasJalanDataDetail = {
  id: number;
  ruas_jalan_id: number;
  nama_ruas: string;
  id_koridor: number | null;
  nama_koridor: string | null;
  panjang_ruas: string;
  no_ruas: string;
  lebar: string;
  akses: string;
  rigit: string;
  hotmix: string;
  lapen: string;
  telford: string;
  tanah: string;
  tahun: number;
  baik: string;
  sedang: string;
  rusak_ringan: string;
  rusak_berat: string;
  created_at: string;
  name_kecamatan: string | null;
  lhr: string | null;
  keterangan: string | null;
  mantap: string;
  tmantap: string;
};

export type RuasJalanResponseDetail = {
  success: boolean;
  data: RuasJalanDataDetail;
};
export const getDashboardTableRoadSectionDetail = async (id?: string) => {
  const response = await apiClientSurvey<RuasJalanResponseDetail>({
    method: "GET",
    url: `/survey/jenis_perkerasan/${id}`,
  });
  return response.data;
};
// getDetailRuasJalan

// getTableDashboardJembatan
export type BridgeDataResponse = {
  success: boolean;
  data: {
    current_page: number;
    data: Bridge[];
  };
}

export type Bridge = {
  id: number;
  no_ruas: string;
  kecamatan_name: string | null;
  nama_ruas: string;
  no_jembatan: string;
  asal: string;
  nama_jembatan: string;
  kmpost: string;
  panjang: string;
  lebar: string;
  jml_bentang: string;
  tipe_ba: string;
  kondisi_ba: string;
  tipe_bb: string;
  kondisi_bb: string;
  tipe_fondasi: string;
  kondisi_fondasi: string;
  bahan: string;
  kondisi_lantai: string;
  latitude: string;
  longitude: string;
  nilai_kondisi: number;
  kondisi: string;
  tahun: string;
  created_at: string;
}

export const getDashboardTableBridgeSection = async (query?: string) => {
  const response = await apiClientSurvey<BridgeDataResponse>({
    method: "GET",
    url: `/jembatan?${query && query}`,
  });
  return response.data;
};
// getTableDashboardJembatan

// getDetailRuasJembatan
export type RuasJembatanDataDetail = {
  id: number;
  no_ruas: string;
  kecamatan_name: string | null;
  nama_ruas: string;
  no_jembatan: string;
  asal: string;
  nama_jembatan: string;
  kmpost: string;
  panjang: string;
  lebar: string;
  jml_bentang: string;
  tipe_ba: string;
  kondisi_ba: string;
  tipe_bb: string;
  kondisi_bb: string;
  tipe_fondasi: string;
  kondisi_fondasi: string;
  bahan: string;
  kondisi_lantai: string;
  latitude: string;
  longitude: string;
  nilai_kondisi: number;
  kondisi: string;
  tahun: string;
  created_at: string;
};

export type RuasJembatanResponseDetail = {
  success: boolean;
  data: RuasJembatanDataDetail;
};
export const getDashboardTableBridgeSectionDetail = async (id?: string) => {
  const response = await apiClientSurvey<RuasJembatanResponseDetail>({
    method: "GET",
    url: `/jembatan/${id}`,
  });
  return response.data;
};
// getDetailRuasJembatan

// getDashboardDrainase
export type dashboardDrainase = {
  status: HttpStatusCode;
  message: "Success Get User Profiles";
  data: {
    total_panjang_ruas: number;
    jumlah_drainase: number;
  };
};

export const getDashboardDrainaseSection = async (query?: string) => {
  const response = await apiClientSurvey<dashboardDrainase>({
    method: "GET",
    url: `/dashboard/drainase?${query && query}`,
  });
  return response.data;
};
// getDashboardDrainase