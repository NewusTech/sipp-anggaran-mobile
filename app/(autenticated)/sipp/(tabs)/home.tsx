import { ScrollView } from "react-native";

import View from "@/components/ui/view";
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
import { useGetDashoardCart, useGetDashoardRealisasi } from "@/services/sipp";

export default function home() {
  const inset = useSafeAreaInsets();
  const router = useRouter();

  const [filterYear, setFilterYear] = useState<number | string>("");

  const getCart = useGetDashoardCart(filterYear ? "year=" + filterYear : "");
  const getRealisasi = useGetDashoardRealisasi(
    filterYear ? "year=" + filterYear : ""
  );

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
        <SectionCard filterYear={filterYear.toString()} />
        <SectionFinancialRealization
          chartLabel={getCart.data?.data.chart_data.labels || []}
          chartDdata={getCart.data?.data.chart_data.data_keuangan || []}
          data={getRealisasi.data?.data.realisasi_keuangan || []}
        />
        <SectionPhysicalProgress
          chartLabel={getCart.data?.data.chart_data.labels || []}
          chartDdata={getCart.data?.data.chart_data.data_fisik || []}
          data={getRealisasi.data?.data.realisasi_fisik || []}
        />
        <SectionPackage
          total_paket={getRealisasi.data?.data.total_paket || 0}
          total_paket_belum_mulai={
            getRealisasi.data?.data.total_paket_belum_mulai || 0
          }
          total_paket_dikerjakan={
            getRealisasi.data?.data.total_paket_dikerjakan || 0
          }
          total_paket_selesai={getRealisasi.data?.data.total_paket_selesai || 0}
        />
        <SectionMap />
        <SectionTable filterYear={filterYear.toString()} />
      </ScrollView>
    </View>
  );
}
