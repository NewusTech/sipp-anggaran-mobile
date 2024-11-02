import { IconPlus } from "@/components/icons";
import { Button } from "@/components/ui/button";
import ImageModal from "@/components/ui/imageModal";
import ModalSwipe from "@/components/ui/modalSwipe";
import TextInput from "@/components/ui/textInput";
import { Typography } from "@/components/ui/typography";
import UploadFoto from "@/components/ui/uploadFileFoto";
import View from "@/components/ui/view";
import { useAppTheme } from "@/context";
import React, { useState } from "react";
import { Dimensions } from "react-native";
import * as Progress from "react-native-progress";

export default function TabDocumentation() {
  const { Colors } = useAppTheme();

  const [modalDokumentasi, setModalDokumentasi] = useState<boolean>(false);
  const [fileBukti, setFileBukti] = useState<string>("");

  return (
    <View
      style={{
        paddingHorizontal: 20,
        gap: 15,
      }}
    >
      <Button onPress={() => setModalDokumentasi(true)}>
        <IconPlus color="Background 100" />
        <Typography color="Background 100">Tambah Dokumentasi</Typography>
      </Button>
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
          <Typography color="Background 100">Pengawas</Typography>
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
          <Typography fontFamily="Poppins-Light">1</Typography>
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
          <Typography fontFamily="Poppins-Light">1</Typography>
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
          <Typography fontFamily="Poppins-Light">35.12</Typography>
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
            <Button style={{ width: Dimensions.get("window").width / 3 - 35 }}>
              <Typography
                color="Background 100"
                fontSize={12}
                style={{ textAlignVertical: "center" }}
              >
                Hubungi
              </Typography>
            </Button>
            <Button
              color="Error 600"
              style={{ width: Dimensions.get("window").width / 3 - 25 }}
            >
              <Typography
                color="Background 100"
                fontSize={12}
                style={{ textAlignVertical: "center" }}
              >
                Hubungi
              </Typography>
            </Button>
          </View>
        </View>
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
              progress={0.3}
              width={Dimensions.get("window").width / 2 - 50}
              height={25}
            />
            <Typography fontFamily="Poppins-Light">65.12%</Typography>
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
            <ImageModal
              source={require("@/assets/images/dummy1.jpg")}
              style={{
                height: 100,
                width: Dimensions.get("window").width / 1.9,
              }}
            />
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
            //   value={field.value}
            //   onBlur={field.onBlur}
            //   onChangeText={field.onChange}
            //   errorMessage={fieldState.error?.message}
          />
          <TextInput
            label="Progres (%)"
            placeholder="%"
            keyboardType="default"
            borderRadius={17}
            color="Info 500"
            //   value={field.value}
            //   onBlur={field.onBlur}
            //   onChangeText={field.onChange}
            //   errorMessage={fieldState.error?.message}
          />
          <UploadFoto
            label="Upload Foto Dokumentasi"
            image={fileBukti}
            setImage={setFileBukti}
          />
        </View>
      </ModalSwipe>
    </View>
  );
}
