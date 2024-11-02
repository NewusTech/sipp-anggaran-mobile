import { IconTools } from "@/components/icons/IconTools";
import { Typography } from "@/components/ui/typography";
import View from "@/components/ui/view";
import { useRouter } from "expo-router";
import React from "react";
import { Dimensions, Image, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function index() {
  const inset = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View
      backgroundColor="Background 100"
      style={{ paddingTop: inset.top + 20, flex: 1, paddingHorizontal: 10 }}
    >
      <View style={{ flexDirection: "row", justifyContent: "center", gap: 10 }}>
        <View
          style={{
            width: Dimensions.get("window").width / 2,
            alignItems: "center",
          }}
        >
          <Image
            source={require("@/assets/images/logo-kab-tubaba.png")}
            style={{
              width: 90,
              height: 120,
              marginBottom: 10,
              resizeMode: "center",
            }}
          />
          <Typography
            fontFamily="Poppins-Medium"
            fontSize={15}
            style={{ textAlign: "center" }}
          >
            Sistem Informasi
          </Typography>
          <Typography fontSize={14} style={{ textAlign: "center" }}>
            Pelaksanaan, Pengawasan dan Pelaporan
          </Typography>
        </View>
        <View
          style={{
            width: Dimensions.get("window").width / 2 - 40,
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Image
            source={require("@/assets/images/logo-pupr-1.jpg")}
            style={{
              width: 90,
              height: 120,
              marginBottom: 10,
              resizeMode: "center",
            }}
          />
          <Typography
            fontSize={14}
            style={{ textAlign: "center", textAlignVertical: "center" }}
          >
            Dinas Pekerjaan Umum dan Penataan Ruang
          </Typography>
        </View>
      </View>
      <Image
        source={require("@/assets/images/ptea-tubaba.png")}
        style={{
          width: "100%",
          height: 220,
          marginBottom: 10,
          resizeMode: "center",
        }}
      />
      <View
        style={{
          flexDirection: "row",
          gap: 20,
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Pressable
          style={{
            borderWidth: 1,
            borderRadius: 15,
            height: 148,
            width: 150,
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => router.push("/auth/sipp/login")}
        >
          <IconTools width={70} height={70} />
          <Typography
            fontSize={18}
            fontFamily="Poppins-Medium"
            style={{ textAlign: "center", textAlignVertical: "center" }}
          >
            SIPPP
          </Typography>
        </Pressable>
        <Pressable
          style={{
            borderWidth: 1,
            borderRadius: 15,
            height: 148,
            width: 150,
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => router.push("/auth/survey/login")}
        >
          <IconTools width={70} height={70} />
          <Typography
            fontSize={18}
            fontFamily="Poppins-Medium"
            style={{ textAlign: "center", textAlignVertical: "center" }}
          >
            SURVEY
          </Typography>
        </Pressable>
      </View>
    </View>
  );
}
