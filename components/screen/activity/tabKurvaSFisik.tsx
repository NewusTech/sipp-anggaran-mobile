import { IconFlopyDisk } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import View from "@/components/ui/view";
import { useAppTheme } from "@/context";
import { useGetDetailAnggaranKurvaFisik } from "@/services/sipp";
import { getMonthName } from "@/utils";
import React from "react";
import { Dimensions, Pressable, TextInput } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import { number } from "zod";

export default function TabKurvaSFisik({ id }: { id: string }) {
  const { Colors } = useAppTheme();

  const getKurvaFisik = useGetDetailAnggaranKurvaFisik(id);
  const kuvaFisik = getKurvaFisik.data?.data;

  return (
    <View
      style={{
        paddingHorizontal: 20,
        gap: 15,
      }}
    >
      <View style={{ gap: 15 }}>
        <Typography fontFamily="Poppins-Medium" fontSize={17}>
          Rencana Kegiatan Fisik
        </Typography>

        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: Colors["Line 400"],
            overflow: "hidden",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              backgroundColor: Colors["Line 400"],
              padding: 10,
            }}
          >
            <Typography
              style={{ width: "33%", textAlign: "center" }}
              color="Background 100"
            >
              Bulan
            </Typography>
            <Typography
              style={{ width: "33%", textAlign: "center" }}
              color="Background 100"
            >
              Minggu-Ke
            </Typography>
            <Typography
              style={{ width: "33%", textAlign: "center" }}
              color="Background 100"
            >
              Fisik%
            </Typography>
          </View>
          {kuvaFisik?.data.rencana_fisik.map((dataFisik, index) => (
            <View
              style={[
                {
                  flexDirection: "row",
                  padding: 10,
                  alignItems: "center",
                },
                index !== kuvaFisik.data.rencana_fisik.length - 1 && {
                  borderBottomWidth: 1,
                  borderColor: Colors["Line 400"],
                },
              ]}
            >
              <Typography
                style={{ width: "33%", textAlign: "center" }}
                fontFamily="Poppins-Light"
              >
                {getMonthName(
                  Number.parseInt(
                    dataFisik.bulan.split("-").length === 1
                      ? dataFisik.bulan
                      : dataFisik.bulan?.split("-")[1]
                  ),
                  "Normal"
                )}
              </Typography>
              <Typography
                style={{ width: "33%", textAlign: "center" }}
                fontFamily="Poppins-Light"
              >
                {dataFisik.minggu}
              </Typography>
              <TextInput
                style={{
                  borderWidth: 1,
                  padding: 10,
                  width: "33%",
                  height: 40,
                  borderColor: Colors["Line 400"],
                  borderRadius: 10,
                  textAlign: "center",
                  color: Colors["Text 500"],
                }}
                inputMode="numeric"
                placeholder="%"
                value={"" + dataFisik.fisik}
              />
            </View>
          ))}
        </View>
        <Button>
          <IconFlopyDisk color="Background 100" />
          <Typography color="Background 100">Simpan</Typography>
        </Button>
      </View>
      {/*  */}
      <View style={{ marginTop: 10, gap: 15 }}>
        <Typography fontFamily="Poppins-Medium" fontSize={17}>
          Realisasi Fisik
        </Typography>

        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: Colors["Line 400"],
            overflow: "hidden",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              backgroundColor: Colors["Line 400"],
              padding: 10,
            }}
          >
            <Typography
              style={{ width: "33%", textAlign: "center" }}
              color="Background 100"
            >
              Bulan
            </Typography>
            <Typography
              style={{ width: "33%", textAlign: "center" }}
              color="Background 100"
            >
              Minggu-Ke
            </Typography>
            <Typography
              style={{ width: "33%", textAlign: "center" }}
              color="Background 100"
            >
              Aksi
            </Typography>
          </View>
          {kuvaFisik?.data.realisasi_fisik.map((dataFisik, index) => (
            <View
              style={[
                {
                  flexDirection: "row",
                  padding: 10,
                  alignItems: "center",
                },
                index !== kuvaFisik.data.rencana_fisik.length - 1 && {
                  borderBottomWidth: 1,
                  borderColor: Colors["Line 400"],
                },
              ]}
            >
              <Typography
                style={{ width: "33%", textAlign: "center" }}
                fontFamily="Poppins-Light"
              >
                {getMonthName(
                  Number.parseInt(
                    dataFisik.bulan.split("-").length === 1
                      ? dataFisik.bulan
                      : dataFisik.bulan?.split("-")[1]
                  ),
                  "Normal"
                )}
              </Typography>
              <Typography
                style={{ width: "33%", textAlign: "center" }}
                fontFamily="Poppins-Light"
              >
                {dataFisik.minggu}
              </Typography>
              <TextInput
                style={{
                  borderWidth: 1,
                  padding: 10,
                  width: "33%",
                  height: 40,
                  borderColor: Colors["Line 400"],
                  borderRadius: 10,
                  textAlign: "center",
                  color: Colors["Text 500"],
                }}
                inputMode="numeric"
                placeholder="%"
                value={"" + dataFisik.nilai}
              />
            </View>
          ))}
        </View>
        <Button>
          <IconFlopyDisk color="Background 100" />
          <Typography color="Background 100">Simpan</Typography>
        </Button>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            gap: 20,
            justifyContent: "center",
            paddingVertical: 10,
          }}
        >
          <Pressable style={{ flexDirection: "row", gap: 10 }}>
            <View
              style={{
                height: 20,
                width: 40,
                backgroundColor: Colors["Error 100"],
                borderWidth: 1,
                borderColor: Colors["Error 600"],
              }}
            />
            <Typography>Rencana Fisik</Typography>
          </Pressable>
          <Pressable style={{ flexDirection: "row", gap: 10 }}>
            <View
              style={{
                height: 20,
                width: 40,
                backgroundColor: Colors["Info 100"],
                borderWidth: 1,
                borderColor: Colors["Info 600"],
              }}
            />
            <Typography>Realisasi Fisik (%)</Typography>
          </Pressable>
        </View>
        <LineChart
          data={kuvaFisik?.chart.labels.map((label, index) => {
            // Periksa apakah `label` dan `data_fisik` di indeks yang sama tersedia
            const value = kuvaFisik.chart.data_fisik[index];
            return {
              value: value,
              label: getMonthName(
                typeof label === "number"
                  ? label
                  : Number.parseInt(label.split("-")[1]), // Ekstrak bulan jika format "YYYY-MM"
                "Short"
              ),
            };
          })}
          data2={kuvaFisik?.chart.labels.map((label, index) => {
            const value = kuvaFisik.chart.data_rencana[index];
            return {
              value: value,
              label: getMonthName(
                typeof label === "number"
                  ? label
                  : Number.parseInt(label.split("-")[1]), // Ekstrak bulan jika format "YYYY-MM"
                "Short"
              ),
            };
          })}
          noOfSections={10}
          showYAxisIndices
          curved
          isAnimated
          animateOnDataChange
          dataPointsColor1={Colors["Info 700"]}
          dataPointsColor2={Colors["Error 700"]}
          color1={Colors["Info 500"]}
          color2={Colors["Error 600"]}
          spacing={55}
          animationDuration={300}
          thickness={3}
          width={Dimensions.get("window").width - 125}
          startFillColor={Colors["Success 200"]}
        />
      </View>
    </View>
  );
}
