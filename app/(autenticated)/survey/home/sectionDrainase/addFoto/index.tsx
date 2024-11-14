import { IconCaretDown } from "@/components/icons";
import IconLocation from "@/components/icons/IconLocation";
import TabDetailDrainase from "@/components/survey/home/detail/detailDrainase";
import Appbar from "@/components/ui/appBar";
import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/loader";
import { SelectInput } from "@/components/ui/selectInput";
import Separator from "@/components/ui/separator";
import TextInput from "@/components/ui/textInput";
import { Typography } from "@/components/ui/typography";
import UploadFoto from "@/components/ui/uploadFileFoto";
import View from "@/components/ui/view";
import { useAppTheme } from "@/context";
import { useGetMasterDataDesa } from "@/services/survey";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Dimensions, Modal, Pressable, ScrollView } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { drainaseFotoPayload, drainaseFotoSchema } from "@/validation/survey";



export default function index() {
    const router = useRouter();
    const { Colors } = useAppTheme();
    const [newFotoProfile, setNewFotoProfile] = useState("");
    const [modalProfile, setModalProfile] = useState(false);

    // const updateProfile = useUpdatePrfoile();
    // const uploadFotoProfile = useUploadFotoProfile();

    const getMasterDesa = useGetMasterDataDesa();
    const masterDataDesa = getMasterDesa.data?.data;

    // intergasi
    const { control, handleSubmit, formState, setValue, watch } =
    useForm<drainaseFotoPayload>({
      defaultValues: {},
      resolver: zodResolver(drainaseFotoSchema),
      mode: "all",
    });
    // intergasi


    return (
        <View backgroundColor="Background 100" style={{ flex: 1 }}>
            <Appbar
                title={"Tambah Survey Drainase"}
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
                <Controller
                    control={control}
                    name="desa_id"
                    render={({ field, fieldState }) => (
                        <SelectInput
                            label="Pilih Desa"
                            data={
                                masterDataDesa?.map((data) => {
                                    return {
                                        title: data.nama,
                                    };
                                }) || []
                            }
                            placeholder="Pilih Desa"
                            onSelect={(dataItem: any, index: any) => {
                                const id = masterDataDesa?.find(
                                    (f) => f.nama === dataItem.title
                                )?.id;
                                field.onChange(id);
                            }}
                            value={
                                masterDataDesa?.find(
                                    (f) => f.id.toString() === field.name.toString()
                                )?.nama || "-"
                            }
                            trailingIcon={<IconCaretDown color="Text 900" />}
                            padding={12}
                            borderRadius={15}
                        />
                    )}
                />
                {/*  */}
                <Pressable
                    style={{
                        backgroundColor: "white",
                        padding: 10,
                        borderRadius: 15,
                        paddingVertical: 35,
                        borderWidth: 1,
                        borderColor: Colors["Line 200"],
                    }}
                    onPress={() => setModalProfile(true)}
                >

                    <Typography
                        style={{
                            textAlign: "center",
                        }}
                    >
                        Upload Foto
                    </Typography>
                </Pressable>
                {/*  */}

                {/* button */}
                <Button
                    color="Primary Blue"
                >

                    Tambah Foto
                </Button>
            </ScrollView>
            {/* Modal foto profile */}
            <Modal transparent={true} visible={modalProfile}>
                <Pressable
                    style={{
                        flex: 1,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(20, 21, 17, 0.5)",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    onPress={() => setModalProfile(false)}
                >
                    <View
                        backgroundColor="Background 100"
                        style={{
                            width: "80%",
                            // height: 300,
                            padding: 20,
                            borderRadius: 15,
                            justifyContent: "center",
                            gap: 20,
                            paddingBottom: 20,
                        }}
                    >
                        <UploadFoto
                            label="Masukan Foto Drainase"
                            image={newFotoProfile}
                            setImage={setNewFotoProfile}
                            aspect={[1, 1]}
                        />
                        <Button
                            color="Primary Blue"
                        // onPress={handleUploadFotoProfile}
                        // disabled={uploadFotoProfile.isPending}
                        >
                            <Typography color="Background 100">Simpan Foto</Typography>
                        </Button>
                    </View>
                </Pressable>
            </Modal>

        </View>
    );
}
