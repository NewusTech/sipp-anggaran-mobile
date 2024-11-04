import { IconHome } from "@/components/icons/IconHome";
import { IconReport2 } from "@/components/icons/IconReport2";
import { IconSurvey } from "@/components/icons/IconSurvey";
import { IconVerification } from "@/components/icons/IconVerification";
import { Typography } from "@/components/ui/typography";
import View from "@/components/ui/view";
import { useAppTheme } from "@/context";
import { Tabs } from "expo-router";
import { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Animated, { LinearTransition } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
    const { Colors } = useAppTheme();
    const insets = useSafeAreaInsets();

    const [activePage, setActivePage] = useState<number>(0);

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
            }}
            tabBar={({ state, descriptors, navigation }) => {
                setActivePage(state.index);
                return (
                    <Animated.View
                        layout={LinearTransition}
                        style={[
                            style.container,
                            {
                                paddingBottom: insets.bottom,
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
                                    target: route.key,
                                });
                            };

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
                        })}
                    </Animated.View>
                );
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    tabBarIcon: ({ focused }) => (
                        <IconHome
                            color={focused ? "Info 500" : "Text 300"}
                            width={24}
                            height={24}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="survey"
                options={{
                    title: "Survey",
                    tabBarIcon: ({ focused }) => (
                        <IconSurvey
                            color={focused ? "Info 500" : "Text 300"}
                            width={24}
                            height={24}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="verification"
                options={{
                    title: "Verifikasi",
                    tabBarIcon: ({ focused }) => (
                        <IconVerification
                            color={focused ? "Info 500" : "Text 300"}
                            width={24}
                            height={24}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="report"
                options={{
                    title: "Laporan",
                    tabBarIcon: ({ focused }) => (
                        <IconReport2
                            color={focused ? "Info 500" : "Text 300"}
                            width={24}
                            height={24}
                        />
                    ),
                }}
            />
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
