import { Typography } from "@/components/ui/typography";
import View from "@/components/ui/view";
import { formatDate } from "@/constants";
import { useAppTheme } from "@/context";
import { formatCurrency } from "@/utils";
import React from "react";

type TabDetail = {
  data: {
    title: string;
    titleKegiatan: string;
    titleSubPekerjaan: string;
    noPekerjaan: number;
    tahun: string;
    jenisPengadaan: string;
    nomorKontrak: string;
    nilaiKontrak: string;
    penyediaJasa: string;
    noSPMK: string;
    realisasi: string;
    awalKontrak: string;
    akhirKontrak: string;
    target: string;
  };
};

export default function TabDetail(props: TabDetail) {
  const { data } = props;
  const { Colors } = useAppTheme();

  return (
    <View
      style={{
        borderRadius: 15,
        borderWidth: 1,
        borderColor: Colors["Line 300"],
        marginHorizontal: 20,
        padding: 15,
        gap: 15,
      }}
    >
      <View>
        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
          Program
        </Typography>
        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
          {data.title}
        </Typography>
      </View>
      <View>
        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
          Kegiatan Pekerjaan
        </Typography>
        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
          {data.titleKegiatan}
        </Typography>
      </View>
      <View>
        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
          Sub Kegiatan Pekerjaan
        </Typography>
        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
          {data.titleSubPekerjaan}
        </Typography>
      </View>
      <View>
        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
          Nomor Pekerjaan
        </Typography>
        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
          {data.noPekerjaan}
        </Typography>
      </View>
      <View>
        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
          Tahun
        </Typography>
        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
          {data.tahun}
        </Typography>
      </View>
      <View>
        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
          Jenis Pengadaan
        </Typography>
        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
          {data.jenisPengadaan}
        </Typography>
      </View>
      <View>
        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
          Nomor Kontrak
        </Typography>
        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
          {data.nomorKontrak}
        </Typography>
      </View>
      <View>
        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
          Nilai Kontrak
        </Typography>
        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
          {formatCurrency(Number.parseFloat(data.nilaiKontrak))}
        </Typography>
      </View>
      <View>
        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
          Penyedia Jasa
        </Typography>
        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
          {data.penyediaJasa}
        </Typography>
      </View>
      <View>
        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
          Nomor SPMK
        </Typography>
        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
          {data.noSPMK}
        </Typography>
      </View>
      <View>
        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
          Realisasi
        </Typography>
        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
          {formatCurrency(Number.parseFloat(data.realisasi))}
        </Typography>
      </View>
      <View>
        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
          Awal Kontrak
        </Typography>
        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
          {data.awalKontrak !== ""
            ? formatDate(new Date(data.awalKontrak))
            : "-"}
        </Typography>
      </View>
      <View>
        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
          Akhir Kontrak
        </Typography>
        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
          {data.akhirKontrak !== ""
            ? formatDate(new Date(data.akhirKontrak))
            : "-"}
        </Typography>
      </View>
      <View>
        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
          Target Pekerjaan
        </Typography>
        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
          {data.target}%
        </Typography>
      </View>
    </View>
  );
}
