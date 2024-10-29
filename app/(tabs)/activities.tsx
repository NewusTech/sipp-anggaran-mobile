import Accordion from "@/components/accordion";
import Header from "@/components/header";
import { IconCaretDown, IconPlus } from "@/components/icons";
import { SelectInput } from "@/components/ui/selectInput";
import Separator from "@/components/ui/separator";
import { Typography } from "@/components/ui/typography";
import View from "@/components/ui/view";
import { useAppTheme } from "@/context";
import { getLastYears } from "@/helper";
import React, { useState } from "react";
import { Pressable, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Activities() {
  const inset = useSafeAreaInsets();
  const [filterYear, setFilterYear] = useState<number | string>("");
  const { Colors } = useAppTheme();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: inset.top,
      }}
      backgroundColor="Background 100"
    >
      <Header />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: inset.left + 20,
          marginTop: 10,
          paddingBottom: 60,
        }}
        removeClippedSubviews={true}
      >
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
        <View style={{ marginTop: 20 }}>
          <Pressable
            style={{
              padding: 10,
              backgroundColor: Colors["Info 500"],
              borderRadius: 15,
              paddingHorizontal: 20,
              gap: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconPlus color="Background 100" />
            <Typography
              fontSize={17}
              fontFamily="Poppins-Medium"
              style={{ textAlign: "left" }}
              color="Background 100"
            >
              Tambah
            </Typography>
          </Pressable>
          <View style={{ marginVertical: 10 }} />
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
                <Typography
                  fontFamily="Poppins-Medium"
                  fontSize={16}
                  color="Background 100"
                >
                  Bidang Pengairan
                </Typography>
                {isOpen ? (
                  <IconCaretDown
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
          >
            <View
              style={{
                backgroundColor: Colors["Info 100"],
                padding: 15,
                gap: 10,
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
              }}
            >
              <Typography
                fontFamily="Poppins-Medium"
                fontSize={16}
                color="Text 900"
                style={{ textAlign: "center" }}
              >
                Kegiatan:
              </Typography>
              <Typography
                fontFamily="Poppins-Regular"
                fontSize={15}
                color="Text 900"
                style={{ textAlign: "center" }}
              >
                Pengelolaan dan Pengembangan Sistem Penyediaan Air Minum (SPAM)
                di Daerah Kabupaten/Kota
              </Typography>
              <Typography
                fontFamily="Poppins-Regular"
                fontSize={16}
                color="Text 900"
                style={{
                  textAlign: "center",
                  borderWidth: 1,
                  borderRadius: 15,
                  padding: 10,
                  textAlignVertical: "bottom",
                }}
              >
                Total Sub Kegiatan : 2
              </Typography>
              <Separator style={{ marginVertical: 5 }} />
              <Typography
                fontFamily="Poppins-Medium"
                fontSize={16}
                color="Text 900"
                style={{ textAlign: "center" }}
              >
                Sub Kegiatan:
              </Typography>
              <Typography
                fontFamily="Poppins-Regular"
                fontSize={15}
                color="Text 900"
                style={{ textAlign: "center" }}
              >
                Pemeliharaan, Perawatan, dan Pemeriksaan Berkala Bangunan Gedung
                untuk Kepentingan Strategis Daerah Kabupaten/Kota
              </Typography>
              <Accordion
                style={{
                  borderWidth: 1,
                  borderRadius: 15,
                  backgroundColor: "white",
                }}
                header={(isOpen) => (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      padding: 15,
                    }}
                  >
                    <Typography fontSize={16}>
                      Pembangunan Pemanfaatan Gedung
                    </Typography>
                    {isOpen ? (
                      <IconCaretDown width={26} height={24} color="Text 900" />
                    ) : (
                      <IconCaretDown width={26} height={24} color="Text 900" />
                    )}
                  </View>
                )}
              >
                <View
                  style={{
                    paddingHorizontal: 20,
                    paddingBottom: 20,
                    gap: 10,
                  }}
                >
                  <View style={{}}>
                    <Typography fontFamily="Poppins-Light" color="Text 500">
                      Kode Pekerjaan
                    </Typography>
                    <Typography fontFamily="Poppins-Regular">11</Typography>
                  </View>
                  <View style={{}}>
                    <Typography fontFamily="Poppins-Light" color="Text 500">
                      Jenis Pekerjaan
                    </Typography>
                    <Typography fontFamily="Poppins-Regular">Fisik</Typography>
                  </View>
                  <View style={{}}>
                    <Typography fontFamily="Poppins-Light" color="Text 500">
                      Alokasi
                    </Typography>

                    <View
                      style={{
                        flexDirection: "row",
                      }}
                    >
                      <Typography
                        style={{ width: 150 }}
                        fontFamily="Poppins-Medium"
                      >
                        Realisasi Pekerjaan
                      </Typography>
                      <Typography style={{ width: 10 }}>:</Typography>
                      <Typography>Rp. 0</Typography>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                      }}
                    >
                      <Typography
                        style={{ width: 150 }}
                        fontFamily="Poppins-Medium"
                      >
                        Pagu/Nilai Kontrak
                      </Typography>
                      <Typography style={{ width: 10 }}>:</Typography>
                      <Typography>Rp.1,798,696,000</Typography>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        gap: 10,
                        marginTop: 10,
                      }}
                    >
                      <Pressable
                        style={{
                          padding: 10,
                          backgroundColor: Colors["Info 500"],
                          borderRadius: 15,
                          paddingHorizontal: 20,
                          gap: 10,
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          fontSize={15}
                          style={{ textAlign: "left" }}
                          color="Background 100"
                        >
                          Lihat
                        </Typography>
                      </Pressable>
                      <Pressable
                        style={{
                          padding: 10,
                          backgroundColor: Colors["Success 700"],
                          borderRadius: 15,
                          paddingHorizontal: 20,
                          gap: 10,
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          fontSize={15}
                          style={{ textAlign: "left" }}
                          color="Background 100"
                        >
                          Edit
                        </Typography>
                      </Pressable>
                      <Pressable
                        style={{
                          padding: 10,
                          backgroundColor: Colors["Error 500"],
                          borderRadius: 15,
                          paddingHorizontal: 20,
                          gap: 10,
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          fontSize={15}
                          style={{ textAlign: "left" }}
                          color="Background 100"
                        >
                          Hapus
                        </Typography>
                      </Pressable>
                    </View>
                  </View>
                </View>
              </Accordion>
            </View>
          </Accordion>
        </View>
      </ScrollView>
    </View>
  );
}
