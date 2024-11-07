import HeaderSurvey from '@/components/headerSurvey';
import { Typography } from '@/components/ui/typography'
import View from '@/components/ui/view'
// 
import { useAppTheme } from "@/context";
import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, TouchableOpacity } from "react-native";
import TabSectionRoad from '@/components/survey/home/tabRoadSection';
import Separator from '@/components/ui/separator';
import TabSectionBridege from '../home/tabBridgeSection';
import TabSurveyDrainase from '../survey/tabSurveyDrainase';
import TabSurveyRoad from '../survey/tabSurveyRoad';
import TabSurveyBridge from '../survey/tabSurveyBridge';
import TabVerificationDrainase from './tabVerificationDrainase';
import TabVerificationRoad from './tabVerificationRoad';
import TabVerificationBridge from './tabVerificationBridge';

export default function SectionTab() {
    const { Colors } = useAppTheme();

    const [tabDetail, setTabDetail] = useState<
        | "Verifikasi Jalan"
        | "Verifikasi Jembatan"
        | "Verifikasi Drainase"
    >();

    useEffect(() => {
        setTabDetail("Verifikasi Drainase");
    }, []);
    return (
        <View
            style={{
            }}
        // backgroundColor="Background 100"
        >
            {/* <HeaderSurvey /> */}
            {/*  */}
            <View style={{
                paddingTop: 20,
                gap: 10,
                display: "flex"
            }}
                backgroundColor="Background 100"
            >
                {/*  */}
                <Typography
                    style={{
                        fontSize: 20,
                        fontFamily: "Poppins-Medium",
                        paddingHorizontal: 20
                    }}
                >
                    Verifikasi
                </Typography>
                <Separator
                    style={{
                        marginBottom: 10
                    }}
                />
                {/*  */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 20 }}
                >
                    <View
                        style={{
                            // height: 50,
                            width: Dimensions.get("window").width - 40,
                            gap: 10,
                            overflow: "hidden",
                            flexDirection: "column",
                        }}
                    >

                        {/*  */}
                        <TouchableOpacity
                            style={{
                                width: "auto",
                                paddingHorizontal: 10,
                                backgroundColor:
                                    tabDetail === "Verifikasi Drainase"
                                        ? Colors["Primary Blue"]
                                        : Colors["Background 100"],
                                borderWidth: 1,
                                padding: 10,
                                borderColor: Colors["Primary Blue"],
                                borderRadius: 10,
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            onPress={() => setTabDetail("Verifikasi Drainase")}
                        >
                            <Typography
                                fontSize={14}
                                style={{ textAlignVertical: "center" }}
                                color={
                                    tabDetail === "Verifikasi Drainase"
                                        ? "Background 100"
                                        : "Primary Blue"
                                }
                            >
                                Verifikasi Drainase
                            </Typography>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                width: "auto",
                                paddingHorizontal: 10,
                                backgroundColor:
                                    tabDetail === "Verifikasi Jalan"
                                        ? Colors["Primary Blue"]
                                        : Colors["Background 100"],
                                borderWidth: 1,
                                padding: 10,
                                borderColor: Colors["Primary Blue"],
                                borderRadius: 10,
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            onPress={() => setTabDetail("Verifikasi Jalan")}
                        >
                            <Typography
                                fontSize={14}
                                style={{ textAlignVertical: "center" }}
                                color={tabDetail === "Verifikasi Jalan" ? "Background 100" : "Primary Blue"}
                            >
                                Verifikasi Jalan
                            </Typography>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                width: "auto",
                                paddingHorizontal: 10,
                                backgroundColor:
                                    tabDetail === "Verifikasi Jembatan"
                                        ? Colors["Primary Blue"]
                                        : Colors["Background 100"],
                                borderWidth: 1,
                                padding: 10,
                                borderColor: Colors["Primary Blue"],
                                borderRadius: 10,
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            onPress={() => setTabDetail("Verifikasi Jembatan")}
                        >
                            <Typography
                                fontSize={14}
                                style={{ textAlignVertical: "center" }}
                                color={
                                    tabDetail === "Verifikasi Jembatan" ? "Background 100" : "Primary Blue"
                                }
                            >
                                Verifikasi Jembatan
                            </Typography>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <Separator
                    style={
                        { marginTop: 10 }
                    }
                />

            </View>
            <ScrollView
                contentContainerStyle={{
                    paddingBottom: 40
                }}
                style={{}}
            >
                {tabDetail === "Verifikasi Drainase" && <TabVerificationDrainase />}
                {tabDetail === "Verifikasi Jalan" && <TabVerificationRoad />}
                {tabDetail === "Verifikasi Jembatan" && <TabVerificationBridge />}
            </ScrollView>
            {/*  */}
        </View>
    )
}