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
import { Dimensions, Pressable, StyleSheet } from "react-native";
import { Button } from "@/components/ui/button";
import { IconCaretUp } from "@/components/icons/IconCaretUp";
import { router } from "expo-router";
import ModalAction from "@/components/ui/modalAction";

export default function MasterTableDrainase() {
    const { Colors } = useAppTheme();
    const [modalDelete, setModalDelete] = useState<boolean>(false);


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
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Typography color="Primary Blue" fontSize={15}>
                                    RUAS 10 (KIRI JALAN)
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
                                    Kecamatan
                                </Typography>
                                <Typography
                                    style={{
                                        fontSize: 16,
                                    }}
                                >
                                    Batu Putih
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
                                    Desa
                                </Typography>
                                <Typography
                                    style={{
                                        fontSize: 16,
                                    }}
                                >
                                    TOTO MAKMUR
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
                                    100
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
                                onPress={() => router.push("(autenticated)/survey/master/drainase/edit")}
                                style={{
                                    width: Dimensions.get("window").width / 2 - 40,
                                }}
                                color="Success 600"
                            >
                                Edit
                            </Button>
                            <Button
                                onPress={() => setModalDelete(true)}
                                style={{
                                    width: Dimensions.get("window").width / 2 - 40,
                                }}
                                color="Error 500"
                            >
                                Hapus
                            </Button>
                            <ModalAction
                                setVisible={setModalDelete}
                                visible={modalDelete}
                                onAction={() => {
                                    setModalDelete(false);
                                }}
                                isLoading={false}
                            />
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
