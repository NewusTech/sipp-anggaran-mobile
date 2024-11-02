import TabDetail from "@/components/screen/activity/tabDetail";
import TabDocumentation from "@/components/screen/activity/tabDocumentation";
import TabKurvaSFisik from "@/components/screen/activity/tabKurvaSFisik";
import TabKurvaSKeuangan from "@/components/screen/activity/tabKurvaSKeuangan";
import TabPersonInCharge from "@/components/screen/activity/tabPersonInCharge";
import TabTitikLokasi from "@/components/screen/activity/tabTitikLokasi";
import Appbar from "@/components/ui/appBar";
import { Typography } from "@/components/ui/typography";
import View from "@/components/ui/view";
import { useAppTheme } from "@/context";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";

export default function index() {
  const router = useRouter();
  const { Colors } = useAppTheme();

  const [tabDetail, setTabDetail] = useState<
    | "Detail"
    | "Kurva S Fisik"
    | "Kurva S Keuangan"
    | "Penanggung Jawab"
    | "Dokumentasi"
    | "Titik Lokasi"
  >();

  useEffect(() => {
    setTabDetail("Detail");
  }, []);

  return (
    <View backgroundColor="Background 100" style={{ flex: 1 }}>
      <Appbar
        title={"Progres Pekerjaan"}
        variant="light"
        backIconPress={() => router.back()}
      />
      <View style={{ marginTop: 20, gap: 10 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          <View
            style={{
              height: 50,
              borderWidth: 1,
              borderColor: Colors["Info 500"],
              borderRadius: 15,
              overflow: "hidden",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              style={{
                width: "auto",
                paddingHorizontal: 15,
                backgroundColor:
                  tabDetail === "Detail"
                    ? Colors["Info 500"]
                    : Colors["Background 100"],
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => setTabDetail("Detail")}
            >
              <Typography
                fontSize={14}
                style={{ textAlignVertical: "center" }}
                color={tabDetail === "Detail" ? "Background 100" : "Info 500"}
              >
                Detail
              </Typography>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "auto",
                paddingHorizontal: 15,
                backgroundColor:
                  tabDetail === "Kurva S Fisik"
                    ? Colors["Info 500"]
                    : Colors["Background 100"],
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => setTabDetail("Kurva S Fisik")}
            >
              <Typography
                fontSize={14}
                style={{ textAlignVertical: "center" }}
                color={
                  tabDetail === "Kurva S Fisik" ? "Background 100" : "Info 500"
                }
              >
                Kurva S Fisik
              </Typography>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "auto",
                paddingHorizontal: 15,
                backgroundColor:
                  tabDetail === "Kurva S Keuangan"
                    ? Colors["Info 500"]
                    : Colors["Background 100"],
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => setTabDetail("Kurva S Keuangan")}
            >
              <Typography
                fontSize={14}
                style={{ textAlignVertical: "center" }}
                color={
                  tabDetail === "Kurva S Keuangan"
                    ? "Background 100"
                    : "Info 500"
                }
              >
                Kurva S Keuangan
              </Typography>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          <View
            style={{
              height: 50,
              borderWidth: 1,
              borderColor: Colors["Info 500"],
              borderRadius: 15,
              overflow: "hidden",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              style={{
                width: "auto",
                paddingHorizontal: 15,
                backgroundColor:
                  tabDetail === "Penanggung Jawab"
                    ? Colors["Info 500"]
                    : Colors["Background 100"],
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => setTabDetail("Penanggung Jawab")}
            >
              <Typography
                fontSize={14}
                style={{ textAlignVertical: "center" }}
                color={
                  tabDetail === "Penanggung Jawab"
                    ? "Background 100"
                    : "Info 500"
                }
              >
                Penanggung Jawab
              </Typography>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "auto",
                paddingHorizontal: 15,
                backgroundColor:
                  tabDetail === "Dokumentasi"
                    ? Colors["Info 500"]
                    : Colors["Background 100"],
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => setTabDetail("Dokumentasi")}
            >
              <Typography
                fontSize={14}
                style={{ textAlignVertical: "center" }}
                color={
                  tabDetail === "Dokumentasi" ? "Background 100" : "Info 500"
                }
              >
                Dokumentasi
              </Typography>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "auto",
                paddingHorizontal: 15,
                backgroundColor:
                  tabDetail === "Titik Lokasi"
                    ? Colors["Info 500"]
                    : Colors["Background 100"],
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => setTabDetail("Titik Lokasi")}
            >
              <Typography
                fontSize={14}
                style={{ textAlignVertical: "center" }}
                color={
                  tabDetail === "Titik Lokasi" ? "Background 100" : "Info 500"
                }
              >
                Titik Lokasi
              </Typography>
            </TouchableOpacity>
          </View>
          {/*  */}
        </ScrollView>
      </View>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 40 }}
        style={{ paddingTop: 10, marginTop: 20 }}
      >
        {tabDetail === "Detail" && <TabDetail />}
        {tabDetail === "Kurva S Fisik" && <TabKurvaSFisik />}
        {tabDetail === "Kurva S Keuangan" && <TabKurvaSKeuangan />}
        {tabDetail === "Titik Lokasi" && <TabTitikLokasi />}
        {tabDetail === "Penanggung Jawab" && <TabPersonInCharge />}
        {tabDetail === "Dokumentasi" && <TabDocumentation />}
      </ScrollView>
    </View>
  );
}
