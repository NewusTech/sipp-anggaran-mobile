import { IconFlopyDisk } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import View from "@/components/ui/view";
import { useAppTheme } from "@/context";
import React from "react";
import { Dimensions, Pressable, TextInput } from "react-native";
import { LineChart } from "react-native-gifted-charts";

export default function TabKurvaSFisik() {
  const { Colors } = useAppTheme();
  return (
    <View
      style={{
        paddingHorizontal: 20,
        gap: 15,
      }}
    >
      <View style={{ gap: 15 }}>
        <Typography fontFamily="Poppins-Medium" fontSize={17}>
          Rencana Kegiatan Fisik
        </Typography>

        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: Colors["Line 400"],
            overflow: "hidden",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              backgroundColor: Colors["Line 400"],
              padding: 10,
            }}
          >
            <Typography
              style={{ width: "33%", textAlign: "center" }}
              color="Background 100"
            >
              Bulan
            </Typography>
            <Typography
              style={{ width: "33%", textAlign: "center" }}
              color="Background 100"
            >
              Minggu-Ke
            </Typography>
            <Typography
              style={{ width: "33%", textAlign: "center" }}
              color="Background 100"
            >
              Fisik%
            </Typography>
          </View>
          {Array.from({ length: 8 }).map((_, index) => (
            <View
              style={[
                {
                  flexDirection: "row",
                  padding: 10,
                  alignItems: "center",
                },
                index !== 7 && {
                  borderBottomWidth: 1,
                  borderColor: Colors["Line 400"],
                },
              ]}
            >
              <Typography
                style={{ width: "33%", textAlign: "center" }}
                fontFamily="Poppins-Light"
              >
                Bulan
              </Typography>
              <Typography
                style={{ width: "33%", textAlign: "center" }}
                fontFamily="Poppins-Light"
              >
                1
              </Typography>
              <TextInput
                style={{
                  borderWidth: 1,
                  padding: 10,
                  width: "33%",
                  height: 40,
                  borderColor: Colors["Line 400"],
                  borderRadius: 10,
                  textAlign: "center",
                  color: Colors["Text 500"],
                }}
                inputMode="numeric"
                placeholder="%"
              />
            </View>
          ))}
        </View>
        <Button>
          <IconFlopyDisk color="Background 100" />
          <Typography color="Background 100">Simpan</Typography>
        </Button>
      </View>
      {/*  */}
      <View style={{ marginTop: 10, gap: 15 }}>
        <Typography fontFamily="Poppins-Medium" fontSize={17}>
          Realisasi Fisik
        </Typography>

        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: Colors["Line 400"],
            overflow: "hidden",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              backgroundColor: Colors["Line 400"],
              padding: 10,
            }}
          >
            <Typography
              style={{ width: "33%", textAlign: "center" }}
              color="Background 100"
            >
              Bulan
            </Typography>
            <Typography
              style={{ width: "33%", textAlign: "center" }}
              color="Background 100"
            >
              Minggu-Ke
            </Typography>
            <Typography
              style={{ width: "33%", textAlign: "center" }}
              color="Background 100"
            >
              Fisik%
            </Typography>
          </View>
          {Array.from({ length: 8 }).map((_, index) => (
            <View
              style={[
                {
                  flexDirection: "row",
                  padding: 10,
                  alignItems: "center",
                },
                index !== 7 && {
                  borderBottomWidth: 1,
                  borderColor: Colors["Line 400"],
                },
              ]}
            >
              <Typography
                style={{ width: "33%", textAlign: "center" }}
                fontFamily="Poppins-Light"
              >
                Bulan
              </Typography>
              <Typography
                style={{ width: "33%", textAlign: "center" }}
                fontFamily="Poppins-Light"
              >
                1
              </Typography>
              <TextInput
                style={{
                  borderWidth: 1,
                  padding: 10,
                  width: "33%",
                  height: 40,
                  borderColor: Colors["Line 400"],
                  borderRadius: 10,
                  textAlign: "center",
                  color: Colors["Text 500"],
                }}
                inputMode="numeric"
                placeholder="%"
              />
            </View>
          ))}
        </View>
        <Button>
          <IconFlopyDisk color="Background 100" />
          <Typography color="Background 100">Simpan</Typography>
        </Button>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            gap: 20,
            justifyContent: "center",
            paddingVertical: 10,
          }}
        >
          <Pressable style={{ flexDirection: "row", gap: 10 }}>
            <View
              style={{
                height: 20,
                width: 40,
                backgroundColor: Colors["Error 100"],
                borderWidth: 1,
                borderColor: Colors["Error 600"],
              }}
            />
            <Typography>Rencana Fisik</Typography>
          </Pressable>
          <Pressable style={{ flexDirection: "row", gap: 10 }}>
            <View
              style={{
                height: 20,
                width: 40,
                backgroundColor: Colors["Info 100"],
                borderWidth: 1,
                borderColor: Colors["Info 600"],
              }}
            />
            <Typography>Realisasi Fisik (%)</Typography>
          </Pressable>
        </View>
        <LineChart
          data={[
            { value: 30, label: "jan" },
            { value: 40, label: "feb" },
            { value: 50, label: "mar" },
            { value: 30, label: "apr" },
            { value: 10, label: "mei" },
            { value: 10, label: "jun" },
            { value: 10, label: "jul" },
            { value: 10, label: "agu" },
            { value: 10, label: "sep" },
            { value: 10, label: "okt" },
            { value: 10, label: "nov" },
            { value: 10, label: "des" },
          ]}
          data2={[
            { value: 15, label: "jan" },
            { value: 45, label: "feb" },
            { value: 56, label: "mar" },
            { value: 32, label: "apr" },
            { value: 20, label: "mei" },
            { value: 40, label: "jun" },
            { value: 50, label: "jul" },
            { value: 60, label: "agu" },
            { value: 60, label: "sep" },
            { value: 60, label: "okt" },
            { value: 60, label: "nov" },
            { value: 90, label: "des" },
          ]}
          noOfSections={10}
          showYAxisIndices
          curved
          isAnimated
          animateOnDataChange
          dataPointsColor1={Colors["Info 700"]}
          dataPointsColor2={Colors["Error 700"]}
          color1={Colors["Info 500"]}
          color2={Colors["Error 600"]}
          spacing={55}
          animationDuration={300}
          thickness={3}
          width={Dimensions.get("window").width - 125}
          startFillColor={Colors["Success 200"]}
        />
      </View>
    </View>
  );
}
