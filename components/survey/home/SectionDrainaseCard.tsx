import React from "react";
import View from "../../ui/view";
import { useAppTheme } from "@/context";
import { Typography } from "../../ui/typography";
import { useGetDashoardDrainaseSection } from "@/services/survey";

interface SectionCardSurveyProps {
    filterYear?: string | undefined;
}
export default function SectionCardDrainase({ filterYear }: SectionCardSurveyProps) {
    const { Colors } = useAppTheme();
    const getDashboardBridge = useGetDashoardDrainaseSection(filterYear ? "year=" + filterYear : "")


    return (
        <View style={{ gap: 10, marginTop: 30 }}>
            {/*  */}
            <View
                style={{
                    width: "100%",
                    height: 120,
                    borderRadius: 15,
                    backgroundColor: "#E9CB31",
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
                        Total Panjang Drainase
                    </Typography>
                    <Typography
                        fontFamily="Poppins-Medium"
                        fontSize={20}
                        color="Background 100"
                    >
                        {getDashboardBridge?.data?.data?.total_panjang_ruas || "-"} Meter
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
                    backgroundColor: "#94A3B8",
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
                        Jumlah Drainase
                    </Typography>
                    <Typography
                        fontFamily="Poppins-Medium"
                        fontSize={20}
                        color="Background 100"
                    >
                        {getDashboardBridge?.data?.data?.jumlah_drainase || "-"} Drainase
                    </Typography>
                </View>
            </View>
            {/*  */}
        </View>
    );
}
