import { Button } from "@/components/ui/button";
import TextInput from "@/components/ui/textInput";
import { Typography } from "@/components/ui/typography";
import View from "@/components/ui/view";
import { useAppTheme } from "@/context";
import { useAuthLogin } from "@/services";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useAuthActions } from "@/store/sipp";
import { useNavigation, useRouter } from "expo-router";
import React from "react";
import { Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PostLoginPayload, postLoginPayloadSchema } from "@/validation";
import { setItem } from "@/lib/async-storage";
import Toast from "react-native-toast-message";
import Loader from "@/components/ui/loader";

export default function index() {
  const router = useRouter();
  const { Colors } = useAppTheme();
  const inset = useSafeAreaInsets();
  const navigation = useNavigation<any>();

  // store
  const { setAccessToken } = useAuthActions();

  const loginMutation = useAuthLogin();

  const { control, handleSubmit, formState } = useForm<PostLoginPayload>({
    defaultValues: {
      email: "newustechnology@gmail.com",
      password: "password",
    },
    resolver: zodResolver(postLoginPayloadSchema),
    mode: "all",
  });

  const handleLoginMutation = handleSubmit((data) => {
    loginMutation.mutate(data, {
      onSuccess: async (response) => {
        setAccessToken(response.data.token);

        await setItem("accesstoken", response.data.token);
        await setItem("app_name", response.data.app_name);

        Toast.show({
          type: "success",
          text1: "Login berhasil!",
          text2: "Selamat anda berhasil login",
        });

        navigation.reset({
          index: 0,
        });
      },
      onError: (error) => {
        Toast.show({
          type: "error",
          text1: "Login gagal!",
          text2: "email atau password tidak sesuai",
        });
      },
    });
  });

  return (
    <View
      style={{
        paddingTop: inset.top + 20,
        flex: 1,
        paddingHorizontal: 20,
      }}
      borderColor="Background 900"
    >
      <Image
        source={require("@/assets/images/logo-pupr.png")}
        width={200}
        height={100}
        style={{ width: 200, height: 40 }}
      />
      <Typography
        fontFamily="Poppins-Bold"
        fontSize={20}
        color="Info 500"
        style={{ textAlign: "center", marginTop: 40, marginBottom: 40 }}
      >
        Login SIPP Anggaran
      </Typography>
      <View style={{ marginBottom: 20 }}>
        <Typography fontFamily="Poppins-Medium" fontSize={20}>
          Hi, Selamat Datang
        </Typography>
        <Typography fontFamily="Poppins-Light" fontSize={14}>
          Silakan masukkan email dan kata sandi Anda
        </Typography>
      </View>

      <View style={{ gap: 20 }}>
        <Controller
          control={control}
          name="email"
          render={({ field, fieldState }) => (
            <TextInput
              label="Email"
              placeholder="Contoh@gmail.com"
              keyboardType="email-address"
              borderRadius={17}
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
              label="Password"
              placeholder="Kata Sandi"
              secureTextEntry
              borderRadius={17}
              value={field.value}
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
        <Button
          style={{ marginTop: 10 }}
          disabled={!formState.isValid || loginMutation.isPending}
          onPress={handleLoginMutation}
        >
          {loginMutation.isPending ? (
            <Loader color="Background 100" />
          ) : (
            "Login"
          )}
        </Button>
      </View>
    </View>
  );
}
