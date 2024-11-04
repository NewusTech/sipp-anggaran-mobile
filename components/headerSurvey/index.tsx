import React from "react";
import { Image, Pressable } from "react-native";
import View from "../ui/view";
import { useRouter } from "expo-router";
import { Typography } from "../ui/typography";
import { useAppTheme } from "@/context";

export default function HeaderSurvey() {
    const router = useRouter()
  const { Colors } = useAppTheme();

    return (
        <View
            style={{
                flexDirection: "column",
                justifyContent: "space-between",
                paddingHorizontal: 20,
                paddingTop: 25,
                alignItems: "center",
                paddingBottom: 25,
                backgroundColor: Colors["Primary Blue"],
            }}
        >
            <Image
                source={require("@/assets/images/PUPR.png")}
                width={44}
                height={44}
                style={{ width: 44, height: 44 }}
            />
            <Typography
                fontSize={18}
                fontFamily="Poppins-Medium"
                color="Background 100"
            >
                SURVEY KONDISI
            </Typography>
            <Typography
                fontSize={15}
                style={{ textAlign: "center" }}
                color="Background 100"
            >
                Dinas Pekerjaan Umum dan Penataan
            </Typography>
            <Typography
                fontSize={15}
                style={{ textAlign: "center" }}
                color="Background 100"
            >
                Ruang Tulang Bawang Barat
            </Typography>
        </View>
    );
}
