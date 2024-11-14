import {
  IconCalender,
  IconCaretDown,
  IconCaretFillDown,
  IconCaretFillLeft,
  IconCaretUp,
  IconCeretFillUp,
} from "@/components/icons";
import Accordion from "@/components/ui/accordion";
import AccordionGroup from "@/components/ui/accordion/AccordionGroup";
import Appbar from "@/components/ui/appBar";
import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/loader";
import { SearchBox } from "@/components/ui/searchBox";
import { SelectInput } from "@/components/ui/selectInput";
import { Typography } from "@/components/ui/typography";
import View from "@/components/ui/view";
import { API_URL_SIPP, formatDate } from "@/constants";
import { useAppTheme } from "@/context";
import { getLastYears } from "@/helper";
import downloadFile from "@/helper/downloadFile";
import useDebounce from "@/hooks/useDebounce";
import { useGetBidang, useGetLaporan } from "@/services/sipp";
import { getAccessToken, useAccessToken } from "@/store/sipp";
import { formatCurrency } from "@/utils";
import { useRouter } from "expo-router";
import { jwtDecode } from "jwt-decode";
import React, { useState } from "react";
import { Dimensions, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

export default function report() {
  const router = useRouter();
  const { Colors } = useAppTheme();
  const inset = useSafeAreaInsets();

  const getBidang = useGetBidang();
  const bidang = getBidang.data?.data;

  const [filterBidang, setFilterBidang] = useState<number | string>("");
  const [filterBulan, setFilterBulan] = useState<number | string>("");
  const [filterYear, setFilterYear] = useState<number | string>("");
  const [filterSearch, setFilterSearch] = useState<string>("");
  const searchValueDebounce = useDebounce(filterSearch, 1000);

  const token = useAccessToken();
  const decoded = jwtDecode(token || "") as any;
  const isSuperAdmin = decoded.role[0] === "Super Admin";

  const getLaporan = useGetLaporan(
    `bidang=${filterBidang}&tahun=${filterYear}&bulan=${filterBulan}&search=${searchValueDebounce}`
  );

  const handleDownload = async () => {
    const accessToken = getAccessToken();
    let fileName = "Laporan";

    // Menyusun nama file sesuai filter
    if (filterBidang && filterBidang !== "-") {
      const bidangName = bidang?.find((f) => f.id === filterBidang)?.name || "";
      fileName += `-${bidangName}`;
    }
    if (filterBulan && filterBulan !== "-") fileName += `-bulan-${filterBulan}`;
    if (filterYear && filterYear !== "-") fileName += `-tahun-${filterYear}`;
    if (filterSearch && filterSearch !== "")
      fileName += `-search-${filterSearch}`;

    console.log("Nama File:", fileName); // Debugging nama file

    try {
      const message = await downloadFile(
        `${API_URL_SIPP}/download/laporan?bidang=${filterBidang}&tahun=${filterYear}&bulan=${filterBulan}&search=${searchValueDebounce}`,
        fileName,
        accessToken || "",
        "application/vnd-xls"
      );
      Toast.show({
        type: "success",
        text1: "Berhasil Mendownload Laporan",
        text2: message,
      });
    } catch (error) {
      console.error(error);
      Toast.show({
        type: "error",
        text1: "Gagal Mendownload Laporan",
        text2: `${error}`,
      });
    }
  };

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
          <View style={{ flexDirection: "row", gap: 10 }}>
            <SelectInput
              data={[
                {
                  title: "-",
                },
                ...(Array.from({ length: 12 }).map((_, index) => {
                  return {
                    title: index + 1,
                  };
                }) || []),
              ]}
              value={filterBulan}
              onSelect={(data) => setFilterBulan(data.title)}
              label="Filter Bulan"
              placeholder="Filter Bulan"
              trailingIcon={<IconCaretDown />}
              width={Dimensions.get("window").width / 2 - 25}
            />
            <SelectInput
              data={[
                {
                  title: "-",
                },
                ...(bidang?.map((data) => {
                  return {
                    title: data.name,
                  };
                }) || []),
              ]}
              disabled={!isSuperAdmin}
              value={bidang?.find((f) => f.id === filterBidang)?.name || ""}
              onSelect={(data) =>
                setFilterBidang(
                  bidang?.find((f) => f.name === data.title)?.id || ""
                )
              }
              label="Filter Bidang"
              placeholder="Pilih Bidang"
              trailingIcon={<IconCaretDown />}
              width={Dimensions.get("window").width / 2 - 25}
            />
          </View>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <SelectInput
              data={[
                {
                  title: "-",
                },
                ...getLastYears(24).map((d) => {
                  return {
                    title: d,
                  };
                }),
              ]}
              value={filterYear}
              onSelect={(data) => setFilterYear(data.title)}
              label="Filter Tahun"
              placeholder="Fiter Tahun"
              trailingIcon={<IconCaretDown />}
              width={Dimensions.get("window").width / 2 - 25}
            />
            <View style={{ gap: 5 }}>
              <Typography fontFamily="Poppins-Medium" fontSize={14}>
                Pencarian
              </Typography>
              <SearchBox
                placeholder="Cari Kegiatan"
                width={Dimensions.get("window").width / 2 - 25}
                value={filterSearch}
                onChangeText={setFilterSearch}
              />
            </View>
          </View>
          <Button style={{ marginTop: 10 }} onPress={handleDownload}>
            Download
          </Button>
        </View>
        <AccordionGroup style={{ gap: 20 }}>
          {!getLaporan.isFetching &&
            getLaporan.data?.data.bidang.map((data, index) => (
              <Accordion
                index={index}
                key={data.name + "data"}
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
                      {data.name}
                    </Typography>
                    {isOpen ? (
                      <IconCaretUp
                        width={26}
                        height={24}
                        color="Background 100"
                      />
                    ) : (
                      <IconCaretDown
                        width={26}
                        height={24}
                        color="Background 100"
                      />
                    )}
                  </View>
                )}
                style={{
                  borderWidth: 1,
                  borderRadius: 16,
                  borderColor: Colors["Text 700"],
                }}
              >
                <AccordionGroup style={{ padding: 20, gap: 20 }}>
                  {data.kegiatan.map((kegiatan, index) => (
                    <Accordion
                      index={index}
                      key={kegiatan.title + "kegiatan"}
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
                          <View
                            style={{
                              flexDirection: "row",
                              gap: 10,
                              width: "80%",
                            }}
                          >
                            <Typography
                              fontFamily="Poppins-Medium"
                              fontSize={16}
                              color="Background 100"
                            >
                              {index + 1}.
                            </Typography>
                            <Typography
                              fontFamily="Poppins-Medium"
                              fontSize={16}
                              color="Background 100"
                            >
                              {kegiatan.title}
                            </Typography>
                          </View>
                          {isOpen ? (
                            <IconCaretFillLeft
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
                      <View style={{ gap: 10 }}>
                        {kegiatan.detail.map((detail, index) => (
                          <View key={detail.id + "detail"}>
                            <View
                              style={{
                                borderWidth: 1,
                                borderColor: Colors["Text 700"],
                                padding: 10,
                                borderTopWidth: index !== 0 ? 1 : 0,
                              }}
                            >
                              <Typography
                                fontFamily="Poppins-Medium"
                                fontSize={15}
                              >
                                Nomor Kontrak
                              </Typography>
                              <Typography fontSize={15}>
                                {detail.no_kontrak}
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
                              <Typography
                                fontFamily="Poppins-Medium"
                                fontSize={15}
                              >
                                Nama Pekerjaan
                              </Typography>
                              <Typography fontSize={15}>
                                {detail.title}
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
                              <Typography
                                fontFamily="Poppins-Medium"
                                fontSize={15}
                              >
                                Perusahaan
                              </Typography>
                              <Typography fontSize={15}>
                                {detail.penyedia_jasa || "-"}
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
                              <Typography
                                fontFamily="Poppins-Medium"
                                fontSize={15}
                              >
                                Tanggal Kontrak
                              </Typography>
                              <Typography fontSize={15}>
                                {formatDate(new Date(detail.awal_kontrak))}
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
                              <Typography
                                fontFamily="Poppins-Medium"
                                fontSize={15}
                              >
                                Nilai Kontrak
                              </Typography>
                              <Typography fontSize={15}>
                                {formatCurrency(
                                  Number.parseFloat(detail.nilai_kontrak)
                                )}
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
                              <Typography
                                fontFamily="Poppins-Medium"
                                fontSize={15}
                              >
                                Nomor SPMK
                              </Typography>
                              <Typography fontSize={15}>
                                {detail.no_spmk || "-"}
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
                              <Typography
                                fontFamily="Poppins-Medium"
                                fontSize={15}
                              >
                                Tanggal Akhir Kontrak
                              </Typography>
                              <Typography fontSize={15}>
                                {formatDate(new Date(detail.akhir_kontrak))}
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
                              <Typography
                                fontFamily="Poppins-Medium"
                                fontSize={15}
                              >
                                Progress
                              </Typography>
                              <Typography fontSize={15}>23%</Typography>
                            </View>
                          </View>
                        ))}
                      </View>
                    </Accordion>
                  ))}
                  {data.kegiatan.length === 0 && (
                    <Typography
                      fontFamily="Poppins-RegularItalic"
                      color="Text 500"
                      style={{ textAlign: "center" }}
                    >
                      Data Kosong
                    </Typography>
                  )}
                </AccordionGroup>
              </Accordion>
            ))}
        </AccordionGroup>
        {getLaporan.isFetching && (
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
