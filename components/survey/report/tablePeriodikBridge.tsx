import Accordion from "@/components/ui/accordion";
import {
    IconCaretFillDown,
    IconCaretFillLeft,
    IconCaretLeft,
    IconCaretRight,
    IconCeretFillUp,
} from "@/components/icons";
import { Typography } from "@/components/ui/typography";
import View from "@/components/ui/view";
import { AppColor } from "@/constants";
import { useAppTheme } from "@/context";
import React, { useState } from "react";
import { ActivityIndicator, Dimensions, Modal, Pressable, StyleSheet } from "react-native";
import { Button } from "@/components/ui/button";
import { IconCaretUp } from "@/components/icons/IconCaretUp";
import Separator from "@/components/ui/separator";
import { router } from "expo-router";
import ModalAction from "@/components/ui/modalAction";
import { Checkbox } from "@/components/ui/checkBox";
import { useGetDashoardTableBridgeSection } from "@/services/survey";

interface SectionCardSurveyProps {
    filterYear?: string | undefined;
}

export default function PeriodikTableBridge({ filterYear }: SectionCardSurveyProps) {
    const { Colors } = useAppTheme();
    const [selectedIds, setSelectedIds] = useState<number[]>([]); // Simpan id survey yang dipilih
    const [selectAll, setSelectAll] = useState(false);
    const { data: tableData, isLoading, error } = useGetDashoardTableBridgeSection(filterYear ? "year=" + filterYear : "");

    // Fungsi untuk toggle item di dalam selectedIds
    const toggleSelect = (id: number) => {
        setSelectedIds((prevSelected) =>
            prevSelected.includes(id) ? prevSelected.filter((item) => item !== id) : [...prevSelected, id]
        );
    };

    // Fungsi untuk toggle semua pilihan
    const toggleSelectAll = () => {
        if (selectAll) {
            setSelectedIds([]); // Kosongkan jika sudah dipilih semua
        } else {
            const allIds = tableData?.data?.data.map((item: any) => item.id) || [];
            setSelectedIds(allIds); // Pilih semua id
        }
        setSelectAll(!selectAll);
    };

    // Fungsi untuk mengirim data ke API
    const handleSubmit = async () => {
        const dataToSend = {
            year: filterYear || "",
            id_survey: selectedIds,
        };
        // await sendSurveyData(dataToSend); // Panggil fungsi API
    };

    if (isLoading) {
        return <ActivityIndicator size="large" color={Colors["Primary Blue"]} />;
    }

    if (error) {
        return <Typography color="Error 500">Failed to load data.</Typography>;
    }

    return (
        <View style={{ marginTop: 0 }}>
            {/*  */}
            <View style={{
                marginTop: 10,
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
            }}>
                <Button
                    style={{
                        width: Dimensions.get("window").width / 1 - 40,
                        borderColor: Colors["Primary Blue"],
                    }}
                    color="Background 100"
                >
                    <Typography color='Primary Blue'>Download</Typography>
                </Button>
            </View>
            {/*  */}
            <View
                style={{
                    backgroundColor: Colors["Primary Blue"],
                    padding: 12,
                    borderRadius: 10,
                    marginVertical: 10,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                }}
            >
                <Checkbox selected={selectAll} onPress={toggleSelectAll} width={30} height={30} />
                <Typography
                    style={{
                        color: Colors["Background 100"],
                    }}
                >
                    Pilih Semua Data
                </Typography>
            </View>
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
                                    <View
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            gap: 10,
                                            flexWrap: "wrap",
                                        }}
                                    >
                                        <Checkbox
                                            selected={selectedIds.includes(section.id)}
                                            onPress={() => toggleSelect(section.id)}
                                            width={30}
                                            height={30}
                                        />
                                        <Typography color="Primary Blue" fontSize={15}
                                            style={{
                                                width: 260,
                                            }}
                                        >
                                            {section?.nama_ruas || "-"}
                                        </Typography>
                                    </View>
                                    {isOpen ? <IconCaretFillDown /> : <IconCeretFillUp />}
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
                                    onPress={() => router.push(`/(autenticated)/survey/home/sectionBridge/detail/${section?.id}`)}
                                    style={{
                                        width: Dimensions.get("window").width / 1 - 65,
                                    }}
                                    color="Primary Blue"
                                >
                                    Detail
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
