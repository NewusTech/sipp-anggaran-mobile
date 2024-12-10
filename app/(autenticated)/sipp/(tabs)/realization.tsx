import { Button } from "@/components/ui/button";
import View from "@/components/ui/view";
import { useRouter } from "expo-router";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function realization() {
  const router = useRouter();
  const inset = useSafeAreaInsets();
  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        marginVertical: inset.top,
        marginHorizontal: inset.right,
        gap: 10,
        padding: 20,
      }}
    >
      <Button
        onPress={() => router.push("/(autenticated)/sipp/physicalProgress")}
      >
        Realisasi Fisik
      </Button>
      <Button
        variant="secondary"
        onPress={() => router.push("/(autenticated)/sipp/financialRealization")}
        textColor="Info 500"
      >
        Realisasi Keuangan
      </Button>
    </View>
  );
}
