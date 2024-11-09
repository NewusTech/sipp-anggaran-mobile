import { IconCalender, IconCaretDown } from "@/components/icons";
import Appbar from "@/components/ui/appBar";
import { DateInput } from "@/components/ui/inputDate";
import Loader from "@/components/ui/loader";
import { SelectInput } from "@/components/ui/selectInput";
import { Typography } from "@/components/ui/typography";
import View from "@/components/ui/view";
import { formatDateYMD } from "@/constants";
import { useAppTheme } from "@/context";
import { getLastYears } from "@/helper";
import { useGetRealisasiKeuangan } from "@/services/sipp";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Dimensions, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function financialRealization() {
  const router = useRouter();
  const { Colors } = useAppTheme();
  const inset = useSafeAreaInsets();

  const [filterYear, setFilterYear] = useState<number | string>("");
  const [filterDateStart, setFilterDateStart] = useState<Date | null>(null);
  const [filterDateEnd, setFilterDateEnd] = useState<Date | null>(null);
  // const [filterStatus, setFilterStatus] = useState<number | string>("");

  const getKeuangan = useGetRealisasiKeuangan(
    `tahun=${filterYear}&start_date=${
      filterDateStart ? formatDateYMD(filterDateStart) : ""
    }&end_date=${filterDateEnd ? formatDateYMD(filterDateEnd) : ""}`
  );

  return (
    <View style={{ flex: 1 }} backgroundColor="Background 100">
      <Appbar title={"Realisasi Keuangan"} variant="light" />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingVertical: 20,
          gap: 20,
        }}
      >
        <View style={{ gap: 10 }}>
          {/* <SelectInput
            data={getLastYears(24).map((d) => {
              return {
                title: d,
              };
            })}
            value={""}
            onSelect={(data) => console.log("")}
            placeholder="Staus"
            trailingIcon={<IconCaretDown />}
          /> */}
          <SelectInput
            data={getLastYears(24).map((d) => {
              return {
                title: d,
              };
            })}
            value={filterYear}
            onSelect={(data) => setFilterYear(data.title)}
            label="Filter Tahun"
            placeholder="Pilih Tahun"
            trailingIcon={<IconCaretDown />}
          />
          <View style={{ flexDirection: "row", gap: 10 }}>
            <DateInput
              withBorder
              style={{ width: Dimensions.get("window").width / 2 - 25 }}
              label={"Tanggal Mulai"}
              trailingIcon={
                <View style={{ marginLeft: "auto" }}>
                  <IconCalender width={21} height={21} />
                </View>
              }
              onChange={(date) => setFilterDateStart(date || new Date())}
              value={filterDateStart || ""}
              // errorMessage={fieldState.error?.message}
              // disabled={isNonExpire}
            />
            <DateInput
              withBorder
              style={{ width: Dimensions.get("window").width / 2 - 25 }}
              label={"Tanggal Selesai"}
              trailingIcon={
                <View style={{ marginLeft: "auto" }}>
                  <IconCalender width={21} height={21} />
                </View>
              }
              onChange={(date) => setFilterDateEnd(date || new Date())}
              value={filterDateEnd || ""}
              // errorMessage={fieldState.error?.message}
              // disabled={isNonExpire}
            />
          </View>
          {/* <Button style={{ marginTop: 10 }}>Download</Button> */}
        </View>
        {!getKeuangan.isFetching &&
          getKeuangan.data?.data.map((d, index) => (
            <View
              key={index}
              style={{
                backgroundColor: Colors["Background 100"],
                width: Dimensions.get("window").width - 40,
                padding: 20,
                borderRadius: 15,
                borderWidth: 1,
                borderColor: Colors["Background 200"],
              }}
            >
              <Typography
                fontFamily="Poppins-Light"
                fontSize={14}
                color="Text 500"
              >
                Nama Pekerjaan
              </Typography>
              <Typography fontFamily="Poppins-Regular" fontSize={15}>
                Operasi dan Pemeliharaan Sistem Penyediaan Air Minum (SPAM)
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
                  November
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
                  1
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
                  4.28%
                </Typography>
              </View>
            </View>
          ))}
        {getKeuangan.isFetching && (
          <View
            style={{
              height: 200,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Loader />
          </View>
        )}
      </ScrollView>
    </View>
  );
}
