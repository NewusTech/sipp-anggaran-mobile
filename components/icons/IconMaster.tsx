import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { useAppTheme } from "@/context/theme-context";

import { IconProps } from "./icon";

export function IconMaster({
    width = 24,
    height = 24,
    color = "Text 900",
    ...rest
}: IconProps) {
    const { Colors } = useAppTheme();

    return (
    <Svg width="20" height="25" viewBox="0 0 20 25" fill="none">
    <Path d="M20 5C20 2.29 15.4212 0 10 0C4.57875 0 0 2.29 0 5V7.5C0 10.21 4.57875 12.5 10 12.5C15.4212 12.5 20 10.21 20 7.5V5ZM10 21.25C4.57875 21.25 0 18.96 0 16.25V20C0 22.71 4.57875 25 10 25C15.4212 25 20 22.71 20 20V16.25C20 18.96 15.4212 21.25 10 21.25Z" fill={Colors[color]}/>
    <Path d="M20 10C20 12.71 15.4212 15 10 15C4.57875 15 0 12.71 0 10V13.75C0 16.46 4.57875 18.75 10 18.75C15.4212 18.75 20 16.46 20 13.75V10Z" fill={Colors[color]}/>
    </Svg>
    );
}
