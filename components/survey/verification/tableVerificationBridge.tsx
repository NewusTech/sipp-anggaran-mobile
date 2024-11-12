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
import TextInput from "@/components/ui/textInput";

export default function VerificationTableBridge() {
    const { Colors } = useAppTheme();
    const [modalDelete, setModalDelete] = useState<boolean>(false);
    const [modalStatus, setModalStatus] = useState(false);
    const [modalStatusTerima, setModalStatusTerima] = useState(false);
    const [modalStatusTolak, setModalStatusTolak] = useState(false);

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
                                    TOTO KATON - TOTO MAKMUR
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
                                    18.12.163.2
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
                                    MARGA SARI
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
                                    WAY DAM
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
                                    0+205
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
                                    10,5
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
                                    5
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
                                    1
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
                                    B
                                </Typography>
                            </View>
                        </View>
                        {/* status */}
                        <View style={{
                            marginTop: 5,
                            marginBottom: 15,
                            paddingHorizontal: 10,
                            display: "flex",
                            gap: 5,
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                        }}>
                            <Typography
                                style={{
                                    fontSize: 15,
                                }}
                            >
                                Status
                            </Typography>
                            <Button
                                onPress={() => setModalStatus(true)}
                                style={{
                                    width: Dimensions.get("window").width / 1 - 70,
                                }}
                                color="Success 600"
                            >
                                Diterima
                            </Button>
                        </View>
                        <Separator
                            style={
                                { marginTop: 10, marginBottom: 10 }
                            }
                        ></Separator>
                        {/* verif */}
                        <View style={{
                            marginTop: 5,
                            marginBottom: 15,
                            paddingHorizontal: 10,
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}>
                            <Button
                                onPress={() => router.push("(autenticated)/survey/home/sectionBridge/detail")}
                                style={{
                                    width: Dimensions.get("window").width / 3 - 25,
                                }}
                                color="Primary Blue"
                            >
                                Lihat
                            </Button>
                            <Button
                                onPress={() => setModalStatusTolak(true)}

                                style={{
                                    width: Dimensions.get("window").width / 3 - 25,
                                }}
                                color="Error 500"
                            >
                                Tolak
                            </Button>
                            <Button
                                onPress={() => setModalStatusTerima(true)}
                                style={{
                                    width: Dimensions.get("window").width / 3 - 25,
                                }}
                                color="Success 600"
                            >
                                Terima
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
            {/* Modal status */}
            <Modal transparent={true} visible={modalStatus}>
                <Pressable
                    style={{
                        flex: 1,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(20, 21, 17, 0.5)",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    onPress={() => setModalStatus(false)}
                >
                    <View
                        backgroundColor="Background 100"
                        style={{
                            width: "80%",
                            // height: 300,
                            padding: 20,
                            borderRadius: 15,
                            justifyContent: "center",
                            gap: 10,
                            paddingBottom: 20,
                        }}
                    >
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 1,
                            }}
                        >
                            <View
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: 5,
                                }}
                            >
                                <Typography
                                    style={{
                                        fontWeight: "bold",
                                    }}
                                >
                                    Status
                                </Typography>
                                <Typography>
                                    :
                                </Typography>
                            </View>
                            <View>
                                <Typography>
                                    Diterima
                                </Typography>
                            </View>
                        </View>
                        {/*  */}
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 1,
                            }}
                        >
                            <View
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: 5,
                                }}
                            >
                                <Typography
                                    style={{
                                        fontWeight: "bold",
                                    }}
                                >
                                    Keterangan
                                </Typography>
                                <Typography>
                                    :
                                </Typography>
                            </View>
                            <View>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis quia temporibus fugit ullam quo cum sed repellendus. Placeat, eius ullam.
                                </Typography>
                            </View>
                        </View>
                        <Button
                            color="Primary Blue"
                            onPress={() => setModalStatus(false)}
                        // onPress={handleUploadFotoStatus}
                        // disabled={uploadFotoStatus.isPending}
                        >
                            <Typography color="Background 100">Keluar</Typography>
                        </Button>
                    </View>
                </Pressable>
            </Modal>

            {/* Modal terima */}
            <Modal transparent={true} visible={modalStatusTerima}>
                <Pressable
                    style={{
                        flex: 1,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(20, 21, 17, 0.5)",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    onPress={() => setModalStatusTerima(false)}
                >
                    <View
                        backgroundColor="Background 100"
                        style={{
                            width: "80%",
                            // height: 300,
                            padding: 20,
                            borderRadius: 15,
                            justifyContent: "center",
                            gap: 10,
                            paddingBottom: 20,
                        }}
                    >
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 1,
                            }}
                        >
                            <View
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    gap: 5,
                                }}
                            >
                                <Typography
                                    style={{
                                        fontWeight: "bold",
                                        marginBottom: 10,
                                        textAlign: "center",
                                    }}
                                    fontSize={18}
                                >
                                    Apakah kamu yakin ingin menerima data ini?
                                </Typography>
                                <TextInput
                                    label="Keterangan"
                                    placeholder="Masukan keterangan"
                                    keyboardType="default"
                                    borderRadius={17}
                                    color="Primary Blue"
                                    numberOfLines={5}
                                    textAlignVertical="top"
                                    multiline={true}
                                // value={field.value}
                                // onBlur={field.onBlur}
                                // onChangeText={field.onChange}
                                // errorMessage={fieldState.error?.message}
                                />
                            </View>
                        </View>
                        {/*  */}
                        <View style={{
                            marginTop: 10,
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}>
                            <Button
                                onPress={() => setModalStatusTerima(false)}
                                style={{
                                    width: Dimensions.get("window").width / 2 - 65,
                                    borderWidth: 1,
                                    borderColor: Colors["Primary Blue"]
                                }}
                                color="Background 100"

                            >
                                <Typography color="Primary Blue">Tidak</Typography>
                            </Button>
                            <Button
                                style={{
                                    width: Dimensions.get("window").width / 2 - 65,
                                }}
                                color="Primary Blue"
                            >
                                <Typography color="Background 100">Iya</Typography>
                            </Button>
                        </View>
                        {/*  */}
                    </View>
                </Pressable>
            </Modal>
            {/* Modal terima */}

            {/* Modal tolak */}
            <Modal transparent={true} visible={modalStatusTolak}>
                <Pressable
                    style={{
                        flex: 1,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(20, 21, 17, 0.5)",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    onPress={() => setModalStatusTolak(false)}
                >
                    <View
                        backgroundColor="Background 100"
                        style={{
                            width: "80%",
                            // height: 300,
                            padding: 20,
                            borderRadius: 15,
                            justifyContent: "center",
                            gap: 10,
                            paddingBottom: 20,
                        }}
                    >
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 1,
                            }}
                        >
                            <View
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    gap: 5,
                                }}
                            >
                                <Typography
                                    style={{
                                        fontWeight: "bold",
                                        marginBottom: 10,
                                        textAlign: "center",
                                    }}
                                    fontSize={18}
                                >
                                    Apakah kamu yakin ingin menolak data ini?
                                </Typography>
                                <TextInput
                                    label="Keterangan"
                                    placeholder="Masukan keterangan"
                                    keyboardType="default"
                                    borderRadius={17}
                                    color="Primary Blue"
                                    numberOfLines={5}
                                    textAlignVertical="top"
                                    multiline={true}
                                // value={field.value}
                                // onBlur={field.onBlur}
                                // onChangeText={field.onChange}
                                // errorMessage={fieldState.error?.message}
                                />
                            </View>
                        </View>
                        {/*  */}
                        <View style={{
                            marginTop: 10,
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}>
                            <Button
                                onPress={() => setModalStatusTolak(false)}
                                style={{
                                    width: Dimensions.get("window").width / 2 - 65,
                                    borderWidth: 1,
                                    borderColor: Colors["Primary Blue"]
                                }}
                                color="Background 100"

                            >
                                <Typography color="Primary Blue">Tidak</Typography>
                            </Button>
                            <Button
                                style={{
                                    width: Dimensions.get("window").width / 2 - 65,
                                }}
                                color="Primary Blue"
                            >
                                <Typography color="Background 100">Iya</Typography>
                            </Button>
                        </View>
                        {/*  */}
                    </View>
                </Pressable>
            </Modal>
            {/* Modal tolak */}
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