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

export default function home() {
  const { Colors } = useAppTheme();
  const inset = useSafeAreaInsets();

  const [filterYear, setFilterYear] = useState<number | string>("");

  return (
    <View
      style={{
        flex: 1,
        paddingTop: inset.top,
      }}
      backgroundColor="Background 100"
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          paddingTop: 20,
          alignItems: "center",
        }}
      >
        <Image
          source={require("@/assets/images/logo-pupr.png")}
          width={200}
          height={100}
          style={{ width: 200, height: 40 }}
        />
        <Image
          source={require("@/assets/images/dummy1.jpg")}
          style={{ width: 50, height: 50, borderRadius: 100 }}
        />
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: inset.left + 20,
          marginTop: 30,
          paddingBottom: 60,
        }}
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
      </ScrollView>
    </View>
  );
}
