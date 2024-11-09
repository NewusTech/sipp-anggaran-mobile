import { IconCalender, IconCaretDown } from "@/components/icons";
import Appbar from "@/components/ui/appBar";
import { Button } from "@/components/ui/button";
import { DateInput } from "@/components/ui/inputDate";
import Loader from "@/components/ui/loader";
import TextInput from "@/components/ui/textInput";
import { Typography } from "@/components/ui/typography";
import View from "@/components/ui/view";
import { useAppTheme } from "@/context";
import { useGetDetailKegiatan, usePutKegiatan } from "@/services/sipp";
import { kegiatanUpdatePayload, kegiatanUpdateSchema } from "@/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { ScrollView } from "react-native";
import Toast from "react-native-toast-message";

export default function index() {
  const params = useLocalSearchParams<{
    id: string;
  }>();

  const router = useRouter();
  const { Colors } = useAppTheme();

  const { control, handleSubmit, formState, setValue } =
    useForm<kegiatanUpdatePayload>({
      defaultValues: {
        awal_kontrak: new Date().toDateString(),
        akhir_kontrak: new Date().toDateString(),
      },
      resolver: zodResolver(kegiatanUpdateSchema),
      mode: "all",
    });

  const getDetailKegiatan = useGetDetailKegiatan(params.id);
  const detailKegiatan = getDetailKegiatan.data?.data;

  const putKegiatanMutation = usePutKegiatan();

  const handlePutKegiatan = handleSubmit((data) => {
    putKegiatanMutation.mutate(
      { id: params.id, data },
      {
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
      }
    );
  });

  useEffect(() => {
    if (detailKegiatan) {
      setValue(
        "akhir_kontrak",
        detailKegiatan.awal_kontrak || new Date().toDateString()
      );
      setValue("alamat", detailKegiatan.alamat);
      setValue(
        "awal_kontrak",
        detailKegiatan.awal_kontrak || new Date().toDateString()
      );
      setValue("jenis_pengadaan", detailKegiatan.jenis_pengadaan);
      setValue("nilai_kontrak", detailKegiatan.nilai_kontrak);
      setValue("no_detail_kegiatan", detailKegiatan.no_detail_kegiatan);
      setValue("no_kontrak", detailKegiatan.no_kontrak);
      setValue("no_pekerjaan", detailKegiatan.no_detail_kegiatan);
      setValue("no_spmk", detailKegiatan.no_spmk);
      setValue("penyedia_jasa", detailKegiatan.jenis_pengadaan);
      setValue("target", detailKegiatan.target);
      setValue("title", detailKegiatan.title);
    }
  }, [detailKegiatan]);

  return (
    <View backgroundColor="Background 100" style={{ flex: 1 }}>
      <Appbar
        title={
          <Typography fontSize={12}>
            {detailKegiatan?.title || "Edit Kegiatan"}
          </Typography>
        }
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
          name="title"
          render={({ field, fieldState }) => (
            <TextInput
              label="Judul Pekerjaan"
              placeholder="Judul Pekerjaan"
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
          name="no_pekerjaan"
          render={({ field, fieldState }) => (
            <TextInput
              label="Nomor Pekerjaan"
              placeholder="Nomor Pekerjaan"
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
          name="no_spmk"
          render={({ field, fieldState }) => (
            <TextInput
              label="Nomor SPMK"
              placeholder="Nomor SPMK"
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
          name="penyedia_jasa"
          render={({ field, fieldState }) => (
            <TextInput
              label="Penyedia Jasa"
              placeholder="Penyedia Jasa"
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
          name="no_kontrak"
          render={({ field, fieldState }) => (
            <TextInput
              label="Nomor Kontrak"
              placeholder="Nomor Kontrak"
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
          name="no_kontrak"
          render={({ field, fieldState }) => (
            <TextInput
              label="Nilai Kontrak"
              placeholder="Nilai Kontrak"
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
          name="awal_kontrak"
          render={({ field, fieldState }) => (
            <DateInput
              withBorder
              label={"Awal Kontrak"}
              trailingIcon={
                <View style={{ marginLeft: "auto" }}>
                  <IconCalender width={21} height={21} color="Background 500" />
                </View>
              }
              onChange={(date) => {
                field.onChange(new Date(date?.toString() || ""));
              }}
              value={new Date(field.value)}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="akhir_kontrak"
          render={({ field, fieldState }) => (
            <DateInput
              withBorder
              label={"Akhir Kontrak"}
              trailingIcon={
                <View style={{ marginLeft: "auto" }}>
                  <IconCalender width={21} height={21} color="Background 500" />
                </View>
              }
              onChange={(date) => {
                field.onChange(new Date(date?.toString() || ""));
              }}
              value={new Date(field.value)}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="target"
          render={({ field, fieldState }) => (
            <TextInput
              label="Target %"
              placeholder="Target %"
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
          name="alamat"
          render={({ field, fieldState }) => (
            <TextInput
              label="Lokasi Pekerjaan"
              placeholder="Lokasi Pekerjaan"
              keyboardType="default"
              multiline
              numberOfLines={5}
              borderRadius={17}
              color="Info 500"
              value={field.value}
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              errorMessage={fieldState.error?.message}
              style={{
                textAlignVertical: "top",
              }}
            />
          )}
        />
        <Button
          disabled={!formState.isValid || putKegiatanMutation.isPending}
          onPress={handlePutKegiatan}
        >
          {putKegiatanMutation.isPending ? (
            <Loader color="Background 100" />
          ) : (
            "Simpan"
          )}
        </Button>
      </ScrollView>
    </View>
  );
}
