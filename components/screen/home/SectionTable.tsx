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
import React from "react";
import { Dimensions, Pressable, StyleSheet } from "react-native";

export default function SectionTable() {
  const { Colors } = useAppTheme();

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
      <View style={{ gap: 10 , marginTop:15}}>
        {Array.from({ length: 5 }).map((d, index) => (
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
                  Peningkatan Rekonstruksi Mulyo Jadi - Setia Bumi{" "}
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
                <Typography>Bidang Bina Marga</Typography>
              </View>
              <View style={style.rowTable}>
                <Typography style={{ width: 70 }} fontFamily="Poppins-Medium">
                  Progress
                </Typography>
                <Typography style={{ width: 10 }}>:</Typography>
                <Typography color="Info 500">
                  4.28% (Sedang Dikerjakan)
                </Typography>
              </View>
              <View style={style.rowTable}>
                <Typography style={{ width: 70 }} fontFamily="Poppins-Medium">
                  Status
                </Typography>
                <Typography style={{ width: 10 }}>:</Typography>
                <Typography>Belum Mulai</Typography>
              </View>
              <View style={style.rowTable}>
                <Typography style={{ width: 70 }} fontFamily="Poppins-Medium">
                  Lokasi
                </Typography>
                <Typography style={{ width: 10 }}>:</Typography>
                <Typography>Bidang Bina Marga</Typography>
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
        <Pressable style={[style.roundedView]}>
          <IconCaretLeft />
        </Pressable>
        <View style={{ flexDirection: "row", gap: 5 }}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Pressable style={[style.roundedView]} key={index}>
              <Typography fontFamily="Poppins-Medium" color="Text 900">
                {index + 1}
              </Typography>
            </Pressable>
          ))}
        </View>
        <Pressable style={[style.roundedView]}>
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
