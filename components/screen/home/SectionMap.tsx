import View from "@/components/ui/view";
import { LeafletView } from "react-native-leaflet-maps";
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
      <LeafletView
        mapCenterPosition={{
          lat: -5.39714,
          lng: 105.266792,
        }}
      />
    </View>
  );
}
