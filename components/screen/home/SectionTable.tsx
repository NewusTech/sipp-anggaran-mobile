import Accordion from "@/components/ui/accordion";
import { IconCaretFillDown, IconCaretFillLeft } from "@/components/icons";
import { Typography } from "@/components/ui/typography";
import View from "@/components/ui/view";
import { AppColor } from "@/constants";
import { useAppTheme } from "@/context";
import React, { useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import { useGetDashoardTableData } from "@/services/sipp";
import PaginatedView from "@/components/ui/pagination";
import { useRouter } from "expo-router";

export default function SectionTable({ filterYear }: { filterYear: string }) {
  const { Colors } = useAppTheme();
  const router = useRouter();

  const [page, setPage] = useState<number>(1);
  const getTable = useGetDashoardTableData(`year=${filterYear}&page=${page}`);

  return (
    <View style={{ marginTop: 20 }}>
      <View
        style={{
          backgroundColor: Colors["Info 500"],
          padding: 10,
          paddingLeft: 20,
        }}
      >
        <Typography
          fontSize={17}
          color="Background 100"
          fontFamily="Poppins-Medium"
        >
          Nama Pekerjaan
        </Typography>
      </View>
      <View style={{ gap: 10, marginTop: 15 }}>
        {getTable.data?.data.data &&
          getTable.data?.data?.data.map((data, index) => (
            <Accordion
              key={index}
              header={(isOpen) => (
                <View
                  style={{
                    flexDirection: "row",
                    width: Dimensions.get("window").width - 60,
                    overflow: "hidden",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  {isOpen ? <IconCaretFillDown /> : <IconCaretFillLeft />}
                  <Typography color="Info 500" fontSize={15}>
                    {data.title}
                  </Typography>
                </View>
              )}
            >
              <View style={{ marginTop: 5, paddingHorizontal: 10 }}>
                <View style={style.rowTable}>
                  <Typography style={{ width: 70 }} fontFamily="Poppins-Medium">
                    Bidang
                  </Typography>
                  <Typography style={{ width: 10 }}>:</Typography>
                  <Typography>{data.kegiatan.bidang.name}</Typography>
                </View>
                <View style={style.rowTable}>
                  <Typography style={{ width: 70 }} fontFamily="Poppins-Medium">
                    Progress
                  </Typography>
                  <Typography style={{ width: 10 }}>:</Typography>
                  <Typography
                    color="Info 500"
                    onPress={() =>
                      router.push({
                        pathname: "/(autenticated)/sipp/activities/detail/[id]",
                        params: {
                          id: data.id,
                        },
                      })
                    }
                  >
                    {data.progres[0]?.nilai || "-"}%
                  </Typography>
                </View>
                <View style={style.rowTable}>
                  <Typography style={{ width: 70 }} fontFamily="Poppins-Medium">
                    Status
                  </Typography>
                  <Typography style={{ width: 10 }}>:</Typography>
                  <Typography>-</Typography>
                </View>
                <View style={style.rowTable}>
                  <Typography style={{ width: 70 }} fontFamily="Poppins-Medium">
                    Lokasi
                  </Typography>
                  <Typography style={{ width: 10 }}>:</Typography>
                  <Typography>-</Typography>
                </View>
              </View>
            </Accordion>
          ))}
      </View>
      <PaginatedView getTable={getTable} setActivePage={setPage} />
    </View>
  );
}

const style = StyleSheet.create({
  rowTable: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: AppColor.light["Line 300"],
    padding: 10,
  },
});
