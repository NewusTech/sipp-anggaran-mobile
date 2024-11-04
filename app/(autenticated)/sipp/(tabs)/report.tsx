import {
  IconCalender,
  IconCaretDown,
  IconCaretFillDown,
} from "@/components/icons";
import Accordion from "@/components/ui/accordion";
import Appbar from "@/components/ui/appBar";
import { Button } from "@/components/ui/button";
import { DateInput } from "@/components/ui/inputDate";
import { SelectInput } from "@/components/ui/selectInput";
import { Typography } from "@/components/ui/typography";
import View from "@/components/ui/view";
import { useAppTheme } from "@/context";
import { getLastYears } from "@/helper";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Dimensions, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function report() {
  const router = useRouter();
  const { Colors } = useAppTheme();
  const inset = useSafeAreaInsets();

  const [filterYear, setFilterYear] = useState<number | string>("");
  const [filterDateStart, setFilterDateStart] = useState<Date>(new Date());
  const [filterDateEnd, setFilterDateEnd] = useState<Date>(new Date());

  return (
    <View style={{ flex: 1 }} backgroundColor="Background 100">
      <Appbar title={"Laporan"} variant="light" />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingVertical: 20,
          gap: 20,
        }}
      >
        <View style={{ gap: 10 }}>
          <SelectInput
            data={getLastYears(24).map((d) => {
              return {
                title: d,
              };
            })}
            value={""}
            onSelect={(data) => console.log("")}
            placeholder="Staus"
            trailingIcon={<IconCaretDown />}
          />
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
              value={filterDateStart}
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
              value={filterDateEnd}
              // errorMessage={fieldState.error?.message}
              // disabled={isNonExpire}
            />
          </View>
          <Button style={{ marginTop: 10 }}>Download</Button>
        </View>
        <Accordion
          header={(isOpen) => (
            <View
              style={[
                {
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 15,
                  backgroundColor: Colors["Text 700"],
                  borderTopLeftRadius: 15,
                  borderTopRightRadius: 15,
                },
                !isOpen && {
                  borderBottomRightRadius: 15,
                  borderBottomLeftRadius: 15,
                },
              ]}
            >
              <Typography
                fontFamily="Poppins-Medium"
                fontSize={16}
                color="Background 100"
              >
                Bidang Pengairan
              </Typography>
              {isOpen ? (
                <IconCaretDown width={26} height={24} color="Background 100" />
              ) : (
                <IconCaretDown width={26} height={24} color="Background 100" />
              )}
            </View>
          )}
          style={{
            borderWidth: 1,
            borderRadius: 16,
            borderColor: Colors["Text 700"],
          }}
        >
          <View style={{ padding: 20 }}>
            <Accordion
              header={(isOpen) => (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 15,
                    backgroundColor: Colors["Info 500"],
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                  }}
                >
                  <View style={{ flexDirection: "row", gap: 10 }}>
                    <Typography
                      fontFamily="Poppins-Medium"
                      fontSize={16}
                      color="Background 100"
                    >
                      1.
                    </Typography>
                    <Typography
                      fontFamily="Poppins-Medium"
                      fontSize={16}
                      color="Background 100"
                    >
                      Penyelenggaraan Jalan Kabupaten/Kota
                    </Typography>
                  </View>
                  {isOpen ? (
                    <IconCaretFillDown
                      width={26}
                      height={24}
                      color="Background 100"
                    />
                  ) : (
                    <IconCaretFillDown
                      width={26}
                      height={24}
                      color="Background 100"
                    />
                  )}
                </View>
              )}
            >
              <View>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: Colors["Text 700"],
                    padding: 10,
                    borderTopWidth: 0,
                  }}
                >
                  <Typography fontFamily="Poppins-Medium" fontSize={15}>
                    Nomor Kontrak
                  </Typography>
                  <Typography fontSize={15}>
                    600/01/KONTRAK/DPUPR/TUBABA/VI/2024
                  </Typography>
                </View>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: Colors["Text 700"],
                    padding: 10,
                    borderTopWidth: 0,
                  }}
                >
                  <Typography fontFamily="Poppins-Medium" fontSize={15}>
                    Nama Pekerjaan
                  </Typography>
                  <Typography fontSize={15}>
                    Peningkatan Rekonstruksi Mulyo Jadi - Setia Bumi (DAK)
                  </Typography>
                </View>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: Colors["Text 700"],
                    padding: 10,
                    borderTopWidth: 0,
                  }}
                >
                  <Typography fontFamily="Poppins-Medium" fontSize={15}>
                    Perusahaan
                  </Typography>
                  <Typography fontSize={15}>
                    CV. NUANSA KARYA KONSTRUKSI
                  </Typography>
                </View>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: Colors["Text 700"],
                    padding: 10,
                    borderTopWidth: 0,
                  }}
                >
                  <Typography fontFamily="Poppins-Medium" fontSize={15}>
                    Tanggal Kontrak
                  </Typography>
                  <Typography fontSize={15}>14-06-2024</Typography>
                </View>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: Colors["Text 700"],
                    padding: 10,
                    borderTopWidth: 0,
                  }}
                >
                  <Typography fontFamily="Poppins-Medium" fontSize={15}>
                    Nilai Kontrak
                  </Typography>
                  <Typography fontSize={15}>Rp.12,639,534,000</Typography>
                </View>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: Colors["Text 700"],
                    padding: 10,
                    borderTopWidth: 0,
                  }}
                >
                  <Typography fontFamily="Poppins-Medium" fontSize={15}>
                    Nomor SPMK
                  </Typography>
                  <Typography fontSize={15}>
                    600/01/SPMK/DPUPR/TUBABA/VI/2024
                  </Typography>
                </View>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: Colors["Text 700"],
                    padding: 10,
                    borderTopWidth: 0,
                  }}
                >
                  <Typography fontFamily="Poppins-Medium" fontSize={15}>
                    Tanggal Akhir Kontrak
                  </Typography>
                  <Typography fontSize={15}>16-11-2024</Typography>
                </View>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: Colors["Text 700"],
                    padding: 10,
                    borderTopWidth: 0,
                  }}
                >
                  <Typography fontFamily="Poppins-Medium" fontSize={15}>
                    Progress
                  </Typography>
                  <Typography fontSize={15}>23%</Typography>
                </View>
              </View>
            </Accordion>
          </View>
        </Accordion>
      </ScrollView>
    </View>
  );
}
