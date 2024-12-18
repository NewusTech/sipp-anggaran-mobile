import TabDetailRoad from "@/components/survey/home/detail/detailRoad";
import Appbar from "@/components/ui/appBar";
import View from "@/components/ui/view";
import { useAppTheme } from "@/context";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";

export default function index() {
  const router = useRouter();

  return (
    <View backgroundColor="Background 100" style={{ flex: 1 }}>
      <Appbar
        title={"Detail Ruas Jalan"}
        variant="light"
        backIconPress={() => router.back()}
      />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 40 }}
        style={{ paddingTop: 10, marginTop: 20 }}
      >
        <TabDetailRoad />
      </ScrollView>
    </View>
  );
}
