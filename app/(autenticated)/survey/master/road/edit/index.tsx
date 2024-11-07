import { IconCaretDown } from "@/components/icons";
import IconLocation from "@/components/icons/IconLocation";
import TabDetailDrainase from "@/components/survey/home/detail/detailDrainase";
import Appbar from "@/components/ui/appBar";
import { Button } from "@/components/ui/button";
import { SelectInput } from "@/components/ui/selectInput";
import Separator from "@/components/ui/separator";
import TextInput from "@/components/ui/textInput";
import { Typography } from "@/components/ui/typography";
import View from "@/components/ui/view";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView } from "react-native";
import { LeafletView } from "react-native-leaflet-maps";


export default function index() {
    const router = useRouter();

    return (
        <View backgroundColor="Background 100" style={{ flex: 1 }}>
            <Appbar
                title={"Edit Ruas Jalan"}
                variant="light"
                backIconPress={() => router.back()}
            />
            <ScrollView
                style={{ width: "100%", height: "100%" }}
                contentContainerStyle={{
                    padding: 15,
                    paddingTop: 20,
                    paddingBottom: 40,
                    gap: 20,
                }}
            >
                <TextInput
                    label="No Ruas"
                    placeholder="No Ruas"
                    keyboardType="default"
                    borderRadius={17}
                    color="Primary Blue"
                //   value={field.value}
                //   onBlur={field.onBlur}
                //   onChangeText={field.onChange}
                //   errorMessage={fieldState.error?.message}
                />
                <TextInput
                    label="Nama Ruas"
                    placeholder="Nama Ruas"
                    keyboardType="numeric"
                    borderRadius={17}
                    color="Primary Blue"
                //   value={field.value}
                //   onBlur={field.onBlur}
                //   onChangeText={field.onChange}
                //   errorMessage={fieldState.error?.message}
                />
                <TextInput
                    label="Panjang Ruas"
                    placeholder="Panjang Ruas"
                    keyboardType="numeric"
                    borderRadius={17}
                    color="Primary Blue"
                //   value={field.value}
                //   onBlur={field.onBlur}
                //   onChangeText={field.onChange}
                //   errorMessage={fieldState.error?.message}
                />
                <TextInput
                    label="Lebar Ruas"
                    placeholder="Lebar Ruas"
                    keyboardType="numeric"
                    borderRadius={17}
                    color="Primary Blue"
                //   value={field.value}
                //   onBlur={field.onBlur}
                //   onChangeText={field.onChange}
                //   errorMessage={fieldState.error?.message}
                />
                <TextInput
                    label="Akses"
                    placeholder="Akses"
                    keyboardType="default"
                    borderRadius={17}
                    color="Primary Blue"
                //   value={field.value}
                //   onBlur={field.onBlur}
                //   onChangeText={field.onChange}
                //   errorMessage={fieldState.error?.message}
                />
                <SelectInput
                    label="Kecamatan"
                    data={[]}
                    placeholder="Kecamatan"
                    onSelect={(dataItem: any, index: any) =>
                        // field.onChange(dataItem.title)
                        console.log("")
                    }
                    value={"field.value"}
                    trailingIcon={<IconCaretDown color="Text 900" />}
                    padding={12}
                    borderRadius={15}
                />
                <TextInput
                    label="Desa/Kelurahan"
                    placeholder="Desa/Kelurahan"
                    keyboardType="default"
                    borderRadius={17}
                    color="Primary Blue"
                //   value={field.value}
                //   onBlur={field.onBlur}
                //   onChangeText={field.onChange}
                //   errorMessage={fieldState.error?.message}
                />
                {/*  */}
                <TextInput
                    label="Alamat"
                    placeholder="Cari Alamat"
                    keyboardType="default"
                    borderRadius={17}
                    style={{
                        flex: 1
                    }}
                    color="Primary Blue"
                //   value={field.value}
                //   onBlur={field.onBlur}
                //   onChangeText={field.onChange}
                //   errorMessage={fieldState.error?.message}
                />
                <Button
                    color="Primary Blue"
                >Cari Alamat
                </Button>
                {/* map */}
                <View style={{ flex: 1, width: "100%", height: 300, marginTop: 10, }}>
                    <LeafletView
                        mapCenterPosition={{
                            lat: -5.39714,
                            lng: 105.266792,
                        }}
                    />
                </View>
                <Separator
                ></Separator>
                {/* button */}
                <View style={{
                    marginTop: 5,
                    marginBottom: 5,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}>
                    <Button
                        style={{
                            width: Dimensions.get("window").width / 2 - 25,
                        }}
                        color="Error 500"
                    >
                        Batal
                    </Button>
                    <Button
                        style={{
                            width: Dimensions.get("window").width / 2 - 25,
                        }}
                        color="Primary Blue"
                        onPress={() => router.push("(autenticated)/survey/home/sectionDrainase/edit")}
                    >
                        Tambah
                    </Button>
                </View>
            </ScrollView>
        </View>
    );
}
