import { Button } from "@/components/ui/button";
import TextInput from "@/components/ui/textInput";
import { Typography } from "@/components/ui/typography";
import View from "@/components/ui/view";
import { useAppTheme } from "@/context";
import { useRouter } from "expo-router";
import React from "react";
import { Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function index() {
  const router = useRouter();
  const { Colors } = useAppTheme();
  const inset = useSafeAreaInsets();

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
        Login SIPP Survey
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
        <TextInput
          label="Email"
          placeholder="Contoh@gmail.com"
          keyboardType="email-address"
          borderRadius={17}
          // value={field.value}
          // onBlur={field.onBlur}
          // onChangeText={field.onChange}
          // errorMessage={fieldState.error?.message}
        />
        <TextInput
          label="Password"
          placeholder="Kata Sandi"
          secureTextEntry
          borderRadius={17}
          // value={field.value}
          // onBlur={field.onBlur}
          // onChangeText={field.onChange}
          // errorMessage={fieldState.error?.message}
        />
        <Button style={{ marginTop: 10 }}>Login</Button>
      </View>
    </View>
  );
}
