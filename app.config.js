// app.config.js
export default ({ config }) => {
  return {
    ...config,
    plugins: [
      "expo-router",
      [
        "@rnmapbox/maps",
        {
          RNMapboxMapsDownloadToken: process.env.EXPO_PUBLIC_MAPBOX_ACCESS_TOKEN,
          locationWhenInUsePermission: "Show current location on map.",
        },
      ],
    ],
  };
};
