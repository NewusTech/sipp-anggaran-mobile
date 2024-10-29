module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    dependencies: {
      "react-native-webview": {
        platforms: {
          ios: null, // Gunakan jika di iOS
        },
      },
    },
  };
};
