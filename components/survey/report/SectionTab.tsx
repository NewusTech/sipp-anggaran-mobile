import HeaderSurvey from '@/components/headerSurvey';
import { Typography } from '@/components/ui/typography'
import View from '@/components/ui/view'
// 
import { useAppTheme } from "@/context";
import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, TouchableOpacity } from "react-native";
import Separator from '@/components/ui/separator';
import TabPeriodik from './tabPeriodik';
import TabStatistik from './tabStatistik';
import TabDownload from './tabDownload';

export default function SectionTab() {
    const { Colors } = useAppTheme();

    const [tabDetail, setTabDetail] = useState<
        | "Periodik"
        | "Statistik"
        | "Download"
    >();

    useEffect(() => {
        setTabDetail("Periodik");
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
                    Laporan
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
                                    tabDetail === "Periodik"
                                        ? Colors["Primary Blue"]
                                        : Colors["Background 100"],
                                height: "100%",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            onPress={() => setTabDetail("Periodik")}
                        >
                            <Typography
                                fontSize={14}
                                style={{ textAlignVertical: "center" }}
                                color={tabDetail === "Periodik" ? "Background 100" : "Primary Blue"}
                            >
                                Periodik
                            </Typography>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                width: "auto",
                                flex: 1,
                                paddingHorizontal: 10,
                                backgroundColor:
                                    tabDetail === "Statistik"
                                        ? Colors["Primary Blue"]
                                        : Colors["Background 100"],
                                height: "100%",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            onPress={() => setTabDetail("Statistik")}
                        >
                            <Typography
                                fontSize={14}
                                style={{ textAlignVertical: "center" }}
                                color={
                                    tabDetail === "Statistik" ? "Background 100" : "Primary Blue"
                                }
                            >
                                Statistik
                            </Typography>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                width: "auto",
                                flex: 1,
                                paddingHorizontal: 10,
                                backgroundColor:
                                    tabDetail === "Download"
                                        ? Colors["Primary Blue"]
                                        : Colors["Background 100"],
                                height: "100%",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            onPress={() => setTabDetail("Download")}
                        >
                            <Typography
                                fontSize={14}
                                style={{ textAlignVertical: "center" }}
                                color={
                                    tabDetail === "Download"
                                        ? "Background 100"
                                        : "Primary Blue"
                                }
                            >
                                Download
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
                {tabDetail === "Periodik" && <TabPeriodik />}
                {tabDetail === "Statistik" && <TabStatistik />}
                {tabDetail === "Download" && <TabDownload />}
            </ScrollView>
            {/*  */}
        </View>
    )
}