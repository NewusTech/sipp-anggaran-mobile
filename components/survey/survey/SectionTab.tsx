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
import TabSurveyDrainase from './tabSurveyDrainase';

export default function SectionTab() {
    const { Colors } = useAppTheme();

    const [tabDetail, setTabDetail] = useState<
        | "Survey Jalan"
        | "Survey Jembatan"
        | "Survey Drainase"
    >();

    useEffect(() => {
        setTabDetail("Survey Jalan");
    }, []);
    return (
        <View
            style={{
            }}
        // backgroundColor="Background 100"
        >
            <HeaderSurvey />
            {/*  */}
            <View style={{
                paddingTop: 20,
                gap: 10,
                display: "flex"
            }}
                backgroundColor="Background 100"
            >
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
                        <TouchableOpacity
                            style={{
                                width: "auto",
                                paddingHorizontal: 10,
                                backgroundColor:
                                    tabDetail === "Survey Drainase"
                                        ? Colors["Primary Blue"]
                                        : Colors["Background 100"],
                                borderWidth: 1,
                                padding: 10,
                                borderColor: Colors["Primary Blue"],
                                borderRadius: 10,
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            onPress={() => setTabDetail("Survey Drainase")}
                        >
                            <Typography
                                fontSize={14}
                                style={{ textAlignVertical: "center" }}
                                color={
                                    tabDetail === "Survey Drainase"
                                        ? "Background 100"
                                        : "Primary Blue"
                                }
                            >
                                Survey Drainase
                            </Typography>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                width: "auto",
                                paddingHorizontal: 10,
                                backgroundColor:
                                    tabDetail === "Survey Jalan"
                                        ? Colors["Primary Blue"]
                                        : Colors["Background 100"],
                                borderWidth: 1,
                                padding: 10,
                                borderColor: Colors["Primary Blue"],
                                borderRadius: 10,
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            onPress={() => setTabDetail("Survey Jalan")}
                        >
                            <Typography
                                fontSize={14}
                                style={{ textAlignVertical: "center" }}
                                color={tabDetail === "Survey Jalan" ? "Background 100" : "Primary Blue"}
                            >
                                Survey Jalan
                            </Typography>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                width: "auto",
                                paddingHorizontal: 10,
                                backgroundColor:
                                    tabDetail === "Survey Jembatan"
                                        ? Colors["Primary Blue"]
                                        : Colors["Background 100"],
                                borderWidth: 1,
                                padding: 10,
                                borderColor: Colors["Primary Blue"],
                                borderRadius: 10,
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            onPress={() => setTabDetail("Survey Jembatan")}
                        >
                            <Typography
                                fontSize={14}
                                style={{ textAlignVertical: "center" }}
                                color={
                                    tabDetail === "Survey Jembatan" ? "Background 100" : "Primary Blue"
                                }
                            >
                                Survey Jembatan
                            </Typography>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <Separator
                    style={
                        { marginTop: 10 }
                    }
                ></Separator>

            </View>
            <ScrollView
                contentContainerStyle={{
                    paddingBottom: 40
                }}
                style={{}}
            >
                {tabDetail === "Survey Drainase" && <TabSurveyDrainase />}
                {tabDetail === "Survey Jalan" && <TabSectionRoad />}
                {tabDetail === "Survey Jembatan" && <TabSectionBridege />}
            </ScrollView>
            {/*  */}
        </View>
    )
}