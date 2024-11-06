import { IconCaretDown, IconCaretLeft, IconPlus } from "@/components/icons";
import IconFile from "@/components/icons/IconFile";
import { Button } from "@/components/ui/button";
import { SearchBox } from "@/components/ui/searchBox";
import { SelectInput } from "@/components/ui/selectInput";
import Separator from "@/components/ui/separator";
import { Typography } from "@/components/ui/typography";
import View from "@/components/ui/view";
import { useAppTheme } from "@/context";
import React, { useState } from "react";
import { Dimensions, Modal, Pressable, StyleSheet } from "react-native";
import { AppColor } from "@/constants";
import Accordion from "@/components/ui/accordion";
import {
    IconCaretFillDown,
    IconCaretRight,
} from "@/components/icons";
import { IconCaretUp } from "@/components/icons/IconCaretUp";
import { router } from "expo-router"
import ModalAction from "@/components/ui/modalAction";
export default function TabDetailDrainase() {
    // Sample month data; replace with actual data source
    const monthOptions = [
        { title: "Januari" },
        { title: "Februari" },
        { title: "Maret" },
        { title: "April" },
        // Add more options as needed
    ];
    const { Colors } = useAppTheme();
    const [filterMonth, setFilterMonth] = useState<string | number>("");
    const [search, setSearch] = useState<string>("");
    const [modalDelete, setModalDelete] = useState<boolean>(false);
    const [modalStatus, setModalStatus] = useState(false);


    return (
        <View>
            <View
                style={{
                    marginHorizontal: 20,
                    paddingBottom: 15,
                    gap: 15,
                }}
            >
                <SearchBox
                    placeholder="Cari Ruas Drainase"
                    width={"100%"}
                    value={search}
                    onChangeText={setSearch}
                />
                <SelectInput
                    data={monthOptions}
                    color="Primary Blue"
                    value={filterMonth}
                    onSelect={(data) => setFilterMonth(data.title)}
                    label="Filter Bulan"
                    placeholder="Pilih Bulan"
                    trailingIcon={<IconCaretDown />}
                />
                <View style={{
                    marginTop: 10,
                    marginBottom: 15,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}>
                    <Button
                        style={{
                            width: Dimensions.get("window").width / 2 - 25,
                        }}
                        color="Primary Blue"
                    >
                        <IconFile />
                        <Typography color='Background 100'>Export</Typography>
                    </Button>
                    <Button
                        onPress={() => router.push("(autenticated)/survey/home/sectionDrainase/add")}
                        style={{
                            width: Dimensions.get("window").width / 2 - 25,
                        }}
                        color="Primary Blue"
                    >
                        <IconPlus color='Background 100' />
                        <Typography color='Background 100'>Tambah</Typography>
                    </Button>
                </View>
                <Separator />
                {/*  */}
                <View style={{ marginTop: 10 }}>
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
                                            POROS 1 (KANAN JALAN)
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
                                            Desa
                                        </Typography>
                                        <Typography
                                            style={{
                                                fontSize: 16,
                                            }}
                                        >
                                            MULYO SARI
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
                                {/*  */}
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
                                            80
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
                                            Panjang Drainase
                                        </Typography>
                                        <Typography
                                            style={{
                                                fontSize: 16,
                                            }}
                                        >
                                            40
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
                                            Letak Drainase
                                        </Typography>
                                        <Typography
                                            style={{
                                                fontSize: 16,
                                            }}
                                        >
                                            -
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
                                            Lebar Atas
                                        </Typography>
                                        <Typography
                                            style={{
                                                fontSize: 16,
                                            }}
                                        >
                                            60
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
                                            Lebar Bawah
                                        </Typography>
                                        <Typography
                                            style={{
                                                fontSize: 16,
                                            }}
                                        >
                                            40
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
                                            Tinggi
                                        </Typography>
                                        <Typography
                                            style={{
                                                fontSize: 16,
                                            }}
                                        >
                                            60
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
                                            Baik
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
                                        style={{
                                            width: Dimensions.get("window").width / 2 - 40,
                                        }}
                                        color="Success 600"
                                        onPress={() => router.push("(autenticated)/survey/home/sectionDrainase/edit")}
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