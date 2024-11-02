import { Typography } from "@/components/ui/typography";
import View from "@/components/ui/view";
import { useAppTheme } from "@/context";
import React from "react";

export default function TabDetail() {
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
          PROGRAM PENGELOLAAN SUMBER DAYA AIR (SDA)
        </Typography>
      </View>
      <View>
        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
          Kegiatan Pekerjaan
        </Typography>
        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
          Pengembangan dan Pengelolaan Sistem Irigasi Primer dan Sekunder pada
          Daerah Irigasi yang Luasnya di Bawah 1000 Ha dalam 1 (Satu) Daerah
          Kabupaten/Kota
        </Typography>
      </View>
      <View>
        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
          Sub Kegiatan Pekerjaan
        </Typography>
        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
          Pembangunan Taman Pemancingan Wisata di Agrowisata
        </Typography>
      </View>
      <View>
        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
          Nomor Pekerjaan
        </Typography>
        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
          22
        </Typography>
      </View>
      <View>
        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
          Tahun
        </Typography>
        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
          2022
        </Typography>
      </View>
      <View>
        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
          Jenis Pengadaan
        </Typography>
        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
          Konstruksi
        </Typography>
      </View>
      <View>
        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
          Nomor Kontrak
        </Typography>
        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
          600/22/KONTRAK/DPUPR/TUBABA/X/2024
        </Typography>
      </View>
      <View>
        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
          Nilai Kontrak
        </Typography>
        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
          Rp. 0
        </Typography>
      </View>
      <View>
        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
          Penyedia Jasa
        </Typography>
        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
          CV. GLOBAL KONSTRUKSI
        </Typography>
      </View>
      <View>
        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
          Nomor SPMK
        </Typography>
        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
          600/22/SPMK/DPUPR/TUBABA/X/2024
        </Typography>
      </View>
      <View>
        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
          Realisasi
        </Typography>
        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
          Rp. 0
        </Typography>
      </View>
      <View>
        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
          Awal Kontrak
        </Typography>
        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
          2024-10-03 00:00:00
        </Typography>
      </View>
      <View>
        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
          Akhir Kontrak
        </Typography>
        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
          2024-12-31 00:00:00
        </Typography>
      </View>
      <View>
        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
          Target Pekerjaan
        </Typography>
        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
          100%
        </Typography>
      </View>
    </View>
  );
}
