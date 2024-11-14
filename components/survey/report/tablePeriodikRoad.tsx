import Accordion from "@/components/ui/accordion";
import { IconCaretFillDown, IconCaretLeft, IconCaretRight, IconCaretUp, IconCeretFillUp } from "@/components/icons";
import { Typography } from "@/components/ui/typography";
import View from "@/components/ui/view";
import { AppColor } from "@/constants";
import { useAppTheme } from "@/context";
import React, { useState } from "react";
import { ActivityIndicator, Dimensions, Pressable, StyleSheet } from "react-native";
import { Button } from "@/components/ui/button";
import { useGetDashoardTableRoadSection } from "@/services/survey";
import { router } from "expo-router";
import { Checkbox } from "@/components/ui/checkBox";
// import { sendSurveyData } from "@/services/api"; // Pastikan fungsi API tersedia

interface SectionCardSurveyProps {
    filterYear?: string;
}

export default function PeriodikTableRoad({ filterYear }: SectionCardSurveyProps) {
    const { Colors } = useAppTheme();
    const [selectedIds, setSelectedIds] = useState<number[]>([]); // Simpan id survey yang dipilih
    const [selectAll, setSelectAll] = useState(false);

    const { data: tableData, isLoading, error } = useGetDashoardTableRoadSection(filterYear ? "year=" + filterYear : "");

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
                                        gap: 10,
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
                                        <Typography
                                            color="Primary Blue" fontSize={15}
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
                                        Kecamatan
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 16,
                                        }}
                                    >
                                        {section?.name_kecamatan || "-"}
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
                                        Panjang Ruas
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 16,
                                        }}
                                    >
                                        {section?.panjang_ruas || "-"}
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
                                        Lebar Ruas
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
                                        Rigit
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 16,
                                        }}
                                    >
                                        {section?.rigit || "-"}
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
                                        Hotmix
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 16,
                                        }}
                                    >
                                        {section?.hotmix || "-"}
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
                                        Lapen
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 16,
                                        }}
                                    >
                                        {section?.lapen || "-"}
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
                                        Telford
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 16,
                                        }}
                                    >
                                        {section?.telford || "-"}
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
                                        Tanah
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 16,
                                        }}
                                    >
                                        {section?.tanah || "-"}
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
                                        Baik
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 16,
                                        }}
                                    >
                                        {section?.baik || "-"}
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
                                        Sedang
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 16,
                                        }}
                                    >
                                        {section?.sedang || "-"}
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
                                        Rusak Ringan
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 16,
                                        }}
                                    >
                                        {section?.rusak_ringan || "-"}
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
                                        Rusak Berat
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 16,
                                        }}
                                    >
                                        {section?.rusak_berat || "-"}
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
                                        Mantap %
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 16,
                                        }}
                                    >
                                        {section?.mantap || "-"}
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
                                        Tidak Mantap %
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 16,
                                        }}
                                    >
                                        {section?.tmantap || "-"}
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
                                    onPress={() => router.push(`/(autenticated)/survey/home/SectionRoad/detail/${section?.id}`)}
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
