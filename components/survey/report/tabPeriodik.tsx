import { IconCalender, IconCaretDown, IconPlus } from '@/components/icons';
import { SelectInput } from '@/components/ui/selectInput';
import { Typography } from '@/components/ui/typography';
import View from '@/components/ui/view';
import { useAppTheme } from '@/context';
import React, { useEffect, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SectionTableRuas from '../home/SectionTable';
import { DateInput } from '@/components/ui/inputDate';
import { Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { SearchBox } from '@/components/ui/searchBox';
import { Button } from "@/components/ui/button";
import IconFile from '@/components/icons/IconFile';
import { router } from 'expo-router';
import Separator from '@/components/ui/separator';
import TabSurveyDrainase from '../survey/tabSurveyDrainase';
import TabSurveyRoad from '../survey/tabSurveyRoad';
import TabSurveyBridge from '../survey/tabSurveyBridge';
import TabPeriodikDrainase from './tabPeriodikDrainase';
import TabPeriodikRoad from './tabPeriodikRoad';
import TabPeriodikBridge from './tabPeriodikBridge';

// Sample kecamatan data; replace with actual data source
const kecamatanOptions = [
    { title: "Kecamatan 1" },
    { title: "Kecamatan 2" },
    { title: "Kecamatan 3" },
    // Add more options as needed
];

export default function TabPeriodik() {
    const inset = useSafeAreaInsets();
    const { Colors } = useAppTheme();
    const [filterKecamatan, setFilterKecamatan] = useState<string | number>("");
    const [filterDateStart, setFilterDateStart] = useState<Date>(new Date());
    const [search, setSearch] = useState<string>("");

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
                gap: 10,
            }}
        >
            <View
                style={{
                    paddingVertical: 20,
                    // paddingHorizontal: 20,
                    gap: 5,
                    backgroundColor: Colors["Background 100"],
                }}
            >
                {/*  */}
                <View
                    style={{
                        gap: 10,
                        paddingHorizontal: 20,
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
                                tabDetail === "Ruas Jalan"
                                    ? Colors["Primary Blue"]
                                    : Colors["Background 100"],
                            borderWidth: 1,
                            padding: 10,
                            borderColor: Colors["Primary Blue"],
                            borderRadius: 10,
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
                            borderWidth: 1,
                            padding: 10,
                            borderColor: Colors["Primary Blue"],
                            borderRadius: 10,
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
                            borderWidth: 1,
                            padding: 10,
                            borderColor: Colors["Primary Blue"],
                            borderRadius: 10,
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
                <Separator
                    style={
                        {
                            marginBottom: 15,
                            marginTop: 15
                        }}
                />

                {/*  */}
                <ScrollView
                    contentContainerStyle={{
                        paddingBottom: 40
                    }}
                    style={{}}
                >
                    {tabDetail === "Ruas Jalan" && <TabPeriodikRoad />}
                    {tabDetail === "Ruas Jembatan" && <TabPeriodikBridge />}
                    {tabDetail === "Ruas Drainase" && <TabPeriodikDrainase />}
                </ScrollView>
                {/*  */}
            </View>
        </View>
    );
}
