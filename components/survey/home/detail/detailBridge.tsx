import { Button } from "@/components/ui/button";
import Separator from "@/components/ui/separator";
import { Typography } from "@/components/ui/typography";
import View from "@/components/ui/view";
import { useAppTheme } from "@/context";
import React from "react";

export default function TabDetailBridge() {
    const { Colors } = useAppTheme();

    return (
        <View>
            <View
                style={{
                    borderRadius: 15,
                    borderWidth: 1,
                    borderColor: Colors["Line 300"],
                    marginHorizontal: 20,
                    paddingVertical: 15,
                    gap: 15,
                }}
            >
                <View
                    style={{
                        marginHorizontal: 20,
                    }}
                >
                    <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
                        No Ruas
                    </Typography>
                    <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                        163
                    </Typography>
                </View>
                <Separator />
                {/*  */}
                <View
                    style={{
                        marginHorizontal: 20,
                    }}
                >
                    <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
                        Nama Ruas
                    </Typography>
                    <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                        TOTO KATON - TOTO MAKMUR
                    </Typography>
                </View>
                <Separator />
                <View
                    style={{
                        marginHorizontal: 20,
                    }}
                >
                    <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
                        Nama Jembatan
                    </Typography>
                    <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                        WAY MILI
                    </Typography>
                </View>
                <Separator />
                <View
                    style={{
                        marginHorizontal: 20,
                    }}
                >
                    <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
                        Nama Kecamatan
                    </Typography>
                    <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                        Batu Putih
                    </Typography>
                </View>
                <Separator />
                <View
                    style={{
                        marginHorizontal: 20,
                    }}
                >
                    <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
                        Asal
                    </Typography>
                    <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                        TOTO KATON
                    </Typography>
                </View>
                <Separator />
                {/*  */}
                <View
                    style={{
                        marginHorizontal: 20,
                        display: "flex",
                        flexDirection: "row",
                        gap: 5,
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
                            No
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                            18.12.163.2
                        </Typography>
                    </View>
                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
                            Panjang
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                            3,50
                        </Typography>
                    </View>
                </View>
                <Separator />
                <View
                    style={{
                        marginHorizontal: 20,
                        display: "flex",
                        flexDirection: "row",
                        gap: 5,
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
                            Lebar
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                            6,3
                        </Typography>
                    </View>
                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
                            KMPOST (km)
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                            1+600
                        </Typography>
                    </View>
                </View>
                <Separator />
                <View
                    style={{
                        marginHorizontal: 20,
                        display: "flex",
                        flexDirection: "row",
                        gap: 5,
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
                            Jumlah bentang
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                            12
                        </Typography>
                    </View>
                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
                            Tipe BA
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                            G
                        </Typography>
                    </View>
                </View>
                <Separator />
                <View
                    style={{
                        marginHorizontal: 20,
                        display: "flex",
                        flexDirection: "row",
                        gap: 5,
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
                            Kondisi BA
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                            1
                        </Typography>
                    </View>
                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
                            Tipe BB
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                            1
                        </Typography>
                    </View>
                </View>
                <Separator />
                <View
                    style={{
                        marginHorizontal: 20,
                        display: "flex",
                        flexDirection: "row",
                        gap: 5,
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
                            Tipe Fondasi
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                            LS
                        </Typography>
                    </View>
                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
                            Kondisi Fondasi
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                            1
                        </Typography>
                    </View>
                </View>
                <Separator />
                <View
                    style={{
                        marginHorizontal: 20,
                        display: "flex",
                        flexDirection: "row",
                        gap: 5,
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
                            Bahan
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                            T
                        </Typography>
                    </View>
                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
                            Kondisi
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                            B
                        </Typography>
                    </View>
                </View>
                <Separator />
                <View
                    style={{
                        marginHorizontal: 20,
                        display: "flex",
                        flexDirection: "row",
                        gap: 5,
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
                            G. Bujur
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                            -4.4245321
                        </Typography>
                    </View>
                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
                            G. Lintang
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                            105.0344679
                        </Typography>
                    </View>
                </View>
                <Separator />
                <View
                    style={{
                        marginHorizontal: 20,
                        display: "flex",
                        flexDirection: "row",
                        gap: 5,
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
                            Nilai Kondisi
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                            1
                        </Typography>
                    </View>
                </View>
            </View>
            {/* button */}
            <Button
                style={{
                    marginHorizontal: 20,
                    marginTop: 20,
                    backgroundColor: Colors["Primary Blue"],
                    borderColor: Colors["Primary Blue"],
                }}
            >
                <Typography style={{ color: Colors["Background 100"] }}>Download Ruas Jembatan</Typography>
            </Button>
        </View>
    );
}
