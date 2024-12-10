import { IconPlus } from "@/components/icons";
import Appbar from "@/components/ui/appBar";
import { Button } from "@/components/ui/button";
import ModalSwipe from "@/components/ui/modalSwipe";
import PaginatedView from "@/components/ui/pagination";
import { SearchBox } from "@/components/ui/searchBox";
import { Typography } from "@/components/ui/typography";
import View from "@/components/ui/view";
import { useAppTheme } from "@/context";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Dimensions, Pressable, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function index() {
  const router = useRouter();
  const { Colors } = useAppTheme();
  const inset = useSafeAreaInsets();
  const [filterSearch, setFilterSearch] = useState<string>("");
  const [modalModified, setModalModified] = useState<boolean>(true);

  return (
    <View style={{ flex: 1 }} backgroundColor="Background 100">
      <Appbar
        title={"Progres Fisik"}
        variant="light"
        backIconPress={() => router.back()}
      />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingVertical: 20,
          gap: 20,
        }}
      >
        <SearchBox
          placeholder="Cari Kegiatan"
          value={filterSearch}
          onChangeText={setFilterSearch}
        />
        <Button>
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

        <View style={{}}>
          <Typography
            style={{
              width: "100%",
              paddingVertical: 15,
              paddingHorizontal: 20,
              backgroundColor: Colors["Info 500"],
              borderTopStartRadius: 20,
              borderTopEndRadius: 20,
              borderWidth: 1,
              borderColor: Colors["Info 500"],
            }}
            fontSize={16}
            color="Background 100"
          >
            Data Bidang
          </Typography>
          <View
            style={{
              borderWidth: 1,
              borderColor: Colors["Line 500"],
              paddingHorizontal: 20,
              paddingTop: 10,
              paddingBottom: 20,
            }}
          >
            <View style={{ marginVertical: 5, width: "50%" }}>
              <Typography
                fontFamily="Poppins-Light"
                fontSize={14}
                color="Text 500"
              >
                Kode
              </Typography>
              <Typography fontFamily="Poppins-Regular" fontSize={15}>
                Kode
              </Typography>
            </View>
            <View style={{ marginVertical: 5, width: "50%" }}>
              <Typography
                fontFamily="Poppins-Light"
                fontSize={14}
                color="Text 500"
              >
                Nama Bidang
              </Typography>
              <Typography fontFamily="Poppins-Regular" fontSize={15}>
                Nama Bidang
              </Typography>
            </View>
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                marginTop: 10,
                justifyContent: "center",
              }}
            >
              <Button
                style={{ width: Dimensions.get("window").width / 2 - 45 }}
                color="Success 700"
              >
                Edit
              </Button>
              <Button
                style={{ width: Dimensions.get("window").width / 2 - 45 }}
                color="Error 500"
              >
                Hapus
              </Button>
            </View>
          </View>
        </View>
        {/* paginate */}
        {/* modals */}
        <ModalSwipe
          modalVisible={modalModified}
          setModalVisible={setModalModified}
        >
          <View style={{ }}>
            <Typography
              style={{
                width: "100%",
                paddingBottom: 10,
              }}
              fontSize={17}
            >
              Data Bidang
            </Typography>
          </View>
        </ModalSwipe>
      </ScrollView>
    </View>
  );
}
