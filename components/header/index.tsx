import React from "react";
import { Image } from "react-native";
import View from "../ui/view";

export default function Header() {
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
      <Image
        source={require("@/assets/images/dummy1.jpg")}
        style={{ width: 50, height: 50, borderRadius: 100 }}
      />
    </View>
  );
}
