import { IconPlus } from "@/components/icons";
import { Button } from "@/components/ui/button";
import ImageModal from "@/components/ui/imageModal";
import Loader from "@/components/ui/loader";
import ModalAction from "@/components/ui/modalAction";
import ModalSuccess from "@/components/ui/modalSuccess";
import ModalSwipe from "@/components/ui/modalSwipe";
import TextInput from "@/components/ui/textInput";
import { Typography } from "@/components/ui/typography";
import UploadFoto from "@/components/ui/uploadFileFoto";
import View from "@/components/ui/view";
import { BASE_URL_SIPP } from "@/constants";
import { useAppTheme } from "@/context";
import {
  useGetDetailAnggaranDokumentasi,
  usePostDetailAnggaranDokumentasi,
  usePutDetailAnggaranDokumentasi,
} from "@/services/sipp";
import React, { useState } from "react";
import { Dimensions } from "react-native";
import * as Progress from "react-native-progress";
import Toast from "react-native-toast-message";

export default function TabDocumentation({ id }: { id: string }) {
  const { Colors } = useAppTheme();

  const [modalDokumentasi, setModalDokumentasi] = useState<boolean>(false);
  const [modalDelete, setModalDelete] = useState<boolean>(false);
  const [fileDokumentasi, setFileDokumentasi] = useState<string>("");

  const getDokumentasi = useGetDetailAnggaranDokumentasi(id);
  const dokumentasi = getDokumentasi.data?.data;

  const [dataInputDoc, setDataInputDoc] = useState<{
    name: string;
    keterangan: string;
    id_doc: number;
  }>({ name: "", keterangan: "", id_doc: 0 });

  const calculateProgress =
    dokumentasi?.dokumentasi.reduce(
      (total, item) => total + Number.parseFloat(item.keterangan),
      0 // Nilai awal dari total
    ) || 0;

  const addDocumentationMutation = usePostDetailAnggaranDokumentasi();
  const updateDocumentationMutation = usePutDetailAnggaranDokumentasi();

  const handleAddDoc = () => {
    if (fileDokumentasi === "")
      return Toast.show({
        type: "error",
        text1: "Opps Gambar Kosong!",
        text2: "Mohon pilih gambar terlebih dahulu",
      });

    const formData = new FormData();

    const imageProfile: any = {
      name: "image_profile",
      type: "image/jpeg", // Pastikan MIME type sesuai
      uri: fileDokumentasi,
    };

    formData.append("name", dataInputDoc.name);
    formData.append("keterangan", dataInputDoc.keterangan);
    formData.append("files", imageProfile);

    addDocumentationMutation.mutate(
      {
        id,
        data: formData,
      },
      {
        onSuccess: async (response) => {
          Toast.show({
            type: "success",
            text1: "Berhasi Update Data!",
            text2: "Tamdan Data Dokumentasi",
          });
        },
        onError: (error) => {
          Toast.show({
            type: "error",
            text1: "Gagal Update Data!",
            text2: "Tambah Data Dokumentasi",
          });
        },
      }
    );
  };

  const handleDeleteDoc = () => {};

  const handleUpdatedDoc = () => {
    const formData = new FormData();

    const imageProfile: any = {
      name: "image_profile",
      type: "image/jpeg", // Pastikan MIME type sesuai
      uri: fileDokumentasi,
    };
    if (fileDokumentasi === "") formData.append("files", imageProfile);
    formData.append("name", dataInputDoc.name);
    formData.append("keterangan", dataInputDoc.keterangan);

    updateDocumentationMutation.mutate(
      {
        id,
        data: formData,
        id_doc: dataInputDoc.id_doc,
      },
      {
        onSuccess: async (response) => {
          Toast.show({
            type: "success",
            text1: "Berhasi Update Data!",
            text2: "Tamdan Data Dokumentasi",
          });
        },
        onError: (error) => {
          Toast.show({
            type: "error",
            text1: "Gagal Update Data!",
            text2: "Tambah Data Dokumentasi",
          });
        },
      }
    );
  };

  const handleEditDocModal = (doc_id: number) => {
    const getData = dokumentasi?.dokumentasi.find((f) => f.id === doc_id);
    if (getData) {
      setDataInputDoc({
        id_doc: getData?.id,
        keterangan: getData?.keterangan,
        name: getData?.name,
      });
      setFileDokumentasi(`${BASE_URL_SIPP}/uploads/${getData.files[0].path}`);
      setModalDokumentasi(true);
    }
  };

  const handleAddDocModal = () => {
    setDataInputDoc({
      id_doc: 0,
      keterangan: "",
      name: "",
    });
    setFileDokumentasi("");
    setModalDokumentasi(true);
  };

  const handleDeleteModal = (doc_id: number) => {
    const getData = dokumentasi?.dokumentasi.find((f) => f.id === doc_id);
    if (getData) {
      setDataInputDoc({
        id_doc: getData?.id,
        keterangan: getData?.keterangan,
        name: getData?.name,
      });
      setModalDelete(true);
    }
  };

  return (
    <View
      style={{
        paddingHorizontal: 20,
        gap: 15,
      }}
    >
      <Button onPress={handleAddDocModal}>
        <IconPlus color="Background 100" />
        <Typography color="Background 100">Tambah Dokumentasi</Typography>
      </Button>

      <View>
        {dokumentasi?.dokumentasi.map((data, index) => (
          <View
            key={index}
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
                padding: 15,
              }}
            >
              <Typography color="Background 100">
                Dokumentasi {index + 1}
              </Typography>
            </View>
            <View
              style={[
                {
                  flexDirection: "row",
                  padding: 15,
                  alignItems: "center",
                  borderColor: Colors["Line 400"],
                  borderBottomWidth: 1,
                },
              ]}
            >
              <Typography
                style={{ width: "33%", textAlign: "left" }}
                fontFamily="Poppins-Light"
              >
                No
              </Typography>
              <Typography fontFamily="Poppins-Light">{index + 1}</Typography>
            </View>
            <View
              style={[
                {
                  flexDirection: "row",
                  padding: 15,
                  alignItems: "center",
                  borderColor: Colors["Line 400"],
                  borderBottomWidth: 1,
                },
              ]}
            >
              <Typography
                style={{ width: "33%", textAlign: "left" }}
                fontFamily="Poppins-Light"
              >
                Minggu-Ke
              </Typography>
              <Typography fontFamily="Poppins-Light">{data.name}</Typography>
            </View>
            <View
              style={[
                {
                  flexDirection: "row",
                  padding: 15,
                  alignItems: "center",
                  borderColor: Colors["Line 400"],
                  borderBottomWidth: 1,
                },
              ]}
            >
              <Typography
                style={{ width: "33%", textAlign: "left" }}
                fontFamily="Poppins-Light"
              >
                Progres (%)
              </Typography>
              <Typography fontFamily="Poppins-Light">
                {data.keterangan}
              </Typography>
            </View>
            <View
              style={[
                {
                  flexDirection: "row",
                  padding: 15,
                  alignItems: "center",
                },
              ]}
            >
              <Typography
                style={{ width: "33%", textAlign: "left" }}
                fontFamily="Poppins-Light"
              >
                Aksi
              </Typography>
              <View
                style={{
                  flexDirection: "row",
                  gap: 10,
                  justifyContent: "center",
                }}
              >
                <Button
                  style={{ width: Dimensions.get("window").width / 3 - 35 }}
                  onPress={() => handleEditDocModal(data.id)}
                >
                  <Typography
                    color="Background 100"
                    fontSize={12}
                    style={{ textAlignVertical: "center" }}
                  >
                    Edit
                  </Typography>
                </Button>
                <Button
                  color="Error 600"
                  style={{ width: Dimensions.get("window").width / 3 - 25 }}
                  onPress={() => handleDeleteModal(data.id)}
                >
                  <Typography
                    color="Background 100"
                    fontSize={12}
                    style={{ textAlignVertical: "center" }}
                  >
                    Hapus
                  </Typography>
                </Button>
              </View>
            </View>
          </View>
        ))}
      </View>

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
            padding: 15,
          }}
        >
          <Typography color="Background 100">Gallery</Typography>
        </View>
        <View
          style={[
            {
              flexDirection: "row",
              padding: 15,
              alignItems: "center",
              borderColor: Colors["Line 400"],
              borderBottomWidth: 1,
            },
          ]}
        >
          <Typography
            style={{ width: "33%", textAlign: "left" }}
            fontFamily="Poppins-Light"
          >
            Progres
          </Typography>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Progress.Bar
              progress={calculateProgress / 100}
              width={Dimensions.get("window").width / 2 - 50}
              height={25}
            />
            <Typography fontFamily="Poppins-Light">
              {calculateProgress}%
            </Typography>
          </View>
        </View>
        <View
          style={[
            {
              flexDirection: "row",
              padding: 15,
              alignItems: "center",
            },
          ]}
        >
          <Typography
            style={{
              width: "33%",
              textAlign: "left",
              textAlignVertical: "center",
            }}
            fontFamily="Poppins-Light"
          >
            Dokumentasi
          </Typography>
          <View
            style={{
              alignItems: "center",
              gap: 10,
            }}
          >
            {dokumentasi?.dokumentasi.map((data, index) => (
              <ImageModal
                key={index}
                source={{
                  uri: `${BASE_URL_SIPP}/uploads/${data.files[0].path}`,
                }}
                style={{
                  height: 100,
                  width: Dimensions.get("window").width / 1.9,
                }}
              />
            ))}
          </View>
        </View>
      </View>

      <ModalSwipe
        modalVisible={modalDokumentasi}
        setModalVisible={setModalDokumentasi}
      >
        <View style={{ gap: 10 }}>
          <Typography
            style={{ marginVertical: 10 }}
            fontFamily="Poppins-Medium"
            fontSize={18}
            color="Info 500"
          >
            Data Dokumentasi
          </Typography>
          <TextInput
            label="Minggu Ke"
            placeholder="Minggu Ke"
            keyboardType="default"
            borderRadius={17}
            color="Info 500"
            value={dataInputDoc.name}
            onChangeText={(value) =>
              setDataInputDoc({ ...dataInputDoc, name: value })
            }
          />
          <TextInput
            label="Progres (%)"
            placeholder="%"
            keyboardType="default"
            borderRadius={17}
            color="Info 500"
            value={dataInputDoc.keterangan}
            onChangeText={(value) =>
              setDataInputDoc({ ...dataInputDoc, keterangan: value })
            }
          />
          <UploadFoto
            label="Upload Foto Dokumentasi"
            image={fileDokumentasi}
            setImage={setFileDokumentasi}
          />
          <Button
            style={{ marginTop: 20 }}
            onPress={
              dataInputDoc.id_doc !== 0 ? handleAddDoc : handleUpdatedDoc
            }
            disabled={addDocumentationMutation.isPending}
          >
            {addDocumentationMutation.isPending ? (
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
        onAction={handleDeleteDoc}
        setVisible={setModalDelete}
        visible={modalDelete}
      />
    </View>
  );
}
