import React, { useState } from "react";
import View from "../../ui/view";
import { useAppTheme } from "@/context";
import { Typography } from "../../ui/typography";
import { PieChart } from "react-native-gifted-charts";
import { Text } from "react-native";
import { useGetDashoardRoadSection } from "@/services/survey";

// Define the prop types
interface SectionCardSurveyProps {
    filterYear?: string | undefined;
}
export default function SectionCardSurvey({ filterYear }: SectionCardSurveyProps) {
    const { Colors } = useAppTheme();
    const pieDataMantap = [
        { value: 70, color: '#D9D9D9' },
        { value: 30, color: '#408329' }
    ];
    const pieDataTidakMantap = [
        { value: 70, color: '#D9D9D9' },
        { value: 30, color: '#B42424' }
    ];


    const getDashboardRoad = useGetDashoardRoadSection(filterYear ? "year=" + filterYear : "")

    return (
        <View style={{ gap: 10, marginTop: 30 }}>
            {/*  */}
            <View
                style={{
                    width: "100%",
                    height: 120,
                    borderRadius: 15,
                    backgroundColor: "#396AFF",
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
                        right: -45,
                        top: -60,
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
                        Total Panjang Jalan
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
                    backgroundColor: "#922DC9",
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
                        right: -45,
                        top: -60,
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
                        Total Ruas
                    </Typography>
                    <Typography
                        fontFamily="Poppins-Medium"
                        fontSize={20}
                        color="Background 100"
                    >
                        {getDashboardRoad?.data?.data?.jumlah_ruas || "-"} Jalan
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
                    backgroundColor: "#399918",
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
                        right: -45,
                        top: -60,
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
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                    }}>
                    <Typography
                        fontFamily="Poppins-Medium"
                        fontSize={20}
                        color="Background 100"
                    >
                        Mantap
                    </Typography>
                    <PieChart
                        donut
                        radius={35}
                        innerRadius={25}
                        data={pieDataMantap}
                        backgroundColor="#399918"
                        centerLabelComponent={() => {
                            return <Text style={{ fontSize: 10, color: Colors["Background 100"] }}>70%</Text>;
                        }}
                    />
                </View>
            </View>
            {/*  */}
            {/*  */}
            <View
                style={{
                    width: "100%",
                    height: 120,
                    borderRadius: 15,
                    backgroundColor: "#DF1212",
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
                        right: -45,
                        top: -60,
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
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                    }}>
                    <Typography
                        fontFamily="Poppins-Medium"
                        fontSize={20}
                        color="Background 100"
                    >
                        Tidak Mantap
                    </Typography>
                    <PieChart
                        donut
                        radius={35}
                        innerRadius={25}
                        data={pieDataTidakMantap}
                        backgroundColor="#DF1212"
                        centerLabelComponent={() => {
                            return <Text style={{ fontSize: 10, color: Colors["Background 100"] }}>70%</Text>;
                        }}
                    />
                </View>
            </View>
            {/*  */}
        </View>
    );
}
