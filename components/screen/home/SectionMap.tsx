import View from "@/components/ui/view";
import React from "react";
import { Typography } from "@/components/ui/typography";
import Mapbox, { MapView, Camera } from "@rnmapbox/maps";
import { formatDate, MAPBOX_ACCESS_TOKEN } from "@/constants";
import { StyleSheet } from "react-native";
import CustomMarkerView from "@/components/customMarkerView";
import { useAppTheme } from "@/context";
import { useGetDashoardTableData } from "@/services/sipp";

Mapbox.setAccessToken(MAPBOX_ACCESS_TOKEN || "");

export default function SectionMap({
  setIsScrollEnabled,
  filterYear,
}: {
  setIsScrollEnabled: (param: boolean) => void;
  filterYear: string;
}) {
  const { Colors } = useAppTheme();

  // Fungsi untuk menangani saat View ditekan
  const handleTouchStart = () => {
    setIsScrollEnabled(false); // Nonaktifkan scroll
  };

  const handleTouchEnd = () => {
    setIsScrollEnabled(true); // Aktifkan kembali scroll
  };

  const getTable = useGetDashoardTableData(
    `year=${filterYear}&page=${1}&count=1000`
  );
  const dataTable = getTable.data?.data;

  return (
    <View
      style={{ flex: 1, width: "100%", height: 400 }}
      onTouchStart={handleTouchStart} // Ketika View ditekan
      onTouchEnd={handleTouchEnd} // Ketika View dilepaskan
    >
      <MapView style={styles.map}>
        <Camera
          centerCoordinate={[105.26667, -5.45]}
          zoomLevel={7}
          pitch={0}
          heading={0}
        />
        {dataTable?.data.map((data, index) => {
          if (data.latitude && data.longitude) {
            // console.log(data.latitude, "-", data.longitude);
            return (
              <CustomMarkerView
                coordinate={[data.longitude, data.latitude]}
                key={index}
              >
                <View
                  style={{
                    borderRadius: 10,
                    width: 200,
                    backgroundColor: Colors["Background 100"],
                    padding: 15,
                    shadowColor: Colors["Background 200"],
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                  }}
                >
                  <Typography fontSize={11} style={{ marginBottom: 10 }}>
                    Data Informasi
                  </Typography>
                  <Typography fontSize={11}>
                    Nama Pekerjaan :{" "}
                    <Typography fontSize={10} color="Text 500">
                      {data.title}
                    </Typography>
                  </Typography>
                  <Typography fontSize={11}>
                    No Kontrak :{" "}
                    <Typography fontSize={10} color="Text 500">
                      {data.id}
                    </Typography>
                  </Typography>
                  <Typography fontSize={11}>
                    Jenis Pengadaan :{" "}
                    <Typography fontSize={10} color="Text 500">
                      {data.id}
                    </Typography>
                  </Typography>
                  <Typography fontSize={11}>
                    Nilai Kontrak :{" "}
                    <Typography fontSize={10} color="Text 500">
                      {data.id}
                    </Typography>
                  </Typography>
                  <Typography fontSize={11}>
                    Progress :{" "}
                    <Typography fontSize={10} color="Text 500">
                      {data.progress || "-"}
                    </Typography>
                  </Typography>
                  <Typography fontSize={11}>
                    Awal Kontrak :{" "}
                    <Typography fontSize={10} color="Text 500">
                      {data.id}
                    </Typography>
                  </Typography>
                  <Typography fontSize={11}>
                    Akhir Kontrak :{" "}
                    <Typography fontSize={10} color="Text 500">
                      {formatDate(new Date(data.akhir_kontrak))}
                    </Typography>
                  </Typography>
                  <Typography fontSize={11}>
                    Penyedia Jasa :{" "}
                    <Typography fontSize={10} color="Text 500">
                      {data.id}
                    </Typography>
                  </Typography>
                  <Typography fontSize={11}>
                    No SPMK :{" "}
                    <Typography fontSize={10} color="Text 500">
                      {data.id}
                    </Typography>
                  </Typography>
                </View>
              </CustomMarkerView>
            );
          }
        })}
      </MapView>
      <Typography
        fontFamily="Poppins-Medium"
        fontSize={18}
        style={{
          marginBottom: 5,
          marginTop: 10,
        }}
      >
        Lokasi Pekerjaan
      </Typography>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    height: 300,
    width: 300,
  },
  map: {
    flex: 1,
  },
});
