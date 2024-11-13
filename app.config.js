// app.config.js
export default ({ config }) => {
  return {
    ...config,
    plugins: [
      "expo-router",
      [
        "@rnmapbox/maps",
        {
          RNMapboxMapsDownloadToken: process.env.RNMAPBOX_MAPS_TOKEN,
          locationWhenInUsePermission: "Show current location on map.",
        },
      ],
    ],
  };
};
