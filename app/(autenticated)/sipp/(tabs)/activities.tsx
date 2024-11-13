import Accordion from "@/components/ui/accordion";
import Header from "@/components/header";
import { IconCaretDown, IconCaretUp, IconPlus } from "@/components/icons";
import { SelectInput } from "@/components/ui/selectInput";
import Separator from "@/components/ui/separator";
import { Typography } from "@/components/ui/typography";
import View from "@/components/ui/view";
import { useAppTheme } from "@/context";
import { getLastYears, useIsPermission } from "@/helper";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Modals from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { router } from "expo-router";
import { useDeleteKegiatan, useGetKegiatan } from "@/services/sipp";
import { formatCurrency } from "@/utils";
import Loader from "@/components/ui/loader";
import ModalAction from "@/components/ui/modalAction";
import Toast from "react-native-toast-message";

export default function Activities() {
  const inset = useSafeAreaInsets();
  const [filterYear, setFilterYear] = useState<number | string>("");
  const { Colors } = useAppTheme();

  const isPermission = useIsPermission;

  const [modalTambah, setModalTambah] = useState<boolean>(false);
  const _addKegiatan = !isPermission("tambah kegiatan");
  const _viewKegiatan = !isPermission("lihat detail kegiatan");
  const _updateKegiatan = !isPermission("ubah kegiatan");
  const _deleteKegiatan = !isPermission("hapus kegiatan");

  const getKegiatan = useGetKegiatan(`year=${filterYear}`);

  const [modalDeleteKegiata, setModalDeleteKegiatan] = useState<boolean>(false);
  const [dataDeleteKegiatan, setDataDeleteKegiatann] = useState<string>("");

  const deleteKegiatanMutation = useDeleteKegiatan();

  const handleModalDeleteKegiatan = (id: string) => {
    setDataDeleteKegiatann(id);
    setModalDeleteKegiatan(true);
  };

  const handleActionDelete = () => {
    deleteKegiatanMutation.mutate(dataDeleteKegiatan, {
      onSuccess: async (response) => {
        Toast.show({
          type: "success",
          text1: "Sukses!",
          text2: "Tambah Kegiatan",
        });
      },
      onError: (error) => {
        Toast.show({
          type: "error",
          text1: "Gagal!",
          text2: "Tambah Kegiatan",
        });
      },
    });
  };

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
            disabled={_addKegiatan}
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
                      borderBottomLeftRadius: isOpen ? 0 : 15,
                      borderBottomRightRadius: isOpen ? 0 : 15,
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
                  {data.kegiatan.map((kegiatan, index) => (
                    <View
                      key={index + "kegiatan"}
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
                      {kegiatan.sub_kegiatan.map((subKegiatan, index) => (
                        <View key={index + "subKegiatan"} style={{ gap: 10 }}>
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
                          {subKegiatan.detail.map((detail, index) => (
                            <Accordion
                              key={index + "detail"}
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
                                    <Button
                                      disabled={_viewKegiatan}
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
                                    </Button>
                                    <Button
                                      disabled={_updateKegiatan}
                                      onPress={() =>
                                        router.push({
                                          pathname:
                                            "/(autenticated)/sipp/activities/edit/[id]",
                                          params: {
                                            id: detail.id,
                                          },
                                        })
                                      }
                                      color="Success 700"
                                    >
                                      <Typography
                                        fontSize={15}
                                        style={{ textAlign: "left" }}
                                        color="Background 100"
                                      >
                                        Edit
                                      </Typography>
                                    </Button>
                                    <Button
                                      disabled={_deleteKegiatan}
                                      onPress={() =>
                                        handleModalDeleteKegiatan(
                                          detail.id.toString()
                                        )
                                      }
                                      color="Error 500"
                                    >
                                      <Typography
                                        fontSize={15}
                                        style={{ textAlign: "left" }}
                                        color="Background 100"
                                      >
                                        Hapus
                                      </Typography>
                                    </Button>
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
      <ModalAction
        title="Yakin Ingin Menghapus Data Ini"
        isLoading={false}
        onAction={handleActionDelete}
        setVisible={setModalDeleteKegiatan}
        visible={modalDeleteKegiata}
      />
    </View>
  );
}
