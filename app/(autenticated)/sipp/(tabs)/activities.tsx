import Accordion from "@/components/ui/accordion";
import Header from "@/components/header";
import { IconCaretDown, IconCaretUp, IconPlus } from "@/components/icons";
import { SelectInput } from "@/components/ui/selectInput";
import Separator from "@/components/ui/separator";
import { Typography } from "@/components/ui/typography";
import View from "@/components/ui/view";
import { useAppTheme } from "@/context";
import { getLastYears } from "@/helper";
import React, { useState } from "react";
import { Pressable, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Modals from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { router } from "expo-router";
import { useGetKegiatan } from "@/services/sipp";
import { formatCurrency } from "@/utils";
import Loader from "@/components/ui/loader";

export default function Activities() {
  const inset = useSafeAreaInsets();
  const [filterYear, setFilterYear] = useState<number | string>("");
  const { Colors } = useAppTheme();

  const [modalTambah, setModalTambah] = useState<boolean>(false);

  const getKegiatan = useGetKegiatan(`year=${filterYear}`);

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
          <Button
            style={{ borderRadius: 15 }}
            onPress={() => setModalTambah(true)}
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
          </Button>
          <View style={{ marginVertical: 10 }} />
          {!getKegiatan.isFetching &&
            getKegiatan.data?.data &&
            getKegiatan.data.data.map((data) => (
              <Accordion
                key={data.name}
                style={{ marginTop: 15 }}
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
              >
                <View
                  style={{
                    minHeight: 200,
                    backgroundColor: Colors["Info 100"],
                    borderBottomLeftRadius: 15,
                    borderBottomRightRadius: 15,
                  }}
                >
                  {data.kegiatan.length === 0 && (
                    <Typography
                      fontFamily="Poppins-RegularItalic"
                      color="Text 500"
                      style={{
                        textAlign: "center",
                        textAlignVertical: "center",
                        height: "100%",
                      }}
                    >
                      Data Masih Kosong
                    </Typography>
                  )}
                  {data.kegiatan.map((kegiatan) => (
                    <View
                      key={kegiatan.title}
                      style={{
                        padding: 15,
                        gap: 10,
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
                        {kegiatan.title}
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
                        Total Sub Kegiatan : {kegiatan.sub_kegiatan.length}
                      </Typography>
                      {kegiatan.sub_kegiatan.map((subKegiatan) => (
                        <View key={subKegiatan.title} style={{ gap: 10 }}>
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
                            {subKegiatan.title}
                          </Typography>
                          {subKegiatan.detail.map((detail) => (
                            <Accordion
                              key={detail.title}
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
                                  <Typography
                                    fontSize={16}
                                    style={{ width: "90%" }}
                                  >
                                    {detail.title}
                                  </Typography>
                                  {isOpen ? (
                                    <IconCaretDown
                                      width={26}
                                      height={24}
                                      color="Text 900"
                                    />
                                  ) : (
                                    <IconCaretDown
                                      width={26}
                                      height={24}
                                      color="Text 900"
                                    />
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
                                  <Typography
                                    fontFamily="Poppins-Light"
                                    color="Text 500"
                                  >
                                    Kode Pekerjaan
                                  </Typography>
                                  <Typography fontFamily="Poppins-Regular">
                                    {data.kode}
                                  </Typography>
                                </View>
                                <View style={{}}>
                                  <Typography
                                    fontFamily="Poppins-Light"
                                    color="Text 500"
                                  >
                                    Jenis Pekerjaan
                                  </Typography>
                                  <Typography fontFamily="Poppins-Regular">
                                    {detail.jenis_kegiatan}
                                  </Typography>
                                </View>
                                <View style={{}}>
                                  <Typography
                                    fontFamily="Poppins-Light"
                                    color="Text 500"
                                  >
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
                                    <Typography style={{ width: 10 }}>
                                      :
                                    </Typography>
                                    <Typography>
                                      {formatCurrency(
                                        Number.parseFloat(detail.pagu)
                                      )}
                                    </Typography>
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
                                    <Typography style={{ width: 10 }}>
                                      :
                                    </Typography>
                                    <Typography>
                                      {formatCurrency(
                                        Number.parseFloat(detail.nilai_kontrak)
                                      )}
                                    </Typography>
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
                                      onPress={() =>
                                        router.push({
                                          pathname:
                                            "/(autenticated)/sipp/activities/detail/[id]",
                                          params: {
                                            id: detail.id,
                                          },
                                        })
                                      }
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
                          ))}
                        </View>
                      ))}
                    </View>
                  ))}
                </View>
              </Accordion>
            ))}
          {getKegiatan.isFetching && (
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
        </View>
      </ScrollView>
      <Modals visible={modalTambah} setVisible={setModalTambah}>
        <Button
          style={{ borderRadius: 15 }}
          onPress={() => router.push("/(autenticated)/sipp/activities/add")}
        >
          Manual
        </Button>
        <Button
          style={{ borderRadius: 15 }}
          variant="secondary"
          textColor="Info 500"
        >
          Import
        </Button>
      </Modals>
    </View>
  );
}
