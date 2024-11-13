import Separator from "@/components/ui/separator";
import { Typography } from "@/components/ui/typography";
import View from "@/components/ui/view";
import { useAppTheme } from "@/context";
import React, { useState } from "react";
import { Dimensions, Linking, ScrollView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "@/components/ui/button";
import { IconFlopyDisk, IconMap, IconPhone } from "@/components/icons";
import {
  useGetDetailAnggaranTitikLokasi,
  usePostDetailAnggaranTitikLokasi,
} from "@/services/sipp";
import { useIsPermission } from "@/helper";
import { formatDate, MAPBOX_ACCESS_TOKEN } from "@/constants";
import CustomMarkerView from "@/components/customMarkerView";
import Mapbox, { MapView, Camera, MarkerView } from "@rnmapbox/maps";
import IconLocation from "@/components/icons/IconLocation";
import Toast from "react-native-toast-message";
import Loader from "@/components/ui/loader";

Mapbox.setAccessToken(MAPBOX_ACCESS_TOKEN || "");

export default function TabTitikLokasi({ id }: { id: string }) {
  const { Colors } = useAppTheme();

  const getTitikLokasi = useGetDetailAnggaranTitikLokasi(id);
  const titikLokasi = getTitikLokasi.data?.data;

  const [markerCoordinate, setMarkerCoordinate] = useState<number[] | null>(
    null
  );

  const [isScrollEnabled, setIsScrollEnabled] = useState<boolean>(true);

  const updateTitikLokasiMutation = usePostDetailAnggaranTitikLokasi();

  // Fungsi untuk menangani saat View ditekan
  const handleTouchStart = () => {
    setIsScrollEnabled(false); // Nonaktifkan scroll
  };

  const handleTouchEnd = () => {
    setIsScrollEnabled(true); // Aktifkan kembali scroll
  };

  const openGoogleMaps = () => {
    const url = `https://www.google.com/maps?q=${titikLokasi?.lokasi.latitude},${titikLokasi?.lokasi.longitude}`;
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open Google Maps:", err)
    );
  };

  const handleMapPress = (event: any) => {
    const { coordinates } = event.geometry;
    setMarkerCoordinate(coordinates);
    console.log("Koordinat yang dipilih:", coordinates); // Cetak ke console log
    // Anda dapat menambahkan logika untuk menyimpan koordinat ini ke database di sini
  };

  const handleUpdateTitikLokasi = () => {
    if (markerCoordinate)
      updateTitikLokasiMutation.mutate(
        {
          id,
          data: {
            latitude: markerCoordinate[1].toString(),
            longitude: markerCoordinate[0].toString(),
          },
        },
        {
          onSuccess: async (response) => {
            Toast.show({
              type: "success",
              text1: "Berhasi Update Data!",
              text2: "Tamdan Data Titik Lokasi",
            });
            getTitikLokasi.refetch();
          },
          onError: (error) => {
            Toast.show({
              type: "error",
              text1: "Gagal Update Data!",
              text2: "Tambah Data Titik Lokasi",
            });
          },
        }
      );
  };

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20, paddingTop: 20 }}
      scrollEnabled={isScrollEnabled}
    >
      <View
        style={{ flex: 1, width: "100%", height: 400 }}
        onTouchStart={handleTouchStart} // Ketika View ditekan
        onTouchEnd={handleTouchEnd} // Ketika View dilepaskan
      >
        <MapView style={styles.map} onPress={handleMapPress}>
          <Camera
            centerCoordinate={[105.26667, -5.45]}
            zoomLevel={7}
            pitch={0}
            heading={0}
          />
          {markerCoordinate && (
            <MarkerView
              coordinate={markerCoordinate} // [longitude, latitude]
            >
              <IconLocation />
            </MarkerView>
          )}
          {titikLokasi?.lokasi.latitude && titikLokasi.lokasi.longitude && (
            <CustomMarkerView
              coordinate={[
                Number.parseInt(titikLokasi.lokasi.longitude),
                Number.parseInt(titikLokasi.lokasi.latitude),
              ]}
            >
              <View
                style={{
                  borderRadius: 10,
                  width: 200,
                  backgroundColor: Colors["Background 100"],
                  padding: 15,
                  shadowColor: Colors["Background 200"],
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}
              >
                <Typography fontSize={11} style={{ marginBottom: 10 }}>
                  Data Informasi
                </Typography>
                <Typography fontSize={11}>
                  Nama Pekerjaan :{" "}
                  <Typography fontSize={10} color="Text 500">
                    {titikLokasi.detail_kegiatan.title}
                  </Typography>
                </Typography>
                <Typography fontSize={11}>
                  No Kontrak :{" "}
                  <Typography fontSize={10} color="Text 500">
                    {titikLokasi.detail_kegiatan.no_kontrak}
                  </Typography>
                </Typography>
                <Typography fontSize={11}>
                  Jenis Pengadaan :{" "}
                  <Typography fontSize={10} color="Text 500">
                    {titikLokasi.detail_kegiatan.jenis_pengadaan}
                  </Typography>
                </Typography>
                <Typography fontSize={11}>
                  Nilai Kontrak :{" "}
                  <Typography fontSize={10} color="Text 500">
                    {titikLokasi?.detail_kegiatan?.kegiatan?.alokasi || "-"}
                  </Typography>
                </Typography>
                <Typography fontSize={11}>
                  Progress :{" "}
                  <Typography fontSize={10} color="Text 500">
                    {"-"}
                  </Typography>
                </Typography>
                <Typography fontSize={11}>
                  Awal Kontrak :{" "}
                  <Typography fontSize={10} color="Text 500">
                    {formatDate(
                      new Date(titikLokasi.detail_kegiatan.awal_kontrak)
                    )}
                  </Typography>
                </Typography>
                <Typography fontSize={11}>
                  Akhir Kontrak :{" "}
                  <Typography fontSize={10} color="Text 500">
                    {formatDate(
                      new Date(titikLokasi.detail_kegiatan.akhir_kontrak)
                    )}
                  </Typography>
                </Typography>
                <Typography fontSize={11}>
                  Penyedia Jasa :{" "}
                  <Typography fontSize={10} color="Text 500">
                    {titikLokasi.detail_kegiatan.penyedia_jasa}
                  </Typography>
                </Typography>
                <Typography fontSize={11}>
                  No SPMK :{" "}
                  <Typography fontSize={10} color="Text 500">
                    {titikLokasi.detail_kegiatan.no_spmk}
                  </Typography>
                </Typography>
              </View>
            </CustomMarkerView>
          )}
        </MapView>
      </View>
      <View style={{ padding: 20 }}>
        <LinearGradient
          colors={["#2F55D4", "#93278F"]}
          start={{ x: 1, y: 0.5 }}
          style={{
            height: "auto",
            flexDirection: "column",
            alignItems: "center",
            padding: 20,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            gap: 15,
          }}
        >
          <Typography
            color="Background 100"
            fontFamily="Poppins-Medium"
            fontSize={18}
          >
            Bandar Lampung
          </Typography>
          <Separator color="Background 100" />
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              gap: 10,
              justifyContent: "center",
            }}
          >
            <View>
              <Typography color="Background 100" fontSize={15}>
                Nilai Kontrak
              </Typography>
              <Typography color="Background 100" fontSize={16}>
                {titikLokasi?.detail_kegiatan.penyedia_jasa}
              </Typography>
            </View>
            <Separator orientation="vertical" color="Background 100" />
            <View>
              <Typography color="Background 100" fontSize={15}>
                Nilai Kontrak
              </Typography>
              <Typography color="Background 100" fontSize={16}>
                {"-"}
              </Typography>
            </View>
          </View>
        </LinearGradient>
        <View
          style={{
            padding: 15,
            borderWidth: 1,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            borderColor: Colors["Line 300"],
          }}
        >
          <View>
            <Typography
              fontFamily="Poppins-Light"
              fontSize={14}
              color="Text 600"
            >
              Penanggung Jawab
            </Typography>
            <Typography
              fontFamily="Poppins-Regular"
              fontSize={15}
              color="Text 900"
            >
              -
            </Typography>
          </View>
          <View>
            <Typography
              fontFamily="Poppins-Light"
              fontSize={14}
              color="Text 600"
            >
              Telepon
            </Typography>
            <Typography
              fontFamily="Poppins-Regular"
              fontSize={15}
              color="Text 900"
            >
              -
            </Typography>
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <Button style={{ width: Dimensions.get("window").width / 2 - 40 }}>
              <IconPhone color="Background 100" />
              <Typography color="Background 100">Hubungi</Typography>
            </Button>
            <Button
              color="Success 700"
              style={{ width: Dimensions.get("window").width / 2 - 40 }}
              onPress={openGoogleMaps}
            >
              <IconMap color="Background 100" />
              <Typography color="Background 100">Map</Typography>
            </Button>
          </View>
        </View>
        <Button
          style={{ marginTop: 20 }}
          disabled={
            !useIsPermission("ubah detail kegiatan") ||
            updateTitikLokasiMutation.isPending
          }
        >
          {updateTitikLokasiMutation.isPending ? (
            <Loader color="Background 100" />
          ) : (
            <>
              <IconFlopyDisk color="Background 100" />
              <Typography color="Background 100">Simpan</Typography>
            </>
          )}
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
