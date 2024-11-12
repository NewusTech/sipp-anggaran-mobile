import { dashboardRealisasiResponseSuccess } from "@/api/sipp";
import CardProgress from "@/components/card/CardProgress";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import View from "@/components/ui/view";
import { useAppTheme } from "@/context";
import { usePermission } from "@/store/sipp";
import { getMonthName, substring } from "@/utils";
import { useRouter } from "expo-router";
import React from "react";
import { Dimensions, FlatList, Pressable } from "react-native";
import { LineChart } from "react-native-gifted-charts";

type SectionFinancialRealization = {
  chartLabel: number[];
  chartDdata: number[];
  data: dashboardRealisasiResponseSuccess["data"]["realisasi_keuangan"] | [];
};

export default function SectionFinancialRealization(
  props: SectionFinancialRealization
) {
  const { chartDdata, chartLabel, data } = props;
  const { Colors } = useAppTheme();
  const router = useRouter();

  const userPermissions = usePermission();

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
          data={chartLabel.map((label, index) => {
            return {
              value: chartDdata[index],
              label: getMonthName(label),
            };
          })}
          noOfSections={10}
          showYAxisIndices
          areaChart
          curved
          hideDataPoints
          isAnimated
          animateOnDataChange
          spacing={55}
          animationDuration={300}
          thickness={5}
          width={Dimensions.get("window").width - 125}
          color={Colors["Success 600"]}
          startFillColor={Colors["Success 200"]}
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
          renderItem={({ item }) => (
            <Pressable
              style={{
                backgroundColor: Colors["Background 100"],
                marginTop: 20,
                width: Dimensions.get("window").width - 90,
                height: 280,
                padding: 20,
                borderRadius: 15,
                borderWidth: 1,
                borderColor: Colors["Background 200"],
              }}
              disabled={!userPermissions.includes("lihat detail kegiatan")}
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
                fontFamily="Poppins-Light"
                fontSize={14}
                color="Text 500"
              >
                Nama Pekerjaan
              </Typography>
              <Typography fontFamily="Poppins-Regular" fontSize={15}>
                {substring(item.title, 47)}
              </Typography>
              <View style={{ marginVertical: 5, marginTop: 10 }}>
                <Typography
                  fontFamily="Poppins-Light"
                  fontSize={14}
                  color="Text 500"
                >
                  Bulan
                </Typography>
                <Typography fontFamily="Poppins-Regular" fontSize={15}>
                  {getMonthName(
                    Number.parseInt(item.progres[0]?.bulan),
                    "Normal"
                  ) || "-"}
                </Typography>
              </View>
              <View style={{ marginVertical: 5 }}>
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
              <View style={{ marginVertical: 5 }}>
                <Typography
                  fontFamily="Poppins-Light"
                  fontSize={14}
                  color="Text 500"
                >
                  Fisik%
                </Typography>
                <Typography fontFamily="Poppins-Regular" fontSize={15}>
                  {item.progres[0]?.nilai || "-"}%
                </Typography>
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
