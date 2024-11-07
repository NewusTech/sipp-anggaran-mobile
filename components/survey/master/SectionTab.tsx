import HeaderSurvey from '@/components/headerSurvey';
import { Typography } from '@/components/ui/typography'
import View from '@/components/ui/view'
// 
import { useAppTheme } from "@/context";
import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, TouchableOpacity } from "react-native";
import Separator from '@/components/ui/separator';
import TabStatistik from '../report/tabStatistik';
import TabDownload from '../report/tabDownload';
import TabPeriodik from '../report/tabPeriodik';
import TabMasterDrainase from './tabDrainase';
import TabMasterRoad from './tabRoad';

export default function SectionTab() {
    const { Colors } = useAppTheme();

    const [tabDetail, setTabDetail] = useState<
        | "Drainase"
        | "Ruas Jalan"
    >();

    useEffect(() => {
        setTabDetail("Drainase");
    }, []);
    return (
        <View
            style={{
            }}
        // backgroundColor="Background 100"
        >
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
                    Master Data
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
                            height: 50,
                            borderWidth: 1,
                            borderColor: Colors["Primary Blue"],
                            borderRadius: 15,
                            width: Dimensions.get("screen").width - 40,
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "row",
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                width: "auto",
                                flex: 1,
                                paddingHorizontal: 10,
                                backgroundColor:
                                    tabDetail === "Drainase"
                                        ? Colors["Primary Blue"]
                                        : Colors["Background 100"],
                                height: "100%",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            onPress={() => setTabDetail("Drainase")}
                        >
                            <Typography
                                fontSize={14}
                                style={{ textAlignVertical: "center" }}
                                color={tabDetail === "Drainase" ? "Background 100" : "Primary Blue"}
                            >
                                Drainase
                            </Typography>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                width: "auto",
                                flex: 1,
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
                                color={
                                    tabDetail === "Ruas Jalan" ? "Background 100" : "Primary Blue"
                                }
                            >
                                Ruas Jalan
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
                    // paddingBottom: 40
                }}
                style={{}}
            >
                {tabDetail === "Drainase" && <TabMasterDrainase />}
                {tabDetail === "Ruas Jalan" && <TabMasterRoad />}
            </ScrollView>
            {/*  */}
        </View>
    )
}