import { getDashboardTableRoadSectionDetail } from "@/api/survey";
import { Button } from "@/components/ui/button";
import Separator from "@/components/ui/separator";
import { Typography } from "@/components/ui/typography";
import View from "@/components/ui/view";
import { useAppTheme } from "@/context";
import { useGetDetailRuasJalan } from "@/services/survey";
import { useLocalSearchParams } from "expo-router";
import React from "react";

export default function TabDetailRoad() {
    const { Colors } = useAppTheme();
    const params = useLocalSearchParams<{
        id: string;
    }>();

    const getDetailRuasJalan = useGetDetailRuasJalan(params.id);

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
                        No
                    </Typography>
                    <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                        {getDetailRuasJalan?.data?.data?.no_ruas || "-"}
                    </Typography>
                </View>
                <Separator />
                <View
                    style={{
                        marginHorizontal: 20,
                    }}
                >
                    <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
                        Nama Ruas
                    </Typography>
                    <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                        {getDetailRuasJalan?.data?.data?.nama_ruas || "-"}
                    </Typography>
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
                            Panjang Ruas
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                        {getDetailRuasJalan?.data?.data?.panjang_ruas || "-"}
                        </Typography>
                    </View>
                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
                            Lebar Ruas
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                        {getDetailRuasJalan?.data?.data?.lebar || "-"}
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
                            Rigit
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                        {getDetailRuasJalan?.data?.data?.rigit || "-"}
                        </Typography>
                    </View>
                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
                            Hotmix
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                        {getDetailRuasJalan?.data?.data?.hotmix || "-"}
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
                            Lapen
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                        {getDetailRuasJalan?.data?.data?.lapen || "-"}
                        </Typography>
                    </View>
                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
                            Telford
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                        {getDetailRuasJalan?.data?.data?.lapen || "-"}
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
                            Tanah
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                        {getDetailRuasJalan?.data?.data?.tanah || "-"}
                        </Typography>
                    </View>
                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
                            Baik
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                        {getDetailRuasJalan?.data?.data?.baik || "-"}
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
                            Sedang
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                        {getDetailRuasJalan?.data?.data?.sedang || "-"}
                        </Typography>
                    </View>
                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
                            Rusak Ringan
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                        {getDetailRuasJalan?.data?.data?.rusak_ringan || "-"}
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
                            Rusak Berat
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                        {getDetailRuasJalan?.data?.data?.rusak_berat || "-"}
                        </Typography>
                    </View>
                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
                            LHR
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                        {getDetailRuasJalan?.data?.data?.lhr || "-"}
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
                            Akses
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                        {getDetailRuasJalan?.data?.data?.akses || "-"}
                        </Typography>
                    </View>
                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
                            Keterangan
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                        {getDetailRuasJalan?.data?.data?.keterangan || "-"}
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
                <Typography style={{ color: Colors["Background 100"] }}>Download Ruas Jalan</Typography>
            </Button>
        </View>
    );
}
