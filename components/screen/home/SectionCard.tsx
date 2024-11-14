import React from "react";
import View from "../../ui/view";
import { useAppTheme } from "@/context";
import { IconMedical, IconMoneyHand, IconSaving } from "../../icons";
import { Typography } from "../../ui/typography";
import { useGetDashoardKegiatan } from "@/services/sipp";
import { formatCurrency } from "@/utils";

export default function SectionCard({ filterYear }: { filterYear: string }) {
  const { Colors } = useAppTheme();

  const getKegiatan = useGetDashoardKegiatan("year=" + filterYear);

  const dataCard = [
    {
      title: "Total Pagu",
      content: formatCurrency(getKegiatan.data?.data.total_pagu || 0),
      icon: <IconMoneyHand color="Info 500" width={30} height={30} />,
      color: "#396AFF",
    },
    {
      title: "Total Realisasi",
      content: formatCurrency(getKegiatan.data?.data.total_realisasi || 0),
      icon: <IconMedical color="Error 500" width={30} height={30} />,
      color: "#DF1212",
    },
    {
      title: "Total Sisa Anggaran",
      content: formatCurrency(getKegiatan.data?.data.total_sisa || 0),
      icon: <IconSaving color="Success 700" width={30} height={30} />,
      color: "#399918",
    },
  ];

  return (
    <View style={{ gap: 10, marginTop: 30 }}>
      {dataCard.map((data, index) => (
        <View
          key={index}
          style={{
            width: "100%",
            height: 120,
            borderRadius: 15,
            backgroundColor: data.color,
            position: "relative",
            paddingHorizontal: 30,
            alignItems: "center",
            flexDirection: "row",
            columnGap: 20,
            overflow: "hidden",
          }}
        >
          <View
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              width: 90,
              height: 90,
              borderRadius: 100,
              position: "absolute",
              right: -15,
              top: -30,
            }}
          />
          <View
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.4)",
              width: 90,
              height: 90,
              borderRadius: 100,
              position: "absolute",
              left: -35,
              bottom: -45,
            }}
          />
          <View
            style={{
              backgroundColor: Colors["Background 100"],
              width: 70,
              height: 70,
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {data.icon}
          </View>
          <View style={{}}>
            <Typography
              fontFamily="Poppins-Light"
              fontSize={16}
              color="Background 100"
            >
              {data.title}
            </Typography>
            <Typography
              fontFamily="Poppins-Medium"
              fontSize={20}
              color="Background 100"
            >
              {data.content}
            </Typography>
          </View>
        </View>
      ))}
    </View>
  );
}
