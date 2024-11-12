import View from "@/components/ui/view";
import React from "react";
import { Typography } from "@/components/ui/typography";

export default function SectionMap() {
  return (
    <View style={{ flex: 1, width: "100%", height: 300 }}>
      <Typography
        fontFamily="Poppins-Medium"
        fontSize={18}
        style={{
          marginBottom: 5,
        }}
      >
        Lokasi Pekerjaan
      </Typography>
    </View>
  );
}
