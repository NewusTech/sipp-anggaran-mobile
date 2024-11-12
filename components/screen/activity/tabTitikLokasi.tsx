import Separator from "@/components/ui/separator";
import { Typography } from "@/components/ui/typography";
import View from "@/components/ui/view";
import { useAppTheme } from "@/context";
import React from "react";
import { Dimensions, Linking, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "@/components/ui/button";
import { IconFlopyDisk, IconMap, IconPhone } from "@/components/icons";
import { useGetDetailAnggaranTitikLokasi } from "@/services/sipp";
import { useIsPermission } from "@/helper";

export default function TabTitikLokasi({ id }: { id: string }) {
  const { Colors } = useAppTheme();

  const getTitikLokasi = useGetDetailAnggaranTitikLokasi(id);
  const titikLokasi = getTitikLokasi.data?.data;

  const openGoogleMaps = () => {
    const url = `https://www.google.com/maps?q=${titikLokasi?.lokasi.latitude},${titikLokasi?.lokasi.longitude}`;
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open Google Maps:", err)
    );
  };

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
      <View style={{ flex: 1, width: "100%", height: 300 }}>
        {/* <LeafletView
          mapCenterPosition={{
            lat: -5.39714,
            lng: 105.266792,
          }}
        /> */}
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
            <Typography color="Background 100" fontSize={16}>
              -
            </Typography>
            <Separator orientation="vertical" color="Background 100" />
            <Typography color="Background 100" fontSize={16}>
              {titikLokasi?.detail_kegiatan.penyedia_jasa}
            </Typography>
            <Separator orientation="vertical" color="Background 100" />
            <Typography color="Background 100" fontSize={16}>
              -
            </Typography>
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
              belum
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
              belum
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
          disabled={!useIsPermission("ubah detail kegiatan")}
        >
          <IconFlopyDisk color="Background 100" />
          <Typography color="Background 100">Simpan</Typography>
        </Button>
      </View>
    </ScrollView>
  );
}
