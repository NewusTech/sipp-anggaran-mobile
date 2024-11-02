import { Image, ScrollView } from "react-native";

import View from "@/components/ui/view";
import { useAppTheme } from "@/context";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SelectInput } from "@/components/ui/selectInput";
import { useState } from "react";
import { IconCaretDown } from "@/components/icons";
import { getLastYears } from "@/helper";
import SectionCard from "@/components/screen/home/SectionCard";
import SectionFinancialRealization from "@/components/screen/home/SectionFinancialRealization";
import SectionPhysicalProgress from "@/components/screen/home/SectionPhysicalProgress";
import SectionPackage from "@/components/screen/home/SectionPackage";
import SectionMap from "@/components/screen/home/SectionMap";
import SectionTable from "@/components/screen/home/SectionTable";
import Header from "@/components/header";
import { useRouter } from "expo-router";

export default function home() {
  const inset = useSafeAreaInsets();
  const router = useRouter();

  const [filterYear, setFilterYear] = useState<number | string>("");

  return (
    <View
      style={{
        flex: 1,
        paddingTop: inset.top,
      }}
      backgroundColor="Background 100"
    >
      <Header />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: inset.left + 20,
          marginTop: 10,
          paddingBottom: 60,
        }}
        removeClippedSubviews={true}
      >
        <SelectInput
          data={getLastYears(24).map((d) => {
            return {
              title: d,
            };
          })}
          value={filterYear}
          onSelect={(data) => setFilterYear(data.title)}
          label="Filter Tahun"
          placeholder="Pilih Tahun"
          trailingIcon={<IconCaretDown />}
        />
        <SectionCard />
        <SectionFinancialRealization />
        <SectionPhysicalProgress />
        <SectionPackage />
        <SectionMap />
        <SectionTable />
      </ScrollView>
    </View>
  );
}
