import { IconCalender, IconCaretDown } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { DateInput } from "@/components/ui/inputDate";
import Loader from "@/components/ui/loader";
import { SelectInput } from "@/components/ui/selectInput";
import TextInput from "@/components/ui/textInput";
import View from "@/components/ui/view";
import { useUpdatePrfoile } from "@/services";
import { useAuthProfile } from "@/store/sipp";
import { userDataPayload, userDataSchema } from "@/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import Toast from "react-native-toast-message";

export default function TabInformasi() {
  const user = useAuthProfile();

  const { control, handleSubmit, formState, setValue } =
    useForm<userDataPayload>({
      defaultValues: {
        birth_date: new Date().toDateString(),
      },
      resolver: zodResolver(userDataSchema),
      mode: "all",
    });

  const updateProfileMutation = useUpdatePrfoile();

  const handleSubmitUpdateProfile = handleSubmit((data) => {
    updateProfileMutation.mutate(data, {
      onSuccess: async (response) => {
        Toast.show({
          type: "success",
          text1: "Sukses!",
          text2: "Update Profile",
        });
      },
      onError: (error) => {
        Toast.show({
          type: "error",
          text1: "Gagal!",
          text2: "Update Profile",
        });
      },
    });
  });

  useEffect(() => {
    setValue("address", user?.address || "");
    setValue("birth_date", user?.birth_date || new Date().toDateString());
    setValue("birth_place", user?.birth_place || "");
    setValue("email", user?.email || "");
    setValue("gender", user?.gender || "");
    setValue("name", user?.name || "");
    setValue("phone_number", user?.phone_number || "");
  }, [user]);

  return (
    <View style={{ padding: 15, gap: 10 }}>
      <Controller
        control={control}
        name="name"
        render={({ field, fieldState }) => (
          <TextInput
            label="Nama Lengkap"
            placeholder="Nama Lengkap"
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
        name="gender"
        render={({ field, fieldState }) => (
          <SelectInput
            label="Jenis Kelamin"
            data={[{ title: "Laki-laki" }, { title: "Perempuan" }]}
            placeholder="Jenis Kelamin"
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
        name="birth_place"
        render={({ field, fieldState }) => (
          <TextInput
            label="Tempat Lahir"
            placeholder="Tempat Lahir"
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
        name="birth_date"
        render={({ field, fieldState }) => (
          <DateInput
            withBorder
            label={"Tanggal Lahir"}
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
        name="email"
        render={({ field, fieldState }) => (
          <TextInput
            label="Email"
            placeholder="Email"
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
        name="phone_number"
        render={({ field, fieldState }) => (
          <TextInput
            label="Nomor Telepon"
            placeholder="Nomor Telepon"
            keyboardType="number-pad"
            maxLength={13}
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
        name="address"
        render={({ field, fieldState }) => (
          <TextInput
            label="Alamat"
            placeholder="Alamat"
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
        disabled={!formState.isValid || updateProfileMutation.isPending}
        style={{ marginTop: 10 }}
        onPress={handleSubmitUpdateProfile}
      >
        {updateProfileMutation.isPending ? (
          <Loader color="Background 100" />
        ) : (
          "Simpan"
        )}
      </Button>
    </View>
  );
}
