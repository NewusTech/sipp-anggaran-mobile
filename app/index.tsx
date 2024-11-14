import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { getItem } from "@/lib/async-storage";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { Typography } from "@/components/ui/typography";
import View from "@/components/ui/view";
import { useAuthActions } from "@/store/sipp";

const duration = 2000;
const easing = Easing.bezier(0.25, -0.5, 0.25, 1);

export default function InitialScreen() {
  const router = useRouter();

  const { setAccessToken } = useAuthActions();

  const logo = useSharedValue<number>(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${logo.value * 360}deg` }],
  }));

  useEffect(() => {
    logo.value = withRepeat(
      withDelay(500, withTiming(1, { duration, easing })),
      300
    );
  }, []);

  useEffect(() => {
    const initAuth = async () => {
      const storageAccessToken = await getItem("accesstoken");
      const appName = await getItem("app_name");

      if (storageAccessToken) {
        setAccessToken(storageAccessToken);
        if (appName && appName === "SIPP-Anggaran") {
          router.replace("/(autenticated)/sipp/(tabs)/home");
        } else {
          router.replace("/(autenticated)/survey/(tabs)/home");
        }
      } else {
        router.replace("/(public)/home");
      }
      // router.replace("/(autenticated)/sipp/(tabs)/report");
    };

    initAuth();
  }, [router]);

  return (
    <View style={style.container}>
      <Animated.View style={[animatedStyle]}>
        {/* <IconKemenker width={99} height={99} color="primary-50" /> */}
      </Animated.View>
      <Typography
        fontFamily="Poppins-Bold"
        color="Info 500"
        fontSize={24}
        style={{ marginVertical: 10 }}
      >
        SIPPP - Tubaba
      </Typography>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
