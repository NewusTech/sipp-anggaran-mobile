import Accordion from "@/components/ui/accordion";
import {
  IconCaretFillDown,
  IconCaretFillLeft,
  IconCaretLeft,
  IconCaretRight,
} from "@/components/icons";
import { Typography } from "@/components/ui/typography";
import View from "@/components/ui/view";
import { AppColor } from "@/constants";
import { useAppTheme } from "@/context";
import React, { useState } from "react";
import { Dimensions, Pressable, StyleSheet } from "react-native";
import { useGetDashoardTableData } from "@/services/sipp";

export default function SectionTable({ filterYear }: { filterYear: string }) {
  const { Colors } = useAppTheme();

  const [page, setPage] = useState<number>(1);
  const getTable = useGetDashoardTableData(`year=${filterYear}&page=${page}`);

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < (getTable.data?.data.last_page || 1)) setPage(page + 1);
  };

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
                  <Typography color="Info 500">
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

      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          justifyContent: "space-between",
        }}
      >
        <Pressable style={[style.roundedView]} onPress={handlePrev}>
          <IconCaretLeft />
        </Pressable>
        <View style={{ flexDirection: "row", gap: 5 }}>
          {Array.from({ length: getTable.data?.data.last_page || 0 }).map(
            (_, index) => {
              const isActive = getTable.data?.data.current_page === index + 1;
              return (
                <Pressable
                  style={[
                    style.roundedView,
                    isActive && {
                      backgroundColor: Colors["Info 500"],
                      borderColor: Colors["Info 500"],
                    },
                  ]}
                  key={index}
                  onPress={() => setPage(index + 1)}
                >
                  <Typography
                    fontFamily="Poppins-Medium"
                    color={isActive ? "Background 100" : "Text 900"}
                  >
                    {index + 1}
                  </Typography>
                </Pressable>
              );
            }
          )}
        </View>
        <Pressable style={[style.roundedView]} onPress={handleNext}>
          <IconCaretRight />
        </Pressable>
      </View>
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
  roundedView: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: AppColor.light["Line 300"],
    alignItems: "center",
    justifyContent: "center",
  },
});
