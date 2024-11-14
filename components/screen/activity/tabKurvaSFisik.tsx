import { IconFlopyDisk } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/loader";
import { Typography } from "@/components/ui/typography";
import View from "@/components/ui/view";
import { useAppTheme } from "@/context";
import { useIsPermission } from "@/helper";
import {
  useGetDetailAnggaranKurvaFisik,
  usePutDetailAnggaranKurvaFisikProgress,
  usePutDetailAnggaranKurvaFisikRencana,
} from "@/services/sipp";
import { getMonthName } from "@/utils";
import React, { useEffect, useState } from "react";
import { Dimensions, Pressable, ScrollView, TextInput } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import Toast from "react-native-toast-message";

export default function TabKurvaSFisik({ id }: { id: string }) {
  const { Colors } = useAppTheme();

  const getkurvaFisik = useGetDetailAnggaranKurvaFisik(id);
  const kurvaFisik = getkurvaFisik.data?.data;

  const _dataRencana = kurvaFisik?.chart.labels.map((label, index) => {
    const value = kurvaFisik.chart.data_rencana[index];
    return {
      value: value,
      label: getMonthName(
        typeof label === "number"
          ? label
          : Number.parseInt(label.split("-")[1]), // Ekstrak bulan jika format "YYYY-MM"
        "Short"
      ),
    };
  });

  const _dataRealisasi = kurvaFisik?.chart.labels.map((label, index) => {
    // Periksa apakah `label` dan `data_fisik` di indeks yang sama tersedia
    const value = kurvaFisik.chart.data_fisik[index];
    return {
      value: value,
      label: getMonthName(
        typeof label === "number"
          ? label
          : Number.parseInt(label.split("-")[1]), // Ekstrak bulan jika format "YYYY-MM"
        "Short"
      ),
    };
  });

  const [dataKurvaFisik, setDataKurvaFisik] = useState<Record<string, number>>(
    {}
  );
  const [dataKurvaFisikRencana, setDataKurvaFisikRencana] = useState<
    Record<string, number>
  >({});

  // Perform the permission check once before mapping
  const canEdit = useIsPermission("ubah detail kegiatan");

  const putDetailAnggaranKurvaFisikRencanaMutation =
    usePutDetailAnggaranKurvaFisikRencana();
  const putDetailAnggaranKurvaFisikProsesMutation =
    usePutDetailAnggaranKurvaFisikProgress();

  const handleUpdateRencana = () => {
    const payload = { data: dataKurvaFisikRencana };
    console.log(payload);
    putDetailAnggaranKurvaFisikRencanaMutation.mutate(
      { id, payload },
      {
        onSuccess: async (response) => {
          Toast.show({
            type: "success",
            text1: "Berhasi Update Data!",
            text2: "Update Data Rencana",
          });
        },
        onError: (error) => {
          Toast.show({
            type: "error",
            text1: "Gagal Update Data!",
            text2: "Update Data Rencana",
          });
        },
        onSettled: () => {
          getkurvaFisik.refetch();
        },
      }
    );
  };

  const handleUpdateProgress = () => {
    const payload = { data: dataKurvaFisik };
    console.log(payload);
    putDetailAnggaranKurvaFisikProsesMutation.mutate(
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
      }
    );
  };

  const parseMonth = (dateString: string) =>
    Number.parseInt(dateString.split("-")[1] || dateString);

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
        {canEdit ? (
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
        ) : (
          <Typography
            style={{
              borderWidth: 1,
              padding: 10,
              width: "33%",
              height: 40,
              borderColor: Colors["Line 400"],
              borderRadius: 10,
              textAlign: "center",
              color: Colors["Text 500"],
              backgroundColor: Colors["Background 200"],
            }}
          >
            {String(dataSet[dataFisik.id] || "")}%
          </Typography>
        )}
      </View>
    ));

  useEffect(() => {
    if (kurvaFisik) {
      const initialRealisasi = kurvaFisik.data.realisasi_fisik?.reduce(
        (acc, { id, nilai }) => ({ ...acc, [id]: nilai }),
        {}
      );
      const initialRencana = kurvaFisik.data.rencana_fisik?.reduce(
        (acc, { id, fisik }) => ({ ...acc, [id]: fisik }),
        {}
      );

      setDataKurvaFisik(initialRealisasi || {});
      setDataKurvaFisikRencana(initialRencana || {});
    }
  }, [kurvaFisik]);

  return (
    <ScrollView
      style={{ marginTop: 20 }}
      contentContainerStyle={{
        paddingBottom: 20,
      }}
    >
      <View style={{ paddingHorizontal: 20, gap: 15 }}>
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
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              style={{
                width: "33%",
                textAlign: "center",
                textAlignVertical: "center",
              }}
              color="Background 100"
            >
              Bulan
            </Typography>
            <Typography
              style={{
                width: "33%",
                textAlign: "center",
                textAlignVertical: "center",
              }}
              color="Background 100"
            >
              Minggu-Ke
            </Typography>
            <Typography
              style={{
                width: "33%",
                textAlign: "center",
                textAlignVertical: "center",
              }}
              color="Background 100"
            >
              Fisik%
            </Typography>
          </View>
          {renderKurvaFisikRows(
            kurvaFisik?.data.rencana_fisik || [],
            dataKurvaFisikRencana,
            setDataKurvaFisikRencana,
            "rencana"
          )}
        </View>
        <Button
          onPress={handleUpdateRencana}
          disabled={
            putDetailAnggaranKurvaFisikRencanaMutation.isPending || !canEdit
          }
        >
          <IconFlopyDisk color="Background 100" />
          {putDetailAnggaranKurvaFisikRencanaMutation.isPending ? (
            <Loader color="Background 100" />
          ) : (
            <Typography color="Background 100">Simpan</Typography>
          )}
        </Button>

        <Typography
          fontFamily="Poppins-Medium"
          fontSize={17}
          style={{ marginTop: 10 }}
        >
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
              style={{
                width: "33%",
                textAlign: "center",
                textAlignVertical: "center",
              }}
              color="Background 100"
            >
              Bulan
            </Typography>
            <Typography
              style={{
                width: "33%",
                textAlign: "center",
                textAlignVertical: "center",
              }}
              color="Background 100"
            >
              Minggu-Ke
            </Typography>
            <Typography
              style={{
                width: "33%",
                textAlign: "center",
                textAlignVertical: "center",
              }}
              color="Background 100"
            >
              Aksi
            </Typography>
          </View>
          {renderKurvaFisikRows(
            kurvaFisik?.data.realisasi_fisik || [],
            dataKurvaFisik,
            setDataKurvaFisik,
            "realisasi"
          )}
        </View>
        <Button
          onPress={handleUpdateProgress}
          disabled={
            putDetailAnggaranKurvaFisikProsesMutation.isPending || !canEdit
          }
        >
          <IconFlopyDisk color="Background 100" />
          {putDetailAnggaranKurvaFisikProsesMutation.isPending ? (
            <Loader color="Background 100" />
          ) : (
            <Typography color="Background 100">Simpan</Typography>
          )}
        </Button>
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
            key={_dataRencana?.length + "-" + _dataRealisasi?.length}
            data2={_dataRealisasi}
            data={_dataRencana}
            noOfSections={10}
            showYAxisIndices
            curved
            isAnimated
            animateOnDataChange
            dataPointsColor2={Colors["Info 700"]}
            dataPointsColor1={Colors["Error 700"]}
            color2={Colors["Info 500"]}
            color1={Colors["Error 600"]}
            spacing={55}
            animationDuration={300}
            thickness={1}
            width={Dimensions.get("window").width - 125}
            startFillColor={Colors["Success 200"]}
          />
        </View>
      </View>
    </ScrollView>
  );
}
