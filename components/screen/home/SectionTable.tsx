import Accordion from "@/components/ui/accordion";
import { IconCaretFillDown, IconCeretFillUp } from "@/components/icons";
import { Typography } from "@/components/ui/typography";
import View from "@/components/ui/view";
import { useAppTheme } from "@/context";
import React, { useState } from "react";
import { Dimensions } from "react-native";
import { useGetDashoardTableData } from "@/services/sipp";
import PaginatedView from "@/components/ui/pagination";
import { useRouter } from "expo-router";
import AccordionGroup from "@/components/ui/accordion/AccordionGroup";
import Animated, { FlipInEasyX } from "react-native-reanimated";

export default function SectionTable({ filterYear }: { filterYear: string }) {
  const { Colors } = useAppTheme();
  const router = useRouter();

  const [page, setPage] = useState<number>(1);
  const getTable = useGetDashoardTableData(`year=${filterYear}&page=${page}`);

  const getColorRange = (n: number) => {
    if (n > 0 && n < 50) {
      return "#DF1212";
    }
    if (n > 49 && n < 75) {
      return "#FC6736";
    }
    if (n > 74) {
      return "#95CB27";
    }
    return "#3D3D3D";
  };

  return (
    <View style={{ marginTop: 20 }}>
      <View
        style={{
          backgroundColor: Colors["Info 500"],
          padding: 10,
          paddingLeft: 20,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderWidth: 1,
          borderColor: Colors["Line 500"],
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
      <AccordionGroup style={{ gap: 10 }}>
        {getTable.data?.data.data &&
          getTable.data?.data?.data.map((data, index) => {
            const nilaiProgres =
              Number.parseInt(data.progres[0]?.nilai.toString()) || 0;
            return (
              <Accordion
                index={index}
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  backgroundColor: "white",
                  borderTopWidth: index === 0 ? 0 : 1,
                  borderTopLeftRadius: index === 0 ? 0 : 10,
                  borderTopRightRadius: index === 0 ? 0 : 10,
                  borderColor: Colors["Background 200"],
                }}
                key={index}
                header={(isOpen) => (
                  <View
                    style={{
                      flexDirection: "row",
                      backgroundColor: "rgba(57, 106, 255, 0.05)",
                      width: Dimensions.get("window").width - 40,
                      overflow: "hidden",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      padding: 10,
                    }}
                  >
                    <Animated.View
                      key={isOpen + "-" + index}
                      entering={FlipInEasyX}
                      style={{
                        width: "70%",
                      }}
                    >
                      <Typography
                        color="Info 500"
                        fontSize={15}
                        lineBreakMode="clip"
                        numberOfLines={isOpen ? undefined : 1}
                      >
                        {data.title || ""}
                      </Typography>
                    </Animated.View>
                    <View
                      style={{
                        marginLeft: 10,
                        paddingVertical: 5,
                        backgroundColor: getColorRange(nilaiProgres),
                        borderRadius: 8,
                        overflow: "hidden",
                        width: 40,
                      }}
                    >
                      <Typography
                        color="Background 100"
                        fontSize={10}
                        style={{ textAlign: "center" }}
                      >
                        {nilaiProgres}%
                      </Typography>
                    </View>
                    {isOpen ? <IconCaretFillDown /> : <IconCeretFillUp />}
                  </View>
                )}
              >
                <View
                  style={{
                    paddingTop: 5,
                    borderTopWidth: 0,
                    paddingHorizontal: 10,
                  }}
                >
                  <View style={{}}>
                    <Typography
                      style={{ width: 70 }}
                      fontFamily="Poppins-Medium"
                    >
                      Bidang
                    </Typography>
                    <Typography>{data.kegiatan.bidang.name}</Typography>
                  </View>
                  <View style={{}}>
                    <Typography
                      style={{ width: 70 }}
                      fontFamily="Poppins-Medium"
                    >
                      Progress
                    </Typography>
                    <Typography
                      color="Info 500"
                      onPress={() =>
                        router.push({
                          pathname:
                            "/(autenticated)/sipp/activities/detail/[id]",
                          params: {
                            id: data.id,
                          },
                        })
                      }
                    >
                      {nilaiProgres}%
                    </Typography>
                  </View>
                  <View style={{}}>
                    <Typography
                      style={{ width: 70 }}
                      fontFamily="Poppins-Medium"
                    >
                      Status
                    </Typography>
                    <Typography>-</Typography>
                  </View>
                  <View style={{}}>
                    <Typography
                      style={{ width: 70 }}
                      fontFamily="Poppins-Medium"
                    >
                      Lokasi
                    </Typography>
                    <Typography>-</Typography>
                  </View>
                </View>
              </Accordion>
            );
          })}
      </AccordionGroup>
      <PaginatedView getTable={getTable} setActivePage={setPage} />
    </View>
  );
}
