import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { useAppTheme } from "@/context/theme-context";

import { IconProps } from "./icon";

export function IconAddBox({
  width = 24,
  height = 24,
  color = "Text 900",
  ...rest
}: IconProps) {
  const { Colors } = useAppTheme();

  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 31 30"
      fill="none"
      {...rest}
    >
      <Path
        d="M14.5 21.25H17V16.25H22V13.75H17V8.75H14.5V13.75H9.5V16.25H14.5V21.25ZM7 26.25C6.3125 26.25 5.72417 26.0054 5.235 25.5163C4.74583 25.0271 4.50083 24.4383 4.5 23.75L4.5 6.25C4.5 5.5625 4.745 4.97417 5.235 4.485C5.725 3.99583 6.31333 3.75083 7 3.75L24.5 3.75C25.1875 3.75 25.7763 3.995 26.2663 4.485C26.7563 4.975 27.0008 5.56333 27 6.25V23.75C27 24.4375 26.7554 25.0263 26.2663 25.5163C25.7771 26.0063 25.1883 26.2508 24.5 26.25H7Z"
        fill={Colors[color]}
      />
    </Svg>
  );
}
