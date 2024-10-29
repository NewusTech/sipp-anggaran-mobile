import { Typography } from "@/components/ui/typography";
import View from "@/components/ui/view";
import { useAppTheme } from "@/context";
import React from "react";
import { Dimensions } from "react-native";

export default function SectionPackage() {
  const { Colors } = useAppTheme();

  return (
    <View
      style={{
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "row",
        width: "100%",
        marginVertical: 20,
        gap: 10,
        justifyContent: "center",
      }}
    >
      <View
        style={{
          width: Dimensions.get("window").width / 2 - 30,
          height: 180,
          backgroundColor: Colors["Info 500"],
          padding: 10,
          borderRadius: 15,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <Typography
          color="Background 100"
          fontSize={16}
          style={{ textAlign: "center" }}
        >
          Total Keseluruhan Paket
        </Typography>
        <View
          style={{
            backgroundColor: Colors["Background 100"],
            width: 70,
            height: 70,
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            fontFamily="Poppins-Medium"
            color="Info 500"
            fontSize={20}
          >
            24
          </Typography>
        </View>
      </View>
      <View
        style={{
          width: Dimensions.get("window").width / 2 - 30,
          height: 180,
          backgroundColor: Colors["Text 700"],
          padding: 10,
          borderRadius: 15,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <Typography
          color="Background 100"
          fontSize={16}
          style={{ textAlign: "center" }}
        >
          Paket Belum Mulai
        </Typography>
        <View
          style={{
            backgroundColor: Colors["Background 100"],
            width: 70,
            height: 70,
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            fontFamily="Poppins-Medium"
            color="Text 700"
            fontSize={20}
          >
            24
          </Typography>
        </View>
      </View>
      <View
        style={{
          width: Dimensions.get("window").width / 2 - 30,
          height: 180,
          backgroundColor: Colors["Secondary 500"],
          padding: 10,
          borderRadius: 15,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <Typography
          color="Background 100"
          fontSize={16}
          style={{ textAlign: "center" }}
        >
          Paket Sedang Dikerjakan
        </Typography>
        <View
          style={{
            backgroundColor: Colors["Background 100"],
            width: 70,
            height: 70,
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            fontFamily="Poppins-Medium"
            color="Secondary 500"
            fontSize={20}
          >
            24
          </Typography>
        </View>
      </View>
      <View
        style={{
          width: Dimensions.get("window").width / 2 - 30,
          height: 180,
          backgroundColor: Colors["Success 700"],
          padding: 10,
          borderRadius: 15,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <Typography
          color="Background 100"
          fontSize={16}
          style={{ textAlign: "center" }}
        >
          Paket Selesai
        </Typography>
        <View
          style={{
            backgroundColor: Colors["Background 100"],
            width: 70,
            height: 70,
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            fontFamily="Poppins-Medium"
            color="Success 700"
            fontSize={20}
          >
            24
          </Typography>
        </View>
      </View>
    </View>
  );
}