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
  status: string;
  alasan: string;
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
};

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
  status: string;
  keterangan: string;
  created_at: string;
};

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

// getTableDashboardDrainase
export type DrainaseDataResponse = {
  success: boolean;
  data: {
    current_page: number;
    data: Drainase[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Array<{
      url: string | null;
      label: string;
      active: boolean;
    }>;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
  };
  message: string;
};

export type Drainase = {
  id: number;
  nama_desa: string;
  nama_kecamatan: string;
  total_panjang_ruas: number;
};

export const getDashboardTableDrainaseSection = async (query?: string) => {
  const response = await apiClientSurvey<DrainaseDataResponse>({
    method: "GET",
    url: `/survey_drainase?${query && query}`,
  });
  return response.data;
};
// getTableDashboardDrainase

// getDetailRuasDrainase
export type RuasDrainaseData = {
  id: number;
  nama_ruas: string;
  panjang_ruas: string;
  desa_id: number;
  nama_desa: string;
  panjang_drainase: number;
  letak_drainase: string;
  lebar_atas: string;
  lebar_bawah: string;
  tinggi: string;
  kondisi: string;
  latitude: string;
  longitude: string;
  created_at: string;
  nama_kecamatan: string;
  status: string;
  keterangan: string;
};

export type PaginationLink = {
  url: string | null;
  label: string;
  active: boolean;
};

export type PaginationDetails = {
  current_page: number;
  data: RuasDrainaseData[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: PaginationLink[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
};

export type DataTotal = {
  total_panjang_ruas: number;
  total_panjang_drainase: string;
  total_panjang_drainase_kondisi_tanah: number;
};

export type RuasDrainaseResponse = {
  success: boolean;
  data: PaginationDetails;
  data_total: DataTotal;
  message: string;
};

export const getDashboardTableDrainaseSectionDetail = async (id?: string) => {
  const response = await apiClientSurvey<RuasDrainaseResponse>({
    method: "GET",
    url: `/survey_drainase/detail?desa_id=${id}`,
  });
  return response.data;
};
// getDetailRuasDrainase

// getReportStatistik
export type StatistikJenisPerkerasan = {
  id: number;
  hotmix_count: string;
  rigit_count: string;
  lapen_count: string;
  telford_count: string;
  tanah_count: string;
  created_at: string;
  total: number;
};

export type StatistikPerkerasan = {
  success: boolean;
  data: StatistikJenisPerkerasan;
  message: string;
};

export const getStatistikPerkerasan = async (query?: string) => {
  const response = await apiClientSurvey<StatistikPerkerasan>({
    method: "GET",
    url: `/laporan/statistik/jenis_perkerasan?${query && query}`,
  });
  return response.data;
};
// getReportJenisPerkerasan

// getReportStatistikKondisi
export type StatistikKondisi = {
  baik_percentage: number;
  sedang_percentage: number;
  rusak_ringan_percentage: number;
  rusak_berat_percentage: number;
  total: number;
  mantap: number;
  tmantap: number;
};

export type StatistikKondisiResponse = {
  success: boolean;
  data: StatistikKondisi;
  message: string;
};

export const getStatistikKondisi = async (query?: string) => {
  const response = await apiClientSurvey<StatistikKondisiResponse>({
    method: "GET",
    url: `/laporan/statistik/kondisi_perkerasan?${query && query}`,
  });
  return response.data;
};
// getReportStatistikKondisi

// getReportStatistikJembatan
export type StatistikJembatan = {
  B: number;
  S: number;
  RR: number;
  RB: number;
};

export type StatistikJembatanResponse = {
  success: boolean;
  data: {
    kondisi_count: StatistikJembatan;
  };
  message: string;
};

export const getStatistikJembatan = async (query?: string) => {
  const response = await apiClientSurvey<StatistikJembatanResponse>({
    method: "GET",
    url: `/statistic_jembatan?${query && query}`,
  });
  return response.data;
};
// getReportStatistikJembatan

// getReportStatistikDrainase
export type StatistikDrainase = {
  baik: number;
  sedang: number;
  rusak: number;
  tanah: number;
};

export type StatistikDrainaseResponse = {
  success: boolean;
  data: StatistikDrainase;
  message: string;
};

export const getStatistikDrainase = async (query?: string) => {
  const response = await apiClientSurvey<StatistikDrainaseResponse>({
    method: "GET",
    url: `/statistic_drainase?${query && query}`,
  });
  return response.data;
};
// getReportStatistikDrainase

// getMasterDataDrainase
export type MasterDataDrainase = {
  id: number;
  nama_ruas: string;
  panjang_ruas: string;
  desa_id: number;
  nama_desa: string;
  nama_kecamatan: string;
  created_at: string;
};

export type MasterDataDrainaseResponse = {
  success: boolean;
  data: {
      current_page: number;
      data: MasterDataDrainase[];
      first_page_url: string;
      from: number;
      last_page: number;
      last_page_url: string;
      links: {
          url: string | null;
          label: string;
          active: boolean;
      }[];
      next_page_url: string | null;
      path: string;
      per_page: number;
      prev_page_url: string | null;
      to: number;
      total: number;
  };
  message: string;
};


export const getMasterDataDrainase = async (query?: string) => {
  const response = await apiClientSurvey<MasterDataDrainaseResponse>({
    method: "GET",
    url: `/drainase?${query && query}`,
  });
  return response.data;
};
// getMasterDataDrainase

// getMasterDataRuasJalan
export type MasterDataRuasJalan = {
  id: number;
  no_ruas: string;
  nama: string;
  koridor_id: number | null;
  name_koridor: string | null;
  kecamatan_id: string;
  kabupaten: string | null;
  panjang_ruas: string;
  lebar: string;
  kecamatan: string | null;
  created_at: string;
};

export type MasterDataRuasJalanResponse = {
  success: boolean;
  message: string;
  data: {
      current_page: number;
      data: MasterDataRuasJalan[];
      first_page_url: string;
      last_page: number;
      last_page_url: string;
      links: {
          url: string | null;
          label: string;
          active: boolean;
      }[];
      next_page_url: string | null;
      path: string;
      per_page: number;
      prev_page_url: string | null;
      to: number;
      total: number;
  };
};

export const getMasterDataRuasJalan = async (query?: string) => {
  const response = await apiClientSurvey<MasterDataRuasJalanResponse>({
    method: "GET",
    url: `/ruas_jalan/master_ruas_jalan?${query && query}`,
  });
  return response.data;
};
// getMasterDataRuasJalan
