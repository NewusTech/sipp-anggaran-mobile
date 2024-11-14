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
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderWidth: 1,
          borderColor: Colors["Info 500"],
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
          getTable.data?.data?.data.map((data, index) => (
            <Accordion
              index={index}
              style={{
                borderWidth: 1,
                borderRadius: 15,
                backgroundColor: "white",
                borderTopWidth: index === 0 ? 0 : 1,
                borderTopLeftRadius: index === 0 ? 0 : 15,
                borderTopRightRadius: index === 0 ? 0 : 15,
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
                  <Typography
                    color="Info 500"
                    fontSize={15}
                    style={{ width: "90%" }}
                  >
                    {data.title}
                  </Typography>
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
                  <Typography style={{ width: 70 }} fontFamily="Poppins-Medium">
                    Bidang
                  </Typography>
                  <Typography>{data.kegiatan.bidang.name}</Typography>
                </View>
                <View style={{}}>
                  <Typography style={{ width: 70 }} fontFamily="Poppins-Medium">
                    Progress
                  </Typography>
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
                <View style={{}}>
                  <Typography style={{ width: 70 }} fontFamily="Poppins-Medium">
                    Status
                  </Typography>
                  <Typography>-</Typography>
                </View>
                <View style={{}}>
                  <Typography style={{ width: 70 }} fontFamily="Poppins-Medium">
                    Lokasi
                  </Typography>
                  <Typography>-</Typography>
                </View>
              </View>
            </Accordion>
          ))}
      </AccordionGroup>
      <PaginatedView getTable={getTable} setActivePage={setPage} />
    </View>
  );
}
