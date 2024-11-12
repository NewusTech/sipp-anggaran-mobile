import Accordion from "@/components/ui/accordion";
import {
    IconCaretFillDown,
    IconCaretFillLeft,
    IconCaretLeft,
    IconCaretRight,
} from "@/components/icons";
import { Typography } from "@/components/ui/typography";
import View from "@/components/ui/view";
import { AppColor } from "@/constants";
import { useAppTheme } from "@/context";
import React from "react";
import { ActivityIndicator, Dimensions, Pressable, StyleSheet } from "react-native";
import { Button } from "@/components/ui/button";
import { IconCaretUp } from "@/components/icons/IconCaretUp";
import { router } from "expo-router";
import { useGetDashoardTableBridgeSection } from "@/services/survey";

interface SectionCardSurveyProps {
    filterYear?: string | undefined;
}

export default function SectionTableBridge({ filterYear }: SectionCardSurveyProps) {
    const { Colors } = useAppTheme();

    const { data: tableData, isLoading, error } = useGetDashoardTableBridgeSection(filterYear ? "year=" + filterYear : "");

    if (isLoading) {
        return <ActivityIndicator size="large" color={Colors["Primary Blue"]} />;
    }

    if (error) {
        return <Typography color="Error 500">Failed to load data.</Typography>;
    }

    return (
        <View style={{ marginTop: 20 }}>
            <View
                style={{
                    backgroundColor: Colors["Primary Blue"],
                    padding: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    paddingLeft: 20,
                }}
            >
                <Typography
                    fontSize={17}
                    color="Background 100"
                    fontFamily="Poppins-Medium"
                >
                    Nama Ruas
                </Typography>
            </View>
            <View style={{
                gap: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
            }}>
                {tableData?.data?.data && tableData.data.data.length > 0 ? (
                    tableData?.data?.data?.map((section, index) => (
                        <Accordion
                            key={index}
                            style={{
                                marginBottom: 10,
                                borderWidth: 1,
                                borderColor: Colors["Primary Blue"],
                                // Apply different border radius styles based on index
                                borderBottomLeftRadius: index === 0 ? 10 : undefined,
                                borderBottomRightRadius: index === 0 ? 10 : undefined,
                                borderRadius: index !== 0 ? 10 : undefined,
                                overflow: "hidden",
                            }}
                            header={(isOpen) => (
                                <View
                                    style={{
                                        padding: 10,
                                        backgroundColor: "#ECECEF",
                                        flexDirection: "row",
                                        borderTopLeftRadius: 10,
                                        borderTopRightRadius: 10,
                                        overflow: "hidden",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Typography
                                    style={{
                                        width: 285,
                                     }}
                                    color="Primary Blue" fontSize={15}>
                                    {section?.nama_ruas || "-"}
                                    </Typography>
                                    {isOpen ? <IconCaretFillDown /> : <IconCaretUp />}
                                </View>
                            )}
                        >
                            <View style={{ marginTop: 5, paddingHorizontal: 10 }}>
                                <View >
                                    <Typography
                                        style={{
                                            color: "#757575",
                                            fontSize: 16,
                                        }}
                                    >
                                        No Jembatan
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 16,
                                        }}
                                    >
                                        {section?.no_jembatan || "-"}
                                    </Typography>
                                </View>
                            </View>
                            {/*  */}
                            <View style={{ marginTop: 5, paddingHorizontal: 10 }}>
                                <View >
                                    <Typography
                                        style={{
                                            color: "#757575",
                                            fontSize: 16,
                                        }}
                                    >
                                        Asal
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 16,
                                        }}
                                    >
                                        {section?.asal || "-"}
                                    </Typography>
                                </View>
                            </View>
                            {/*  */}
                            <View style={{ marginTop: 5, paddingHorizontal: 10 }}>
                                <View >
                                    <Typography
                                        style={{
                                            color: "#757575",
                                            fontSize: 16,
                                        }}
                                    >
                                        Nama Jembatan
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 16,
                                        }}
                                    >
                                        {section?.nama_jembatan || "-"}
                                    </Typography>
                                </View>
                            </View>
                            {/*  */}
                            <View style={{ marginTop: 5, paddingHorizontal: 10 }}>
                                <View >
                                    <Typography
                                        style={{
                                            color: "#757575",
                                            fontSize: 16,
                                        }}
                                    >
                                        KMPOST (km)
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 16,
                                        }}
                                    >
                                        {section?.kmpost || "-"}
                                    </Typography>
                                </View>
                            </View>
                            {/*  */}
                            <View style={{ marginTop: 5, paddingHorizontal: 10 }}>
                                <View >
                                    <Typography
                                        style={{
                                            color: "#757575",
                                            fontSize: 16,
                                        }}
                                    >
                                        Panjang
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 16,
                                        }}
                                    >
                                        {section?.panjang || "-"}
                                    </Typography>
                                </View>
                            </View>
                            {/*  */}
                            <View style={{ marginTop: 5, paddingHorizontal: 10 }}>
                                <View >
                                    <Typography
                                        style={{
                                            color: "#757575",
                                            fontSize: 16,
                                        }}
                                    >
                                        Lebar
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 16,
                                        }}
                                    >
                                        {section?.lebar || "-"}
                                    </Typography>
                                </View>
                            </View>
                            {/*  */}
                            <View style={{ marginTop: 5, paddingHorizontal: 10 }}>
                                <View >
                                    <Typography
                                        style={{
                                            color: "#757575",
                                            fontSize: 16,
                                        }}
                                    >
                                        Nilai Kondisi
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 16,
                                        }}
                                    >
                                        {section?.nilai_kondisi || "-"}
                                    </Typography>
                                </View>
                            </View>
                            {/*  */}
                            <View style={{ marginTop: 5, paddingHorizontal: 10 }}>
                                <View >
                                    <Typography
                                        style={{
                                            color: "#757575",
                                            fontSize: 16,
                                        }}
                                    >
                                        Kondisi
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 16,
                                        }}
                                    >
                                        {section?.kondisi || "-"}
                                    </Typography>
                                </View>
                            </View>
                            {/* button */}
                            <View style={{
                                marginTop: 5,
                                marginBottom: 15,
                                paddingHorizontal: 10,
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }}>
                                <Button
                                    onPress={() => router.push(`/(autenticated)/survey/home/sectionBridge/detail/${section.id}`)}
                                    style={{
                                        width: Dimensions.get("window").width / 2 - 40,
                                    }}
                                    color="Primary Blue"
                                >
                                    Lihat
                                </Button>
                                <Button
                                    onPress={() => router.push(`/(autenticated)/survey/home/sectionBridge/edit`)}
                                    style={{
                                        width: Dimensions.get("window").width / 2 - 40,
                                    }}
                                    color="Success 600"
                                >
                                    Edit
                                </Button>
                            </View>
                        </Accordion>
                    ))
                ) : (
                    <View style={{ padding: 20, alignItems: "center" }}>
                        <Typography color="Text 500" fontSize={16}>
                            Tidak ada data
                        </Typography>
                    </View>
                )}
            </View>

            {/* Pagination */}
            <View
                style={{
                    flexDirection: "row",
                    marginTop: 20,
                    justifyContent: "space-between",
                }}
            >
                <Pressable style={[style.roundedView]}>
                    <IconCaretLeft />
                </Pressable>
                <View style={{ flexDirection: "row", gap: 5 }}>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <Pressable style={[style.roundedView]} key={index}>
                            <Typography fontFamily="Poppins-Medium" color="Text 900">
                                {index + 1}
                            </Typography>
                        </Pressable>
                    ))}
                </View>
                <Pressable style={[style.roundedView]}>
                    <IconCaretRight />
                </Pressable>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    rowTable: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: AppColor.light["Line 300"],
        padding: 10,
    },
    roundedView: {
        width: 40,
        height: 40,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: AppColor.light["Line 300"],
        alignItems: "center",
        justifyContent: "center",
    },
});
