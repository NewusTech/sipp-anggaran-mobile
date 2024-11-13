import { dashboardRealisasiResponseSuccess } from "@/api/sipp";
import CardProgress from "@/components/card/CardProgress";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import View from "@/components/ui/view";
import { useAppTheme } from "@/context";
import { useIsPermission } from "@/helper";
import { getMonthName, substring } from "@/utils";
import { useRouter } from "expo-router";
import React from "react";
import { Dimensions, FlatList, Pressable } from "react-native";
import { LineChart } from "react-native-gifted-charts";

type SectionFinancialRealization = {
  chartLabel: number[];
  chartDdata: number[];
  data: dashboardRealisasiResponseSuccess["data"]["realisasi_keuangan"] | any[];
};

export default function SectionFinancialRealization(
  props: SectionFinancialRealization
) {
  const { chartDdata, chartLabel, data } = props;
  const { Colors } = useAppTheme();
  const router = useRouter();

  const dataChart = chartLabel.map((label, index) => {
    return {
      value: chartDdata[index],
      label: getMonthName(label),
    };
  });

  const canViewDetail = !useIsPermission("lihat detail kegiatan");

  return (
    <>
      <View
        style={{
          backgroundColor: Colors["Background 100"],
          marginTop: 20,
          width: "100%",
          height: 350,
          padding: 10,
          borderRadius: 15,
          borderWidth: 1,
          gap: 10,
          borderColor: Colors["Background 200"],
        }}
      >
        <Typography
          fontSize={16}
          fontFamily="Poppins-Medium"
          style={{ textAlign: "center" }}
        >
          Realisasi Keuangan 2024
        </Typography>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            marginBottom: 10,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              height: 20,
              width: 50,
              backgroundColor: Colors["Success 600"],
            }}
          />
          <Typography>Realisasi Keuangan (%)</Typography>
        </View>
        <LineChart
          key={dataChart.length}
          data={dataChart}
          noOfSections={10}
          showYAxisIndices
          isAnimated
          animateOnDataChange
          spacing={55}
          animationDuration={300}
          thickness={1}
          width={Dimensions.get("window").width - 125}
          color={Colors["Success 600"]}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Typography fontSize={18} fontFamily="Poppins-Medium">
          Progress Keuangan
        </Typography>
        <FlatList
          horizontal
          numColumns={1}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={true}
          data={data || []}
          removeClippedSubviews={true}
          renderItem={({ item, index }) => (
            <Pressable
              key={index}
              style={{
                backgroundColor: Colors["Background 100"],
                width: Dimensions.get("window").width - 40,
                borderRadius: 15,
                borderWidth: 1,
                borderColor: Colors["Background 200"],
                overflow: "hidden",
                height: 470,
              }}
              disabled={canViewDetail}
              onPress={() =>
                router.push({
                  pathname: "/(autenticated)/sipp/activities/detail/[id]",
                  params: {
                    id: item.id,
                  },
                })
              }
            >
              <Typography
                style={{
                  textAlignVertical: "center",
                  textAlign: "center",
                  backgroundColor: Colors["Info 500"],
                  paddingVertical: 15,
                }}
                color="Background 100"
              >
                {item?.kegiatan?.bidang?.name || "-"}
              </Typography>
              <View
                style={{
                  padding: 20,
                  paddingTop: 10,
                }}
              >
                <Typography
                  fontFamily="Poppins-Light"
                  fontSize={14}
                  color="Text 500"
                  style={{
                    textAlign: "center",
                  }}
                >
                  Nama Pekerjaan
                </Typography>
                <Typography
                  fontFamily="Poppins-Regular"
                  fontSize={15}
                  style={{
                    textAlign: "center",
                  }}
                >
                  {item.title}
                </Typography>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ marginVertical: 5, width: "50%" }}>
                    <Typography
                      fontFamily="Poppins-Light"
                      fontSize={14}
                      color="Text 500"
                    >
                      Penyedia Jasa
                    </Typography>
                    <Typography fontFamily="Poppins-Regular" fontSize={15}>
                      {item?.penyedia_jasa || "-"}
                    </Typography>
                  </View>
                  <View style={{ marginVertical: 5, width: "50%" }}>
                    <Typography
                      fontFamily="Poppins-Light"
                      fontSize={14}
                      color="Text 500"
                    >
                      Nomor Kontrak
                    </Typography>
                    <Typography fontFamily="Poppins-Regular" fontSize={15}>
                      {"-"}
                    </Typography>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ marginVertical: 5, width: "50%" }}>
                    <Typography
                      fontFamily="Poppins-Light"
                      fontSize={14}
                      color="Text 500"
                    >
                      Jenis Pengadaan
                    </Typography>
                    <Typography fontFamily="Poppins-Regular" fontSize={15}>
                      {item?.jenis_pengadaan || "-"}
                    </Typography>
                  </View>
                  <View style={{ marginVertical: 5, width: "50%" }}>
                    <Typography
                      fontFamily="Poppins-Light"
                      fontSize={14}
                      color="Text 500"
                    >
                      Nomor SPMK
                    </Typography>
                    <Typography fontFamily="Poppins-Regular" fontSize={15}>
                      {"-"}
                    </Typography>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ marginVertical: 5, width: "50%" }}>
                    <Typography
                      fontFamily="Poppins-Light"
                      fontSize={14}
                      color="Text 500"
                    >
                      Lokasi
                    </Typography>
                    <Typography fontFamily="Poppins-Regular" fontSize={15}>
                      {item?.alamat || "-"}
                    </Typography>
                  </View>
                  <View style={{ marginVertical: 5, width: "50%" }}>
                    <Typography
                      fontFamily="Poppins-Light"
                      fontSize={14}
                      color="Text 500"
                    >
                      Tanggal Kontrak
                    </Typography>
                    <Typography fontFamily="Poppins-Regular" fontSize={15}>
                      {"-"}
                    </Typography>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ marginVertical: 5, width: "50%" }}>
                    <Typography
                      fontFamily="Poppins-Light"
                      fontSize={14}
                      color="Text 500"
                    >
                      Bulan
                    </Typography>
                    <Typography fontFamily="Poppins-Regular" fontSize={15}>
                      {getMonthName(Number.parseInt(item.progres[0]?.bulan))}
                    </Typography>
                  </View>
                  <View style={{ marginVertical: 5, width: "50%" }}>
                    <Typography
                      fontFamily="Poppins-Light"
                      fontSize={14}
                      color="Text 500"
                    >
                      Nilai Kontrak
                    </Typography>
                    <Typography fontFamily="Poppins-Regular" fontSize={15}>
                      {"-"}
                    </Typography>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ marginVertical: 5, width: "50%" }}>
                    <Typography
                      fontFamily="Poppins-Light"
                      fontSize={14}
                      color="Text 500"
                    >
                      Minggu-Ke
                    </Typography>
                    <Typography fontFamily="Poppins-Regular" fontSize={15}>
                      {item.progres[0]?.minggu || "-"}
                    </Typography>
                  </View>
                  <View style={{ marginVertical: 5, width: "50%" }}>
                    <Typography
                      fontFamily="Poppins-Light"
                      fontSize={14}
                      color="Text 500"
                    >
                      {item.progres[0]?.jenis_progres || "Jenis Progres"}%
                    </Typography>
                    <Typography fontFamily="Poppins-Regular" fontSize={15}>
                      {item.progres[0]?.nilai || "-"}%
                    </Typography>
                  </View>
                </View>
              </View>
            </Pressable>
          )}
          style={{ width: "100%", paddingBottom: 20 }}
          contentContainerStyle={{
            alignItems: "center",
            paddingHorizontal: 0,
            gap: 20,
          }}
        />
      </View>
      <Button
        onPress={() => router.push("/(autenticated)/sipp/financialRealization")}
      >
        Selengkapnya
      </Button>
    </>
  );
}
