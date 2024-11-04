import React from "react";
import { Image, Pressable } from "react-native";
import View from "../ui/view";
import { useRouter } from "expo-router";

export default function Header() {
  const router = useRouter()
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
      <Pressable onPress={()=>router.push("/(autenticated)/sipp/profile")}>
        <Image
          source={require("@/assets/images/dummy1.jpg")}
          style={{ width: 50, height: 50, borderRadius: 100 }}
        />
      </Pressable>
    </View>
  );
}
