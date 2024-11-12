import View from "@/components/ui/view";
import React from "react";
import { Typography } from "@/components/ui/typography";
import IconLocation from "@/components/icons/IconLocation";

export default function SectionMapDrainase() {
    return (
        <View style={{ flex: 1, width: "100%", height: 300, marginTop: 20, }}>
            <View
            style={{
                display: "flex",
                flexDirection: "row",
                gap: 4,
            }}
            >
                <IconLocation />
                <Typography
                    fontFamily="Poppins-Medium"
                    fontSize={18}
                    color="Primary Blue"
                    style={{
                        marginBottom: 5,
                    }}
                >
                    Ruas Drainase
                </Typography>
            </View>
            {/* <LeafletView
                mapCenterPosition={{
                    lat: -5.39714,
                    lng: 105.266792,
                }}
            /> */}
        </View>
    );
}
