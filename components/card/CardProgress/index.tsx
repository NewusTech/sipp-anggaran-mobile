import { Typography } from "@/components/ui/typography";
import View from "@/components/ui/view";
import { useAppTheme } from "@/context";
import React from "react";
import { Dimensions, FlatList } from "react-native";

type cardProgres = {
  label: string;
  data?: any[];
};

export default function CardProgress(props: cardProgres) {
  const { label } = props;
  const { Colors } = useAppTheme();

  return (
    <View style={{ marginTop: 20 }}>
      <Typography fontSize={18} fontFamily="Poppins-Medium">
        {label}
      </Typography>
      <FlatList
        horizontal
        numColumns={1}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        data={["", ""]}
        removeClippedSubviews={true}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: Colors["Background 100"],
              marginTop: 20,
              width: Dimensions.get("window").width - 90,
              padding: 20,
              borderRadius: 15,
              borderWidth: 1,
              borderColor: Colors["Background 200"],
            }}
          >
            <Typography
              fontFamily="Poppins-Light"
              fontSize={14}
              color="Text 500"
            >
              Nama Pekerjaan
            </Typography>
            <Typography fontFamily="Poppins-Regular" fontSize={15}>
              Operasi dan Pemeliharaan Sistem Penyediaan Air Minum (SPAM)
            </Typography>
            <View style={{ marginVertical: 5, marginTop: 10 }}>
              <Typography
                fontFamily="Poppins-Light"
                fontSize={14}
                color="Text 500"
              >
                Bulan
              </Typography>
              <Typography fontFamily="Poppins-Regular" fontSize={15}>
                November
              </Typography>
            </View>
            <View style={{ marginVertical: 5 }}>
              <Typography
                fontFamily="Poppins-Light"
                fontSize={14}
                color="Text 500"
              >
                Minggu-Ke
              </Typography>
              <Typography fontFamily="Poppins-Regular" fontSize={15}>
                1
              </Typography>
            </View>
            <View style={{ marginVertical: 5 }}>
              <Typography
                fontFamily="Poppins-Light"
                fontSize={14}
                color="Text 500"
              >
                Fisik%
              </Typography>
              <Typography fontFamily="Poppins-Regular" fontSize={15}>
                4.28%
              </Typography>
            </View>
          </View>
        )}
        style={{ width: "100%", paddingBottom: 20 }}
        contentContainerStyle={{
          alignItems: "center",
          paddingHorizontal: 0,
          gap: 20,
        }}
      />
    </View>
  );
}
