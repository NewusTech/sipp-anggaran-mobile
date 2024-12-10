import { Button } from "@/components/ui/button";
import View from "@/components/ui/view";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function master() {
  const navigationMasterData = [
    { title: "Pengaturan Bidang", link: "/sipp/master/fieldSettings" },
    { title: "Master Data", link: "/sipp/master" },
  ];
  const router = useRouter();
  const inset = useSafeAreaInsets();
  return (
    <ScrollView
      style={{
        display: "flex",
        flex: 1,
        marginVertical: inset.top,
        marginHorizontal: inset.right,
        padding: 20,
      }}
      contentContainerStyle={{
        gap:10
      }}
    >
      {navigationMasterData.map((data, index) => (
        <Button key={index} onPress={() => router.push(data.link as any)}>
          {data.title}
        </Button>
      ))}
    </ScrollView>
  );
}
