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
import { usePermission } from "@/store/sipp";
import { getMonthName, substring } from "@/utils";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Dimensions, Pressable, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function financialRealization() {
  const router = useRouter();
  const { Colors } = useAppTheme();
  const inset = useSafeAreaInsets();

  const [filterYear, setFilterYear] = useState<number | string>("");
  const [filterDateStart, setFilterDateStart] = useState<Date | null>(null);
  const [filterDateEnd, setFilterDateEnd] = useState<Date | null>(null);
  // const [filterStatus, setFilterStatus] = useState<number | string>("");

  const userPermissions = usePermission();

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
          getKeuangan.data?.data.map(
            (item, index) =>
              item.kegiatan && (
                <Pressable
                  key={index}
                  style={{
                    backgroundColor: Colors["Background 100"],
                    width: Dimensions.get("window").width - 40,
                    borderRadius: 15,
                    borderWidth: 1,
                    borderColor: Colors["Background 200"],
                    overflow: "hidden",
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
                    style={{
                      textAlignVertical: "center",
                      textAlign: "center",
                      backgroundColor: Colors["Info 500"],
                      paddingVertical: 15,
                    }}
                    color="Background 100"
                  >
                    {item.kegiatan.bidang.name}
                  </Typography>
                  <View
                    style={{
                      padding: 20,
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
                      {substring(item.title, 47)}
                    </Typography>
                    <View style={{ marginVertical: 5 }}>
                      <Typography
                        fontFamily="Poppins-Light"
                        fontSize={14}
                        color="Text 500"
                      >
                        Penyedia Jasa
                      </Typography>
                      <Typography fontFamily="Poppins-Regular" fontSize={15}>
                        {item.penyedia_jasa || "-"}
                      </Typography>
                    </View>
                    <View style={{ marginVertical: 5 }}>
                      <Typography
                        fontFamily="Poppins-Light"
                        fontSize={14}
                        color="Text 500"
                      >
                        Jenis Pengadaan
                      </Typography>
                      <Typography fontFamily="Poppins-Regular" fontSize={15}>
                        {item.jenis_pengadaan || "-"}
                      </Typography>
                    </View>
                    <View style={{ marginVertical: 5 }}>
                      <Typography
                        fontFamily="Poppins-Light"
                        fontSize={14}
                        color="Text 500"
                      >
                        Lokasi
                      </Typography>
                      <Typography fontFamily="Poppins-Regular" fontSize={15}>
                        {item.alamat || "-"}
                      </Typography>
                    </View>
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
                  </View>
                </Pressable>
              )
          )}
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
