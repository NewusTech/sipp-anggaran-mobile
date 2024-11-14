import Accordion from "@/components/ui/accordion";
import Header from "@/components/header";
import { IconCaretDown, IconPlus } from "@/components/icons";
import { SelectInput } from "@/components/ui/selectInput";
import { Typography } from "@/components/ui/typography";
import View from "@/components/ui/view";
import { useAppTheme } from "@/context";
import { getLastYears, useIsPermission } from "@/helper";
import React, { useState } from "react";
import { Dimensions, Pressable, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Modals from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { router } from "expo-router";
import {
  useDeleteKegiatan,
  useGetKegiatan,
  usePutKegiatanVerifikasiAdmin,
  usePutKegiatanVerifikasiPengawas,
} from "@/services/sipp";
import { formatCurrency } from "@/utils";
import Loader from "@/components/ui/loader";
import ModalAction from "@/components/ui/modalAction";
import Toast from "react-native-toast-message";
import Separator from "@/components/ui/separator";
import ModalSwipe from "@/components/ui/modalSwipe";
import TextInput from "@/components/ui/textInput";
import { Checkbox } from "@/components/ui/checkBox";
import AccordionGroup from "@/components/ui/accordion/AccordionGroup";

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
  const hasVerifPengawas = !isPermission("verifikasi pengawas");
  const hasKomentarPengawas = isPermission("komentar pengawas");
  const hasVerifAdmin = !isPermission("verifikasi admin");
  const hasKomentarAdmin = isPermission("komentar admin");

  const getKegiatan = useGetKegiatan(`year=${filterYear}`);

  const [modalDeleteKegiata, setModalDeleteKegiatan] = useState<boolean>(false);
  const [dataDeleteKegiatan, setDataDeleteKegiatann] = useState<string>("");
  const [modalVerifAdmin, setModalVerifAdmin] = useState<boolean>(false);
  const [modalVerifPengawas, setModalVerifPengawas] = useState<boolean>(false);

  const getHeaderColor = (index: number) => {
    const colors = [
      "#F8296B",
      "#8836FC",
      "#9C27B0",
      "#009688",
      "#3F51B5",
      "#FC6736",
      "#396AFF",
      "#FF9800",
      "#2196F3",
      "#8BC34A",
    ];
    return colors[index < colors.length ? index : colors.length - index];
  };

  const [payloadVerfAdmin, setPayloadVerifAdmin] = useState({
    verifikasi_admin: false,
    komentar_admin: "",
    id: "",
  });
  const [payloadVerfPengawas, setPayloadVerifPengawas] = useState({
    verifikasi_pengawas: false,
    komentar_pengawas: "",
    id: "",
  });

  const deleteKegiatanMutation = useDeleteKegiatan();
  const verifPengawasMutation = usePutKegiatanVerifikasiPengawas();
  const verifAdminMutation = usePutKegiatanVerifikasiAdmin();

  const handleVerifPengawas = (data: {
    id: string;
    verifikasi_pengawas: boolean;
    komentar_pengawas: string;
  }) => {
    setPayloadVerifPengawas(data);
    setModalVerifPengawas(true);
  };
  const handleVerifAdmin = (data: {
    id: string;
    verifikasi_admin: boolean;
    komentar_admin: string;
  }) => {
    setPayloadVerifAdmin(data);
    setModalVerifAdmin(true);
  };

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
          text2: "Delete Kegiatan",
        });
      },
      onError: (error) => {
        Toast.show({
          type: "error",
          text1: "Gagal!",
          text2: "Delete Kegiatan",
        });
      },
    });
  };

  const handleActionVerifPengawas = () => {
    verifPengawasMutation.mutate(payloadVerfPengawas, {
      onSuccess: async (response) => {
        Toast.show({
          type: "success",
          text1: "Sukses!",
          text2: "Verifikasi Pengawas",
        });
      },
      onError: (error) => {
        Toast.show({
          type: "error",
          text1: "Gagal!",
          text2: "Verifikasi Pengawas",
        });
      },
    });
  };
  const handleActionVerifAdmin = () => {
    verifAdminMutation.mutate(payloadVerfAdmin, {
      onSuccess: async (response) => {
        Toast.show({
          type: "success",
          text1: "Sukses!",
          text2: "Verifikasi Admin",
        });
      },
      onError: (error) => {
        Toast.show({
          type: "error",
          text1: "Gagal!",
          text2: "Verifikasi Admin",
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
          <View style={{}} />
          {!getKegiatan.isFetching &&
            getKegiatan.data?.data &&
            getKegiatan.data.data.map((data, index) => (
              <View
                key={data.name}
                style={{
                  marginTop: 15,
                  borderWidth: 1,
                  padding: 15,
                  borderRadius: 15,
                  borderColor: Colors["Line 500"],
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 15,
                    backgroundColor: getHeaderColor(index),
                    borderRadius: 15,
                  }}
                >
                  <Typography
                    fontFamily="Poppins-Medium"
                    fontSize={16}
                    color="Background 100"
                  >
                    {data.name}
                  </Typography>
                </View>
                <AccordionGroup>
                  {data.kegiatan.map((kegiatan, index) => (
                    <Accordion
                      index={index}
                      key={index + "kegiatan"}
                      style={{
                        marginTop: 15,
                        borderWidth: 1,
                        padding: 10,
                        borderRadius: 15,
                        borderColor: Colors["Line 500"],
                      }}
                      header={(isOpen) => (
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            padding: 15,
                            borderRadius: 15,
                            backgroundColor: Colors["Background 500"],
                          }}
                        >
                          <Typography
                            fontSize={16}
                            style={{ width: "90%" }}
                            fontFamily="Poppins-Medium"
                            color="Background 100"
                          >
                            Kegiatan {index + 1}
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
                      <View style={{ padding: 8, gap: 5 }}>
                        <Typography
                          fontFamily="Poppins-Regular"
                          fontSize={15}
                          color="Text 900"
                          style={{ textAlign: "left" }}
                        >
                          {kegiatan.title}
                        </Typography>
                        {kegiatan.sub_kegiatan.map((subKegiatan, index) => (
                          <View key={index + "subKegiatan"} style={{ gap: 10 }}>
                            <Separator style={{ marginVertical: 10 }} />
                            <Typography
                              fontFamily="Poppins-Regular"
                              fontSize={16}
                              color="Background 100"
                              style={{
                                textAlign: "center",
                                borderRadius: 15,
                                padding: 10,
                                textAlignVertical: "bottom",
                                backgroundColor: getHeaderColor(index),
                              }}
                            >
                              Sub Kegiatan
                            </Typography>
                            <Typography
                              fontFamily="Poppins-Regular"
                              fontSize={15}
                              color="Text 900"
                              style={{ textAlign: "left" }}
                            >
                              {subKegiatan.title}
                            </Typography>
                            <AccordionGroup style={{ gap: 10 }}>
                              {subKegiatan.detail.map((detail, index) => {
                                const _verifAdmin =
                                  detail.verifikasi_admin === "true"
                                    ? true
                                    : false;
                                const _verifPengawas =
                                  detail.verifikasi_pengawas === "true"
                                    ? true
                                    : false;
                                return (
                                  <Accordion
                                    index={index}
                                    key={index + "detail"}
                                    style={{
                                      borderWidth: 1,
                                      borderRadius: 15,
                                      backgroundColor: "white",
                                      borderColor: Colors["Line 500"],
                                    }}
                                    header={(isOpen) => (
                                      <View
                                        style={{
                                          flexDirection: "row",
                                          justifyContent: "space-between",
                                          padding: 10,
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
                                        paddingHorizontal: 10,
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
                                          <Typography fontSize={13}>
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
                                          <Typography fontSize={13}>
                                            {formatCurrency(
                                              Number.parseFloat(
                                                detail.nilai_kontrak
                                              )
                                            )}
                                          </Typography>
                                        </View>
                                      </View>
                                      <View style={{}}>
                                        <Typography
                                          fontFamily="Poppins-Light"
                                          color="Text 700"
                                        >
                                          Verifikasi (Admin)
                                        </Typography>
                                        <Typography
                                          fontFamily="Poppins-Regular"
                                          color={
                                            _verifAdmin
                                              ? "Info 500"
                                              : "Text 500"
                                          }
                                        >
                                          {_verifAdmin ? "Telah" : "Belum"}{" "}
                                          Diverifikasi
                                        </Typography>
                                      </View>
                                      <View style={{}}>
                                        <Typography
                                          fontFamily="Poppins-Light"
                                          color="Text 700"
                                        >
                                          Komentar
                                        </Typography>
                                        <Typography
                                          fontFamily="Poppins-Regular"
                                          color={"Text 900"}
                                          style={{
                                            borderWidth: 1,
                                            borderColor: Colors["Line 500"],
                                            padding: 10,
                                            borderRadius: 10,
                                            minHeight: 90,
                                            textAlignVertical: "top",
                                          }}
                                        >
                                          {detail.komentar_admin || "-"}
                                        </Typography>
                                      </View>
                                      <View style={{ marginTop: 5 }}>
                                        <Typography
                                          fontFamily="Poppins-Light"
                                          color="Text 700"
                                        >
                                          Verifikasi (Pengawas)
                                        </Typography>
                                        <Typography
                                          fontFamily="Poppins-Regular"
                                          color={
                                            _verifPengawas
                                              ? "Info 500"
                                              : "Text 500"
                                          }
                                        >
                                          {_verifPengawas ? "Telah" : "Belum"}{" "}
                                          Diverifikasi
                                        </Typography>
                                      </View>
                                      <View style={{}}>
                                        <Typography
                                          fontFamily="Poppins-Light"
                                          color="Text 700"
                                        >
                                          Komentar
                                        </Typography>
                                        <Typography
                                          fontFamily="Poppins-Regular"
                                          color={"Text 900"}
                                          style={{
                                            borderWidth: 1,
                                            borderColor: Colors["Line 500"],
                                            padding: 10,
                                            borderRadius: 10,
                                            minHeight: 90,
                                            textAlignVertical: "top",
                                          }}
                                        >
                                          {detail.komentar_pengawas || "-"}
                                        </Typography>
                                      </View>
                                      <View
                                        style={{
                                          flexDirection: "row",
                                          justifyContent: "space-between",
                                          gap: 5,
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
                                          style={{
                                            width:
                                              Dimensions.get("window").width /
                                                3 -
                                              50,
                                            minHeight: 40,
                                            borderRadius: 10,
                                          }}
                                          color="Primary 500"
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
                                          style={{
                                            width:
                                              Dimensions.get("window").width /
                                                3 -
                                              50,
                                            minHeight: 40,
                                            borderRadius: 10,
                                          }}
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
                                          style={{
                                            width:
                                              Dimensions.get("window").width /
                                                3 -
                                              50,
                                            minHeight: 40,
                                            borderRadius: 10,
                                          }}
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
                                      <Button
                                        disabled={hasVerifPengawas}
                                        onPress={() =>
                                          handleVerifPengawas({
                                            id: detail.id.toString(),
                                            komentar_pengawas:
                                              detail.komentar_pengawas || "",
                                            verifikasi_pengawas:
                                              detail.verifikasi_pengawas ===
                                              "true",
                                          })
                                        }
                                        color="Info 500"
                                        style={{
                                          minHeight: 40,
                                          borderRadius: 10,
                                        }}
                                      >
                                        Verifikasi Pengawas
                                      </Button>
                                      <Button
                                        disabled={hasVerifAdmin}
                                        variant="secondary"
                                        onPress={() =>
                                          handleVerifAdmin({
                                            id: detail.id.toString(),
                                            komentar_admin:
                                              detail.komentar_admin || "",
                                            verifikasi_admin:
                                              detail.verifikasi_admin ===
                                              "true",
                                          })
                                        }
                                        color="Info 500"
                                        textColor="Info 500"
                                        style={{
                                          minHeight: 40,
                                          borderRadius: 10,
                                        }}
                                      >
                                        Verifikasi Admin
                                      </Button>
                                    </View>
                                  </Accordion>
                                );
                              })}
                            </AccordionGroup>
                          </View>
                        ))}
                      </View>
                    </Accordion>
                  ))}
                </AccordionGroup>
              </View>
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
          disabled
          style={{ borderRadius: 15 }}
          variant="secondary"
          textColor="Info 500"
        >
          Import
        </Button>
      </Modals>
      {/* pengawas */}
      <ModalSwipe
        modalVisible={modalVerifPengawas}
        setModalVisible={setModalVerifPengawas}
      >
        <View>
          <Pressable
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 15,
              paddingVertical: 15,
              borderRadius: 15,
              borderWidth: 1,
              borderColor: Colors["Line 500"],
              marginBottom: 10,
            }}
            onPress={() => {
              setPayloadVerifPengawas({
                ...payloadVerfPengawas,
                verifikasi_pengawas: !payloadVerfPengawas.verifikasi_pengawas,
              });
            }}
          >
            <Typography fontSize={16} style={{ verticalAlign: "middle" }}>
              Verifikasi Pengawas
            </Typography>
            <Checkbox
              selected={payloadVerfPengawas.verifikasi_pengawas}
              borderRadius={2}
              width={24}
              height={24}
            />
          </Pressable>
          <TextInput
            label="Komentar"
            placeholder="Masukan Komentar"
            keyboardType="default"
            borderRadius={17}
            color="Info 500"
            value={payloadVerfPengawas.komentar_pengawas}
            onChangeText={(value) =>
              setPayloadVerifPengawas({
                ...payloadVerfPengawas,
                komentar_pengawas: value,
              })
            }
            multiline
            style={{
              textAlignVertical: "top",
              minHeight: 120,
            }}
            editable={hasKomentarPengawas}
          />
          <Button
            style={{ marginTop: 10 }}
            disabled={verifPengawasMutation.isPending}
            onPress={handleActionVerifPengawas}
          >
            {verifPengawasMutation.isPending ? (
              <Loader color="Background 100" />
            ) : (
              "Simpan"
            )}
          </Button>
        </View>
      </ModalSwipe>
      {/* Admin */}
      <ModalSwipe
        modalVisible={modalVerifAdmin}
        setModalVisible={setModalVerifAdmin}
      >
        <View>
          <Pressable
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 15,
              paddingVertical: 15,
              borderRadius: 15,
              borderWidth: 1,
              borderColor: Colors["Line 500"],
              marginBottom: 10,
            }}
            onPress={() => {
              setPayloadVerifAdmin({
                ...payloadVerfAdmin,
                verifikasi_admin: !payloadVerfAdmin.verifikasi_admin,
              });
            }}
          >
            <Typography fontSize={16} style={{ verticalAlign: "middle" }}>
              Verifikasi Admin
            </Typography>
            <Checkbox
              selected={payloadVerfAdmin.verifikasi_admin}
              borderRadius={2}
              width={24}
              height={24}
            />
          </Pressable>
          <TextInput
            label="Komentar"
            placeholder="Masukan Komentar"
            keyboardType="default"
            borderRadius={17}
            color="Info 500"
            value={payloadVerfAdmin.komentar_admin}
            onChangeText={(value) =>
              setPayloadVerifAdmin({
                ...payloadVerfAdmin,
                komentar_admin: value,
              })
            }
            multiline
            style={{
              textAlignVertical: "top",
              minHeight: 120,
            }}
            editable={hasKomentarAdmin}
          />
          <Button
            style={{ marginTop: 10 }}
            disabled={verifAdminMutation.isPending}
            onPress={handleActionVerifAdmin}
          >
            {verifAdminMutation.isPending ? (
              <Loader color="Background 100" />
            ) : (
              "Simpan"
            )}
          </Button>
        </View>
      </ModalSwipe>
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
