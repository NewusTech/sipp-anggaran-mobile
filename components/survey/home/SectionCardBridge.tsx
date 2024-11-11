import React from "react";
import View from "../../ui/view";
import { useAppTheme } from "@/context";
import { Typography } from "../../ui/typography";
import { useGetDashoardRoadSection } from "@/services/survey";
// Define the prop types
interface SectionCardSurveyProps {
    filterYear?: string | undefined;
}
export default function SectionCardBridge({ filterYear }: SectionCardSurveyProps) {
    const { Colors } = useAppTheme();
    const getDashboardRoad = useGetDashoardRoadSection(filterYear ? "year=" + filterYear : "")

    return (
        <View style={{ gap: 10, marginTop: 30 }}>
            {/*  */}
            <View
                style={{
                    width: "100%",
                    height: 120,
                    borderRadius: 15,
                    backgroundColor: "#60A5FA",
                    position: "relative",
                    paddingHorizontal: 30,
                    alignItems: "center",
                    flexDirection: "row",
                    columnGap: 20,
                    overflow: "hidden",
                }}
            >
                <View
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                        width: 90,
                        height: 90,
                        borderRadius: 100,
                        position: "absolute",
                        right: -15,
                        top: -30,
                    }}
                />
                <View
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.4)",
                        width: 90,
                        height: 90,
                        borderRadius: 100,
                        position: "absolute",
                        left: -35,
                        bottom: -45,
                    }}
                />
                <View style={{}}>
                    <Typography
                        fontFamily="Poppins-Light"
                        fontSize={16}
                        color="Background 100"
                    >
                        Total Panjang Jembatan
                    </Typography>
                    <Typography
                        fontFamily="Poppins-Medium"
                        fontSize={20}
                        color="Background 100"
                    >
                        {getDashboardRoad?.data?.data?.tot_panjang_jalan || "-"} / Kilometer
                    </Typography>
                </View>
            </View>
            {/*  */}
            {/*  */}
            <View
                style={{
                    width: "100%",
                    height: 120,
                    borderRadius: 15,
                    backgroundColor: "#22C55E",
                    position: "relative",
                    paddingHorizontal: 30,
                    alignItems: "center",
                    flexDirection: "row",
                    columnGap: 20,
                    overflow: "hidden",
                }}
            >
                <View
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                        width: 90,
                        height: 90,
                        borderRadius: 100,
                        position: "absolute",
                        right: -15,
                        top: -30,
                    }}
                />
                <View
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.4)",
                        width: 90,
                        height: 90,
                        borderRadius: 100,
                        position: "absolute",
                        left: -35,
                        bottom: -45,
                    }}
                />
                <View style={{}}>
                    <Typography
                        fontFamily="Poppins-Light"
                        fontSize={16}
                        color="Background 100"
                    >
                        Jumlah Jembatan
                    </Typography>
                    <Typography
                        fontFamily="Poppins-Medium"
                        fontSize={20}
                        color="Background 100"
                    >
                        {getDashboardRoad?.data?.data?.jumlah_ruas || "-"} Jembatan
                    </Typography>
                </View>
            </View>
            {/*  */}
        </View>
    );
}
