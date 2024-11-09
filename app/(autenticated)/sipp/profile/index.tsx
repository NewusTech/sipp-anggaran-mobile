import { IconCamera } from "@/components/icons";
import TabInformasi from "@/components/screen/profile/tabInformasi";
import TabPassword from "@/components/screen/profile/tabPassword";
import { Button } from "@/components/ui/button";
import ImageModal from "@/components/ui/imageModal";
import ModalAction from "@/components/ui/modalAction";
import Separator from "@/components/ui/separator";
import { Typography } from "@/components/ui/typography";
import View from "@/components/ui/view";
import { BASE_URL_SIPP } from "@/constants";
import { useAppTheme } from "@/context";
import { useGetProfile } from "@/services";
import { handleLogoutSession } from "@/services/auth.service";
import { useAuthActions } from "@/store/sipp";
import React, { useEffect, useState } from "react";
import { Dimensions, Pressable, ScrollView } from "react-native";

export default function index() {
  const { Colors } = useAppTheme();

  const [activeTab, setActiveTab] = useState<"informasi" | "password">(
    "informasi"
  );

  const [modalLogout, setModalLogout] = useState<boolean>(false);

  const getUser = useGetProfile();
  const user = getUser.data?.data;

  const { setProfile } = useAuthActions();

  const handleLogout = () => {
    handleLogoutSession();
  };

  useEffect(() => {
    setActiveTab("informasi");
  }, []);

  useEffect(() => {
    if (user) {
      setProfile(user);
    }
  }, [user]);

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ backgroundColor: "white" }}
      scrollEnabled={true}
    >
      <View
        style={{
          backgroundColor: Colors["Info 500"],
          height: 259,
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 20,
        }}
      >
        <View style={{ position: "relative" }}>
          <ImageModal
            source={
              getUser.data?.data
                ? { uri: `${BASE_URL_SIPP}/uploads/${getUser.data.data.image}` }
                : require("@/assets/images/dummy1.jpg")
            }
            style={{
              width: 80,
              height: 80,
              borderRadius: 100,
              borderWidth: 2,
              borderColor: "white",
              backgroundColor: "white",
            }}
          />
          <Pressable
            style={{
              backgroundColor: "white",
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 100,
              position: "absolute",
              bottom: 0,
              right: -10,
            }}
          >
            <IconCamera width={20} height={20} color="Info 500" />
          </Pressable>
        </View>
        <Typography
          fontSize={18}
          style={{ textAlign: "center", marginTop: 20 }}
          color="Background 100"
        >
          {getUser.data?.data.name || "-"}
        </Typography>
        <Typography
          fontSize={14}
          fontFamily="Poppins-Light"
          style={{ textAlign: "center" }}
          color="Background 100"
        >
          {getUser.data?.data.email || "-"}
        </Typography>
      </View>
      {/*  */}
      <View style={{ padding: 20, marginTop: 20 }}>
        <View style={{}}>
          <View
            backgroundColor="Info 500"
            style={{
              padding: 15,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}
          >
            <Typography color="Background 100" fontSize={16}>
              Tentang Saya
            </Typography>
          </View>
          <View
            style={{
              padding: 15,
              gap: 10,
              borderColor: Colors["Text 500"],
              borderWidth: 1,
              borderTopWidth: 0,
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
            }}
          >
            <View style={{ flexDirection: "row", gap: 10 }}>
              <IconCamera />
              <Typography>Alamat</Typography>
            </View>
            <Typography>
              Jl. Salim Batubara No.118, Kupang Teba, Kec. Tlk. Betung Utara,
              Kota Bandar Lampung, Lampung 35212
            </Typography>
            <Separator />
            <View style={{ flexDirection: "row", gap: 10 }}>
              <IconCamera />
              <Typography>Pengguna Sejak</Typography>
            </View>
            <Typography>2024-05-28 11:49:27</Typography>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: Colors["Text 500"],
            borderRadius: 15,
            marginTop: 20,
          }}
        >
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: Colors["Text 500"],
              flexDirection: "row",
              padding: 15,
              gap: 10,
            }}
          >
            <Pressable
              style={{
                backgroundColor:
                  activeTab === "informasi"
                    ? Colors["Info 500"]
                    : Colors["Background 100"],
                padding: 15,
                borderRadius: 15,
                width: Dimensions.get("window").width / 2 - 40,
              }}
              onPress={() => setActiveTab("informasi")}
            >
              <Typography
                color={
                  activeTab === "informasi" ? "Background 100" : "Info 500"
                }
                style={{ textAlign: "center" }}
              >
                Informasi Pribadi
              </Typography>
            </Pressable>
            <Pressable
              style={{
                backgroundColor:
                  activeTab === "password"
                    ? Colors["Info 500"]
                    : Colors["Background 100"],
                padding: 15,
                borderRadius: 15,
                width: Dimensions.get("window").width / 2 - 40,
              }}
              onPress={() => setActiveTab("password")}
            >
              <Typography
                color={activeTab === "password" ? "Background 100" : "Info 500"}
                style={{ textAlign: "center" }}
              >
                Password
              </Typography>
            </Pressable>
          </View>
          {activeTab === "informasi" && <TabInformasi />}
          {activeTab === "password" && <TabPassword />}
          {/*  */}
        </View>
        <View
          style={{
            marginTop: 20,
            borderWidth: 1,
            borderColor: Colors["Line 300"],
            borderRadius: 15,
            padding: 10,
          }}
        >
          <Button color="Error 600" onPress={() => setModalLogout(true)}>
            Logout
          </Button>
        </View>
      </View>
      <ModalAction
        title="Yakin Ingin Keluar dari akun ini?"
        isLoading={false}
        onAction={handleLogout}
        setVisible={setModalLogout}
        visible={modalLogout}
      />
    </ScrollView>
  );
}
