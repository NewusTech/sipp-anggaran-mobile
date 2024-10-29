import CardProgress from "@/components/card/CardProgress";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import View from "@/components/ui/view";
import { useAppTheme } from "@/context";
import React from "react";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-gifted-charts";

export default function SectionFinancialRealization() {
  const { Colors } = useAppTheme();

  return (
    <>
      <View
        style={{
          backgroundColor: Colors["Background 100"],
          marginTop: 20,
          width: "100%",
          height: 350,
          padding: 10,
          borderRadius: 15,
          borderWidth: 1,
          gap: 10,
          borderColor: Colors["Background 200"],
        }}
      >
        <Typography
          fontSize={16}
          fontFamily="Poppins-Medium"
          style={{ textAlign: "center" }}
        >
          Realisasi Keuangan 2024
        </Typography>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            marginBottom: 10,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              height: 20,
              width: 50,
              backgroundColor: Colors["Success 600"],
            }}
          />
          <Typography>Realisasi Keuangan (%)</Typography>
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
          noOfSections={10}
          showYAxisIndices
          areaChart
          curved
          hideDataPoints
          isAnimated
          animateOnDataChange
          spacing={55}
          animationDuration={300}
          thickness={5}
          width={Dimensions.get("window").width - 125}
          color={Colors["Success 600"]}
          startFillColor={Colors["Success 200"]}
        />
      </View>
      <CardProgress label="Realisasi Keuangan" />
      <Button>Selengkapnya</Button>
    </>
  );
}
