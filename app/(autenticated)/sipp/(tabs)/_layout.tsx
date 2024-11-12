import {
  IconAddBox,
  IconFileReport,
  IconFisik,
  IconMonyBag,
} from "@/components/icons";
import { IconHome } from "@/components/icons/IconHome";
import { Typography } from "@/components/ui/typography";
import View from "@/components/ui/view";
import { useAppTheme } from "@/context";
import { useAccessToken, usePermission } from "@/store/sipp";
import { Tabs } from "expo-router";
import { jwtDecode } from "jwt-decode";
import { StyleSheet, TouchableOpacity } from "react-native";
import Animated, { LinearTransition } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
  const { Colors } = useAppTheme();
  const insets = useSafeAreaInsets();

  // const [activePage, setActivePage] = useState<number>(0);
  // const [userPermissions, setUserPermissions] = useState<string[]>([]);
  const userPermissions = usePermission();

  const token = useAccessToken();
  const decoded = jwtDecode(token || "") as any;

  // Daftar semua tab dengan izin yang sesuai
  const tabScreens = [
    {
      name: "home",
      title: "Home",
      icon: IconHome,
      permission: "lihat dasbor", // Tambahkan izin yang sesuai
    },
    {
      name: "activities",
      title: "Kegiatan",
      icon: IconAddBox,
      permission: "lihat kegiatan",
    },
    {
      name: "physicalProgress",
      title: "Fisik",
      icon: IconFisik,
      permission: "lihat kegiatan",
    },
    {
      name: "financialRealization",
      title: "Keuangan",
      icon: IconMonyBag,
      permission: "lihat sumber dana",
    },
    {
      name: "report",
      title: "Laporan",
      icon: IconFileReport,
      permission: "cetak laporan",
    },
  ];

  // Filter tab berdasarkan izin
  // const accessibleTabs =
  //   userPermissions.length === 0
  //     ? tabScreens
  //     : tabScreens.filter((tab) => userPermissions.includes(tab.permission));

  return (
    <Tabs
      key={userPermissions.length}
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ state, descriptors, navigation }) => {
        // Move this line inside a `useEffect` hook to avoid invalid hook call
        return (
          <Animated.View
            layout={LinearTransition}
            style={[
              style.container,
              {
                paddingBottom: insets.bottom + 1,
                paddingTop: 20,
                backgroundColor: Colors["Background 100"],
              },
            ]}
          >
            {state.routes.map((route, index) => {
              const { options } = descriptors[route.key];
              const label =
                options.tabBarLabel !== undefined
                  ? options.tabBarLabel
                  : options.title !== undefined
                  ? options.title
                  : route.name;

              const isFocused = state.index === index;

              const onPress = () => {
                const event = navigation.emit({
                  type: "tabPress",
                  target: route.key,
                  canPreventDefault: true,
                });
                // setActivePage(label as string);
                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name, route.params);
                }
              };

              const onLongPress = () => {
                navigation.emit({
                  type: "tabLongPress",
                  target: state.routes[index]?.key,
                });
              };
              if (
                userPermissions.includes(
                  tabScreens.find((f) => f.name === route.name)?.permission ||
                    ""
                ) ||
                decoded.role[0] === "Super Admin"
              ) {
                return (
                  <TouchableOpacity
                    key={route.key}
                    onPress={onPress}
                    onLongPress={onLongPress}
                  >
                    <Animated.View
                      style={[style.tabBarWrapper]}
                      layout={LinearTransition}
                    >
                      <View style={style.navIconWrapper}>
                        {options?.tabBarIcon?.({
                          focused: isFocused,
                          color: "",
                          size: 0,
                        })}
                      </View>
                      <Typography
                        fontFamily="Poppins-Medium"
                        color={isFocused ? "Info 500" : "Text 300"}
                        fontSize={14}
                      >
                        {label as string}
                      </Typography>
                    </Animated.View>
                  </TouchableOpacity>
                );
              } else {
                return null;
              }
            })}
          </Animated.View>
        );
      }}
    >
      {tabScreens.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => (
              <tab.icon
                color={focused ? "Info 500" : "Text 300"}
                width={24}
                height={24}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
  },
  tabBarWrapper: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  navIconWrapper: {
    justifyContent: "flex-start",
    alignItems: "center",
    height: 24,
  },
});
