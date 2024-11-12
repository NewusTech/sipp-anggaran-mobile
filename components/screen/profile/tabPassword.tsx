import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/loader";
import TextInput from "@/components/ui/textInput";
import View from "@/components/ui/view";
import { useUpadatePassword } from "@/services";
import {
  userUpdatePasswordPayload,
  userUpdatePasswordSchema,
} from "@/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import Toast from "react-native-toast-message";

export default function TabPassword() {
  const { control, handleSubmit, formState, setValue } =
    useForm<userUpdatePasswordPayload>({
      defaultValues: {},
      resolver: zodResolver(userUpdatePasswordSchema),
      mode: "all",
    });

  const updatePasswordMutation = useUpadatePassword();

  const handleSubmitUpdatePassword = handleSubmit((data) => {
    updatePasswordMutation.mutate(data, {
      onSuccess: async (response) => {
        Toast.show({
          type: "success",
          text1: "Sukses!",
          text2: "Update Password",
        });
      },
      onError: (error) => {
        Toast.show({
          type: "error",
          text1: "Gagal!",
          text2: "Update Password",
        });
      },
    });
  });

  return (
    <View style={{ padding: 15, gap: 10 }}>
      <Controller
        control={control}
        name="old_password"
        render={({ field, fieldState }) => (
          <TextInput
            label="Old Password"
            placeholder="Old Password"
            keyboardType="default"
            borderRadius={17}
            color="Info 500"
            secureTextEntry
            value={field.value}
            onBlur={field.onBlur}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field, fieldState }) => (
          <TextInput
            label="New Password"
            placeholder="New Password"
            keyboardType="default"
            borderRadius={17}
            color="Info 500"
            secureTextEntry
            value={field.value}
            onBlur={field.onBlur}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="re_password"
        render={({ field, fieldState }) => (
          <TextInput
            label="Re Password"
            placeholder="Re Password"
            keyboardType="default"
            borderRadius={17}
            color="Info 500"
            secureTextEntry
            value={field.value}
            onBlur={field.onBlur}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />

      <Button
        disabled={!formState.isValid || updatePasswordMutation.isPending}
        style={{ marginTop: 10 }}
        onPress={handleSubmitUpdatePassword}
      >
        {updatePasswordMutation.isPending ? (
          <Loader color="Background 100" />
        ) : (
          "Simpan"
        )}
      </Button>
    </View>
  );
}
