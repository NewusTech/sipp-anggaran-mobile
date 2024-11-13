import { MarkerView } from "@rnmapbox/maps";
import React, { useState } from "react";
import { IconMapMarker } from "../icons";
import View from "../ui/view";
import { Pressable } from "react-native";

export default function CustomMarkerView({
  coordinate,
  children,
}: {
  coordinate: number[];
  children: React.ReactNode;
}) {
  const [openDetail, setOpenDetail] = useState<boolean>(false);
  return (
    <MarkerView
      coordinate={coordinate} // [longitude, latitude]
    >
      <View
        style={{
          flexDirection: "row",
          position: "relative",
        }}
      >
        <Pressable onPress={() => setOpenDetail((prev) => !prev)}>
          {openDetail ? (
            children
          ) : (
            <IconMapMarker width={32} height={32} color="Secondary 500" />
          )}
        </Pressable>
      </View>
    </MarkerView>
  );
}
