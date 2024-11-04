import HeaderSurvey from '@/components/headerSurvey';
import { Typography } from '@/components/ui/typography'
import View from '@/components/ui/view'
// 
import { useAppTheme } from "@/context";
import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import TabSectionRoad from '@/components/survey/home/tabRoadSection';
import Separator from '@/components/ui/separator';
import TabSectionBridege from './tabBridgeSection';
import TabSectionDrainase from './tabDrainaseSection';

export default function SectionTab() {
    const { Colors } = useAppTheme();

    const [tabDetail, setTabDetail] = useState<
        | "Ruas Jalan"
        | "Ruas Jembatan"
        | "Ruas Drainase"
    >();

    useEffect(() => {
        setTabDetail("Ruas Jalan");
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
                            height: 50,
                            borderWidth: 1,
                            borderColor: Colors["Primary Blue"],
                            borderRadius: 15,
                            overflow: "hidden",
                            flexDirection: "row",
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                width: "auto",
                                paddingHorizontal: 10,
                                backgroundColor:
                                    tabDetail === "Ruas Jalan"
                                        ? Colors["Primary Blue"]
                                        : Colors["Background 100"],
                                height: "100%",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            onPress={() => setTabDetail("Ruas Jalan")}
                        >
                            <Typography
                                fontSize={14}
                                style={{ textAlignVertical: "center" }}
                                color={tabDetail === "Ruas Jalan" ? "Background 100" : "Primary Blue"}
                            >
                                Ruas Jalan
                            </Typography>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                width: "auto",
                                paddingHorizontal: 10,
                                backgroundColor:
                                    tabDetail === "Ruas Jembatan"
                                        ? Colors["Primary Blue"]
                                        : Colors["Background 100"],
                                height: "100%",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            onPress={() => setTabDetail("Ruas Jembatan")}
                        >
                            <Typography
                                fontSize={14}
                                style={{ textAlignVertical: "center" }}
                                color={
                                    tabDetail === "Ruas Jembatan" ? "Background 100" : "Primary Blue"
                                }
                            >
                                Ruas Jembatan
                            </Typography>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                width: "auto",
                                paddingHorizontal: 10,
                                backgroundColor:
                                    tabDetail === "Ruas Drainase"
                                        ? Colors["Primary Blue"]
                                        : Colors["Background 100"],
                                height: "100%",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            onPress={() => setTabDetail("Ruas Drainase")}
                        >
                            <Typography
                                fontSize={14}
                                style={{ textAlignVertical: "center" }}
                                color={
                                    tabDetail === "Ruas Drainase"
                                        ? "Background 100"
                                        : "Primary Blue"
                                }
                            >
                                Ruas Drainase
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
                {tabDetail === "Ruas Jalan" && <TabSectionRoad />}
                {tabDetail === "Ruas Jembatan" && <TabSectionBridege />}
                {tabDetail === "Ruas Drainase" && <TabSectionDrainase />}
            </ScrollView>
            {/*  */}
        </View>
    )
}