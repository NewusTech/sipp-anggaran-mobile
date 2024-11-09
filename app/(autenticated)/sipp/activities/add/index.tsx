import { IconCaretDown } from "@/components/icons";
import Appbar from "@/components/ui/appBar";
import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/loader";
import { SelectInput } from "@/components/ui/selectInput";
import TextInput from "@/components/ui/textInput";
import View from "@/components/ui/view";
import { useAppTheme } from "@/context";
import { usePostKegiatan } from "@/services/sipp";
import { kegiatanPayload, kegiatanSchema } from "@/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { ScrollView } from "react-native";
import Toast from "react-native-toast-message";

export default function index() {
  const router = useRouter();
  const { Colors } = useAppTheme();

  const { control, handleSubmit, formState, setValue } =
    useForm<kegiatanPayload>({
      defaultValues: {},
      resolver: zodResolver(kegiatanSchema),
      mode: "all",
    });

  const postKegiatanMutation = usePostKegiatan();

  const handlePostKegiatan = handleSubmit((data) => {
    postKegiatanMutation.mutate(data, {
      onSuccess: async (response) => {
        Toast.show({
          type: "success",
          text1: "Sukses!",
          text2: "Tambah Kegiatan",
        });
      },
      onError: (error) => {
        Toast.show({
          type: "error",
          text1: "Gagal!",
          text2: "Tambah Kegiatan",
        });
      },
    });
  });

  return (
    <View backgroundColor="Background 100" style={{ flex: 1 }}>
      <Appbar
        title={"Tambah Data Kegiatan (manual)"}
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
          name="program"
          render={({ field, fieldState }) => (
            <SelectInput
              label="Program"
              data={[]}
              placeholder="Program"
              onSelect={(dataItem: any, index: any) =>
                field.onChange(dataItem.title)
              }
              value={field.value}
              trailingIcon={<IconCaretDown color="Text 900" />}
              padding={12}
              borderRadius={15}
            />
          )}
        />
        <Controller
          control={control}
          name="kegiatan_id"
          render={({ field, fieldState }) => (
            <SelectInput
              label="Kegiatan"
              data={[]}
              placeholder="Kegiatan"
              onSelect={(dataItem: any, index: any) =>
                field.onChange(dataItem.title)
              }
              value={field.value}
              trailingIcon={<IconCaretDown color="Text 900" />}
              padding={12}
              borderRadius={15}
            />
          )}
        />
        <Controller
          control={control}
          name="sub_kegiatan_id"
          render={({ field, fieldState }) => (
            <SelectInput
              label="Sub Kegiatan"
              data={[]}
              placeholder="Sub Kegiatan"
              onSelect={(dataItem: any, index: any) =>
                field.onChange(dataItem.title)
              }
              value={field.value}
              trailingIcon={<IconCaretDown color="Text 900" />}
              padding={12}
              borderRadius={15}
            />
          )}
        />
        <Controller
          control={control}
          name="title"
          render={({ field, fieldState }) => (
            <TextInput
              label="Nama Kegiatan"
              placeholder="Nama Kegiatan"
              keyboardType="default"
              borderRadius={17}
              color="Info 500"
              value={field.value}
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="pagu"
          render={({ field, fieldState }) => (
            <TextInput
              label="Pagu Anggaran"
              placeholder="Pagu Anggaran"
              keyboardType="numeric"
              borderRadius={17}
              color="Info 500"
              value={field.value}
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="tahun"
          render={({ field, fieldState }) => (
            <TextInput
              label="Tahun Kegiatan"
              placeholder="Tahun Kegiatan"
              keyboardType="default"
              borderRadius={17}
              color="Info 500"
              value={field.value}
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="bidang_id"
          render={({ field, fieldState }) => (
            <SelectInput
              label="Bidang"
              data={[]}
              placeholder="Bidang"
              onSelect={(dataItem: any, index: any) =>
                field.onChange(dataItem.title)
              }
              value={field.value}
              trailingIcon={<IconCaretDown color="Text 900" />}
              padding={12}
              borderRadius={15}
            />
          )}
        />
        <Controller
          control={control}
          name="submber_dana"
          render={({ field, fieldState }) => (
            <SelectInput
              label="Sumber Dana"
              data={[]}
              placeholder="Sumber Dana"
              onSelect={(dataItem: any, index: any) =>
                field.onChange(dataItem.title)
              }
              value={"field.value"}
              trailingIcon={<IconCaretDown color="Text 900" />}
              padding={12}
              borderRadius={15}
            />
          )}
        />
        <Controller
          control={control}
          name="jenis_pengadaan"
          render={({ field, fieldState }) => (
            <TextInput
              label="Jenis Pengadaan"
              placeholder="Jenis Pengadaan"
              keyboardType="default"
              borderRadius={17}
              color="Info 500"
              value={field.value}
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="metode_pemilihan"
          render={({ field, fieldState }) => (
            <TextInput
              label="Metode Pemilihan"
              placeholder="Metode Pemilihan"
              keyboardType="default"
              borderRadius={17}
              color="Info 500"
              value={field.value}
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
        <Button
          disabled={!formState.isValid || postKegiatanMutation.isPending}
          onPress={handlePostKegiatan}
        >
          {postKegiatanMutation.isPending ? (
            <Loader color="Background 100" />
          ) : (
            "Simpan"
          )}
        </Button>
      </ScrollView>
    </View>
  );
}
