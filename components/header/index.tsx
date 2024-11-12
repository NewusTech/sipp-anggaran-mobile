import React from "react";
import { Image, Pressable } from "react-native";
import View from "../ui/view";
import { useRouter } from "expo-router";
import { useAuthProfile } from "@/store/sipp";
import { BASE_URL_SIPP } from "@/constants";

export default function Header() {
  const router = useRouter();
  const user = useAuthProfile();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingTop: 20,
        alignItems: "center",
        paddingBottom: 20,
      }}
    >
      <Image
        source={require("@/assets/images/logo-pupr.png")}
        width={200}
        height={100}
        style={{ width: 200, height: 40 }}
      />
      <Pressable onPress={() => router.push("/(autenticated)/sipp/profile")}>
        <Image
          source={
            user?.image
              ? { uri: `${BASE_URL_SIPP}/uploads/${user.image}` }
              : require("@/assets/images/dummy1.jpg")
          }
          style={{
            width: 50,
            height: 50,
            borderRadius: 100,
            borderWidth: .2,
            borderColor: "gray",
          }}
        />
      </Pressable>
    </View>
  );
}
