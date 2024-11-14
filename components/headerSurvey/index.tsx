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
        <View>
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
                <Pressable onPress={() => router.push("/(autenticated)/survey/profile")}>
                    <Image
                        source={require("@/assets/images/dummy1.jpg")}
                        style={{ width: 50, height: 50, borderRadius: 100 }}
                    />
                </Pressable>
            </View>
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
        </View>
    );
}
