import { IconFlopyDisk } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/loader";
import { Typography } from "@/components/ui/typography";
import View from "@/components/ui/view";
import { useAppTheme } from "@/context";
import {
  useGetDetailAnggaranKurvaKeuangan,
  usePutDetailAnggaranKurvaKeuanganRealisasi,
} from "@/services/sipp";
import { getMonthName } from "@/utils";
import React, { useEffect, useState } from "react";
import { Dimensions, Pressable, TextInput } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import Toast from "react-native-toast-message";

export default function TabKurvaSKeuangan({ id }: { id: string }) {
  const { Colors } = useAppTheme();

  const getKurvaKeuangan = useGetDetailAnggaranKurvaKeuangan();
  const kurvaKeuangan = getKurvaKeuangan.data?.data;

  const [dataKurvaKeuanganRealisasi, setDataKurvaKeuanganRealisasi] = useState<
    Record<string, number>
  >({});

  const putDetailAnggaranKurvaKeuanganRealisasiMutation =
    usePutDetailAnggaranKurvaKeuanganRealisasi();

  const parseMonth = (dateString: string) =>
    Number.parseInt(dateString.split("-")[1] || dateString);

  const handleUpdateRealisasi = () => {
    const payload = { data: dataKurvaKeuanganRealisasi };
    console.log(payload);
    putDetailAnggaranKurvaKeuanganRealisasiMutation.mutate(
      { id, payload },
      {
        onSuccess: async (response) => {
          Toast.show({
            type: "success",
            text1: "Berhasi Update Data!",
            text2: "Update Data Realisasi",
          });
        },
        onError: (error) => {
          Toast.show({
            type: "error",
            text1: "Gagal Update Data!",
            text2: "Update Data Realisasi",
          });
        },
        onSettled: () => {
          getKurvaKeuangan.refetch();
        },
      }
    );
  };

  const renderKurvaFisikRows = (
    data: any[],
    dataSet: Record<string, number>,
    setData: React.Dispatch<React.SetStateAction<Record<string, number>>>,
    type: "rencana" | "realisasi"
  ) =>
    data.map((dataFisik, index) => (
      <View
        key={`${index}-${type}`}
        style={{
          flexDirection: "row",
          padding: 10,
          borderBottomWidth: index !== data.length - 1 ? 1 : 0,
          borderColor: Colors["Line 400"],
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          style={{ width: "33%", textAlign: "center" }}
          fontFamily="Poppins-Light"
        >
          {getMonthName(parseMonth(dataFisik.bulan), "Normal")}
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
          value={String(dataSet[dataFisik.id] || "")}
          onChangeText={(text) =>
            setData((prev) => ({
              ...prev,
              [dataFisik.id]: parseFloat(text) || 0,
            }))
          }
        />
      </View>
    ));

  useEffect(() => {
    if (kurvaKeuangan) {
      const initialRealisasi = kurvaKeuangan.data.relaisasi_keuangan?.reduce(
        (acc, { id, nilai }) => ({ ...acc, [id]: nilai }),
        {}
      );
      setDataKurvaKeuanganRealisasi(initialRealisasi || {});
    }
  }, [kurvaKeuangan]);

  return (
    <View
      style={{
        paddingHorizontal: 20,
        gap: 15,
      }}
    >
      {kurvaKeuangan?.data?.relaisasi_keuangan &&
        kurvaKeuangan?.data?.relaisasi_keuangan?.length > 0 && (
          <View style={{ marginTop: 10, gap: 15 }}>
            <Typography fontFamily="Poppins-Medium" fontSize={17}>
              Realisasi Keuagan
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
              {/* {kurvaKeuangan?.data.relaisasi_keuangan.map((data, index) => (
            <View
              style={[
                {
                  flexDirection: "row",
                  padding: 10,
                  alignItems: "center",
                },
                index !== kurvaKeuangan.data.relaisasi_keuangan.length - 1 && {
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
                    data.bulan.split("-").length === 1
                      ? data.bulan
                      : data.bulan?.split("-")[1]
                  ),
                  "Normal"
                )}
              </Typography>
              <Typography
                style={{ width: "33%", textAlign: "center" }}
                fontFamily="Poppins-Light"
              >
                {data.minggu}
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
                value={"" + data.nilai}
              />
            </View>
          ))} */}
              {renderKurvaFisikRows(
                kurvaKeuangan?.data.relaisasi_keuangan || [],
                dataKurvaKeuanganRealisasi,
                setDataKurvaKeuanganRealisasi,
                "realisasi"
              )}
            </View>
            <Button
              onPress={handleUpdateRealisasi}
              disabled={
                putDetailAnggaranKurvaKeuanganRealisasiMutation.isPending
              }
            >
              <IconFlopyDisk color="Background 100" />
              {putDetailAnggaranKurvaKeuanganRealisasiMutation.isPending ? (
                <Loader color="Background 100" />
              ) : (
                <Typography color="Background 100">Simpan</Typography>
              )}
            </Button>
          </View>
        )}

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
            <Typography>Keuangan</Typography>
          </Pressable>
          {/* <Pressable style={{ flexDirection: "row", gap: 10 }}>
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
          </Pressable> */}
        </View>
        <LineChart
          data={kurvaKeuangan?.chart.labels.map((label, index) => {
            // Periksa apakah `label` dan `data_fisik` di indeks yang sama tersedia
            const value = kurvaKeuangan.chart.data_Keuangan[index];
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
