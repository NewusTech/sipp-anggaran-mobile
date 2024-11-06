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
import React, { useState } from "react";
import { Dimensions, Modal, Pressable, StyleSheet } from "react-native";
import { Button } from "@/components/ui/button";
import { IconCaretUp } from "@/components/icons/IconCaretUp";
import Separator from "@/components/ui/separator";
import { router } from "expo-router";
import ModalAction from "@/components/ui/modalAction";
import { Checkbox } from "@/components/ui/checkBox";

export default function PeriodikTableRoad() {
    const { Colors } = useAppTheme();
    const [check, setCheck] = useState(true);

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
                <Checkbox selected={check} width={30} height={30} />
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
                {Array.from({ length: 5 }).map((d, index) => (
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
                                    <Checkbox selected={check} width={30} height={30} />
                                    <Typography color="Primary Blue" fontSize={15} 
                                    style={{
                                        width: 260,
                                    }}
                                    >
                                        Sp. Panaragan - Panaragan (Kantor Camat)
                                    </Typography>
                                </View>
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
                                    Kecamatan
                                </Typography>
                                <Typography
                                    style={{
                                        fontSize: 16,
                                    }}
                                >
                                    Tulang Bawang Tengah
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
                                    1.08
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
                                    3
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
                                    36.85
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
                                    5.14
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
                                    3.61
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
                                    30
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
                                    5.14
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
                                    0.35
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
                                    0.40
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
                                    0.90
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
                                    1.08
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
                                    16.284
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
                                    10.773
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
                                onPress={() => router.push("(autenticated)/survey/home/SectionRoad/detail")}
                                style={{
                                    width: Dimensions.get("window").width / 1 - 65,
                                }}
                                color="Primary Blue"
                            >
                                Detail
                            </Button>
                        </View>
                    </Accordion>
                ))}
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
