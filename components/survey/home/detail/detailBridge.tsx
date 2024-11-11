import { Button } from "@/components/ui/button";
import Separator from "@/components/ui/separator";
import { Typography } from "@/components/ui/typography";
import View from "@/components/ui/view";
import { useAppTheme } from "@/context";
import { useGetDetailRuasJembatan } from "@/services/survey";
import { useLocalSearchParams } from "expo-router";
import React from "react";

export default function TabDetailBridge() {
    const { Colors } = useAppTheme();
    const params = useLocalSearchParams<{
        id: string;
    }>();

    const getDetailRuasJembatan = useGetDetailRuasJembatan(params.id);
    const getDetailJembatan = getDetailRuasJembatan?.data?.data

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
                        {getDetailJembatan?.no_ruas || "-"}
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
                    {getDetailJembatan?.nama_ruas || "-"}
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
                    {getDetailJembatan?.nama_jembatan || "-"}
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
                    {getDetailJembatan?.kecamatan_name || "-"}
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
                    {getDetailJembatan?.asal || "-"}
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
                        {getDetailJembatan?.no_jembatan || "-"}
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
                        {getDetailJembatan?.panjang || "-"}
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
                        {getDetailJembatan?.lebar || "-"}
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
                        {getDetailJembatan?.kmpost || "-"}
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
                        {getDetailJembatan?.jml_bentang || "-"}
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
                        {getDetailJembatan?.tipe_ba || "-"}
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
                        {getDetailJembatan?.kondisi_ba || "-"}
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
                        {getDetailJembatan?.tipe_bb || "-"}
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
                        {getDetailJembatan?.tipe_fondasi || "-"}
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
                        {getDetailJembatan?.kondisi_fondasi || "-"}
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
                        {getDetailJembatan?.bahan || "-"}
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
                        {getDetailJembatan?.kondisi || "-"}
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
                        {getDetailJembatan?.longitude || "-"}
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
                        {getDetailJembatan?.latitude || "-"}
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
                        {getDetailJembatan?.nilai_kondisi || "-"}
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
