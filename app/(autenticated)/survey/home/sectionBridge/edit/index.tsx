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


export default function index() {
    const router = useRouter();

    return (
        <View backgroundColor="Background 100" style={{ flex: 1 }}>
            <Appbar
                title={"Edit Survey Jembatan"}
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
                    keyboardType="numeric"
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
                    keyboardType="default"
                    borderRadius={17}
                    color="Primary Blue"
                //   value={field.value}
                //   onBlur={field.onBlur}
                //   onChangeText={field.onChange}
                //   errorMessage={fieldState.error?.message}
                />
                <TextInput
                    label="Asal"
                    placeholder="Asal"
                    keyboardType="default"
                    borderRadius={17}
                    color="Primary Blue"
                //   value={field.value}
                //   onBlur={field.onBlur}
                //   onChangeText={field.onChange}
                //   errorMessage={fieldState.error?.message}
                />
                <TextInput
                    label="KMPOST (Km)"
                    placeholder="KMPOST (Km)"
                    keyboardType="numeric"
                    borderRadius={17}
                    color="Primary Blue"
                //   value={field.value}
                //   onBlur={field.onBlur}
                //   onChangeText={field.onChange}
                //   errorMessage={fieldState.error?.message}
                />
                <TextInput
                    label="Tipe BA"
                    placeholder="Tipe BA"
                    keyboardType="default"
                    borderRadius={17}
                    color="Primary Blue"
                //   value={field.value}
                //   onBlur={field.onBlur}
                //   onChangeText={field.onChange}
                //   errorMessage={fieldState.error?.message}
                />
                <TextInput
                    label="Tipe BB"
                    placeholder="Tipe BB"
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
                    label="Bahan"
                    placeholder="Bahan"
                    keyboardType="default"
                    borderRadius={17}
                    color="Primary Blue"
                //   value={field.value}
                //   onBlur={field.onBlur}
                //   onChangeText={field.onChange}
                //   errorMessage={fieldState.error?.message}
                />
                {/*  */}
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
                {/*  */}
                <TextInput
                    label="Nomor Jembatan"
                    placeholder="Nomor Jembatan"
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
                    label="Nama Jembatan"
                    placeholder="Nama Jembatan"
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
                    label="Panjang"
                    placeholder="Panjang"
                    keyboardType="numeric"
                    borderRadius={17}
                    color="Primary Blue"
                //   value={field.value}
                //   onBlur={field.onBlur}
                //   onChangeText={field.onChange}
                //   errorMessage={fieldState.error?.message}
                />
                {/*  */}
                <TextInput
                    label="Jumlah Bentang"
                    placeholder="Jumlah Bentang"
                    keyboardType="numeric"
                    borderRadius={17}
                    color="Primary Blue"
                //   value={field.value}
                //   onBlur={field.onBlur}
                //   onChangeText={field.onChange}
                //   errorMessage={fieldState.error?.message}
                />
                {/*  */}
                <TextInput
                    label="Kondisi BA"
                    placeholder="Kondisi BA"
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
                {/*  */}
                <TextInput
                    label="Kondisi BB"
                    placeholder="Kondisi BB"
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
                {/*  */}
                <TextInput
                    label="Kondisi Fondasi"
                    placeholder="Kondisi Fondasi"
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
                {/*  */}
                <TextInput
                    label="Kondisi Lantai"
                    placeholder="Kondisi Lantai"
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
                {/*  */}
                <TextInput
                    label="Keterangan"
                    placeholder="Keterangan"
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
                    {/* <LeafletView
                        mapCenterPosition={{
                            lat: -5.39714,
                            lng: 105.266792,
                        }}
                    /> */}
                </View>
                <Separator
                    style={
                        { marginTop: 10, marginBottom: 10 }
                    }
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